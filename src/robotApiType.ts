// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT


export interface StartMappingRequest {
  continue_mapping?: boolean;
  start_pose_type?: 'zero' | 'current_pose';
}

export interface StopMappingRequest {
  state: 'finished' | 'cancelled';
  new_map_only?: boolean;
}

export interface RobotCaps {
  supportsImuRecalibrateService?: boolean;
  supportsShutdownService?: boolean;
  supportsRestartService?: boolean;
  supportsResetOccupancyGridService?: boolean;

  supportsImuRecalibrationFeedback?: boolean;
  supportsSetControlModeService?: boolean;
  supportsSetEmergencyStopService?: boolean;
  supportsWheelStateTopic?: boolean;
  supportsWsV2?: boolean;
  supportsRgbCamera?: boolean;
  supportsExternalRgbCamera?: boolean;

  supportsWakeUpDevice?: boolean; // supports /services/wake_up_device
  supportsCalibrateImuPose?: boolean; // supports /services/imu/recalibrate with { "calibrate_pose": true }
  supportsInitialPositionAdjustment?: boolean; // supports POST /chassis/pose with { "adjust_position": true }
  supportsCleanDiskService?: boolean; // supports GET/POST /services/clean_disk.
  supportsMonitorRecheckErrors?: boolean; // supports POST /services/monitor_recheck_errors
  supportsCalibrateDepthCameras?: boolean; // supports POST /services/calibrate_depth_cameras
  combineImuBiasAndPoseCalibration?: boolean; // since 2.4.0. REST API /imu/recalibrate 位姿矫正，也会矫正 bias
  supportsGyroscopeScaleCalibration?: boolean; // since 2.5.0. Supports `POST /services/calibrate_gyro_scale`

  // since 2.5.0. Supports `GET/POST /device/params/dev|prod|dynamic`.
  // `GET /device/info` has "/device/param_tags" property.
  supportsParamFiles?: boolean;

  supportsImuBiasTemperatureCurve?: boolean; // since 2.5.0. Supports`GET /device/imu_bias_temperature_curve`

  supportsAppStore?: boolean; // since 2.5.0. Supports '/app_store'
  supportsForklift?: boolean;

  // since 2.5.0. Supports `GET/PUT/DELETE /device/usb_devices/saved`,
  // `GET /device/usb_devices`, `POST /services/reset_usb_devices`
  supportsUsbDevices?: boolean;

  // since 2.5.0. Clear alert caused by system shutdown unexpectedly.
  // `POST /services/clear_system_shutdown_unexpectedly`
  supportsClearSystemDownExpectedly?: boolean;

  // since 2.5.0. `GET/DELETE /core_dumps`, `GET/DELETE /core_dumps/xxx.log`,
  supportsCoreDumps?: boolean;

  // since 2.6.2. Support topic such as '/map_v2'.
  supportsCachedTopics?: boolean;

  // since 2.7. Support jack device
  supportsJack?: boolean;

  supportsDynamicFootprints?: boolean;
  supportsStepTime?: boolean;

  // since 2.7. Support all-time recording bags
  supportsBags?: boolean;
  supportsEnableTopicList?: boolean;

  // since 2.8. Support /semantic_points for point cloud
  supportsSemanticPoints?: boolean;

  supportsChunkedVideoDownload?: boolean;

  // since 2.14.0
  supportsTowing?: boolean;

  // Supports POST /services/jack_self_check
  supportsJackCheck?: boolean;

  // Supports POST /services/calibrate_duo_lidar_poses
  supportsDuoLidar?: boolean;
}

export interface DeviceInfo {
  rosversion?: string;
  rosdistro?: string;
  axbot_version: string;
  device: {
    model: string;
    sn: string;
    name: string;
    nickname?: string;
    hardware?: any;
    param_tags?: {
      dev: string[];
      prod: string[];
    };
  };
  baseboard: {
    firmware_version: string;
  };
  wheel_control: {
    firmware_version: string;
  };
  bottom_sensor_pack?: {
    firmware_version: string;
  };
  depth_camera?: {
    firmware_version: string;
  };
  robot: {
    footprint: number[][];
    inscribed_radius: number;
    height: number;
    thickness: number;
    wheel_distance: number;
    width: number;
    charge_contact_position?: string; // deprecated, use `charge_contact.pose_2d` instead
    charge_contact?: { pose_2d: [number, number, number]; size?: [number, number] };
    visualization_topics?: string[] // like ["/lf_laser_3d/scan", ...]
  };
  caps: RobotCaps;
  remote_params?: {
    tags: string[];
  };

