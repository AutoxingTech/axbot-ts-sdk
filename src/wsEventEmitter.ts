// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * WsEventEmitter - Reference-counted WebSocket topic event emitter
 *
 * For non-latched topics where subscribers only want new messages (not cached data).
 * Automatically manages topic subscription:
 * - Adds topic to enabled list when first subscriber attaches
 * - Removes topic from enabled list when last subscriber leaves
 *
 * Usage:
 *   const emitter = new WsEventEmitter<MyMsgType>('/my_topic');
 *
 *   // In React component:
 *   useEffect(() => {
 *     return emitter.subscribe((msg) => { ... });
 *   }, []);
 */

import { wsClient } from './ws';

type EventHandler<T> = (data: T) => void;

// Track which topics have active emitter subscriptions
const subscribedTopics = new Set<string>();

/**
 * Get list of topics that have active emitter subscriptions.
 */
export function getEmitterSubscribedTopics(): string[] {
  return Array.from(subscribedTopics);
}

/**
 * Event emitter for WebSocket topics with automatic topic enable/disable.
 * Does NOT cache messages - pure event-based delivery.
 */
export class WsEventEmitter<T> {
  private handlers = new Set<EventHandler<T>>();
  private wsHandler: ((payload: T) => void) | null = null;
  private wsUnsubscribe: (() => void) | null = null;

  constructor(private topic: string) { }

  /**
   * Subscribe to events. Automatically enables topic when first subscriber attaches.
   * @param handler Callback invoked when new message arrives
   * @returns Unsubscribe function for use in React useEffect cleanup
   */
  subscribe(handler: EventHandler<T>): () => void {
    const isFirst = this.handlers.size === 0;
    this.handlers.add(handler);

    if (isFirst) {
      // First subscriber - register WS handler and add topic to enabled list
      this.wsHandler = (payload: T) => this.dispatch(payload);
      this.wsUnsubscribe = wsClient.onTopic(this.topic, this.wsHandler);
      subscribedTopics.add(this.topic);
      wsClient.syncTopics();
    }

    // Return cleanup function
    return () => this.unsubscribe(handler);
  }

  private unsubscribe(handler: EventHandler<T>): void {
    this.handlers.delete(handler);

    if (this.handlers.size === 0 && this.wsUnsubscribe) {
      // Last subscriber left - unregister WS handler and remove from enabled list
      this.wsUnsubscribe();
      this.wsUnsubscribe = null;
      this.wsHandler = null;
      subscribedTopics.delete(this.topic);
      wsClient.syncTopics();
    }
  }

  private dispatch(data: T): void {
    for (const handler of this.handlers) {
      try {
        handler(data);
      } catch (e) {
        console.error(`WsEventEmitter handler error for ${this.topic}:`, e);
      }
    }
  }

  /**
   * Get current subscriber count (for debugging)
   */
  get subscriberCount(): number {
    return this.handlers.size;
  }

  /**
   * Get topic name
   */
  get topicName(): string {
    return this.topic;
  }
}

// ============================================================
// Pre-defined emitters for common non-latched topics
// ============================================================

import {
  GlobalPositioningStateMsg,
  SlamStateMsg,
  DetailedBatteryStateMsg,
  JackStateMsg,
  ImuStateMsg,
  PushHandleStateMsg,
  SemanticPointsMsg,
  PointCloudMsg,
  V2xHealthStateMsg,
  TowingStateMsg,
  LandmarksMsg,
  DevPvtMsg,
  TrackedPoseMsg,
  PlanningStateMsg,
  TwistFeedbackMsg,
  ActionMsg,
  LocalPathMsg,
  NearbyRobotsMsg,
  ConstraintListMsg,
  OccupancyGridMsg,
  MotionMetricsMsg,
  RgbCameraData,
  RgbCameraRawMsg,
} from './msgs';

