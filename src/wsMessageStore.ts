// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

import { wsClient } from './ws';
import MapInfo from './mapInfo';
import {
  AlertsMsg,
  WheelStateMsg,
  OccupancyGridMsg,
  TrackedPoseMsg,
  RobotModelMsg,
  SensorManagerStateMsg,
  PlanningStateMsg,
  PathMsg,
  TrajectoryMsg,
  MapInfoMsg,
  SlamStateMsg,
  JackStateMsg,
  NearbyRobotFootprintsMsg,
  DetectedPalletsMsg,
  DetectedFeaturesMsg,
  DetectedRackMsg,
  RackStatesMsg,
} from './msgs';

export type Subscriber<T> = (data: T) => void;

const storeSubscribedTopics = new Set<string>();

// A topic can be held by several store instances at once, so the global set is
// reference counted; only the last release may disable the topic on the wire.
const storeTopicRefs = new Map<string, number>();

function retainStoreTopic(topic: string): void {
  storeTopicRefs.set(topic, (storeTopicRefs.get(topic) ?? 0) + 1);
  storeSubscribedTopics.add(topic);
}

function releaseStoreTopic(topic: string): void {
  const remaining = (storeTopicRefs.get(topic) ?? 1) - 1;
  if (remaining > 0) {
    storeTopicRefs.set(topic, remaining);
    return;
  }
  storeTopicRefs.delete(topic);
  storeSubscribedTopics.delete(topic);
}

export function getStoreSubscribedTopics(): string[] {
  return Array.from(storeSubscribedTopics);
}

export class WsMessageStore<T> {
  protected data: T | null;
  protected subscribers = new Set<Subscriber<T | null>>();

  constructor(protected topic: string) {
    this.data = null;
    // Defer setupSubscription to next tick to avoid circular dependency
    // (wsClient may be in TDZ since wsClient.ts imports wsMessageStore.ts)
    setTimeout(() => this.setupSubscription(), 0);
  }

  protected setupSubscription(): void {
    wsClient.onTopic(this.topic, (payload: any) => {
      try {
        let obj: any = payload;
        if (typeof payload === 'string') {
          try {
            obj = JSON.parse(payload);
          } catch (e) {
            return;
          }
        }
        this.data = obj;
        this.notify();
      } catch (e) {
        // ignore malformed messages
      }
    });
  }

  protected notify(): void {
    for (const s of Array.from(this.subscribers)) {
      try {
        s(this.data);
      } catch (e) {
        // ignore subscriber errors
      }
    }
  }

  subscribe(fn: Subscriber<T | null>): () => void {
    const isFirst = this.subscribers.size === 0;
    this.subscribers.add(fn);

    if (isFirst) {
      retainStoreTopic(this.topic);
      wsClient.syncTopics();
    }

    try {
      fn(this.data);
    } catch (e) {
      // ignore
    }
    return () => {
      this.subscribers.delete(fn);
      if (this.subscribers.size === 0) {
        releaseStoreTopic(this.topic);
        wsClient.syncTopics();
      }
    };
  }

  getSnapshot(): T | null {
    return this.data;
  }

  clear(): void {
    this.data = null;
    this.notify();
  }

  set(data: T): void {
    this.data = data;
    this.notify();
  }
}

/**
 * Specialized store for MapInfo messages
 * Parses MapInfoMsg into MapInfo object once
 */
class MapInfoStore extends WsMessageStore<MapInfo> {
  protected setupSubscription(): void {
    wsClient.onTopic(this.topic, (payload: any) => {
      try {
        let obj: any = payload;
        if (typeof payload === 'string') {
          try {
            obj = JSON.parse(payload);
          } catch (e) {
            return;
          }
        }
        this.data = new MapInfo(obj as MapInfoMsg);
        this.notify();
      } catch (e) {
        console.error('Error processing map info message:', e);
      }
    });
  }
}

export const wsAlertsStore = new WsMessageStore<AlertsMsg>('/alerts');
export const wsWheelStateStore = new WsMessageStore<WheelStateMsg>('/wheel_state');
export const mapStore = new WsMessageStore<OccupancyGridMsg>('/map_v2');
export const trackedPoseStore = new WsMessageStore<TrackedPoseMsg>('/tracked_pose');
export const robotModelStore = new WsMessageStore<RobotModelMsg>('/robot_model');
export const sensorManagerStateStore = new WsMessageStore<SensorManagerStateMsg>(
  '/sensor_manager_state',
);
export const planningStateStore = new WsMessageStore<PlanningStateMsg>('/planning_state');
export const pathStore = new WsMessageStore<PathMsg>('/path');
export const trajectoryStore = new WsMessageStore<TrajectoryMsg>('/trajectory');
export const mapInfoStore = new MapInfoStore('/map/info');
export const slamStateStore = new WsMessageStore<SlamStateMsg>('/slam/state');
export const jackStateStore = new WsMessageStore<JackStateMsg>('/jack_state');

// Nearby robots stores
export const nearbyRobotFootprintsStore = new WsMessageStore<NearbyRobotFootprintsMsg>(
  '/nearby_robot_footprints',
);

// Pallets store
export const detectedPalletsStore = new WsMessageStore<DetectedPalletsMsg>('/detected_pallets');

// Rack store
export const detectedRackStore = new WsMessageStore<DetectedRackMsg>('/detected_rack');

// Map rack state store (latched)
// Accumulated from /detected_rack_states. Racks not observed for ~30 minutes
// become unknown and are removed. Latched — caches the latest full state.
export const mapRackStatesStore = new WsMessageStore<RackStatesMsg>('/map_rack_states');

// Chargers store
export const detectedChargersStore = new WsMessageStore<DetectedFeaturesMsg>(
  '/detected_features/chargers',
);

/**
 * Stores by topic. A store keeps its topic's last message, so a consumer that
 * needs the current value reads it from here rather than waiting for the next
 * publish — the store replays what it holds as soon as it is subscribed.
 */
const topicStores: Record<string, WsMessageStore<any>> = {
  '/alerts': wsAlertsStore,
  '/wheel_state': wsWheelStateStore,
  '/map_v2': mapStore,
  '/tracked_pose': trackedPoseStore,
  '/robot_model': robotModelStore,
  '/sensor_manager_state': sensorManagerStateStore,
  '/planning_state': planningStateStore,
  '/path': pathStore,
  '/trajectory': trajectoryStore,
  '/map/info': mapInfoStore,
  '/slam/state': slamStateStore,
  '/jack_state': jackStateStore,
  '/nearby_robot_footprints': nearbyRobotFootprintsStore,
  '/detected_pallets': detectedPalletsStore,
  '/detected_rack': detectedRackStore,
  '/map_rack_states': mapRackStatesStore,
  '/detected_features/chargers': detectedChargersStore,
};

/** The store holding `topic`'s last message, or undefined for a storeless topic. */
export function getTopicStore(topic: string): WsMessageStore<any> | undefined {
  return topicStores[topic];
}
