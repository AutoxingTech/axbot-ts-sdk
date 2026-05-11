import { ros_messages } from './proto/generated.js';
import { robotApi, type RobotApi } from './robotApi.js';

/**
 * Adapter interface for turning decoded `SubmapTexture` protobuf messages into
 * caller-owned resources.
 *
 * The SDK owns fetch, caching, retry, and eviction policy. The host app owns
 * how a slice is materialized (for example as a Three.js texture, Canvas
 * image data, or another rendering primitive) and how that resource is freed.
 */
export interface SubmapCacheAdapter<TSlice> {
  buildSlice(tex: ros_messages.SubmapTexture): TSlice | null;
  disposeSlice(slice: TSlice): void;
}

/** Configuration for {@link SubmapCache}. */
export interface SubmapCacheOptions<TSlice> {
  adapter: SubmapCacheAdapter<TSlice>;
  api?: Pick<RobotApi, 'getSubmapQueryV2'>;
  maxConcurrentFetches?: number;
  failureCooldownMs?: number;
}

interface SubmapResult<TSlice> {
  slices: Array<TSlice | null>;
}

type EntryState = 'downloading' | 'cached';

interface Entry<TSlice> {
  state: EntryState;
  promise: Promise<SubmapResult<TSlice> | null>;
  abort: AbortController;
  result?: SubmapResult<TSlice> | null;
  bytes: number;
}

const DEFAULT_MAX_CONCURRENT_FETCHES = 4;
const DEFAULT_FAILURE_COOLDOWN_MS = 3000;

function makeKey(uuid: string, trajectoryId: number, submapIndex: number, version: number): string {
  return `${uuid}|${trajectoryId}|${submapIndex}|v${version}`;
}

function makeSubmapKey(uuid: string, trajectoryId: number, submapIndex: number): string {
  return `${uuid}|${trajectoryId}|${submapIndex}`;
}

/**
 * Generic cache for Cartographer submap slices fetched from
 * `SubmapQueryV2Response`.
 *
 * Responsibilities owned here:
 * - de-duplicate in-flight fetches by `(uuid, trajectoryId, submapIndex, version)`
 * - cache 404 results so callers do not hammer the server for missing submaps
 * - throttle retries after non-404 failures with a per-submap cooldown
 * - cap concurrent HTTP fetches
 * - track retained payload bytes for diagnostics/UI
 * - dispose caller-owned slice resources when entries are evicted or reset
 *
 * Responsibilities intentionally left to the caller via `adapter`:
 * - converting protobuf textures into app-specific resources
 * - disposing those resources correctly
 */
export class SubmapCache<TSlice> {
  private readonly adapter: SubmapCacheAdapter<TSlice>;
  private readonly api: Pick<RobotApi, 'getSubmapQueryV2'>;
  private readonly maxConcurrentFetches: number;
  private readonly failureCooldownMs: number;

  private currentUuid: string | null = null;
  private entries: Map<string, Entry<TSlice>> = new Map();
  private failureCooldownUntil: Map<string, number> = new Map();
  private inFlight = 0;
  private fetchQueue: Array<() => void> = [];
  private totalBytes = 0;
  private listeners: Set<() => void> = new Set();

  /**
   * Create a cache bound to a slice adapter.
   *
   * `api` defaults to the SDK singleton `robotApi`, but tests or hosts can
   * inject any object that implements `getSubmapQueryV2`.
   */
  constructor(options: SubmapCacheOptions<TSlice>) {
    this.adapter = options.adapter;
    this.api = options.api ?? robotApi;
    this.maxConcurrentFetches = options.maxConcurrentFetches ?? DEFAULT_MAX_CONCURRENT_FETCHES;
    this.failureCooldownMs = options.failureCooldownMs ?? DEFAULT_FAILURE_COOLDOWN_MS;
  }

  /** Total raw protobuf payload bytes currently retained by cached entries. */
  getTotalBytes(): number {
    return this.totalBytes;
  }

  /** Subscribe to `getTotalBytes()` changes. Returns an unsubscribe function. */
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Reset the cache to a new SLAM session UUID.
   *
   * Any cached slices and in-flight fetches from the previous UUID are
   * disposed or aborted immediately.
   */
  setUuid(uuid: string): void {
    if (this.currentUuid === uuid) return;
    this.disposeAll();
    this.currentUuid = uuid;
  }

