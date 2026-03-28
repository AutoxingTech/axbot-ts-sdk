import { SemanticPointsMsg, PointField, PointCloudMsg } from './topicMessages.js';
import { ros_messages } from './proto/generated.js';
import { PointCloudPbMsg } from './pbMessages.js';

/**
 * High-performance PointCloud transport layout directly consumable by WebGL/three.js.
 */
export interface PointCloudBuffer {
  /** Optional topic name this cloud originated from */
  topic?: string;

  /** [x,y,z, x,y,z ... ], length = count * 3 */
  positions: Float32Array;

  /** Total number of points */
  count: number;

  /** Optional intensities [0-255, 0-255 ... ], length = count */
  intensities?: Uint8Array;
}

const POINT_CLOUD_PROBABILITY_THRESHOLD = 0.6;

export interface ParsedSemanticPoint {
  x: number;
  y: number;
  z: number;
  probability: number;
  ori: number;
  speed: number;
  intensity: number;
}

export interface ParsedSemanticPoints {
  allPoints: ParsedSemanticPoint[];
  staticPoints: ParsedSemanticPoint[];
  dynamicPoints: ParsedSemanticPoint[];
}

function getFieldIndexInData(fields: PointField[], name: string): number {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].name.toLowerCase() === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

export function parseSemanticPoints(msg: SemanticPointsMsg): ParsedSemanticPoints {
  const fields = msg.fields;
  const xIdx = getFieldIndexInData(fields, 'x');
  const yIdx = getFieldIndexInData(fields, 'y');
  const zIdx = getFieldIndexInData(fields, 'z');
  const probabilityIdx = getFieldIndexInData(fields, 'probability');
  const oriIdx = getFieldIndexInData(fields, 'ori');
  const speedIdx = getFieldIndexInData(fields, 'speed');
  const intensityIdx = getFieldIndexInData(fields, 'intensity');

  if (xIdx === -1 || yIdx === -1 || zIdx === -1) {
    return { allPoints: [], staticPoints: [], dynamicPoints: [] };
  }

  const binaryString = atob(msg.data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const dataView = new DataView(bytes.buffer);

  let bytesPerPoint = 0;
  for (const field of fields) {
    switch (field.data_type) {
      case 'f32': case 'i32': case 'u32': bytesPerPoint += 4; break;
      case 'f64': bytesPerPoint += 8; break;
      case 'i16': case 'u16': bytesPerPoint += 2; break;
      case 'i8': case 'u8': bytesPerPoint += 1; break;
    }
  }

  const allPoints: ParsedSemanticPoint[] = [];
  const staticPoints: ParsedSemanticPoint[] = [];
  const dynamicPoints: ParsedSemanticPoint[] = [];

  let offset = 0;
  while (offset + bytesPerPoint <= bytes.byteLength) {
    const rawValues: number[] = [];
    let fieldOffset = offset;
    for (const field of fields) {
      let value = 0;
      switch (field.data_type) {
        case 'f32': value = dataView.getFloat32(fieldOffset, true); fieldOffset += 4; break;
        case 'f64': value = dataView.getFloat64(fieldOffset, true); fieldOffset += 8; break;
        case 'i32': value = dataView.getInt32(fieldOffset, true); fieldOffset += 4; break;
        case 'u32': value = dataView.getUint32(fieldOffset, true); fieldOffset += 4; break;
        case 'i16': value = dataView.getInt16(fieldOffset, true); fieldOffset += 2; break;
        case 'u16': value = dataView.getUint16(fieldOffset, true); fieldOffset += 2; break;
        case 'i8': value = dataView.getInt8(fieldOffset); fieldOffset += 1; break;
        case 'u8': value = dataView.getUint8(fieldOffset); fieldOffset += 1; break;
      }
      rawValues.push(value);
    }

    const point: ParsedSemanticPoint = {
      x: rawValues[xIdx],
      y: rawValues[yIdx],
      z: rawValues[zIdx],
      probability: probabilityIdx >= 0 ? rawValues[probabilityIdx] / 255 : 1.0,
      ori: oriIdx >= 0 ? (rawValues[oriIdx] / 255) * Math.PI * 2 : 0,
      speed: speedIdx >= 0 ? rawValues[speedIdx] / 100 : 0,
      intensity: intensityIdx >= 0 ? rawValues[intensityIdx] / 255 : 0,
    };

    allPoints.push(point);
    if (point.probability <= POINT_CLOUD_PROBABILITY_THRESHOLD) {
      dynamicPoints.push(point);
    } else {
      staticPoints.push(point);
    }
    offset += bytesPerPoint;
  }

  return { allPoints, staticPoints, dynamicPoints };
}

function _protobufPointCloudToBufferMsg(pc: ros_messages.IPointCloud, topic?: string): PointCloudBuffer {
  const cx = pc.centerX ?? 0;
  const cy = pc.centerY ?? 0;
  const cz = pc.centerZ ?? 0;
  const res = pc.resolution ?? 1;
  const xs = pc.xs ?? [];
  const ys = pc.ys ?? [];
  const zs = pc.zs ?? [];
  const rawIntensities = pc.intensities ?? new Uint8Array();
  const isDeltaEncoded = pc.isDeltaEncoded ?? false;
  const count = xs.length;

  const positions = new Float32Array(count * 3);
  const intensities = new Uint8Array(count);

  if (isDeltaEncoded) {
    let prevX = 0;
    let prevY = 0;
    let prevZ = 0;
    for (let i = 0; i < count; i++) {
      prevX += xs[i];
      prevY += ys[i];
      if (zs.length > i) prevZ += zs[i];

      positions[i * 3] = cx + prevX * res;
      positions[i * 3 + 1] = cy + prevY * res;
      positions[i * 3 + 2] = zs.length > i ? cz + prevZ * res : 0;
      intensities[i] = rawIntensities.length > i ? rawIntensities[i] : 0;
    }
  } else {
    for (let i = 0; i < count; i++) {
      positions[i * 3] = cx + xs[i] * res;
      positions[i * 3 + 1] = cy + ys[i] * res;
      positions[i * 3 + 2] = zs.length > i ? cz + zs[i] * res : 0;
      intensities[i] = rawIntensities.length > i ? rawIntensities[i] : 0;
    }
  }

  return { topic, positions, count, intensities };
}


export function pointCloudMsgToBufferMsg(msg: SemanticPointsMsg | PointCloudMsg | PointCloudPbMsg): PointCloudBuffer {
  if ('pb' in msg && typeof msg.pb === 'object') {
    return _protobufPointCloudToBufferMsg((msg as PointCloudPbMsg).pb, msg.topic);
  }

  if (typeof (msg as SemanticPointsMsg).data === 'string' && Array.isArray((msg as SemanticPointsMsg).fields)) {
    const parsed = parseSemanticPoints(msg as SemanticPointsMsg);
    const count = parsed.allPoints.length;
    const buf = new Float32Array(count * 3);
    const intensities = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      const p = parsed.allPoints[i];
      buf[i * 3] = p.x;
      buf[i * 3 + 1] = p.y;
      buf[i * 3 + 2] = p.z;
      intensities[i] = Math.round(p.intensity * 255);
    }
    return { topic: msg.topic, positions: buf, count, intensities };
  }

  const pcMsg = msg as PointCloudMsg;
  const count = pcMsg.points.length;
  const buf = new Float32Array(count * 3);
  const intensities = new Uint8Array(count);
  for (let i = 0; i < count; i++) {
    const p = pcMsg.points[i];
    buf[i * 3] = p[0];
    buf[i * 3 + 1] = p[1];
    buf[i * 3 + 2] = p[2] ?? 0;
    intensities[i] = p[3] ?? 0;
  }
  return { topic: msg.topic, positions: buf, count, intensities };
}

