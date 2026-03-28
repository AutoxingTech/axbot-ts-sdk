import { Feature, LineStringGeometry, PointGeometry, PolygonGeometry } from './geojson';
import { MapInfoMsg } from './topicMessages';
import { pointInPolygon } from './utils';

// Minimal Pose type used by map features
export interface Pose2 {
  pos: { x: number; y: number };
  ori: number;
}

export enum MapFeatureType {
  unknown,
  point,
  polyline,
  polygon,
}

export interface MapFeatureProperties {
  defaultRackWidth?: number;
  defaultRackDepth?: number;
  defaultPalletWidth?: number;
  defaultPalletDepth?: number;
}

export class MapFeature {
  rawProperties?: Record<string, unknown>;
  constructor(
    public featureType: MapFeatureType,
    public id: string,
  ) {}

  /**
   * Create a MapPoint from a poi:// URL (e.g., "poi://1.234,5.678")
   * Returns null if the URL format is invalid
   */
  static createWithUrl(url: string, name: string): MapPoint | null {
    if (!url.startsWith('poi://')) {
      return null;
    }

    const coordsStr = url.substring(6); // Remove "poi://" prefix
    const parts = coordsStr.split(',');
    if (parts.length !== 2) {
      return null;
    }

    const x = parseFloat(parts[0]);
    const y = parseFloat(parts[1]);
    if (isNaN(x) || isNaN(y)) {
      return null;
    }

    const point = new MapPoint(MapPointType.otherCatering, name, url, x, y, 0);
    point.rawProperties = {};
    return point;
  }
}

export enum MapPointType {
  none = 0,

  // 通用类型
  otherCatering = 3, // 其它
  elevator = 6, // 电梯
  autoGate = 7, // 闸机
  autoDoor = 8, // 自动门
  chargingPile = 9, // 充电桩
  standbyPoint = 10, // 待命点
  tableNumber = 11, // 桌号
  reception = 19, // 前台
  exchangePoint = 27, // 交换点
  waitForElevatorPoint = 28, // 候梯点
  dispatchPoint = 29, // 调度点
  distributionStation = 30, // 配送站点
  rackPoint = 34, // 货架点
  dockingPoint = 36, // 对接点
  barcode = 37, // 反光板，用于辅助定位
  landmark = 39, // 地标，用于辅助定位

  // 酒店
  lobby = 16, // 大堂
  roomNumber = 21, // 房间号
  cabinet = 23, // 货柜点

  // 写字楼
  fastfood = 1, // 快餐
  beverageStore = 2, // 饮品店
  company = 4, // 公司
  residence = 5, // 住宅
  restaurant = 17, // 餐饮，餐厅
  store = 18, // 商店
  houseNumber = 20, // 门牌号
  servicePositionNumber = 22, // 工位号

  // 工厂
  pickUpMaterialPoint = 31, // 取料点
  sendMaterialPoint = 32, // 送料点
  reclaimPoint = 33, // 回收点

  // 消杀
  waypoint = 25, // 途经点
  disinfectPoint = 26, // 消杀点

  // 餐厅
  privateRoom = 12, // 包间
  barCounter = 13, // 吧台
  packingArea = 14, // 打包区
  outlet = 15, // 出餐口
}

