export function asyncSleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function base64ToArrayBuffer(base64: string): Uint8Array {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

export class VersionNumber {
  isMaster: boolean;

  major: number = 0;
  minor: number = 0;
  fix: number = 0;
  hotFix: number = 0;

  constructor(str: string) {
    this.isMaster = str === 'master';

    if (str.indexOf('-')) {
      str = str.split('-')[0];
    }
    const pieces = str.split('.');
    this.major = +pieces[0];
    if (pieces.length >= 2) {
      this.minor = +pieces[1];
      if (pieces.length >= 3) {
        this.fix = +pieces[2];
        if (pieces.length >= 4) {
          this.fix = +pieces[3];
        }
      }
    }
  }

  largerOrEqual(r: VersionNumber): boolean {
    if (this.major > r.major) return true;
    else if (this.major < r.major) return false;
    else if (this.minor > r.minor) return true;
    else if (this.minor < r.minor) return false;
    else if (this.fix > r.fix) return true;
    else if (this.fix < r.fix) return false;
    else return this.hotFix >= r.hotFix;
  }
}

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes: number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return bytes.toFixed(dp) + ' ' + units[u];
}

/**
 * Simple point-in-polygon test using ray casting.
 * @param point [x, y] coordinates
 * @param polygon array of [x, y] coordinates forming the polygon
 */
export function pointInPolygon(point: [number, number], polygon: [number, number][]): boolean {
  const x = point[0];
  const y = point[1];
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1];
    const xj = polygon[j][0],
      yj = polygon[j][1];

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.0) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
