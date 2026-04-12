// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

/**
 * @brief 报警码
 * @note
 *  千位及以上部分就是报警部件编号。
 *  百位表示报警等级: 0-4 表示 error, 5-9 表示 warning。
 */
export enum AlertCode {
  /** 无效值 */
  none = 0,

  /** planning 节点未运行 */
  planningNotRunning = 1001,
  /** occupancy_grid_server 节点未运行 */
  planningOccupancyGridServerNotRunning = 1002,
  /** map_server 节点未运行 */
  planningMapServerNotRunning = 1003,
  /** cartographer_occupancy_grid_node 节点未运行 */
  planningCartographerOccupancyGridNodeNotRunning = 1004,
  /** 超过1s没有避障图 /maps/5cm 消息 */
  planningMaps5cmNotSending = 1005,
  /** tracking_ctrl 节点未运行(已弃用) */
  planningTrackingCtrlNotRunning_deprecated = 1006,
  /** 运动过程中卡死 */
  planningStuckInMoving = 1007,
  /** 运动中长时间没有明显缩短距离，可能卡死 */
  planningRemainingDistanceNotReduce = 1008,
  /** 地图信息有错误 */
  planningMapInfoHasError = 1009,
  /** traffic conductor 节点未运行 */
  planningTrafficConductorNotRunning = 1010,
  /** 机器人不在避障图范围内 */
  planningRobotNotInCostmap = 1011,
  /** 检测到前方有跌落风险，定位很可能不正确 */
  planningFallRiskAhead = 1012,
  /** 任务中，但是长时间没有收到定位 */
  planningNoPositionWhenMoving = 1013,
  /** bot_control 节点未运行 */
  planningBotControlNodeNotRunning = 1014,
  /** 运动过程中卡死(已弃用) */
  planningNotMoveInMovingState_deprecated = 1501,

  /** wheel 节点未运行 */
  wheelNotRunning = 2001,
  /** 轮子过载 */
  wheelOverloaded = 2002,
  /** 左轮运行异常 */
  wheelStateLeftNotRunning = 2003,
  /** 右轮运行异常 */
  wheelStateRightNotRunning = 2004,
  /** wheel_state 消息频率异常 */
  wheelStateRateException = 2005,
  /** 轮子驱动器报告的错误 */
  wheelGeneralError = 2006,
  /** 轮子失控报警 */
  wheelFollowError = 2007,
  /** 轮子严重打滑 */
  wheelMajorSlipping = 2008,
  /** 轮控启动错误 */
  wheelStartupError = 2009,
  /** 云杉叉车轮子驱动器找零失败 */
  wheelYunshanFalseZero = 2010,
  /** 转向轮转角错误 */
  wheelSteeringWrongAngle = 2011,
  /** 轮子打滑 */
  wheelSlipping = 2501,
  /** 急停被按下，但是没有松轮 */
  wheelLockedEvenInEstop = 2502,

  /** odom 节点未运行 */
  odomNotRunning = 3001,
  /** odom 消息频率异常 */
  odomRateException = 3002,

  /** imu 节点未运行 */
  imuNotRunning = 4001,
  /** imu 消息频率异常 */
  imuRateException = 4002,
  /** imu 角速度异常(已弃用) */
  imuAngularVelocityException_deprecated = 4003,
  /** 竖直角度异常,可能侧翻 */
  imuVerticalException = 4004,
  /** imu 原地抖动 */
  imuTwitch = 4005,
  /** imu 原地自旋 */
  imuRotate = 4006,
  /** imu 重连接 */
  imuReconnect = 4007,
  /** 倾斜角度极大，大概率已经摔倒 */
  imuTiltAngleExtremelyLarge = 4008,
  /** IMU 数据读取异常 */
  imuDataError = 4009,
  /** IMU 温度异常 */
  imuTemperatureAbnormal = 4010,
  /** IMU 温度波动过大 */
  imuTemperatureFluctuation = 4011,
  /** IMU 有野值 */
  imuGyroscopeFoundSpikeValue = 4012,
  /** IMU 读取数据异常 */
  imuReadDataError = 4013,
  /** imu 未校准 */
  imuHasNoCalibrationFile = 4501,
  /** imu scale 未校准 */
  imuGyroscopeScaleNotCalibrated = 4502,

