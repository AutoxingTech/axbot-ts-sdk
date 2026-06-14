// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * Binary WebSocket frame decoder for ros_message_forward.
 *
 * Wire format (Django → Browser):
 *   [topic_len: 1 byte] [topic_name: topic_len bytes] [gzipped?: 1 byte] [protobuf: remaining]
 *
 * The gzipped protobuf is a RosMessageWrapper containing one of several payload types.
 * Currently supports: POINT_CLOUD → PointCloudBufferMsg conversion.
 */

import { gunzipSync } from 'fflate';
import { ros_messages } from './proto/generated.js';
import { PointCloudPbMsg } from './pbMessages.js';
import { MastStateMsg, MastMotionState, SubmapListMsg, SubmapEntryMsg, MapRackStatesMsg } from './topicMessages.js';

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
  if (wrapper.type === ros_messages.RosMessageWrapper.MessageType.POINT_CLOUD && wrapper.point_cloud) {
    const pbMsg: PointCloudPbMsg = { topic, pb: wrapper.point_cloud };
    return { topic, payload: pbMsg };
  }

  if (wrapper.type === ros_messages.RosMessageWrapper.MessageType.MAST_STATE && wrapper.mast_state) {
    const motionStateNames: MastMotionState[] = ['unknown', 'moving_hold', 'moving_up', 'moving_down'];
    const msg: MastStateMsg = {
      topic,
      target_height: wrapper.mast_state.target_height ?? 0,
      current_height: wrapper.mast_state.current_height ?? 0,
      motion_state: motionStateNames[wrapper.mast_state.motion_state ?? 0] ?? 'unknown',
      error: wrapper.mast_state.error ?? 0,
      error_message: wrapper.mast_state.error_message ?? '',
    };
    return { topic, payload: msg };
  }

  if (wrapper.type === ros_messages.RosMessageWrapper.MessageType.SUBMAP_LIST && wrapper.submap_list) {
    const slamStateNames: SubmapListMsg['slam_state'][] = ['invalid', 'slam', 'positioning'];
    const sl = wrapper.submap_list;
    const submaps: SubmapEntryMsg[] = (sl.submaps ?? []).map((e) => ({
      trajectory_id: e.trajectory_id ?? 0,
      submap_index: e.submap_index ?? 0,
      submap_version: e.submap_version ?? 0,
      pose: e.pose as ros_messages.Pose,
      is_frozen: !!e.is_frozen,
      is_incremental_submap: !!e.is_incremental_submap,
      is_nearby_map: !!e.is_nearby_map,
    }));
    const msg: SubmapListMsg = {
      topic,
      slam_state: slamStateNames[sl.slam_state ?? 0] ?? 'invalid',
      uuid: sl.uuid ?? '',
      submaps,
    };
    return { topic, payload: msg };
  }

  if (wrapper.type === ros_messages.RosMessageWrapper.MessageType.RACK_STATES && wrapper.rack_states) {
    const spaceStateNames: Record<number, 'unknown' | 'occupied' | 'free'> = {
      0: 'unknown',
      3: 'occupied',
      4: 'free',
    };
    const rs = wrapper.rack_states;
    const racks = (rs.racks ?? []).map((r) => ({
      poi_id: r.poi_id ?? '',
      levels: (r.levels ?? []).map((l) => {
        let ts: string | number = 0;
        if (l.timestamp_ns !== undefined && l.timestamp_ns !== null) {
          ts = typeof l.timestamp_ns === 'object' ? l.timestamp_ns.toString() : l.timestamp_ns;
        }
        return {
          timestamp_ns: ts,
          level: l.level ?? 0,
          state: spaceStateNames[l.state ?? 0] ?? 'unknown',
        };
      }),
    }));
    const msg: MapRackStatesMsg = {
      topic,
      map_uid: rs.map_uid ?? '',
      racks,
    };
    return { topic, payload: msg };
  }

  console.warn('binaryMessageDecoder: unsupported message type', wrapper.type, 'for', topic);
  return null;
}
