// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * Binary WebSocket frame decoder for ros_message_forward.
 *
 * Two endpoints frame the same protobuf payload differently:
 *
 *   topics endpoint  (Django → Browser)
 *     [topic_len: 1 byte] [topic_name: topic_len bytes] [gzipped?: 1 byte] [protobuf: remaining]
 *
 *   world endpoint   (browser endpoint, protocol version 1)
 *     [topic_len: 1 byte] [topic_name: L] [publisher_index: 1 byte] [gzipped?: 1 byte] [protobuf: N]
 *
 * The layouts differ by one byte, in the position where the other layout keeps
 * its gzip flag, so a frame cannot say which one it is: the layout belongs to
 * the connection and is passed in by the client that owns it.
 *
 * The gzipped protobuf is a RosMessageWrapper containing one of several payload types.
 */

import { gunzipSync } from 'fflate';
import { ax_proto_msgs } from './proto/generated.js';
import { ProtoMessage } from './topicMessages.js';

/** Wire layout of a connection's data frames. */
export type FrameLayout = 'topics' | 'world';

/**
 * Decode a binary WebSocket frame into a topic name and typed payload.
 * Returns null if the frame is malformed or contains an unsupported message type.
 *
 * @param buffer Raw frame bytes.
 * @param layout Layout of the connection the frame arrived on.
 */
export function decodeBinaryFrame(buffer: ArrayBuffer, layout: FrameLayout = 'topics'): ProtoMessage | null {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 2) return null;

  // 1. Parse header: topic_len (1 byte) + topic_name (topic_len bytes)
  const topicLen = bytes[0];
  if (bytes.length < 1 + topicLen) return null;

  const topicBytes = bytes.subarray(1, 1 + topicLen);
  const topic = new TextDecoder().decode(topicBytes);

  // 2. The world layout names the publisher between the topic and the gzip flag
  const hasPublisher = layout === 'world';
  const flagOffset = 1 + topicLen + (hasPublisher ? 1 : 0);
  if (bytes.length < flagOffset + 1) return null;

  const publisherIndex = hasPublisher ? bytes[1 + topicLen] : undefined;
  const isGzipped = bytes[flagOffset] !== 0;
  const rawPayload = bytes.subarray(flagOffset + 1);
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
  let wrapper: ax_proto_msgs.RosMessageWrapper;
  try {
    wrapper = ax_proto_msgs.RosMessageWrapper.decode(protobufBytes);
  } catch {
    console.error('binaryMessageDecoder: protobuf decode failed for', topic);
    return null;
  }

  // 4. Convert payload based on message type
  const payload = decodePayload(wrapper);
  if (payload === null) {
    console.warn('binaryMessageDecoder: unsupported message type', wrapper.type, 'for', topic);
    return null;
  }
  return new ProtoMessage(topic, payload, publisherIndex);
}

/** The payload a wrapper carries, or null for a type this decoder does not know. */
function decodePayload(wrapper: ax_proto_msgs.RosMessageWrapper): unknown {
  const type = ax_proto_msgs.RosMessageWrapper.MessageType;
  switch (wrapper.type) {
    case type.POINT_CLOUD:
      return wrapper.point_cloud ?? null;
    case type.MAST_STATE:
      return wrapper.mast_state ?? null;
    case type.SUBMAP_LIST:
      return wrapper.submap_list ?? null;
    case type.RACK_STATES:
      return wrapper.rack_states ?? null;
    case type.MOBILE_NETWORK_STATE:
      return wrapper.mobile_network_state ?? null;
    case type.VIDEO_DATA:
      return wrapper.video_data ?? null;
    case type.DEPTH_IMAGE:
      return wrapper.depth_image ?? null;
    case type.JOINT_STATES:
      return wrapper.joint_states ?? null;
    case type.ROBOT_INSTANCES:
      return wrapper.robot_instances ?? null;
    case type.ROBOT_DESCRIPTIONS:
      return wrapper.robot_descriptions ?? null;
    case type.ROBOT_PARAMETERS:
      return wrapper.robot_parameters ?? null;
    case type.ROBOT_JOINT_BINDINGS:
      return wrapper.robot_joint_bindings ?? null;
    case type.TF_MESSAGE:
      return wrapper.tf_message ?? null;
    default:
      return null;
  }
}
