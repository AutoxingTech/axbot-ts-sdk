import { FeatureCollection } from './geojson';
import { base64ToArrayBuffer } from './utils';

export type RobotControlMode = 'unknown' | 'auto' | 'manual' | 'remote';

class TopicNames {
  public static MAP_TOPIC_OLD = '/chassis/occupancy_grid';
  public static MAP_TOPIC = '/map';
  public static MAP_TOPIC_V2 = '/map_v2';
  public static INCREMENTAL_MAP_TOPIC = '/incremental_map';
  public static BUMP_MAP_TOPIC = '/bump_map';
  public static ENV_MATCH_MAP_TOPIC = '/env_match_map';
  public static ENV_SYMMETRY_MAP_TOPIC = '/env_symmetry_map';
  public static WIFI_STRENGTH_MAP = '/wifi_strength_map';
  public static STRONGEST_WIFI_STRENGTH_MAP = '/strongest_wifi_strength_map';
  public static TRACKED_POSE = '/tracked_pose';
  public static PATH = '/path';
  public static ALERTS = '/alerts';
  public static WHEEL_STATE = '/wheel_state';
  public static CHASSIS_STATE = '/chassis_state'; // deprecated
  public static PLANNING_STATE = '/planning_state';

  public static POINT_CLOUD_TOPIC = '/scan_matched_points2';
  public static SEMANTIC_POINTS_TOPIC = '/semantic_points';
  public static COST_MAP_TOPIC = '/map/costmap';
  public static COST_MAP_TOPIC_V2 = '/map/costmap_v2';
  public static OBSTACLE_MAP_TOPIC = '/maps/5cm/1hz';
  public static MAP_1CM_TOPIC = '/maps/1cm/1hz';
  public static MAP_1CM_DEPTH_TOPIC = '/maps/1cm/1hz/depth';
  public static DETECTED_GATES_TOPIC = '/detected_features/gates';
  public static DETECTED_CHARGER_POSE_TOPIC = '/detected_features/charger_pose';
  public static DETECTED_CHARGERS_TOPIC = '/detected_features/chargers';
  public static MAP_INFO_TOPIC = '/map/info';
  public static BATTERY_STATE_TOPIC = '/battery_state';
  public static MOTION_METRICS_TOPIC = '/motion_metrics';
  public static VOXEL_5CM_TOPIC = '/voxel_grid/5cm/1hz';
  public static VOXEL_1CM_TOPIC = '/voxel_grid/1cm/1hz';
  public static ROBOT_FOOTPRINT_TOPIC = '/robot/footprint';
  public static TWIST_FEEDBACK_TOPIC = '/twist_feedback';
  public static ULTRASONIC_PC_TOPIC = '/ultrasonic_echoes/points2';
  public static TRAVELLED_DISTANCE_TOPIC = '/platform_monitor/travelled_distance';
  public static TRAJECTORY_TOPIC = '/trajectory';
  public static TRAJECTORY_NODE_LIST_TOPIC_DEPRECATED = '/trajectory_node_list';
  public static LOCAL_PATH_TOPIC = '/local_path';
  public static SLAM_STATE = '/slam/state';
  public static IMU_STATE = '/imu_state';
  public static ACTION_TOPIC = '/action';
  public static WS_CONNECTIONS_TOPIC = '/ws_connections';
  public static WS_CONNECTION_ESTABLISHED_TOPIC = '/ws_connection_established';
  public static WS_CONNECTION_DISCONNECTED_TOPIC = '/ws_connection_disconnected';
  public static DEPTH_CAMERA_STATE = '/depth_camera_state';
  public static BASEBOARD_STATE_TOPIC = '/baseboard_state';
  public static MOVE_BASE_TRAJECTORY_TOPIC = '/move_base/trajectory';
  public static CONSTRAINTS_TOPIC = '/constraint_list';
  public static NEARBY_MAP_MATCH_TOPIC = '/slam/nearby_map_match';
  public static RGB_CAMERA_FRONT = '/rgb_cameras/front/video';
  public static RGB_CAMERA_FRONT_AUGMENTED = '/rgb_cameras/front_augmented/video';
  public static RGB_CAMERA_BACK = '/rgb_cameras/back/video';
  public static VISION_DETECTED_OBJECTS = '/vision_detected_objects';
  public static LIDAR_DETECTED_OBJECTS = '/lidar_detected_objects';
  public static ROBOT_MODEL_TOPIC = '/robot_model';
  public static NEARBY_ROBOTS = '/nearby_robots';
  public static NEARBY_ROBOT_FOOTPRINTS = '/nearby_robot_footprints';
  public static MATCHED_DEPTH_POINTS_FORWARD = '/matched_depth_points/forward';
  public static MATCHED_DEPTH_POINTS_DOWNWARD = '/matched_depth_points/downward';
  public static MATCHED_DEPTH_POINTS_UPWARD = '/matched_depth_points/upward';
  public static GLOBAL_POSITIONING_STATE = '/global_positioning_state';
  public static SENSOR_MANAGER_STATE = '/sensor_manager_state';
  public static JACK_STATE = '/jack_state';
  public static DETECTED_RACK = '/detected_rack';
  public static NEARBY_AUTO_DOORS = '/nearby_auto_doors';
  public static PUSH_HANDLE_STATE = '/push_handle_state';
  public static TOWING_STATE = '/towing_state';
  public static DETECTED_PALLETS_TOPIC = '/detected_pallets';
}

