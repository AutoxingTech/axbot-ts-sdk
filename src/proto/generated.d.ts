import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ros_messages. */
export namespace ros_messages {

    /** Properties of a Header. */
    interface IHeader {

        /** Header seq */
        seq?: (number|null);

        /** Header stamp_sec */
        stamp_sec?: (number|Long|null);

        /** Header stamp_nsec */
        stamp_nsec?: (number|Long|null);

        /** Header frame_id */
        frame_id?: (string|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IHeader);

        /** Header seq. */
        public seq: number;

        /** Header stamp_sec. */
        public stamp_sec: (number|Long);

        /** Header stamp_nsec. */
        public stamp_nsec: (number|Long);

        /** Header frame_id. */
        public frame_id: string;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: ros_messages.IHeader): ros_messages.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link ros_messages.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link ros_messages.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Header
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointCloud. */
    interface IPointCloud {

        /** PointCloud header */
        header?: (ros_messages.IHeader|null);

        /** PointCloud point_number */
        point_number?: (number|null);

        /** PointCloud center_x */
        center_x?: (number|null);

        /** PointCloud center_y */
        center_y?: (number|null);

        /** PointCloud center_z */
        center_z?: (number|null);

        /** PointCloud resolution */
        resolution?: (number|null);

        /** PointCloud xs */
        xs?: (number[]|null);

        /** PointCloud ys */
        ys?: (number[]|null);

        /** PointCloud zs */
        zs?: (number[]|null);

        /** PointCloud intensities */
        intensities?: (Uint8Array|null);

        /** PointCloud is_delta_encoded */
        is_delta_encoded?: (boolean|null);
    }

    /** Represents a PointCloud. */
    class PointCloud implements IPointCloud {

        /**
         * Constructs a new PointCloud.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IPointCloud);

        /** PointCloud header. */
        public header?: (ros_messages.IHeader|null);

        /** PointCloud point_number. */
        public point_number: number;

        /** PointCloud center_x. */
        public center_x: number;

        /** PointCloud center_y. */
        public center_y: number;

        /** PointCloud center_z. */
        public center_z: number;

        /** PointCloud resolution. */
        public resolution: number;

        /** PointCloud xs. */
        public xs: number[];

        /** PointCloud ys. */
        public ys: number[];

        /** PointCloud zs. */
        public zs: number[];

        /** PointCloud intensities. */
        public intensities: Uint8Array;

        /** PointCloud is_delta_encoded. */
        public is_delta_encoded: boolean;

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointCloud instance
         */
        public static create(properties?: ros_messages.IPointCloud): ros_messages.PointCloud;

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link ros_messages.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link ros_messages.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.PointCloud;

        /**
         * Decodes a PointCloud message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.PointCloud;

        /**
         * Verifies a PointCloud message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointCloud message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointCloud
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.PointCloud;

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @param message PointCloud
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.PointCloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointCloud to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointCloud
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MastState. */
    interface IMastState {

        /** MastState target_height */
        target_height?: (number|null);

        /** MastState current_height */
        current_height?: (number|null);

        /** MastState motion_state */
        motion_state?: (ros_messages.MastState.MotionState|null);

        /** MastState error */
        error?: (number|null);

        /** MastState error_message */
        error_message?: (string|null);
    }

    /** Represents a MastState. */
    class MastState implements IMastState {

        /**
         * Constructs a new MastState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IMastState);

        /** MastState target_height. */
        public target_height: number;

        /** MastState current_height. */
        public current_height: number;

        /** MastState motion_state. */
        public motion_state: ros_messages.MastState.MotionState;

        /** MastState error. */
        public error: number;

        /** MastState error_message. */
        public error_message: string;

        /**
         * Creates a new MastState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MastState instance
         */
        public static create(properties?: ros_messages.IMastState): ros_messages.MastState;

        /**
         * Encodes the specified MastState message. Does not implicitly {@link ros_messages.MastState.verify|verify} messages.
         * @param message MastState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IMastState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MastState message, length delimited. Does not implicitly {@link ros_messages.MastState.verify|verify} messages.
         * @param message MastState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IMastState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MastState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.MastState;

        /**
         * Decodes a MastState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.MastState;

        /**
         * Verifies a MastState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MastState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MastState
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.MastState;

        /**
         * Creates a plain object from a MastState message. Also converts values to other types if specified.
         * @param message MastState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.MastState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MastState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MastState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MastState {

        /** MotionState enum. */
        enum MotionState {
            UNKNOWN = 0,
            MOVING_HOLD = 1,
            MOVING_UP = 2,
            MOVING_DOWN = 3
        }
    }

