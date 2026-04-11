import { FeatureCollection } from './geojson';
import { base64ToArrayBuffer } from './utils';
import { MoveFailReason, MoveType } from './robotApiType';

export type RobotControlMode = 'unknown' | 'auto' | 'manual' | 'remote';

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
  quat?: [number, number, number, number];
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
  positions: [number, number, number?][];
}

export type MoveState = 'none' | 'idle' | 'moving' | 'succeeded' | 'failed' | 'cancelled';

export interface PlanningStateMsg extends TopicMsg {
  move_state: MoveState;
  target_poses: PoseType[];
  charger_pose: PoseType;
  going_back_to_charger: boolean;
  creator?: string;
  action_id?: number;
  action_type?: MoveType;
  fail_reason?: MoveFailReason;
  fail_reason_str?: string;
  remaining_distance?: number;
  move_intent?: string;
  intent_target_pose?: PoseType;
  stuck_state?: string;
  map_uid?: string;
  given_route_passed_point_count?: number;
  in_elevator?: boolean;
  viewport_blocked?: boolean;
  is_waiting_for_dest?: boolean;
  waiting_for_charge?: boolean;
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
