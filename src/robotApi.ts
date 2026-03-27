import { DeviceInfo, CollectedDataItem, CollectedDataFile } from './topicMessages';

/**
 * Virtual interface for publishing notifications.
 * The host application injects a concrete implementation.
 */
export interface NotificationSink {
  showNotification(notification: {
    title?: string;
    message: string;
    type?: 'warning' | 'danger' | 'success';
    dismissible?: boolean;
  }): void;
}

/**
 * Configuration for RobotApi. Injected by the host application.
 */
export interface RobotApiConfig {
  /** Returns the base URL prefix for all API calls, e.g. "/robot_api/v1/{SN}" */
  getApiBase(): string;
  /** Notification sink for error display. If not provided, errors are only logged to console. */
  notification?: NotificationSink;
}

/**
 * Custom error class that includes HTTP status code
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class RobotApi {
  private config: RobotApiConfig | undefined;

  /**
   * Initialize the RobotApi with configuration.
   * Must be called before making any API calls.
   */
  init(config: RobotApiConfig): void {
    this.config = config;
  }

  private getConfig(): RobotApiConfig {
    if (!this.config) {
      throw new Error('RobotApi not initialized. Call init() first.');
    }
    return this.config;
  }

  private async doRequest(
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'GET',
    url: string,
    data: any,
    signal?: AbortSignal,
  ): Promise<Response> {
    const base = this.getConfig().getApiBase();
    if (method === 'GET' || method === 'DELETE') {
      return fetch(`${base}/${url}`, {
        method,
        credentials: 'include', // Include cookies in requests
        signal,
      });
    } else {
      return fetch(`${base}/${url}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies in requests
        body: JSON.stringify(data),
        signal,
      });
    }
  }

  protected async patchImpl(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    return this.doRequest('PATCH', url, data, signal);
  }

  protected async putImpl(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    return this.doRequest('PUT', url, data, signal);
  }

  protected async postImpl(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    return this.doRequest('POST', url, data, signal);
  }

  protected async deleteImpl(url: string, signal?: AbortSignal): Promise<Response> {
    return this.doRequest('DELETE', url, null, signal);
  }

  protected async getImpl(url: string, signal?: AbortSignal): Promise<Response> {
    return this.doRequest('GET', url, null, signal);
  }

  /**
   * Extract error message from a Response object.
   */
  private async extractErrorMessage(res: Response): Promise<string> {
    let detail = `${res.status} ${res.statusText}`;
    try {
      const text = await res.text();
      if (text) {
        try {
          const json = JSON.parse(text);
          if (json.detail) {
            detail = typeof json.detail === 'string' ? json.detail : JSON.stringify(json.detail);
          } else if (json.message) {
            detail = json.message;
          } else {
            detail = text;
          }
        } catch {
          detail = text;
        }
      }
    } catch {
      // Ignore read errors
    }
    return detail;
  }

  /**
   * Perform a PATCH request. Throws an Error if the response is not ok.
   */
  async patch(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    const res = await this.patchImpl(url, data, signal);
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new Error(detail);
    }
    return res;
  }

  /**
   * Perform a PUT request. Throws an Error if the response is not ok.
   */
  async put(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    const res = await this.putImpl(url, data, signal);
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new Error(detail);
    }
    return res;
  }

  /**
   * Perform a POST request. Throws an Error if the response is not ok.
   */
  async post(url: string, data: any, signal?: AbortSignal): Promise<Response> {
    const res = await this.postImpl(url, data, signal);
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new Error(detail);
    }
    return res;
  }

  /**
   * Perform a DELETE request. Throws an Error if the response is not ok.
   */
  async delete(url: string, signal?: AbortSignal): Promise<Response> {
    const res = await this.deleteImpl(url, signal);
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new Error(detail);
    }
    return res;
  }

  /**
   * Perform a GET request. Throws an Error if the response is not ok.
   */
  async get(url: string, signal?: AbortSignal): Promise<Response> {
    const res = await this.getImpl(url, signal);
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new ApiError(detail, res.status);
    }
    return res;
  }

  async showError(title: string, message: string, res: Response | any) {
    if (res instanceof Error && res.name === 'AbortError') {
      return;
    }
    if (res instanceof DOMException && res.name === 'AbortError') {
      return;
    }

    if (res instanceof Response) {
      let detail = `${res.status} ${res.statusText}`;
      // Try to extract error detail from response body
      try {
        const text = await res.text();
        if (text) {
          // Try to parse as JSON first
          try {
            const json = JSON.parse(text);
            if (json.detail) {
              detail = typeof json.detail === 'string' ? json.detail : JSON.stringify(json.detail);
            } else if (json.message) {
              detail = json.message;
            } else {
              detail = text;
            }
          } catch {
            // Not JSON, use text directly
            detail = text;
          }
        }
      } catch {
        // Ignore read errors
      }
      message = message + detail;
    } else if (res?.message) {
      message = message + res.message;
    } else if (res) {
      message = message + String(res);
    }

    console.error(message);
    this.config?.notification?.showNotification({
      title,
      message: message,
      type: 'danger',
      dismissible: true,
    });
  }

  /**
   * Set the robot pose on the server. x,y in meters and theta in radians.
   */
  async setPose(x: number, y: number, theta: number): Promise<boolean> {
    const pose = { position: [x, y], ori: theta };
    return this.apiCall(() => this.postImpl('chassis/pose', pose), 'Set Pose', false);
  }

  /**
   * Change the current map on the robot and reset pose to a safe default.
   * Mirrors the `robot.changeMap` builtin command behavior.
   */
  async setMap(mapId?: number): Promise<boolean> {
    if (mapId === undefined || mapId === null) {
      await this.showError('Set Map Failed', 'Map ID is required: ', '');
      return false;
    }

    const failTitle = `Failed to change map to ${mapId}`;

    try {
      const res1 = await this.postImpl('chassis/current-map', { map_id: mapId });
      if (!res1.ok) {
        await this.showError(failTitle, '', res1);
        return false;
      }

      const res2 = await this.postImpl('chassis/pose', { position: [0, 0], ori: 1.57 });
      if (!res2.ok) {
        await this.showError('Failed to set default pose', '', res2);
        return false;
      }

      return true;
    } catch (e: any) {
      await this.showError(failTitle, '', e);
      return false;
    }
  }

  async cancelCurrentMove(): Promise<boolean> {
    return this.apiCall(() => this.patchImpl('chassis/moves/current', { state: 'cancelled' }), 'Cancel Move', false);
  }

  async createMove(opts: {
    type?: string;
    target_x?: number;
    target_y?: number;
    target_ori?: number;
    charge_retry_count?: number;
    rack_area_id?: string;
  }): Promise<boolean> {
    const body: Record<string, any> = {
      type: opts.type || 'standard',
    };
    if (opts.target_x !== undefined) body.target_x = opts.target_x;
    if (opts.target_y !== undefined) body.target_y = opts.target_y;
    if (opts.charge_retry_count !== undefined) body.charge_retry_count = opts.charge_retry_count;
    if (opts.target_ori !== undefined) body.target_ori = opts.target_ori;
    if (opts.rack_area_id !== undefined) body.rack_area_id = opts.rack_area_id;
    return this.apiCall(() => this.postImpl('chassis/moves', body), 'Create Move', false);
  }

  protected async apiCall<T>(operation: () => Promise<Response>, errorTitle: string, defaultValue: T): Promise<T> {
    try {
      const res = await operation();
      if (!res.ok) {
        await this.showError(`${errorTitle} Failed`, '', res);
        return defaultValue;
      }
      // If defaultValue is boolean true, return it directly; otherwise parse JSON
      return typeof defaultValue === 'boolean' && defaultValue === false ? (true as T) : await res.json();
    } catch (e: any) {
      await this.showError(`${errorTitle} Error`, '', e);
      return defaultValue;
    }
  }

  async getMoves(): Promise<any[]> {
    return this.apiCall(() => this.getImpl('chassis/moves'), 'Get Moves', []);
  }

  async getMoveById(id: number): Promise<any | null> {
    return this.apiCall(() => this.getImpl(`chassis/moves/${id}`), 'Get Move', null);
  }

  async saveBag(): Promise<any> {
    return this.apiCall(() => this.postImpl('recording/', {}), 'Save Bag', null);
  }

  async startMapping(continueMapping = false): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('mappings/', { continue_mapping: continueMapping }),
      'Start Mapping',
      false,
    );
  }

  async stopMapping(): Promise<boolean> {
    return this.apiCall(() => this.patchImpl('mappings/current', { state: 'finished' }), 'Stop Mapping', false);
  }

  async abortMapping(): Promise<boolean> {
    return this.apiCall(() => this.patchImpl('mappings/current', { state: 'cancelled' }), 'Abort Mapping', false);
  }

  async saveMappingAsMap(mappingId: number, mapName: string): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('maps/', { mapping_id: mappingId, map_name: mapName }),
      'Save Mapping As Map',
      false,
    );
  }

  async deleteMappingTask(mappingId: number): Promise<boolean> {
    return this.apiCall(() => this.deleteImpl(`mappings/${mappingId}`), 'Delete Mapping Task', false);
  }

  async deleteMap(mapId: number): Promise<boolean> {
    return this.apiCall(() => this.deleteImpl(`maps/${mapId}`), 'Delete Map', false);
  }

  async setControlMode(mode: string): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/wheel_control/set_control_mode', { control_mode: mode }),
      'Set Control Mode',
      false,
    );
  }

  async setEmergencyStop(enable: boolean): Promise<boolean> {
    try {
      const res = await this.postImpl('services/wheel_control/set_emergency_stop', { enable });
      if (!res.ok) {
        await this.showError(enable ? 'Emergency Stop Failed' : 'Resume Failed', '', res);
        return false;
      }
      return true;
    } catch (e: any) {
      await this.showError(enable ? 'Emergency Stop Error' : 'Resume Error', '', e);
      return false;
    }
  }

  async wakeDevice(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/wake_up_device', {}), 'Wake', false);
  }

  async jackUp(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/jack_up', {}), 'Jack Up', false);
  }

  async jackDown(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/jack_down', {}), 'Jack Down', false);
  }

  async towingHookLock(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/towing_hook_lock', {}), 'Towing Hook Lock', false);
  }

  async towingHookRelease(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/towing_hook_release', {}), 'Towing Hook Release', false);
  }

  async startCollectingLandmarks(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/start_collecting_landmarks', {}),
      'Start Collecting Landmarks',
      false,
    );
  }

  async stopCollectingLandmarks(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/stop_collecting_landmarks', {}),
      'Stop Collecting Landmarks',
      false,
    );
  }

  async getDeviceInfo(): Promise<DeviceInfo> {
    const res = await this.getImpl('device/info');
    const data = await res.json();
    return data as DeviceInfo;
  }

  async getWifiInfo(): Promise<any> {
    const res = await this.getImpl('device/wifi_info');
    const data = await res.json();
    return data;
  }

  async getCollectedData(): Promise<CollectedDataItem[]> {
    const res = await this.getImpl('collected_data/');
    const data = await res.json();
    return data as CollectedDataItem[];
  }

  async getCollectedDataFile(filename: string): Promise<CollectedDataFile | null> {
    try {
      const res = await this.getImpl(`collected_data/${filename}`);
      const data = await res.json();
      return data as CollectedDataFile;
    } catch (e: any) {
      console.error(`Failed to get collected data file ${filename}:`, e);
      return null;
    }
  }

  async removeCollectedData(filename?: string): Promise<boolean> {
    const endpoint = filename ? `collected_data/${filename}` : 'collected_data/';
    return this.apiCall(() => this.deleteImpl(endpoint), 'Delete Collected Data', false);
  }

  async calibrateImuBias(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/imu/recalibrate', {}), 'IMU Bias Calibration', false);
  }

  async probeV2xBeacons(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/probe_v2x_beacons', {}), 'Probe V2X Beacons', false);
  }

  async calibrateGyroScale(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/imu/calibrate_gyro_scale', {}), 'Gyroscope Calibration', false);
  }

  async calibrateDepthCameras(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/calibrate_depth_cameras', {}), 'Depth Camera Calibration', false);
  }

  async calibrateDepthCameraMasks(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/calibrate_depth_camera_masks', {}),
      'Depth Camera Mask Calibration',
      false,
    );
  }

  async calibrateLidarYaws(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/calibrate_lidar_yaws', {}), 'Lidar Yaw Calibration', false);
  }

  async calibrateDuoLidarPoses(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/calibrate_duo_lidar_poses', {}),
      'Duo Lidar Poses Calibration',
      false,
    );
  }

  async calibrateForkliftBackwardCameras(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/calibrate_forklift_backward_camera', {}),
      'Forklift Backward Depth Camera Calibration',
      false,
    );
  }

  async calibrateForkliftLidarPoses(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/calibrate_forklift_lidar_poses', {}),
      'Forklift Lidar Calibration',
      false,
    );
  }

  /**
   * Delete a specific bag file or all bags.
   * @param filename - The bag filename to delete. If empty, deletes all bags.
   */
  async removeBag(filename?: string): Promise<boolean> {
    const endpoint = filename ? `bags/${filename}` : 'bags/';
    return this.apiCall(() => this.deleteImpl(endpoint), 'Delete Bag', false);
  }

  /**
   * Delete a specific recording (alert-triggered bag) or all recordings.
   * @param filename - The recording filename to delete. If empty, deletes all recordings.
   */
  async removeRecording(filename?: string): Promise<boolean> {
    const endpoint = filename ? `recording/${filename}` : 'recording/';
    return this.apiCall(() => this.deleteImpl(endpoint), 'Delete Recording', false);
  }

  /**
   * Delete a specific core dump or all core dumps.
   * @param filename - The core dump filename to delete. If empty, deletes all core dumps.
   */
  async removeCoreDump(filename?: string): Promise<boolean> {
    const endpoint = filename ? `core_dumps/${filename}` : 'core_dumps/';
    return this.apiCall(() => this.deleteImpl(endpoint), 'Delete Core Dump', false);
  }

  /**
   * Delete a specific video file or all videos.
   * @param filename - The video filename to delete. If empty, deletes all videos.
   */
  async removeVideo(filename?: string): Promise<boolean> {
    const endpoint = filename ? `videos/${filename}` : 'videos/';
    return this.apiCall(() => this.deleteImpl(endpoint), 'Delete Video', false);
  }

  /**
   * Shutdown or reboot the device.
   * @param target - 'main_computing_unit' for main board only, 'main_power_supply' for whole device
   * @param reboot - true to reboot, false to shutdown
   */
  async shutdownDevice(target: 'main_computing_unit' | 'main_power_supply', reboot: boolean): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/baseboard/shutdown', { target, reboot }),
      'Shutdown/Reboot',
      false,
    );
  }

  /**
   * Restart the main robot service.
   */
  async restartAxbot(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/restart_service', {}), 'Restart axbot', false);
  }

  /**
   * Restart the py_axbot service.
   */
  async restartPyAxbot(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/restart_py_axbot', {}), 'Restart py_axbot', false);
  }

  /**
   * Start global positioning to find the pose of the robot globally with current sensor data.
   */
  async startGlobalPositioning(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/start_global_positioning', {}), 'Global Positioning', false);
  }

  /**
   * Clear wheel errors.
   */
  async clearWheelErrors(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/wheel_control/clear_errors', {}), 'Clear Wheel Errors', false);
  }

  /**
   * Clear shutdown error.
   */
  async clearShutdownError(): Promise<boolean> {
    return this.apiCall(
      () => this.postImpl('services/clear_system_down_unexpectedly', {}),
      'Clear Shutdown Error',
      false,
    );
  }

  /**
   * Clear slipping error.
   */
  async clearSlippingError(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/clear_slipping_error', {}), 'Clear Slipping Error', false);
  }

  /**
   * Soft reset wheels.
   */
  async resetWheels(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/wheel_control/reset_wheels', {}), 'Reset Wheels', false);
  }

  /**
   * Confirm emergency stop on slope.
   */
  async confirmEstop(): Promise<boolean> {
    return this.apiCall(() => this.postImpl('services/confirm_estop', {}), 'Confirm E-Stop', false);
  }

  /**
   * Get the settings schema from the robot.
   */
  async getSettingsSchema(): Promise<Response> {
    return this.getImpl('system/settings/schema');
  }

  /**
   * Get the effective (currently active) settings from the robot.
   */
  async getEffectiveSettings(): Promise<Response> {
    return this.getImpl('system/settings/effective');
  }

  /**
   * Patch user settings on the robot.
   */
  async patchUserSettings(changes: Record<string, any>): Promise<Response> {
    return this.patchImpl('system/settings/user', changes);
  }

  /**
   * Reset the costmap on the robot.
   */
  async resetCostmap(): Promise<Response> {
    return this.postImpl('services/occupancy_grid_server/reset', {});
  }

  /**
   * Get device params (prod or dev) as YAML text.
   */
  async getDeviceParams(type: 'prod' | 'dev'): Promise<string> {
    const res = await this.get(`device/params/${type}`);
    return res.text();
  }

  /**
   * Update device params (prod or dev) with YAML content.
   */
  async updateDeviceParams(type: 'prod' | 'dev', yamlContent: string): Promise<Response> {
    const base = this.getConfig().getApiBase();
    const res = await fetch(`${base}/device/params/${type}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'text/yaml' },
      credentials: 'include',
      body: yamlContent,
    });
    if (!res.ok) {
      const detail = await this.extractErrorMessage(res);
      throw new Error(detail);
    }
    return res;
  }

  // ========== Bag Player API ==========

  /**
   * Get bag player metadata (total messages, start/end time).
   * @param filename The bag filename
   * @param prefix The API prefix (bags or recording)
   * @param signal Optional abort signal
   * @returns Metadata about the bag file
   */
  async getBagPlayerMetadata(
    filename: string,
    prefix: BagPlayerPrefix = 'bags',
    signal?: AbortSignal,
  ): Promise<BagPlayerMetadata> {
    const res = await this.get(`${prefix}/${encodeURIComponent(filename)}/player`, signal);
    return res.json();
  }

  /**
   * Get a chunk of bag messages within a time range.
   * @param filename The bag filename
   * @param startTime Start timestamp (seconds)
   * @param endTime End timestamp (seconds)
   * @param prefix The API prefix (bags or recording)
   * @param signal Optional abort signal
   * @returns Chunk response with messages
   */
  async getBagPlayerChunk(
    filename: string,
    startTime: number,
    endTime: number,
    prefix: BagPlayerPrefix = 'bags',
    signal?: AbortSignal,
  ): Promise<BagPlayerChunkResponse> {
    const params = new URLSearchParams({
      start_time: startTime.toString(),
      end_time: endTime.toString(),
    });
    const res = await this.get(`${prefix}/${encodeURIComponent(filename)}/player?${params}`, signal);
    return res.json();
  }

  /**
   * Get a stream of bag messages within a time range.
   * Unlike getBagPlayerChunk, this returns the raw Response for streaming.
   */
  async getBagPlayerChunkStream(
    filename: string,
    startTime: number,
    endTime: number,
    prefix: BagPlayerPrefix = 'bags',
    signal?: AbortSignal,
  ): Promise<Response> {
    const params = new URLSearchParams({
      start_time: startTime.toString(),
      end_time: endTime.toString(),
    });
    return this.get(`${prefix}/${encodeURIComponent(filename)}/player?${params}`, signal);
  }
}

// ========== Bag Player Types ==========

/**
 * Prefix for the bag player API.
 */
export type BagPlayerPrefix = 'bags' | 'recording';

/**
 * Bag player metadata response.
 */
export interface BagPlayerMetadata {
  total_messages: number;
  start_time: number;
  end_time: number;
}

/**
 * Bag player chunk response with messages.
 */
export interface BagPlayerChunkResponse {
  total_messages: number;
  start_time: number;
  end_time: number;
  messages: BagPlayerMessage[];
}

/**
 * A single message from a bag file.
 */
export interface BagPlayerMessage {
  topic: string;
  __stamp: number;
  [key: string]: unknown;
}

/**
 * Singleton RobotApi instance.
 * Call `robotApi.init(config)` once at app startup to configure it.
 */
export const robotApi = new RobotApi();