  // Each Gitinfo item contains "module [SHA] log".
  // like "platform-build [8a10e24] Merge branch 'action_publisher'"
  gitinfo: string[];
}


export interface BriefDeviceInfo {
  // Add more specific fields if needed
  [key: string]: any;
}

export interface WifiNetwork {
  ssid: string;
  bss: string;
  rssi: number;
  open: boolean;
}

export interface SensorsList {
  depth_cameras?: { name: string; depth_image_topic: string }[];
  laser_scanners?: { name: string; scan_topic: string }[];
  rgb_cameras?: { name: string; image_topic: string }[];
}

export interface UsbDevice {
  vendor_product: string;
  sn: string;
  alias: string;
  description: string;
  bind: string;
  bus_id: number;
  dev_id: number;
  port: number;
  full_port: string;
  level: number;
  children?: UsbDevice[];
}

export interface BootProgressLog {
  stamp: number;
  progress: number;
  msg: string;
}

export interface BootProgress {
  start_time: number;
  progress: number;
  logs: BootProgressLog[];
}

/**
 * Move type for createMove.
 */
export type MoveType =
  | 'standard'
  | 'charge' // Go to the charger and dock with it.
  | 'return_to_elevator_waiting_point'
  | 'enter_elevator'
  | 'leave_elevator' // Deprecated. Do not use.
  | 'along_given_route' // Follow a specified path.
  | 'align_with_rack' // Crawl under a rack (to jack it up later).
  | 'to_unload_point' // Move to a rack unload point (to jack it down later).
  | 'follow_target'; // Follow a moving target.

export type MoveState = 'idle' | 'moving' | 'succeeded' | 'failed' | 'cancelled';

/**
 * Payload for creating a move action.
 */
export interface MoveActionCreate {
  type?: MoveType;
  /** The initiator of the action (for diagnostic purposes only). */
  creator?: string;
  target_x?: number;
  target_y?: number;
  target_z?: number;
  target_ori?: number | null;
  /** In meters. */
  target_accuracy?: number | null;
  /**
   * A path to follow. Only valid when `type` is `along_given_route`.
   * A list of coordinates as a comma-separated string, in the format "x1, y1, x2, y2".
   */
  route_coordinates?: string;
  /**
   * The allowed detour distance when navigating around an obstacle while following a specified path.
   * Only valid when `type` is `along_given_route`.
   * When 0, the robot will stop and wait before an obstacle instead of going around it.
   */
  detour_tolerance?: number;
  /** If true, the action succeeds immediately when within the radius of `target_accuracy`. */
  use_target_zone?: boolean | null;
  /** Number of retries before the `charge` action fails. */
  charge_retry_count?: number;
  rack_area_id?: string;
  /** Optional properties. Available since 2.11.0. */
  properties?: {
    /** Strictly rotate without any linear velocity. Available since 2.11.0. */
    inplace_rotate?: boolean;
    /** Index into the layers of a rack stack. For `align_with_rack` and `to_unload_point`. */
    rack_layer?: number;
  };
}

/**
 * Backward-compatible alias for move creation options.
 */
export type MoveOptions = MoveActionCreate;

export interface MoveAction extends MoveActionCreate {
  id: number;
  state: MoveState;
  is_charging: boolean | null;
  fail_reason: MoveFailReason;
  /** Internal failure message for debugging. */
  fail_reason_str: string;
  /** Internal failure message in Chinese for debugging. */
  fail_message: string;
  /** Unix timestamp in seconds. */
  create_time: number;
  /** Unix timestamp in seconds. */
  last_modified_time: number;
}

/**
 * Numeric reason codes for why a move action failed (`fail_reason` field).
 */