export const POI_CATEGORIES: { key: string; types: MapPointType[]; color?: string }[] = [
  {
    key: 'charger',
    types: [MapPointType.chargingPile],
    color: '#339900',
  },
  {
    key: 'elevator',
    types: [MapPointType.elevator, MapPointType.waitForElevatorPoint],
    color: '#8e44ad',
  },
  {
    key: 'general',
    types: [MapPointType.standbyPoint, MapPointType.exchangePoint, MapPointType.tableNumber],
    color: '#3b82f6',
  },
  {
    key: 'hotel',
    types: [MapPointType.reception, MapPointType.lobby, MapPointType.roomNumber],
    color: '#f39c12',
  },
  {
    key: 'factory',
    types: [MapPointType.pickUpMaterialPoint, MapPointType.sendMaterialPoint, MapPointType.reclaimPoint],
    color: '#16a085',
  },
  {
    key: 'restaurant',
    types: [MapPointType.privateRoom, MapPointType.barCounter, MapPointType.packingArea, MapPointType.outlet],
    color: '#e74c3c',
  },
  {
    key: 'office',
    types: [
      MapPointType.fastfood,
      MapPointType.beverageStore,
      MapPointType.company,
      MapPointType.residence,
      MapPointType.restaurant,
      MapPointType.store,
      MapPointType.houseNumber,
      MapPointType.servicePositionNumber,
    ],
    color: '#34495e',
  },
  {
    key: 'sanitation',
    types: [MapPointType.disinfectPoint],
    color: '#27ae60',
  },
];

export class MapPoint extends MapFeature {
  pose: Pose2;
  barcodeId?: string; // barcode type only
  landmarkId?: string; // landmark type only
  rackZoneName?: string; // rack point associated rack zone name
  rackZoneId?: string; // rack point associated rack zone id

  constructor(
    public type: MapPointType,
    public name: string,
    public id: string,
    x: number,
    y: number,
    ori: number,
  ) {
    super(MapFeatureType.point, id);
    this.pose = { pos: { x, y }, ori };
  }
}

export enum MapPolylineType {
  none = 0,
  virtualTrack = 1, // 虚拟轨道
  virtualWall = 2, // 虚拟墙
  guideLine = 3, // 导向线
  patrolPath = 4, // 货架区域内巡检路线
}

export enum MapPolygonType {
  none = 0,
  noPassingZone = 1, // 禁行区域
  slowMovingZone = 2, // 缓行区域
  elevatorZone = 3, // 电梯区域
  autoGateZone = 4, // 闸机区域
  autoDoorZone = 5, // 自动门区域
  dropRiskZone = 6, // 跌落风险区域
  slopeZone = 7, // 坡度区域
  laserRestrictedZone = 8, // 激光禁区
  narrowZone = 9, // 狭窄区域
  exclusiveZone = 10, // 独享区域
  restaurantZone = 11, // 餐厅区域
  passableZone = 12, // 可通行区域
  chargingZone = 13, // 充电区域
  longTunnelExitZone = 14, // 长隧道出口区域
  depthRestrictedZone = 15, // 深度障碍区域
  alongCentralLineZone = 16, // 道路严格居中行驶区域
  rackZone = 17, // 货架区域
}

export class MapPolygon extends MapFeature {
  constructor(
    public type: MapPolygonType,
    public name: string,
    public id: string,
    public coordinates: [number, number][][],
  ) {
    super(MapFeatureType.polygon, id);
  }
}

export class RackZonePolygon extends MapPolygon {
  constructor(
    public name: string,
    public id: string,
    public coordinates: [number, number][][],
  ) {
    super(MapPolygonType.rackZone, name, id, coordinates);
  }
}

export class MapPolyline extends MapFeature {
  constructor(
    public type: MapPolylineType,
    public name: string,
    public id: string,
    public coordinates: [number, number][],
  ) {
    super(MapFeatureType.polyline, id);
  }
}

export class MapInfo {
  name!: string; // map name
  uid!: string;

  chargers: MapPoint[] = [];
  features: MapFeature[] = [];
  rackDetectionPoints: MapPoint[] = [];
  rackZones: RackZonePolygon[] = [];
  barcodes: MapPoint[] = [];
  barcodeAssociatedPois: MapPoint[] = [];
  landmarks: MapPoint[] = [];

  properties?: MapFeatureProperties;

  private featureIndex: Map<string, MapFeature> = new Map();

  /**
   * Get a MapFeature by its unique ID
   */
  getFeatureById(id: string): MapFeature | undefined {
    return this.featureIndex.get(id);
  }

