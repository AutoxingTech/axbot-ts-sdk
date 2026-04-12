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
  PointCloudMsg,
  SensorManagerStateMsg,
  PlanningStateMsg,
  PathMsg,
  LocalPathMsg,
  TrajectoryMsg,
  MapInfoMsg,
  SlamStateMsg,
  JackStateMsg,
  ImuStateMsg,
  MotionMetricsMsg,
  NearbyRobotsMsg,
  NearbyRobotFootprintsMsg,
  DetectedPalletsMsg,
  DetectedFeaturesMsg,
  ConstraintListMsg,
  RgbCameraData,
  RgbCameraRawMsg,
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
 * Specialized store for RGB camera messages
 * Converts raw base64 messages to RgbCameraData with Uint8Array
 */
class RgbCameraStore extends WsMessageStore<RgbCameraData> {
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
        // Convert raw message to RgbCameraData
        const rawMsg = obj as RgbCameraRawMsg;
        this.data = new RgbCameraData(rawMsg);
        this.notify();
      } catch (e) {
        console.error('Error processing camera message:', e);
      }
    });
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
export const pointCloudStore = new WsMessageStore<PointCloudMsg>('/scan_matched_points2');
export const sensorManagerStateStore = new WsMessageStore<SensorManagerStateMsg>('/sensor_manager_state');
export const planningStateStore = new WsMessageStore<PlanningStateMsg>('/planning_state');
export const pathStore = new WsMessageStore<PathMsg>('/path');
export const localPathStore = new WsMessageStore<LocalPathMsg>('/local_path');
export const trajectoryStore = new WsMessageStore<TrajectoryMsg>('/trajectory');
export const lowResCostmapStore = new WsMessageStore<OccupancyGridMsg>('/maps/5cm/1hz');
export const highResCostmapStore = new WsMessageStore<OccupancyGridMsg>('/maps/1cm/1hz');
export const mapInfoStore = new MapInfoStore('/map/info');
export const slamStateStore = new WsMessageStore<SlamStateMsg>('/slam/state');
export const jackStateStore = new WsMessageStore<JackStateMsg>('/jack_state');
export const imuStateStore = new WsMessageStore<ImuStateMsg>('/imu_state');
export const motionMetricsStore = new WsMessageStore<MotionMetricsMsg>('/motion_metrics');

// RGB Camera stores
export const rgbCameraFrontStore = new RgbCameraStore('/rgb_cameras/front/video');
export const rgbCameraBackStore = new RgbCameraStore('/rgb_cameras/back/video');
export const rgbCameraFrontAugmentedStore = new RgbCameraStore('/rgb_cameras/front_augmented/video');

// Nearby robots stores
export const nearbyRobotsStore = new WsMessageStore<NearbyRobotsMsg>('/nearby_robots');
export const nearbyRobotFootprintsStore = new WsMessageStore<NearbyRobotFootprintsMsg>('/nearby_robot_footprints');

// Pallets store
export const detectedPalletsStore = new WsMessageStore<DetectedPalletsMsg>('/detected_pallets');

// Chargers store
export const detectedChargersStore = new WsMessageStore<DetectedFeaturesMsg>('/detected_features/chargers');

// Constraint list store (SLAM constraints visualization)
export const constraintListStore = new WsMessageStore<ConstraintListMsg>('/constraint_list');