    /** Properties of a SubmapEntry. */
    interface ISubmapEntry {

        /** SubmapEntry trajectory_id */
        trajectory_id?: (number|null);

        /** SubmapEntry submap_index */
        submap_index?: (number|null);

        /** SubmapEntry submap_version */
        submap_version?: (number|null);

        /** SubmapEntry pose_position_x */
        pose_position_x?: (number|null);

        /** SubmapEntry pose_position_y */
        pose_position_y?: (number|null);

        /** SubmapEntry pose_position_z */
        pose_position_z?: (number|null);

        /** SubmapEntry pose_orientation_x */
        pose_orientation_x?: (number|null);

        /** SubmapEntry pose_orientation_y */
        pose_orientation_y?: (number|null);

        /** SubmapEntry pose_orientation_z */
        pose_orientation_z?: (number|null);

        /** SubmapEntry pose_orientation_w */
        pose_orientation_w?: (number|null);

        /** SubmapEntry is_frozen */
        is_frozen?: (boolean|null);

        /** SubmapEntry is_incremental_submap */
        is_incremental_submap?: (boolean|null);

        /** SubmapEntry is_nearby_map */
        is_nearby_map?: (boolean|null);
    }

    /** Represents a SubmapEntry. */
    class SubmapEntry implements ISubmapEntry {

        /**
         * Constructs a new SubmapEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ISubmapEntry);

        /** SubmapEntry trajectory_id. */
        public trajectory_id: number;

        /** SubmapEntry submap_index. */
        public submap_index: number;

        /** SubmapEntry submap_version. */
        public submap_version: number;

        /** SubmapEntry pose_position_x. */
        public pose_position_x: number;

        /** SubmapEntry pose_position_y. */
        public pose_position_y: number;

        /** SubmapEntry pose_position_z. */
        public pose_position_z: number;

        /** SubmapEntry pose_orientation_x. */
        public pose_orientation_x: number;

        /** SubmapEntry pose_orientation_y. */
        public pose_orientation_y: number;

        /** SubmapEntry pose_orientation_z. */
        public pose_orientation_z: number;

        /** SubmapEntry pose_orientation_w. */
        public pose_orientation_w: number;

        /** SubmapEntry is_frozen. */
        public is_frozen: boolean;

        /** SubmapEntry is_incremental_submap. */
        public is_incremental_submap: boolean;

        /** SubmapEntry is_nearby_map. */
        public is_nearby_map: boolean;

        /**
         * Creates a new SubmapEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmapEntry instance
         */
        public static create(properties?: ros_messages.ISubmapEntry): ros_messages.SubmapEntry;

        /**
         * Encodes the specified SubmapEntry message. Does not implicitly {@link ros_messages.SubmapEntry.verify|verify} messages.
         * @param message SubmapEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmapEntry message, length delimited. Does not implicitly {@link ros_messages.SubmapEntry.verify|verify} messages.
         * @param message SubmapEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmapEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmapEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.SubmapEntry;

        /**
         * Decodes a SubmapEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmapEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.SubmapEntry;

        /**
         * Verifies a SubmapEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmapEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmapEntry
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.SubmapEntry;

        /**
         * Creates a plain object from a SubmapEntry message. Also converts values to other types if specified.
         * @param message SubmapEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.SubmapEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmapEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubmapEntry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubmapList. */
    interface ISubmapList {

        /** SubmapList slam_state */
        slam_state?: (ros_messages.SubmapList.SlamState|null);

        /** SubmapList uuid */
        uuid?: (string|null);

        /** SubmapList submap */
        submap?: (ros_messages.ISubmapEntry[]|null);
    }

    /** Represents a SubmapList. */
    class SubmapList implements ISubmapList {

        /**
         * Constructs a new SubmapList.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ISubmapList);

        /** SubmapList slam_state. */
        public slam_state: ros_messages.SubmapList.SlamState;

