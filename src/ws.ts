export * from './wsEventEmitter';
export * from './wsMessageStore';

import { decodeBinaryFrame } from './binaryMessageDecoder';
import { getEmitterSubscribedTopics } from './wsEventEmitter';
import { getStoreSubscribedTopics } from './wsMessageStore';

export type TopicHandler = (payload: any) => void;
export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'broken';

export class WsClient {
  private ws: WebSocket | null = null;
  public url: string | null = null;
  public connectionState: ConnectionState = 'disconnected';

  private topicHandlers = new Map<string, Set<TopicHandler>>();
  private serverEnabledTopics = new Set<string>();
  private syncDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  public onStateChange?: (state: ConnectionState) => void;
  public onRawMessage?: (direction: 'sent' | 'received', raw: any, parsed: any) => void;

  private setState(state: ConnectionState) {
    this.connectionState = state;
    this.onStateChange?.(state);
  }

  /**
   * Connect to the WebSocket at the given URL.
   */
  public connect(url: string) {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      if (this.url === url) return;
      this.disconnect();
    }

    this.url = url;
    this.setState('connecting');
    this.ws = new WebSocket(url);
    this.ws.binaryType = 'arraybuffer';

    this.ws.onopen = () => {
      this.setState('connected');
      this.serverEnabledTopics.clear();
      this.syncTopicSubscriptions();
    };

    this.ws.onmessage = async (ev) => {
      try {
        if (typeof ev.data === 'string') {
          let parsed: any = null;
          try {
            parsed = JSON.parse(ev.data);
          } catch (e) {
            // ignore JSON parse error
          }
          this.onRawMessage?.('received', ev.data, parsed);

          if (parsed && Array.isArray(parsed.enabled_topics)) {
            this.serverEnabledTopics = new Set(parsed.enabled_topics);
          }

          if (parsed && typeof parsed.topic === 'string') {
            this.dispatchTopic(parsed.topic, parsed);
          }
        } else if (ev.data instanceof Blob) {
          const buf = await ev.data.arrayBuffer();
          const decoded = decodeBinaryFrame(buf);
          this.onRawMessage?.('received', ev.data, decoded);
          if (decoded) {
            this.dispatchTopic(decoded.topic, decoded.payload);
          }
        } else if (ev.data instanceof ArrayBuffer) {
          const decoded = decodeBinaryFrame(ev.data);
          this.onRawMessage?.('received', ev.data, decoded);
          if (decoded) {
            this.dispatchTopic(decoded.topic, decoded.payload);
          }
        }
      } catch (err) {
        console.error('WsClient message handling error:', err);
      }
    };

    this.ws.onclose = () => {
      this.setState('broken');
      this.ws = null;
    };

    this.ws.onerror = () => {
      this.setState('broken');
    };
  }

  /**
   * Disconnect the WebSocket.
   */
  public disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.setState('disconnected');
  }

  /**
   * Send a raw message or object (which will be JSON stringified).
   */
  public send(msg: string | object) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.warn('WsClient: WebSocket not open; cannot send');
      return;
    }
    const raw = typeof msg === 'string' ? msg : JSON.stringify(msg);
    this.ws.send(raw);
    this.onRawMessage?.('sent', raw, typeof msg === 'string' ? null : msg);
  }

  /**
   * Register a handler for a specific topic.
   * Returns an unsubscribe function.
   */
  public onTopic(topic: string, handler: TopicHandler) {
    let set = this.topicHandlers.get(topic);
    if (!set) {
      set = new Set();
      this.topicHandlers.set(topic, set);
    }
    set.add(handler);
    return () => this.offTopic(topic, handler);
  }

  /**
   * Unregister a handler for a specific topic.
   */
  private offTopic(topic: string, handler: TopicHandler) {
    const set = this.topicHandlers.get(topic);
    if (!set) return;
    set.delete(handler);
    if (set.size === 0) {
      this.topicHandlers.delete(topic);
    }
  }

  private dispatchTopic(topic: string, payload: any) {
    const set = this.topicHandlers.get(topic);
    if (set) {
      for (const h of Array.from(set)) {
        try {
          h(payload);
        } catch (e) {
          console.error(`WsClient: Error in handler for topic ${topic}`, e);
        }
      }
    }
  }

  /**
   * Instructs the client to sync topic subscriptions with the server
   * combining appDesiredTopics with getEmitterSubscribedTopics() and getStoreSubscribedTopics().
   */
  public syncTopics() {
    this.queueSync();
  }

  private queueSync() {
    if (this.syncDebounceTimer !== null) {
      clearTimeout(this.syncDebounceTimer);
    }
    this.syncDebounceTimer = setTimeout(() => {
      this.syncDebounceTimer = null;
      this.syncTopicSubscriptions();
    }, 10);
  }

  private syncTopicSubscriptions() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return;
    }

    const toEnable: string[] = [];
    const toDisable: string[] = [];
    const allDesired = new Set([
      ...getEmitterSubscribedTopics(),
      ...getStoreSubscribedTopics()
    ]);

    for (const topic of allDesired) {
      if (!this.serverEnabledTopics.has(topic)) {
        toEnable.push(topic);
      }
    }

    for (const topic of this.serverEnabledTopics) {
      if (topic.startsWith('/ws_connection')) continue;
      if (!allDesired.has(topic)) {
        toDisable.push(topic);
      }
    }

    if (toEnable.length > 0) {
      this.send({ enable_topic: toEnable });
    }
    if (toDisable.length > 0) {
      this.send({ disable_topic: toDisable });
    }
  }
}

export const wsClient = new WsClient();
export default wsClient;

