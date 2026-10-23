// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * RobotWorldWsClient - client for the browser endpoint of ros_message_forward.
 *
 * This endpoint serves the robot world (RFC-6) rather than the dispatcher's
 * topic set, and its frames name the publisher they came from:
 *
 *   [topic_len: 1B][topic: L][flags: 1B][publisher_index: 1B][protobuf: N]
 *
 * The flags byte is self-describing: bit 0 marks a gzipped payload and bit 1
 * says the publisher index byte is present, which the endpoint sets on every
 * data frame. A frame with bit 1 clear carries no publisher index, which is
 * the shape the dispatcher's connection sends, so one decoder reads either
 * without being told the connection. The control vocabulary is the
 * dispatcher's: `enable_topic` adds to the connection's set and `disable_topic`
 * removes from it, and `enabled_topics` reports the resulting set.
 */

import { decodeBinaryFrame } from './binaryMessageDecoder';
import { ProtoMessage } from './topicMessages';

/** Protocol version this client speaks; a connection announcing another one is closed. */
export const WORLD_PROTOCOL_VERSION = 1;

export type WorldConnectionState = 'disconnected' | 'connecting' | 'connected' | 'broken';

export interface WorldPublisher {
  /** One-byte index a data frame of this topic carries. */
  index: number;
  /** Node name of the publisher, as the forwarder reports it. */
  node: string;
  /** True when the publisher advertises its topic latched. */
  latched: boolean;
}

export interface WorldGreeting {
  protocolVersion: number;
  supportedTopics: string[];
}

export type WorldTopicHandler = (payload: ProtoMessage) => void;

export class RobotWorldWsClient {
  public connectionState: WorldConnectionState = 'disconnected';
  public url: string | null = null;
  public greeting: WorldGreeting | null = null;
  /** Why the last connection ended, for diagnosis next to the state. */
  public lastError: string | null = null;

  public onStateChange?: (state: WorldConnectionState) => void;
  public onGreeting?: (greeting: WorldGreeting) => void;
  public onPublishers?: (topic: string, publishers: WorldPublisher[]) => void;

  private ws: WebSocket | null = null;
  private desiredTopics: string[] = [];
  private enabledTopics = new Set<string>();
  private publishersByTopic = new Map<string, WorldPublisher[]>();
  private topicHandlers = new Map<string, Set<WorldTopicHandler>>();