export interface PoseType {
  pos: [number, number];
  ori: number;
}

export interface TopicMsg {
  topic: string;
}

export interface OccupancyGridMsg extends TopicMsg {
  origin: [number, number];
  size: [number, number];
  resolution: number;
  data?: string;
  data_url?: string;
}

export interface PoseMsg extends TopicMsg, PoseType { }

export interface TrackedPoseMsg extends TopicMsg, PoseType {
  cov: [[number, number], [number, number]];
}

export type GateStateMsg = 'unknown' | 'open' | 'closed';
export interface GateMsg {
  name: string;
  state: GateStateMsg;
}

export interface GateFeaturesMsg extends TopicMsg {
  gates: GateMsg[];
}

export interface DetectedFeaturesMsg extends TopicMsg {
  poses: PoseType[];
}

export interface DetectedRackMsg extends TopicMsg {
  rack_detected: boolean;
  frame?: 'base_link' | 'map'; // valid when `rack_detected` is true
  rack_box?: {
    // valid when `rack_detected` is true
    pose: PoseType;
    width: number;
    height: number;
  };
  rack_box_aligned?: {
    // valid when `rack_detected` is true
    pose: PoseType;
    width: number;
    height: number;
  };
}

export interface PointCloudMsg extends TopicMsg {
  // x, y, z, probability
  points: [number, number, number, number?][];
}

export interface PointField {
  name: string;
  data_type: 'f32' | 'f64' | 'i32' | 'u32' | 'i16' | 'u16' | 'i8' | 'u8';
}

export interface SemanticPointsMsg extends TopicMsg {
  fields: PointField[];
  data: string; // base64 encoded
}

export interface PointCloudGeneralMsg extends TopicMsg {
  fields: PointField[];
  data: number[][];
}

export interface PathMsg extends TopicMsg {
  positions: [number, number][];
  orientations: [number];
}

export type MoveState = 'none' | 'idle' | 'moving' | 'succeeded' | 'failed' | 'cancelled';

export interface PlanningStateMsg extends TopicMsg {
  move_state: MoveState;
  target_poses: PoseType[];
  charger_pose: PoseType;
  going_back_to_charger: boolean;
}

export interface MapInfoMsg extends TopicMsg {
  name: string;
  uid: string;
  overlays: FeatureCollection;
}

export interface SlamStateMsg extends TopicMsg {
  state: 'slam' | 'inactive' | 'positioning';
  nav_sat_state: 'no_fix' | 'sat_base' | 'rtk_fixed';
  reliable: boolean;
  uncertainty_radius: number;

