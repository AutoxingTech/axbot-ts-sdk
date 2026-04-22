CHANGELOG
==========

- 2026-04-22 topicMessages: Add CollectedBarcodeMsg and /collected_barcode emitter
- 2026-04-12 robotApi: Support global throwOnError configuration for exception-based error handling
- 2026-04-12 wsEventEmitter: Add emitters for costmaps, motion metrics, RGB cameras, local path, nearby robots, constraint list
- 2026-04-12 wsMessageStore: Remove stores that don't need caching (point cloud, IMU, costmaps, motion metrics, RGB cameras, local path, nearby robots, constraint list)
- 2026-04-12 robotApi: Add onApiCalled hook and getMaps method
- 2026-04-11 wsMessageStore: Move from site to SDK
- 2026-04-11 wsClient: Initialize WebSocket connection and event emitter utilities
- 2026-04-11 robotApi: Support latest Mapping API features
- 2026-04-11 robotApi: Extract types to robotApiType
- 2026-04-07 robotApi: Improve HTTP error message formatting
- 2026-04-01 map: Show scale indicator.
- 2026-04-01 map: Advanced multi-level grids
- 2026-03-27 objectStore: Add objectStore for device info, some map list, bag list etc.
- 2026-03-27 robotApi: Add RobotApi class for calling REST APIs of the robot
- 2026-03-27 axbot-sdk: Add binary message decoder (binaryMessageDecoder.ts)
- 2026-03-26 axbot-sdk: Add topicMessages, geojson, and utils as sub-path exports (msgs, geojson, utils)
- 2026-03-26 axbot-sdk: Add proto compilation pipeline with protobufjs-cli; add prepublishOnly build step