  /** lidar 超过 1s 没有数据 */
  lidarNoMessage = 5001,
  /** lidar 消息频率异常(已弃用) */
  lidarRateException_deprecated = 5002,
  /** lidar 扫描频率(转速)异常 */
  lidarScanRateException = 5003,
  /** lidar_perception_node 节点未运行 */
  lidarPerceptionNodeNotRunning = 5004,
  /** 向激光雷达发送指令异常 */
  lidarIrresponsiveToCommand = 5005,
  /** lidar 节点未运行 */
  lidarNodeNotRunning = 5006,
  /** lidar 点云为空数据 */
  lidarAllPointsRangesAreZero = 5007,
  /** lidar 检测到异物遮挡 */
  lidarBeamsBlocked = 5008,
  /** lidar 被货架或货物遮挡或干扰 */
  lidarBlockedByRackOrLoad = 5009,
  /** lidar 扫描频率短暂异常(已弃用) */
  lidarScanRateExceptionMomentarily_deprecated = 5501,
  /** 多激光雷达, 没有校准 */
  lidarHasNoCalibrationFile = 5502,

  /** 存储空间严重不足 */
  systemStorageFreeSpaceVeryLow = 6001,
  /** 1分钟内负载(load average)非常高 */
  systemLoadAverageVeryHigh = 6002,
  /** 10s内CPU平均使用率大于90% */
  systemCpuUsageVeryHigh = 6003,
  /** 核心温度高于阈值 */
  systemKernelTemperatureHigh = 6004,
  /** 内存占用严重超过阈值 */
  systemMemUsageVeryHigh = 6005,
  /** eMMC的磨损非常严重 */
  systemEmmcLifeTimeInGraveDanger = 6006,
  /** 与头壳之间的网络中断 */
  systemNetworkConnectionWithDevicesBroken = 6007,
  /** 重要系统文件配置错误 */
  systemCriticalSystemConfigsError = 6008,
  /** 磁盘写入量过高 */
  systemDiskIoIsHigh = 6009,
  /** 非正常关机 */
  systemDownUnexpected = 6010,
  /** 存储空间不足 */
  systemStorageFreeSpaceLow = 6501,
  /** 1分钟内负载(load average)高 */
  systemLoadAverageHigh = 6502,
  /** 内存占用超过阈值 */
  systemMemUsageHigh = 6503,
  /** 开机启动时间同步失败(已弃用) */
  systemNtpFailed_deprecated = 6504,
  /** 10s内CPU平均使用率大于80% */
  systemCpuUsageHigh = 6505,
  /** 系统时间与互联网时间不一致 */
  systemTimeInconsistentWithNtp = 6506,
  /** 开机启动脚本执行失败 */
  systemStartupFailed = 6507,
  /** eMMC的磨损严重 */
  systemEmmcLifeTimeInDanger = 6508,
  /** 需要重启软件 */
  systemNeedsRestartAxbot = 6509,
  /** 需要重启系统 */
  systemNeedsRestartSystem = 6510,
  /** 缺少 USB 设备列表文件 */
  systemUsbDevicesJsonMissing = 6511,

  /** positioning 节点未运行 */
  positioningCartographerNodeNotRunning = 7001,
  /** 定位质量不可靠 */
  positioningQualityNotReliable = 7002,
  /** /slam/state 消息频率异常 */
  positioningSlamStateRateException = 7003,
  /** 激光雷达判断定位质量不可靠(点云和环境不匹配) */
  positioningQualityNotReliableFromLidar = 7004,
  /** 定位已丢失 */
  positioningQualityLost = 7005,
  /** /devpvt/low_frequency RTK 消息超时未收到 */
  positioningRtkNoData = 7006,
  /** 激光雷达点云和地图不匹配 */
  positioningLidarAndMapMismatch = 7501,