/** Global positioning state events (auto-relocate) */
export const globalPositioningEvents = new WsEventEmitter<GlobalPositioningStateMsg>('/global_positioning_state');

/** SLAM state events */
export const slamStateEvents = new WsEventEmitter<SlamStateMsg>('/slam/state');

/** Detailed battery state events */
export const detailedBatteryStateEvents = new WsEventEmitter<DetailedBatteryStateMsg>('/detailed_battery_state');

/** Jack state events */
export const jackStateEvents = new WsEventEmitter<JackStateMsg>('/jack_state');

/** IMU state events */
export const imuStateEvents = new WsEventEmitter<ImuStateMsg>('/imu_state');

/** Push handle state events */
export const pushHandleStateEvents = new WsEventEmitter<PushHandleStateMsg>('/push_handle_state');

/** Towing state events */
export const towingStateEvents = new WsEventEmitter<TowingStateMsg>('/towing_state');

/** CHC NavState (GNSS/INS) events */
export const devPvtEvents = new WsEventEmitter<DevPvtMsg>('/devpvt');

/** Semantic points events (for SemanticPointCloudRenderer) */
export const semanticPointsEvents = new WsEventEmitter<SemanticPointsMsg>('/semantic_points');

/** Scan matched points events */
export const scanMatchedPointsEvents = new WsEventEmitter<PointCloudMsg>('/scan_matched_points2');

/** Horizontal 2D laser matched points events */
export const horizontalLaser2dMatchedEvents = new WsEventEmitter<PointCloudMsg>('/horizontal_laser_2d/matched');

/** Left 2D laser matched points events */
export const leftLaser2dMatchedEvents = new WsEventEmitter<PointCloudMsg>('/left_laser_2d/matched');

/** RB 2D laser matched points events */
export const rbLaser2dMatchedEvents = new WsEventEmitter<PointCloudMsg>('/rb_laser_2d/matched');

/** Right 2D laser matched points events */
export const rightLaser2dMatchedEvents = new WsEventEmitter<PointCloudMsg>('/right_laser_2d/matched');

/** Depth camera matched points — forward */
export const matchedDepthPointsForwardEvents = new WsEventEmitter<PointCloudMsg>('/matched_depth_points/forward');

/** Depth camera matched points — downward */
export const matchedDepthPointsDownwardEvents = new WsEventEmitter<PointCloudMsg>('/matched_depth_points/downward');

/** Depth camera matched points — upward */
export const matchedDepthPointsUpwardEvents = new WsEventEmitter<PointCloudMsg>('/matched_depth_points/upward');

/** Depth camera matched points — backward */
export const matchedDepthPointsBackwardEvents = new WsEventEmitter<PointCloudMsg>('/matched_depth_points/backward');

export const depthCameraForwardPoints2Events = new WsEventEmitter<PointCloudMsg>('/depth_camera/forward/points2');
export const depthCameraDownwardPoints2Events = new WsEventEmitter<PointCloudMsg>('/depth_camera/downward/points2');
export const depthCameraUpwardPoints2Events = new WsEventEmitter<PointCloudMsg>('/depth_camera/upward/points2');
export const depthCameraBackwardPoints2Events = new WsEventEmitter<PointCloudMsg>('/depth_camera/backward/points2');

/** Planning state events */
export const planningStateEvents = new WsEventEmitter<PlanningStateMsg>('/planning_state');

/** V2X health state events */
export const v2xHealthStateEvents = new WsEventEmitter<V2xHealthStateMsg>('/v2x_health_state');

/** Landmarks events (for LandmarkRenderer) */
export const landmarksEvents = new WsEventEmitter<LandmarksMsg>('/landmarks');

/** Tracked pose events */
export const trackedPoseEvents = new WsEventEmitter<TrackedPoseMsg>('/tracked_pose');

/** Horizontal 2D laser scan events (binary protobuf) */
export const horizontalLaser2dScanEvents = new WsEventEmitter<PointCloudMsg>('/horizontal_laser_2d/scan');