  constructor(msg: MapInfoMsg) {
    if (msg != null) {
      this.name = msg.name;
      this.uid = msg.uid;
      if (msg.overlays?.features) {
        for (const feature of msg.overlays.features) {
          if (feature.type === 'Feature') {
            if (feature.geometry.type === 'Point') {
              this.parsePoint(feature);
            } else if (feature.geometry.type === 'Polygon') {
              this.parsePolygon(feature);
            } else if (feature.geometry.type === 'LineString') {
              this.parsePolyline(feature);
            }
          }
        }
        this.associateRackPointAndRackZone();
      }
      if (msg.overlays?.properties) {
        this.properties = msg.overlays.properties;
      }
    }
  }

  private parsePoint(feature: Feature) {
    const geo = feature.geometry as PointGeometry;

    const type = +(feature.properties.type ?? 0);
    const obj = new MapPoint(
      type as MapPointType,
      feature.properties.name || '',
      feature.id,
      geo.coordinates[0],
      geo.coordinates[1],
      (feature.properties.yaw * Math.PI) / 180 || 0,
    );
    obj.rawProperties = feature.properties as Record<string, unknown>;
    this.features.push(obj);
    this.featureIndex.set(obj.id, obj);

    switch (type) {
      case MapPointType.chargingPile:
        this.chargers.push(obj);
        break;
      case MapPointType.rackPoint:
        this.rackDetectionPoints.push(obj);
        break;
      case MapPointType.barcode:
        obj.barcodeId = (feature.properties as any).barcodeId;
        this.barcodes.push(obj);
        break;
      case MapPointType.landmark:
        obj.landmarkId = (feature.properties as any).landmarkId;
        this.landmarks.push(obj);
        break;
    }

    if (type !== MapPointType.barcode && (feature.properties as any).barcodeId) {
      obj.barcodeId = (feature.properties as any).barcodeId;
      this.barcodeAssociatedPois.push(obj);
    }
  }

  private parsePolyline(feature: Feature) {
    const geo = feature.geometry as LineStringGeometry;

    const type = +(feature.properties.lineType ?? 0);
    const obj = new MapPolyline(type as MapPolylineType, feature.properties.name || '', feature.id, geo.coordinates);
    obj.rawProperties = feature.properties as Record<string, unknown>;
    this.features.push(obj);
    this.featureIndex.set(obj.id, obj);
  }

  private parsePolygon(feature: Feature) {
    const geo = feature.geometry as PolygonGeometry;

    const type = +(feature.properties.regionType ?? 0);
    let obj: MapPolygon;
    if ((type as MapPolygonType) === MapPolygonType.rackZone) {
      obj = new RackZonePolygon(feature.properties.name || '', feature.id, geo.coordinates);
      this.rackZones.push(obj as RackZonePolygon);
    } else {
      obj = new MapPolygon(type as MapPolygonType, feature.properties.name || '', feature.id, geo.coordinates);
    }
    obj.rawProperties = feature.properties as Record<string, unknown>;
    this.features.push(obj);
    this.featureIndex.set(obj.id, obj);
  }

  private associateRackPointAndRackZone() {
    let zoneNumber = 1;
    this.rackZones.forEach((rackZone) => {
      this.rackDetectionPoints.forEach((rackPoint) => {
        if (pointInPolygon([rackPoint.pose.pos.x, rackPoint.pose.pos.y], rackZone.coordinates[0])) {
          rackPoint.rackZoneName = `${rackZone.name || 'Rack Zone'} ${zoneNumber}`;
          rackPoint.rackZoneId = rackZone.id;
        }
      });
      zoneNumber += 1;
    });
  }

  /**
   * Find a MapPoint (POI) that matches the given coordinates within a threshold.
   */
  matchPoi(x: number, y: number, threshold: number = 0.1): MapPoint | undefined {
    return this.features.find((f) => {
      if (f instanceof MapPoint) {
        const dx = f.pose.pos.x - x;
        const dy = f.pose.pos.y - y;
        return Math.sqrt(dx * dx + dy * dy) < threshold;
      }
      return false;
    }) as MapPoint | undefined;
  }
}

export default MapInfo;