  /** Connect to the endpoint at `url`, replacing an existing connection to another URL. */
  public connect(url: string): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      if (this.url === url) return;
      this.disconnect();
    }

    this.url = url;
    this.lastError = null;
    this.setState('connecting');
    this.ws = new WebSocket(url);
    this.ws.binaryType = 'arraybuffer';

    this.ws.onopen = () => {
      this.setState('connected');
      // The greeting announces the supported set; the desired topics are
      // diffed again once it arrives, so anything it does not serve is skipped.
      this.sendTopics(this.desiredTopics);
    };

    this.ws.onmessage = (ev) => this.onMessage(ev);

    this.ws.onclose = () => {
      this.ws = null;
      this.greeting = null;
      this.enabledTopics.clear();
      this.publishersByTopic.clear();
      this.setState('broken');
    };

    this.ws.onerror = () => {
      this.setState('broken');
    };
  }

  public disconnect(): void {
    const ws = this.ws;
    this.ws = null;
    if (ws) {
      ws.onclose = null;
      ws.onerror = null;
      ws.onmessage = null;
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    }
    this.greeting = null;
    this.enabledTopics.clear();
    this.publishersByTopic.clear();
    this.setState('disconnected');
  }

  /**
   * Replace the set of topics this connection wants.
   *
   * The endpoint's commands are incremental, so the wanted set is diffed
   * against the set it confirmed: what is missing is enabled, what is extra is
   * disabled, and a topic that is already active is not sent again.
   */
  public setDesiredTopics(topics: string[]): void {
    this.desiredTopics = [...new Set(topics)];
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.sendTopics(this.desiredTopics);
    }
  }

  /** Topics the endpoint reported as active on this connection. */
  public get activeTopics(): string[] {
    return [...this.enabledTopics];
  }

  /** The announced publishers of a topic, empty before the endpoint announces them. */
  public publishers(topic: string): WorldPublisher[] {
    return this.publishersByTopic.get(topic) ?? [];
  }

  /** Register a handler for a topic; returns its unregister function. */
  public onTopic(topic: string, handler: WorldTopicHandler): () => void {
    let set = this.topicHandlers.get(topic);
    if (!set) {
      set = new Set();
      this.topicHandlers.set(topic, set);
    }
    set.add(handler);
    return () => {
      set.delete(handler);
      if (set.size === 0) this.topicHandlers.delete(topic);
    };
  }

  private setState(state: WorldConnectionState): void {
    if (this.connectionState === state) return;
    this.connectionState = state;
    this.onStateChange?.(state);
  }

  private sendTopics(topics: string[]): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

    const supported = this.greeting?.supportedTopics;
    const wanted = new Set(supported ? topics.filter((topic) => supported.includes(topic)) : topics);

    const toEnable = [...wanted].filter((topic) => !this.enabledTopics.has(topic));
    const toDisable = [...this.enabledTopics].filter((topic) => !wanted.has(topic));

    if (toEnable.length > 0) this.ws.send(JSON.stringify({ enable_topic: toEnable }));
    if (toDisable.length > 0) this.ws.send(JSON.stringify({ disable_topic: toDisable }));
  }

  private async onMessage(ev: MessageEvent): Promise<void> {
    try {
      if (typeof ev.data === 'string') {
        this.onControl(ev.data);
        return;
      }
      const buffer = ev.data instanceof Blob ? await ev.data.arrayBuffer() : (ev.data as ArrayBuffer);
      const decoded = decodeBinaryFrame(buffer);
      if (decoded) {
        this.dispatch(decoded.topic, decoded);
      }
    } catch (err) {
      console.error('RobotWorldWsClient: message handling error', err);
    }
  }

  private onControl(text: string): void {
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch {
      return; // Outside the control vocabulary.
    }
    if (!parsed || typeof parsed !== 'object') return;

    if (typeof parsed.protocol_version === 'number') {
      this.onGreeting_(parsed.protocol_version, parsed.supported_topics);
      return;
    }

    if (parsed.topic_publishers && typeof parsed.topic_publishers === 'object') {
      for (const [topic, entries] of Object.entries(parsed.topic_publishers)) {
        if (!Array.isArray(entries)) continue;
        const publishers = entries
          .filter((entry: any) => entry && typeof entry.index === 'number')
          .map((entry: any) => ({
            index: entry.index,
            node: typeof entry.node === 'string' ? entry.node : '',
            latched: entry.latched === true,
          }));
        this.publishersByTopic.set(topic, publishers);
        this.onPublishers?.(topic, publishers);
      }
      return;
    }

    if (Array.isArray(parsed.enabled_topics)) {
      this.enabledTopics = new Set(parsed.enabled_topics.filter((t: unknown) => typeof t === 'string'));
      // A disabled topic announces no publisher list again, so its stale one is
      // dropped here rather than left to be read as if it were current.
      for (const topic of this.publishersByTopic.keys()) {
        if (!this.enabledTopics.has(topic)) this.publishersByTopic.delete(topic);
      }
      return;
    }

    // A text frame carrying `topic` is a legacy JSON data frame, which this
    // client does not consume: it enables only the world's protobuf topics, and
    // their consumers read `WsClient`. Ignored deliberately rather than emitted,
    // so a topic handler never receives a payload of the wrong shape.
  }

  private onGreeting_(protocolVersion: number, supportedTopics: unknown): void {
    const supported = Array.isArray(supportedTopics)
      ? supportedTopics.filter((topic): topic is string => typeof topic === 'string')
      : [];

    if (protocolVersion !== WORLD_PROTOCOL_VERSION) {
      // The connect frame is the vocabulary contract for the whole connection: a
      // version this client does not know means the control frames and payloads
      // after it would be mis-read. Close now rather than decode one.
      this.lastError = `unsupported protocol version ${protocolVersion} (this client speaks ${WORLD_PROTOCOL_VERSION})`;
      this.ws?.close();
      return;
    }

    this.greeting = { protocolVersion, supportedTopics: supported };
    this.onGreeting?.(this.greeting);
    this.sendTopics(this.desiredTopics);
  }

  private dispatch(topic: string, payload: ProtoMessage): void {
    const set = this.topicHandlers.get(topic);
    if (!set) return;
    for (const handler of Array.from(set)) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`RobotWorldWsClient: handler error for ${topic}`, err);
      }
    }
  }
}

export const robotWorldWsClient = new RobotWorldWsClient();
export default robotWorldWsClient;