  lidar_reliable: boolean;
  inter_constraint_count: number;
  good_constaint_count: number;

  position_quality?: number; // since 2.3.0
  lidar_matched?: boolean; // since 2.1.0
  lidar_matching_score?: number; // since 2.1.0
}

export interface ActionMsg extends TopicMsg {
  timestamp: number;
  email: string;
  username: string;
  deviceName: string;
  action: string;
  message: string;

  // derived from message
  x?: number;
  y?: number;
  ori?: number;

  alongRoutePoints?: [number, number, number][]; // [1.2, 2.3, undefined], [1.2, 3.4, undefined], [1.2, 4.5, 3.14]
}

export interface DepthCameraStateMsg extends TopicMsg {
  enabled: boolean;
}

export enum PowerState {
  unknown = 0,
  on = 1,
  off = 2,
}

export interface BaseboardStateMsg extends TopicMsg {
  lidar_power_state: PowerState;
}

export interface WheelStateMsg extends TopicMsg {
  control_mode: RobotControlMode;
  emergency_stop_pressed: boolean;
  wheels_released: boolean;
}

export interface TravelledDistanceMsg extends TopicMsg {
  distance: number;
  accumulated_distance: number;
  start_time: number;
  duration: number;
}

export interface TrajectoryMsg extends TopicMsg {
  points: [number, number][];
}

export interface LocalPathMsg extends TopicMsg {
  width: number;
  color: string; // #RRGGBBAA
  poses: [number, number][];
}

export interface DetailedBatteryStateMsg extends TopicMsg {
  current: number;
  voltage: number;
  percentage: number;
  power_supply_status: 'discharging' | 'charging' | 'full';
  secs: number;
  capacity: number | 'nan';
  cell_voltages: number[];
  design_capacity: number | 'nan';
  state_of_health: number;
}

export interface MotionMetricsMsg extends TopicMsg {
  angular_velocity: number;
  linear_acc: number;
  linear_velocity: number;
}

export enum ImuCalibrateState {
  none = 0,
  inProgress = 1,
  succeeded = 2,
  failed = 3,
}

export enum ImuCalibrationFailReason {
  none = 0,
  varianceTooHigh = 1,
}

export interface ImuStateMsg extends TopicMsg {
  calibrate_state: ImuCalibrateState;
  calibrate_fail_reason: ImuCalibrationFailReason;
  temperature: number;
  angular_velocity_standard_deviation_10s: number;
  angular_velocity_avg_10s: number;
  linear_acc_standard_deviation_10s: number;
}

export interface PushHandleStateMsg extends TopicMsg {
  mode: 'idle' | 'push' | 'drive';
  left_activated: boolean;
  right_activated: boolean;
  calibrating?: boolean;
}

export type AlertLevel = 'warning' | 'error' | 'none';

export interface AlertItem {
  code: number;
  level: AlertLevel;
  msg: string;
}

export interface AlertsMsg extends TopicMsg {
  alerts: AlertItem[];
}

export interface VoxelGridMsg extends TopicMsg {
  resolution_xy: number;
  resolution_z: number;

  width: number;
  height: number;
  thickness: number;

  origin: {
    pos: [number, number] | [number, number, number];
    ori: number | [number, number, number, number];
  };

  data: number[];
}

export interface RobotFootprintMsg extends TopicMsg {
  footprint: number[][];
}

export interface RobotModelMsg extends TopicMsg {
  footprint: number[][];
  expanded_footprint: number[][];
  width: number;
}

export type TwistFeedbackMsg = TopicMsg;

export interface TwistMsg extends TopicMsg {
  linear_velocity: number;
  angular_velocity: number;
}

export interface WsConnection {
  id: string;
  username: string;
  email: string;
}

export interface WsConnectionsMsg extends TopicMsg {
  connections: WsConnection[];
}

export interface WsConnectionEstablishedMsg extends TopicMsg, WsConnection { }

export interface WsConnectionDisconnectedMsg extends TopicMsg, WsConnection { }

