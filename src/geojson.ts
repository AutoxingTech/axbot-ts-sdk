// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

export interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export interface LineStringGeometry {
  type: 'LineString';
  coordinates: [number, number][];
}

export interface PolygonGeometry {
  type: 'Polygon';
  coordinates: [number, number][][];
}

export interface Feature {
  id: string;
  type: 'Feature';
  properties: {
    name?: string;
    desc?: string;
    type?: string;
    lineType?: string;
    regionType?: string;
    yaw: number;
    // Rack zone properties
    rackLevels?: Array<{ id: number; height: number }>;
    // Rack point properties
    ref?: string;
    enabledLevels?: number[];
    // Barcode properties
    barcodeId?: string;
    // Landmark properties
    landmarkId?: string;
  };
  geometry: PointGeometry | LineStringGeometry | PolygonGeometry;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
  properties?: {
    defaultRackWidth?: number;
    defaultRackDepth?: number;
    defaultPalletWidth?: number;
    defaultPalletDepth?: number;
  };
}