/** LF 2D laser scan events (binary protobuf) */
export const lfLaser2dScanEvents = new WsEventEmitter<PointCloudMsg>('/lf_laser_2d/scan');

/** RB 2D laser scan events (binary protobuf) */
export const rbLaser2dScanEvents = new WsEventEmitter<PointCloudMsg>('/rb_laser_2d/scan');

export const leftLaser2dScanEvents = new WsEventEmitter<PointCloudMsg>('/left_laser_2d/scan');
export const rightLaser2dScanEvents = new WsEventEmitter<PointCloudMsg>('/right_laser_2d/scan');
export const lfLaser3dScanEvents = new WsEventEmitter<PointCloudMsg>('/lf_laser_3d/scan');
export const rbLaser3dScanEvents = new WsEventEmitter<PointCloudMsg>('/rb_laser_3d/scan');
export const headLaser3dScanEvents = new WsEventEmitter<PointCloudMsg>('/head_laser_3d/scan');

/** Twist feedback events */
export const twistFeedbackEvents = new WsEventEmitter<TwistFeedbackMsg>('/twist_feedback');

export const actionEvents = new WsEventEmitter<ActionMsg>('/action');

/**
 * Specialized event emitter for RGB camera topics.
 * Converts raw base64 messages to RgbCameraData with Uint8Array before dispatching.
 */
class RgbCameraEventEmitter {
  private handlers = new Set<EventHandler<RgbCameraData>>();
  private wsUnsubscribe: (() => void) | null = null;

  constructor(private topic: string) { }

  subscribe(handler: EventHandler<RgbCameraData>): () => void {
    const isFirst = this.handlers.size === 0;
    this.handlers.add(handler);

    if (isFirst) {
      this.wsUnsubscribe = wsClient.onTopic(this.topic, (payload: any) => {
        try {
          let obj: any = payload;
          if (typeof payload === 'string') {
            try { obj = JSON.parse(payload); } catch { return; }
          }
          const data = new RgbCameraData(obj as RgbCameraRawMsg);
          for (const h of this.handlers) {
            try { h(data); } catch (e) {
              console.error(`RgbCameraEventEmitter handler error for ${this.topic}:`, e);
            }
          }
        } catch (e) {
          console.error('Error processing camera message:', e);
        }
      });
      subscribedTopics.add(this.topic);
      wsClient.syncTopics();
    }

    return () => {
      this.handlers.delete(handler);
      if (this.handlers.size === 0 && this.wsUnsubscribe) {
        this.wsUnsubscribe();
        this.wsUnsubscribe = null;
        subscribedTopics.delete(this.topic);
        wsClient.syncTopics();
      }
    };
  }
}

/** Low-resolution costmap events */
export const lowResCostmapEvents = new WsEventEmitter<OccupancyGridMsg>('/maps/5cm/1hz');

/** High-resolution costmap events */
export const highResCostmapEvents = new WsEventEmitter<OccupancyGridMsg>('/maps/1cm/1hz');

/** Motion metrics events */
export const motionMetricsEvents = new WsEventEmitter<MotionMetricsMsg>('/motion_metrics');

/** Local path events */
export const localPathEvents = new WsEventEmitter<LocalPathMsg>('/local_path');

/** Nearby robots events */
export const nearbyRobotsEvents = new WsEventEmitter<NearbyRobotsMsg>('/nearby_robots');

/** SLAM constraint list events */
export const constraintListEvents = new WsEventEmitter<ConstraintListMsg>('/constraint_list');

/** RGB camera events */
export const rgbCameraFrontEvents = new RgbCameraEventEmitter('/rgb_cameras/front/video');
export const rgbCameraBackEvents = new RgbCameraEventEmitter('/rgb_cameras/back/video');
export const rgbCameraFrontAugmentedEvents = new RgbCameraEventEmitter('/rgb_cameras/front_augmented/video');