export interface MoveBasePathPoint {
  x: number;
  y: number;
  speed: number;
}

export interface MoveBaseTrajectoryRawMsg extends TopicMsg {
  robotPose: PoseType;
  targetPointIndex: number;
  targetPointVelocity: number;
  pathPoints: number[][];
}

export class MoveBaseTrajectory implements TopicMsg {
  topic: string = TopicNames.MOVE_BASE_TRAJECTORY_TOPIC;
  targetPointIndex: number;
  targetPointVelocity: number;
  pathPoints: MoveBasePathPoint[];

  constructor(msg: MoveBaseTrajectoryRawMsg) {
    this.pathPoints = [];
    this.targetPointIndex = msg.targetPointIndex;
    this.targetPointVelocity = msg.targetPointVelocity;

    const robotX = msg.robotPose.pos[0];
    const robotY = msg.robotPose.pos[1];
    const robotOri = msg.robotPose.ori - Math.PI / 2;

    for (const pt of msg.pathPoints) {
      const cos = Math.cos(robotOri);
      const sin = Math.sin(robotOri);
      const x = pt[0] * cos - pt[1] * sin + robotX;
      const y = pt[0] * sin + pt[1] * cos + robotY;

      this.pathPoints.push({
        x,
        y,
        speed: pt[3],
      });
    }
  }
}

export interface ConstraintListMsg extends TopicMsg {
  'Inter residuals, different trajectories': [number, number][];
  'Inter constraints, different trajectories': [number, number][];
}

export interface RgbCameraRawMsg extends TopicMsg {
  stamp: number; // in seconds, precision to 0.001 seconds
  data: string; // base64 encoded data
}

export class RgbCameraData implements TopicMsg {
  topic: string;
  stamp: number; // in seconds, precision to 0.001 seconds
  data: Uint8Array;
  constructor(msg: RgbCameraRawMsg) {
    this.topic = msg.topic;
    this.stamp = msg.stamp;
    this.data = base64ToArrayBuffer(msg.data);
  }
}

export interface BoundBoxMsg {
  pose: PoseType;
  dimensions: [number, number, number];
  label: number;
  value: number;
}

export interface BoundBoxArrayMsg extends TopicMsg {
  boxes: BoundBoxMsg[];
}

export interface NearbyRobot {
  uid: string;
  pose: PoseType;
  trend: [number, number][]; // a trajectory of future positions
  footprint_digest?: string; // since 2.7.0
}

export interface NearbyRobotsMsg extends TopicMsg {
  robots: NearbyRobot[];
}

export interface NearbyRobotFootprint {
  digest: string;
  coordinates: [number, number][];
}

export interface NearbyRobotFootprintsMsg extends TopicMsg {
  footprints: NearbyRobotFootprint[];
}

export interface Pallet {
  frame: string;
  pallet_id: string;
  pose: PoseType;
  size: {
    width: number;
    depth: number;
    height: number;
    pocket_width: number;
    pocket_height: number;
    pocket_spacing: number;
  };
}

export interface DetectedPalletsMsg extends TopicMsg {
  pallets: Pallet[];
}

export type TaskState = 'unknown' | 'running' | 'succeeded' | 'failed';

export interface GlobalPositioningStateMsg extends TopicMsg {
  state: TaskState;
  pose?: PoseType;
  needs_confirmation: boolean;
  result_source?: string;
  score: number;
  message?: string;
}

export interface V2xHealthStateMsg extends TopicMsg {
  test_time_window: number;
  rate: number;
  beacon_ids: string[];
  beacon_message_counts: number[];
  beacon_active_states: boolean[];
}

export type DevicePowerState = 'unknown' | 'awake' | 'awakening' | 'sleeping';

export interface SensorManagerStateMsg extends TopicMsg {
  power_state: DevicePowerState;
}

export type JackStateMsgState = 'unknown' | 'hold' | 'jacking_up' | 'jacking_down';
export interface JackStateMsg extends TopicMsg {
  state: JackStateMsgState;
  progress: number;
  self_checking: boolean;
  weight?: number;
  weight_error?: number;
}