export enum MoveFailReason {
  None = 0,
  Unknown = 1,
  GetMapFailed = 2,
  StartingPointOutOfMap = 3,
  EndingPointOutOfMap = 4,
  StartingPointNotInGround = 5,
  EndingPointNotInGround = 6,
  StartingEqualEnding = 7,
  CalculateGlobalPathExtendedDataError = 8,
  /** Roads are not connected. */
  CalculationFailed = 9,
  CalculationTimeout = 10,
  NoGlobalPath = 11,
  NotGrabStartIndexOnGlobalPath = 12,
  NotGrabEndIndexOnGlobalPath = 13,
  PlanningTimeout = 14,
  MoveTimeout = 15,
  /** Local obstacle avoidance map data error / sensor data anomaly. */
  ControlCostmapError = 16,
  PowerCableConnected = 17,
  RotateTimeout = 18,
  ChargeRetryCountExceeded = 100,
  ChargeDockDetectionError = 101,
  /** Did not receive successful docking signal from charge dock. */
  ChargeDockSignalError = 102,
  InvalidChargeDock = 103,
  AlreadyCharging = 104,
  /** No charge current received for a long time after contact. */
  NoChargeCurrent = 105,
  InvalidCabinetPos = 200,
  CabinetDetectionError = 201,
  NoDockWithConveyer = 202,
  NoApproachConveyer = 203,
  ElevatorPointOccupied = 300,
  ElevatorClosed = 301,
  ElevatorPointObscuredTimeout = 302,
  ElevatorPointOccupancyDetectionTimeout = 303,
  ElevatorEnterProgressUpdateTimeout = 304,
  /** Number of input coordinates is not even, or number of track points < 2. */
  InvalidTrackPoints = 400,
  TooFarFromStartOfTrack = 401,
  InvalidRackDetectionPos = 500,
  RackDetectionError = 501,
  RackRetryCountExceeded = 502,
  UnloadPointOccupied = 503,
  UnloadPointUnreachable = 504,
  RackMoved = 505,
  JackInUpState = 506,
  InvalidRackAreaId = 507,
  /** Invalid rack area (no rack positions). */
  InvalidRackArea = 508,
  UnknownRackSpaceState = 509,
  NoRackInRackArea = 510,
  AlignFailedInRackArea = 511,
  NoFreeSpaceInRackArea = 512,
  FailedToUnloadInRackArea = 513,
  /** Follow target lost. */
  FollowFailed = 600,
  PoiDetectionError = 700,
  PoiUnreachable = 701,
  BarcodeDetectionError = 702,
  /** System exception. */
  PlatformAlertError = 1000,
  /** Service call error (REST API usage). */
  ServiceCallError = 1001,
  /** Internal ASSERT error. */
  InternalError = 1002,
  /** Map changed or cleared during task execution. */
  MapChanged = 1003,
  MoveActionTypeDeprecated = 1004,
}

/**
 * Custom error class that includes HTTP status code
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// ========== Bag Player Types ==========

/**
 * Prefix for the bag player API.
 */
export type BagPlayerPrefix = 'bags' | 'recording';

/**
 * Bag player metadata response.
 */
export interface BagPlayerMetadata {
  total_messages: number;
  start_time: number;
  end_time: number;
}

/**
 * Bag player chunk response with messages.
 */
export interface BagPlayerChunkResponse {
  total_messages: number;
  start_time: number;
  end_time: number;
  messages: BagPlayerMessage[];
}

/**
 * A single message from a bag file.
 */
export interface BagPlayerMessage {
  topic: string;
  __stamp: number;
  [key: string]: unknown;
}

export type MapItem = {
  id: number;
  uid: string;
  map_name: string;
  create_time: number;
  last_modified_time?: number;
  map_version: number;
  overlays_version: number;
  thumbnail_url?: string;
  image_url?: string;
  pbstream_url?: string;
  url?: string;
  // Grid info (returned from detail endpoint)
  grid_origin_x?: number;
  grid_origin_y?: number;
  grid_resolution?: number;
  // Overlays JSON string containing POI data
  overlays?: string;
};

export type MappingTaskItem = {
  id: number;

  // timing / state
  start_time?: number;
  end_time?: number;
  state?: 'finished' | 'running' | 'cancelled';

  // mapping specific
  continue_mapping?: boolean;
  thumbnail_url?: string;
  image_url?: string; // the full resolution image

  // grid info
  grid_origin_x?: number;
  grid_origin_y?: number;
  grid_resolution?: number;

  // urls
  url?: string;
  bag_url?: string;
  download_url?: string;
  pbstream_url?: string;
  landmark_url?: string;
  trajectories_url?: string;
  properties_url?: string;
};

export type BagItem = {
  filename: string; // "8981307a02163yT_2025-11-17_07-50-00.bag"
  size: string; // "607.4KB"
  size_bytes: number; // 621988
  end: string; // "17-Nov-2025 08:00:00"
  download_url: string; // "bags/8981307a02163yT_2025-11-17_07-50-00.bag/download"
};

export type VideoFileItem = {
  filename: string;
  size: string;
  size_bytes: number;
  end: string;
  url: string;
  download_url: string;
};

export interface CoreDumpItem {
  filename: string;
  size: string;
  size_bytes: number;
  modify_time: string;
  url: string;
}

export interface CollectedDataItem {
  filename: string;
  size: string;
  size_bytes: number;
  modified_time: string;
  download_url: string;
}