        /** SubmapList uuid. */
        public uuid: string;

        /** SubmapList submap. */
        public submap: ros_messages.ISubmapEntry[];

        /**
         * Creates a new SubmapList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmapList instance
         */
        public static create(properties?: ros_messages.ISubmapList): ros_messages.SubmapList;

        /**
         * Encodes the specified SubmapList message. Does not implicitly {@link ros_messages.SubmapList.verify|verify} messages.
         * @param message SubmapList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmapList message, length delimited. Does not implicitly {@link ros_messages.SubmapList.verify|verify} messages.
         * @param message SubmapList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmapList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmapList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.SubmapList;

        /**
         * Decodes a SubmapList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmapList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.SubmapList;

        /**
         * Verifies a SubmapList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmapList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmapList
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.SubmapList;

        /**
         * Creates a plain object from a SubmapList message. Also converts values to other types if specified.
         * @param message SubmapList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.SubmapList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmapList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubmapList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SubmapList {

        /** SlamState enum. */
        enum SlamState {
            SLAM_STATE_INVALID = 0,
            SLAM_STATE_SLAM = 1,
            SLAM_STATE_POSITIONING = 2
        }
    }

    /** Properties of a RosMessageWrapper. */
    interface IRosMessageWrapper {

        /** RosMessageWrapper type */
        type?: (ros_messages.RosMessageWrapper.MessageType|null);

        /** RosMessageWrapper timestamp_ns */
        timestamp_ns?: (number|Long|null);

        /** RosMessageWrapper sequence_id */
        sequence_id?: (number|null);

        /** RosMessageWrapper point_cloud */
        point_cloud?: (ros_messages.IPointCloud|null);

        /** RosMessageWrapper raw_data */
        raw_data?: (Uint8Array|null);

        /** RosMessageWrapper mast_state */
        mast_state?: (ros_messages.IMastState|null);

        /** RosMessageWrapper submap_list */
        submap_list?: (ros_messages.ISubmapList|null);
    }

    /** Represents a RosMessageWrapper. */
    class RosMessageWrapper implements IRosMessageWrapper {

        /**
         * Constructs a new RosMessageWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IRosMessageWrapper);

        /** RosMessageWrapper type. */
        public type: ros_messages.RosMessageWrapper.MessageType;

        /** RosMessageWrapper timestamp_ns. */
        public timestamp_ns: (number|Long);

        /** RosMessageWrapper sequence_id. */
        public sequence_id: number;

        /** RosMessageWrapper point_cloud. */
        public point_cloud?: (ros_messages.IPointCloud|null);

        /** RosMessageWrapper raw_data. */
        public raw_data?: (Uint8Array|null);

        /** RosMessageWrapper mast_state. */
        public mast_state?: (ros_messages.IMastState|null);

        /** RosMessageWrapper submap_list. */
        public submap_list?: (ros_messages.ISubmapList|null);

        /** RosMessageWrapper payload. */
        public payload?: ("point_cloud"|"raw_data"|"mast_state"|"submap_list");

        /**
         * Creates a new RosMessageWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RosMessageWrapper instance
         */
        public static create(properties?: ros_messages.IRosMessageWrapper): ros_messages.RosMessageWrapper;

        /**
         * Encodes the specified RosMessageWrapper message. Does not implicitly {@link ros_messages.RosMessageWrapper.verify|verify} messages.
         * @param message RosMessageWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IRosMessageWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RosMessageWrapper message, length delimited. Does not implicitly {@link ros_messages.RosMessageWrapper.verify|verify} messages.
         * @param message RosMessageWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IRosMessageWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.RosMessageWrapper;

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.RosMessageWrapper;

        /**
         * Verifies a RosMessageWrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RosMessageWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RosMessageWrapper
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.RosMessageWrapper;

        /**
         * Creates a plain object from a RosMessageWrapper message. Also converts values to other types if specified.
         * @param message RosMessageWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.RosMessageWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RosMessageWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RosMessageWrapper
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RosMessageWrapper {

        /** MessageType enum. */
        enum MessageType {
            UNKNOWN = 0,
            POINT_CLOUD = 1,
            MAST_STATE = 2,
            SUBMAP_LIST = 3
        }
    }
}