export type TowingState = 'unknown' | 'locked' | 'released' | 'locking' | 'releasing' | 'self_checking' | 'error';
export interface TowingStateMsg extends TopicMsg {
  state: TowingState;
  action_progress: number;
  cargo_detected: boolean;
  error_code: number;
  error_message: string;
}

export interface DevPvtMsg extends TopicMsg {
  speed: number;
  heading: number;
  heading2: number;
  combined_state: string;
  gnss_state: string;
  warning: number;
}

export type NearbyAutoDoorState = 'unknown' | 'open' | 'closed' | 'opening' | 'closing';
export interface NearbyAutoDoor {
  name: string;
  mac: string;
  state: NearbyAutoDoorState;
  polygon: [number, number][];
}

export interface NearbyAutoDoorsMsg extends TopicMsg {
  doors: NearbyAutoDoor[];
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

  // Supports POST /services/calibrate_duo_lidar_poses
  supportsDuoLidar?: boolean;
}

export interface DeviceInfo {
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

export interface Landmark {
  id: string;
  pos: [number, number];
  in_use?: boolean;
}

export interface LandmarksMsg {
  topic: string;
  landmarks: Landmark[];
}

export interface CollectedDataFile {
  landmarks: Landmark[];
}

export type MoveActionType =
  | 'standard'
  | 'charge' // Go to charger and dock with it
  | 'return_to_elevator_waiting_point'
  | 'enter_elevator'
  | 'leave_elevator' // Deprecated. Don't use it anymore.
  | 'along_given_route' // Follow a given path
  | 'align_with_rack' // Crawl under a rack (to jack it up later)
  | 'to_unload_point' // Move to a rack unload point (to jack it down later)
  | 'follow_target'; // Follow a moving target

interface MoveActionCreate {
  // Initiator of the action. For diagnosis only.
  creator: string;
  type: MoveActionType;
  target_x?: number;
  target_y?: number;
  target_ori?: number;
  // In meters. Optional.
  target_accuracy?: number;

  // A path to follow.
  // Only valid with type `along_given_route`.
  // It's a list of coordinates, as comma separated string,
  // in the format of "x1, y1, x2, y2"
  route_coordinates?: string;

  // Allowed detour distance when going around an obstacle,
  // while following a given path.
  // Only valid with type `along_given_route`.
  // When 0 is given, it will always stop and wait before an obstacle,
  // instead of trying to go around it.
  detour_tolerance?: number;

  // If true, action will succeed right away
  // when within radius of `target_accuracy`
  use_target_zone?: boolean;

  // Retry times before `charge` action fails
  charge_retry_count?: number;

  // When executing point-to-area or area-to-area cargo move action, give the target rack area id
  rack_area_id?: string;

  // Optional: since 2.11.0
  properties?: Record<string, any>;
}

export interface MoveAction extends MoveActionCreate {
  id: number;

  state: 'idle' | 'moving' | 'succeeded' | 'failed' | 'cancelled';
  // Unix timestamp, like 1647509573
  create_time: number;
  // Unix timestamp, like 1647509573
  last_modified_time: number;
  // Fail code. Only valid when state="failed"
  fail_reason: number;
  // Internal fail message - for debugging. Only valid when state="failed"
  fail_reason_str: string;
  // Internal fail message in Chinese - for debugging. Only valid when state="failed"
  fail_message: string;

  route_coordinates?: string; // Interleaved x and y, like "3.786889,-25.298599,3.386900,-25.301519,3.365005,-25.301679,3.365005,-25.301679"
}

export function parseRouteString(routeStr: string): [number, number][] {
  if (!routeStr) return [];
  const coords = routeStr.split(',').map(Number);
  const route: [number, number][] = [];
  for (let i = 0; i < coords.length; i += 2) {
    if (i + 1 < coords.length) {
      route.push([coords[i], coords[i + 1]]);
    }
  }
  return route;
}
