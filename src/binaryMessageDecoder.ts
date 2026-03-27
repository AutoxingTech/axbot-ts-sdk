/**
 * Binary WebSocket frame decoder for ros_message_forward.
 *
 * Wire format (Django → Browser):
 *   [topic_len: 1 byte] [topic_name: topic_len bytes] [gzipped?: 1 byte] [protobuf: remaining]
 *
 * The gzipped protobuf is a RosMessageWrapper containing one of several payload types.
 * Currently supports: POINT_CLOUD → PointCloudMsg conversion.
 */

import { gunzipSync } from 'fflate';
import { ros_messages } from './proto/generated.js';
import type { PointCloudMsg } from './topicMessages';

/**
 * Decode a binary WebSocket frame into a topic name and typed payload.
 * Returns null if the frame is malformed or contains an unsupported message type.
 */
export function decodeBinaryFrame(buffer: ArrayBuffer): { topic: string; payload: unknown } | null {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 2) return null;

  // 1. Parse header: topic_len (1 byte) + topic_name (topic_len bytes)
  const topicLen = bytes[0];
  if (bytes.length < 1 + topicLen) return null;

  const topicBytes = bytes.subarray(1, 1 + topicLen);
  const topic = new TextDecoder().decode(topicBytes);

  // 2. Read gzipped flag (1 byte) + remaining protobuf
  const headerLen = 1 + topicLen + 1;
  if (bytes.length < headerLen) return null;
  const isGzipped = bytes[1 + topicLen] !== 0;
  const rawPayload = bytes.subarray(headerLen);
  if (rawPayload.length === 0) return null;

  let protobufBytes: Uint8Array;
  if (isGzipped) {
    try {
      protobufBytes = gunzipSync(rawPayload);
    } catch {
      console.error('binaryMessageDecoder: gzip decompress failed for', topic);
      return null;
    }
  } else {
    protobufBytes = rawPayload;
  }

  // 3. Decode RosMessageWrapper
  let wrapper: ros_messages.RosMessageWrapper;
  try {
    wrapper = ros_messages.RosMessageWrapper.decode(protobufBytes);
  } catch {
    console.error('binaryMessageDecoder: protobuf decode failed for', topic);
    return null;
  }

  // 4. Convert payload based on message type
  if (wrapper.type === ros_messages.RosMessageWrapper.MessageType.POINT_CLOUD && wrapper.pointCloud) {
    return { topic, payload: pointCloudToMsg(wrapper.pointCloud) };
  }

  console.warn('binaryMessageDecoder: unsupported message type', wrapper.type, 'for', topic);
  return null;
}

/**
 * Convert protobuf PointCloud (center + offsets * resolution) to PointCloudMsg
 * compatible with the existing pointCloudMsgToXyzBuffer() pipeline.
 */
function pointCloudToMsg(pc: ros_messages.IPointCloud): PointCloudMsg {
  const cx = pc.centerX ?? 0;
  const cy = pc.centerY ?? 0;
  const cz = pc.centerZ ?? 0;
  const res = pc.resolution ?? 1;
  const xs = pc.xs ?? [];
  const ys = pc.ys ?? [];
  const zs = pc.zs ?? [];
  const intensities = pc.intensities ?? new Uint8Array();
  const count = xs.length;

  const points: [number, number, number, number?][] = new Array(count);
  for (let i = 0; i < count; i++) {
    points[i] = [
      cx + xs[i] * res,
      cy + ys[i] * res,
      zs.length > i ? cz + zs[i] * res : 0,
      intensities.length > i ? intensities[i] : 0,
    ];
  }

  return { topic: '', points };
}
