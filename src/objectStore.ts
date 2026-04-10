export type Subscriber<T> = (items: T) => void;

import { robotApi } from './robotApi';
import type { BagItem, MapItem, CoreDumpItem, MappingTaskItem, VideoFileItem, DeviceInfo } from './robotApiType';

export class ObjectStore<T> {
  protected stored_object: T | null = null;
  protected subscribers = new Set<Subscriber<T | null>>();

  constructor(protected endpoint: string) { }

  protected notify(): void {
    for (const s of Array.from(this.subscribers)) {
      try {
        s(this.stored_object);
      } catch (err) {
        // ignore subscriber errors
      }
    }
  }

  getObject(): T | null {
    return this.stored_object;
  }

  setObject(items: T | null): void {
    this.stored_object = items;
    this.notify();
  }

  clear(): void {
    this.stored_object = null;
    this.notify();
  }

  subscribe(fn: Subscriber<T | null>): () => void {
    this.subscribers.add(fn);
    try {
      fn(this.stored_object);
    } catch (err) {
      // ignore
    }
    return () => {
      this.subscribers.delete(fn);
    };
  }

  async refresh(): Promise<T | null> {
    const res = await robotApi.get(this.endpoint);
    const data = await res.json();
    this.stored_object = data;
    this.notify();
    return this.stored_object;
  }
}

export class ArrayObjectStore<T> {
  protected stored_object: T[] = [];
  protected subscribers = new Set<Subscriber<T[]>>();

  constructor(protected endpoint: string) { }

  protected notify(): void {
    for (const s of Array.from(this.subscribers)) {
      try {
        s(this.stored_object);
      } catch (err) {
        // ignore subscriber errors
      }
    }
  }

  getObjects(): T[] {
    return this.stored_object;
  }

  setObjects(items: T[]): void {
    this.stored_object = items.slice();
    this.notify();
  }

  clear(): void {
    this.stored_object = [];
    this.notify();
  }

  subscribe(fn: Subscriber<T[]>): () => void {
    this.subscribers.add(fn);
    try {
      fn(this.stored_object);
    } catch (err) {
      // ignore
    }
    return () => {
      this.subscribers.delete(fn);
    };
  }

  async refresh(): Promise<T[]> {
    const res = await robotApi.get(this.endpoint);
    const data = await res.json();
    this.stored_object = Array.isArray(data) ? data.slice() : [];
    this.notify();
    return this.stored_object;
  }
}

class DeviceInfoStore extends ObjectStore<DeviceInfo> {
  private process(info: DeviceInfo | null): DeviceInfo | null {
    if (!info || !info.robot) return info;

    // Assign default visualization topics based on device model if undefined
    // WARNING: These topics(containing "matched") are all obsolete. They has been replaced by binary format.
    if (!info.robot.visualization_topics) {
      if (info.device?.model?.startsWith('forklift')) {
        // forklifts.
        info.robot.visualization_topics = [
          '/horizontal_laser_2d/matched',
          '/left_laser_2d/matched',
          '/right_laser_2d/matched',
          '/rb_laser_2d/matched',
          '/matched_depth_points/downward',
          '/matched_depth_points/backward',
        ];
      } else {
        // others
        info.robot.visualization_topics = [
          '/horizontal_laser_2d/matched',
          '/bottom_laser_2d/matched',
          '/matched_depth_points/downward',
          '/matched_depth_points/forward',
        ];
      }
    }
    return info;
  }

  setObject(items: DeviceInfo | null): void {
    super.setObject(this.process(items));
  }

  async refresh(): Promise<DeviceInfo | null> {
    const res = await robotApi.get(this.endpoint);
    const data = await res.json();
    this.stored_object = this.process(data);
    this.notify();
    return this.stored_object;
  }
}

export const bagListStore = new ArrayObjectStore<BagItem>('bags/');
export const mapListStore = new ArrayObjectStore<MapItem>('maps/');
export const mappingTaskListStore = new ArrayObjectStore<MappingTaskItem>('mappings/');
export const videoListStore = new ArrayObjectStore<VideoFileItem>('videos/');
export const alertTriggeredBagStore = new ArrayObjectStore<BagItem>('recording/');
export const deviceInfoStore = new DeviceInfoStore('device/info');
export const coreDumpStore = new ArrayObjectStore<CoreDumpItem>('core_dumps/');
