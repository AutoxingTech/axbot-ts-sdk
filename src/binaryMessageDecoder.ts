// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * Binary WebSocket frame decoder for ros_message_forward.
 *
 * One self-describing layout carries the data frames of both endpoints:
 *
 *   [topic_len: 1 byte] [topic_name: topic_len bytes] [flags: 1 byte]
 *   [publisher_index: 1 byte (optional)] [protobuf: remaining]
 *
 * The flags byte is a bit set:
 *
 *   bit 0  gzipped              the payload is gzip-compressed
 *   bit 1  has_publisher_index  a publisher index byte follows the flags
 *   bit 2+ reserved             ignored, so a later bit needs no new decoder
 *
 * A frame whose publisher-index bit is clear is the layout the dispatcher sent
 * before the flags byte existed, where that byte carried the gzip flag alone:
 * 0 or 1, which are also valid flags bytes with the index bit clear. A frame
 * with the bit set names the publisher it came from, so several publishers of
 * one topic stay distinguishable. The flags byte decides the layout, so the
 * decoder needs no per-connection layout argument.
 *
 * The gzipped protobuf is a RosMessageWrapper containing one of several payload types.
 */

import { gunzipSync } from 'fflate';
import { ax_proto_msgs } from './proto/generated.js';
import { ProtoMessage } from './topicMessages.js';

/** The payload is gzip-compressed. */
const FLAG_GZIPPED = 1 << 0;
/** A publisher index byte follows the flags byte. */
const FLAG_HAS_PUBLISHER_INDEX = 1 << 1;

/**
 * Decode a binary WebSocket frame into a topic name and typed payload.
 * Returns null if the frame is malformed or contains an unsupported message type.
 *
 * @param buffer Raw frame bytes.
 */
export function decodeBinaryFrame(buffer: ArrayBuffer): ProtoMessage | null {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 2) return null;

  // 1. Parse header: topic_len (1 byte) + topic_name (topic_len bytes)
  const topicLen = bytes[0];
  const flagsOffset = 1 + topicLen;
  if (bytes.length < flagsOffset + 1) return null;

  const topic = new TextDecoder().decode(bytes.subarray(1, flagsOffset));

  // 2. The flags byte decides the rest of the layout
  const flags = bytes[flagsOffset];
  const hasPublisherIndex = (flags & FLAG_HAS_PUBLISHER_INDEX) !== 0;
  const payloadOffset = flagsOffset + 1 + (hasPublisherIndex ? 1 : 0);
  if (bytes.length < payloadOffset + 1) return null;

  const publisherIndex = hasPublisherIndex ? bytes[flagsOffset + 1] : undefined;
  const isGzipped = (flags & FLAG_GZIPPED) !== 0;
  const rawPayload = bytes.subarray(payloadOffset);

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
