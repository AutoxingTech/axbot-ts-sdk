import { ros_messages } from './proto/generated.js';

/**
 * Lazy-parsed Protobuf PointCloud wrapper.
 * Parsing to PointCloudBuffer is deferred until actually needed (e.g., rendering).
 */
export interface PointCloudPbMsg {
  topic?: string;
  pb: ros_messages.IPointCloud;
}