  /** baseboard 节点未运行 */
  baseboardNotRunning = 8001,
  /** battery_state 消息频率异常 */
  baseboardBatteryStateRateException = 8002,
  /** 电量极低 */
  baseboardBatteryVeryLow = 8003,
  /** 电池版故障 */
  baseboardBatteryBoardMalfunction = 8004,
  /** 充电弹片与电池反馈充电状态不一致(已弃用) */
  baseboardBatteryContactTouchedDifferFromChargingState_deprecated = 8005,
  /** 电机电流超过阈值 */
  baseboardMotorCurrentAbnormal = 8006,
  /** USB 设备列表发生变化 */
  baseboardUSBDevicesChanged = 8007,
  /** eth0 连接不稳定 */
  baseboardEth0LinkIsDown = 8008,
  /** 在桩上但是没有充电电流，弹片可能接触不良 */
  baseboardNoCurrentWhenCharging = 8009,
  /** 由 10004 替代(已弃用) */
  baseboardChargeVoltageTooLow_deprecated = 8010,
  /** 电池电芯间的压差巨大 */
  baseboardCellVoltageDifferenceIsTooLarge = 8011,
  /** 电池电流巨大，恐怕烧坏保险 */
  baseboardBatteryCurrentTooLarge = 8012,
  /** 电池电芯电压过低 */
  baseboardBatteryCellVoltageTooLow = 8013,
  /** IO Board 无法打开 */
  baseboardIoBoardNotOpen = 8014,
  /** 电量低 */
  baseboardBatteryLow = 8501,
  /** 碰撞条被挤压 */
  baseboardBumperPressed = 8502,
  /** 电池电芯间的压差过大 */
  baseboardCellVoltageDifferenceIsLarge = 8503,
  /** 叉车收到 touch 信号比电流小于0更慢，充电板可能有故障 */
  baseboardBatteryContactTouchTooLate = 8504,
  /** CAN 帧超时 */
  baseboardCanFrameTimeout = 8015,

  /** 充电桩/电梯门状态识别的 /detectors 节点未运行 */
  otherDetectorsNotRunning = 9001,
  /** bluetooth 节点未运行 */
  otherBluetoothNodeNotRunning = 9002,
  /** 紧急停车按钮已按下(已弃用，用action) */
  otherEmergencyStopPressed_deprecated = 9003,
  /** 切换到手动模式(已弃用，用action) */
  otherManualMode_deprecated = 9004,
  /** 切换到远控模式(已弃用，用action) */
  otherRemoteMode_deprecated = 9005,
  /** /sensor_manager_node 节点未运行 */
  otherSensorManagerNotRunning = 9006,
  /** 底部传感器节点 /bottom_sensor_pack_node 未运行 */
  otherBottomSensorPackNodeNotRunning = 9007,
  /** /ax_platform_monitor 节点未运行 */
  otherMonitorNotRunning = 9008,
  /** /monitor_watcher 节点未运行 */
  otherMonitorWatcherNotRunning = 9009,
  /** 启动参数配置错误 */
  otherStartupParameterError = 9010,
  /** 有程序崩溃 */
  otherProgramCrash = 9011,
  /** 光流频率异常 */
  otherOpticalFlowFrequencyAbnormal = 9012,
  /** heatmap 节点未运行 */
  otherHeatmapNodeNotRunning = 9013,
  /** 蓝牙设备不可用 */
  otherBluetoothDeviceNotFound = 9014,
  /** 货架位置小范围移动 */
  otherRackMovedSlightly = 9015,
  /** 顶升设备错误 */
  otherJackDeviceGeneralError = 9016,
  /** 传感器融合节点 /optical_flow_fusion_node 未运行 */
  otherOpticalFlowFusionNodeNotRunning = 9017,
  /** 货架检测节点 /rack_detector_node 未运行 */
  otherRackDetectorNotRunning = 9018,
  /** ESP-NOW 通讯异常 */
  otherBottomSensorHeartbeatError = 9019,
  /** 手柄范围异常 */
  otherPushHandleHasRangeError = 9020,
  /** 手柄设备丢失 */
  otherPushHandleDeviceNotFound = 9021,
  /** 手柄异常 */
  otherPushHandleGeneralError = 9022,
  /** /sensor_hub_server 节点未运行 */
  otherSensorHubServerNotRunning = 9023,
  /** 调试节点打开 */
  otherDebugNodeIsRunning = 9501,
  /** ax-cache下存在.params.yaml, 该配置文件已弃用 */
  otherAxCacheParamsExists = 9502,
  /** 检测到 ESP-NOW 硬件，但是没有配置使用 */
  otherBtmSensorExistsButNotEnabled = 9503,
  /** bottom sensor 固件版本过低 */
  otherBtmSensorFirmwareVersionTooLow = 9504,