  /**
   * Return one slice for a submap version, fetching the whole submap on cache
   * miss.
   *
   * Both slice 0 and slice 1 share the same underlying fetch because the HTTP
   * gateway returns all textures for a submap together.
   */
  request(
    uuid: string,
    trajectoryId: number,
    submapIndex: number,
    sliceId: 0 | 1,
    version: number,
  ): Promise<TSlice | null> {
    if (this.currentUuid !== uuid) {
      this.setUuid(uuid);
    }

    const key = makeKey(uuid, trajectoryId, submapIndex, version);
    let entry = this.entries.get(key);
    if (!entry) {
      const cooldownKey = makeSubmapKey(uuid, trajectoryId, submapIndex);
      const cooldownUntil = this.failureCooldownUntil.get(cooldownKey);
      if (cooldownUntil !== undefined) {
        if (Date.now() < cooldownUntil) {
          return Promise.reject(
            new Error(`SubmapCache: ${cooldownKey} in failure cooldown for ${cooldownUntil - Date.now()}ms`),
          );
        }
        this.failureCooldownUntil.delete(cooldownKey);
      }

      const abort = new AbortController();
      const created: Entry<TSlice> = {
        state: 'downloading',
        abort,
        bytes: 0,
        promise: this.fetchSubmap(uuid, trajectoryId, submapIndex, version, abort.signal, (n) => {
          created.bytes = n;
        }),
      };
      this.entries.set(key, created);
      entry = created;

      created.promise.then(
        (result) => {
          const cur = this.entries.get(key);
          if (cur !== created) {
            this.disposeSubmapResult(result);
            return;
          }
          cur.state = 'cached';
          cur.result = result;
          this.totalBytes += cur.bytes;
          this.notify();
        },
        () => {
          if (this.entries.get(key) === created) {
            this.entries.delete(key);
          }
          this.failureCooldownUntil.set(cooldownKey, Date.now() + this.failureCooldownMs);
        },
      );
    }

    return entry.promise.then((result) => {
      if (!result) return null;
      return result.slices[sliceId] ?? null;
    });
  }

  /**
   * Evict older cached versions for a submap after the caller has committed a
   * newer version to the scene.
   */
  evictOldVersions(
    uuid: string,
    trajectoryId: number,
    submapIndex: number,
    _sliceId: 0 | 1,
    keepVersion: number,
  ): void {
    const prefix = `${uuid}|${trajectoryId}|${submapIndex}|v`;
    const keepKey = makeKey(uuid, trajectoryId, submapIndex, keepVersion);
    for (const [key, entry] of Array.from(this.entries.entries())) {
      if (key === keepKey) continue;
      if (!key.startsWith(prefix)) continue;
      this.disposeEntry(entry);
      this.entries.delete(key);
    }
  }

  /** Abort in-flight work and dispose all cached slice resources. */
  dispose(): void {
    this.disposeAll();
    this.currentUuid = null;
  }

  private notify(): void {
    for (const listener of this.listeners) listener();
  }

  private disposeAll(): void {
    for (const entry of this.entries.values()) {
      this.disposeEntry(entry);
    }
    this.entries.clear();
    this.failureCooldownUntil.clear();
    if (this.totalBytes !== 0) {
      this.totalBytes = 0;
      this.notify();
    }
  }

  private disposeEntry(entry: Entry<TSlice>): void {
    if (entry.state === 'downloading') {
      entry.abort.abort();
    }
    if (entry.state === 'cached' && entry.bytes) {
      this.totalBytes -= entry.bytes;
      this.notify();
    }
    this.disposeSubmapResult(entry.result ?? null);
  }

  private disposeSubmapResult(result: SubmapResult<TSlice> | null | undefined): void {
    if (!result) return;
    for (const slice of result.slices) {
      if (slice) {
        this.adapter.disposeSlice(slice);
      }
    }
  }

  private acquireSlot(): Promise<void> {
    if (this.inFlight < this.maxConcurrentFetches) {
      this.inFlight++;
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      this.fetchQueue.push(() => {
        this.inFlight++;
        resolve();
      });
    });
  }

  private releaseSlot(): void {
    this.inFlight--;
    const next = this.fetchQueue.shift();
    if (next) next();
  }

  private async fetchSubmap(
    uuid: string,
    trajectoryId: number,
    submapIndex: number,
    version: number,
    signal: AbortSignal,
    reportBytes: (n: number) => void,
  ): Promise<SubmapResult<TSlice> | null> {
    await this.acquireSlot();
    if (signal.aborted) {
      this.releaseSlot();
      throw new DOMException('Aborted', 'AbortError');
    }
    try {
      return await this.doFetch(uuid, trajectoryId, submapIndex, version, signal, reportBytes);
    } finally {
      this.releaseSlot();
    }
  }

  private async doFetch(
    uuid: string,
    trajectoryId: number,
    submapIndex: number,
    version: number,
    signal: AbortSignal,
    reportBytes: (n: number) => void,
  ): Promise<SubmapResult<TSlice> | null> {
    const result = await this.api.getSubmapQueryV2(uuid, trajectoryId, submapIndex, version, signal);
    if (!result) {
      return null;
    }
    reportBytes(result.payloadLength);

    const textures = result.message.textures as ros_messages.SubmapTexture[];
    return {
      slices: textures.map((tex) => this.adapter.buildSlice(tex)),
    };
  }
}
