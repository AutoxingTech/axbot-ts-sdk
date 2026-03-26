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
    type?: string;
    lineType?: string;
    regionType?: string;
    yaw: number;
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