  /** 对桩超过重试次数，未检测到touch信号 */
  chargingChargeRetryCountExceeded = 10001,
  /** 充电底座未识别 */
  chargingChargerDetectionError = 10002,
  /** 对桩超过重试次数，touch后长时间没有收到电流 */
  chargingNoCurrentReceived = 10003,
  /** 充电电流过低，接触不良，或者充电桩发生故障 */
  chargingCurrentTooLow = 10004,

  /** 炬佑节点未运行 */
  cameraDepthOpnNodeNotRunning = 11001,
  /** /depth_camera/forward 消息频率异常(已弃用) */
  cameraForwardDepthMalfunction_deprecated = 11002,
  /** /depth_camera/downward 消息频率异常(已弃用) */
  cameraDownwardDepthMalfunction_deprecated = 11003,
  /** /depth_camera/forward 报告的错误(已弃用) */
  cameraForwardDepthGeneralError_deprecated = 11004,
  /** /depth_camera/downward 报告的错误(已弃用) */
  cameraDownwardDepthGeneralError_deprecated = 11005,
  /** 无法找到深度摄像头硬件(已弃用) */
  cameraDepthDeviceNotFound_deprecated = 11006,
  /** 炬佑深度摄像头上报的错误 */
  cameraDepthOpnGeneralError = 11007,
  /** 无法找到 RGB 摄像头硬件 */
  cameraRgbDeviceNotFound = 11008,
  /** /rgb_camera_node 节点未运行 */
  cameraRgbCameraNodeDead = 11009,
  /** RGB 摄像头其他错误 */
  cameraRgbOtherError = 11010,
  /** 深度相机节点未运行 */
  cameraDepthNodeNotRunning = 11011,
  /** 深度摄像头上报的错误 */
  cameraDepthGeneralError = 11012,
  /** 深度摄像深度值异常，可能有遮挡(reserved) */
  cameraDepthMayBeCovered = 11013,
  /** 深度相机数据不更新 */
  cameraDepthNoData = 11014,
  /** 深度相机没有校正 */
  cameraDepthHasNoCalibrationFile = 11501,

  /** 顶升设备错误(预留, 原9016) */
  jackDeviceGeneralError_deprecated = 12001,
  /** 货架位置小范围移动(预留, 原9015) */
  jackRackMovedSlightly_deprecated = 12002,
  /** 货架检测节点 /rack_detector_node 未运行(预留, 原9018) */
  jackRackDetectorNotRunning_deprecated = 12003,
  /** 顶升设备自检错误 */
  jackDeviceSelfCheckError = 12004,
  /** 货架位置大范围移动 */
  jackRackMovedSignificantly = 12005,
  /** 货架尺寸配置错误 */
  jackRackSizeIsWrong = 12006,
  /** 货架腿附近有噪点 */
  jackRackHasNoise = 12007,

  /** 跟随模块 UWB 设备数据错误 */
  externalFollowUwbDataError = 13001,
  /** 跟随模块 UWB 设备 距离为0*/
  externalFollowUwbZeroDistance = 13002,
  /** 跟随模块 UWB 设备 连接错误*/
  externalFollowUwbConnectionError = 13003,
}
