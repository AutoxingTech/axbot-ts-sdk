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
  DetectedRacksMsg,
} from './msgs';

export type Subscriber<T> = (data: T) => void;

const storeSubscribedTopics = new Set<string>();

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
      storeSubscribedTopics.add(this.topic);
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
        storeSubscribedTopics.delete(this.topic);
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
export const sensorManagerStateStore = new WsMessageStore<SensorManagerStateMsg>('/sensor_manager_state');
export const planningStateStore = new WsMessageStore<PlanningStateMsg>('/planning_state');
export const pathStore = new WsMessageStore<PathMsg>('/path');
export const trajectoryStore = new WsMessageStore<TrajectoryMsg>('/trajectory');
export const mapInfoStore = new MapInfoStore('/map/info');
export const slamStateStore = new WsMessageStore<SlamStateMsg>('/slam/state');
export const jackStateStore = new WsMessageStore<JackStateMsg>('/jack_state');

// Nearby robots stores
export const nearbyRobotFootprintsStore = new WsMessageStore<NearbyRobotFootprintsMsg>('/nearby_robot_footprints');

// Pallets store
export const detectedPalletsStore = new WsMessageStore<DetectedPalletsMsg>('/detected_pallets');

// Racks store
export const detectedRacksStore = new WsMessageStore<DetectedRacksMsg>('/detected_racks');

// Chargers store
export const detectedChargersStore = new WsMessageStore<DetectedFeaturesMsg>('/detected_features/chargers');


