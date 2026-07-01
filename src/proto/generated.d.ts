import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ros_messages. */
export namespace ros_messages {

    /** Properties of a Pose. */
    interface IPose {

        /** Pose x */
        x?: (number|null);

        /** Pose y */
        y?: (number|null);

        /** Pose z */
        z?: (number|null);

        /** Pose qx */
        qx?: (number|null);

        /** Pose qy */
        qy?: (number|null);

        /** Pose qz */
        qz?: (number|null);

        /** Pose qw */
        qw?: (number|null);
    }

    /** Represents a Pose. */
    class Pose implements IPose {

        /**
         * Constructs a new Pose.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IPose);

        /** Pose x. */
        public x: number;

        /** Pose y. */
        public y: number;

        /** Pose z. */
        public z: number;

        /** Pose qx. */
        public qx: number;

        /** Pose qy. */
        public qy: number;

        /** Pose qz. */
        public qz: number;

        /** Pose qw. */
        public qw: number;

        /**
         * Creates a new Pose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pose instance
         */
        public static create(properties?: ros_messages.IPose): ros_messages.Pose;

        /**
         * Encodes the specified Pose message. Does not implicitly {@link ros_messages.Pose.verify|verify} messages.
         * @param message Pose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pose message, length delimited. Does not implicitly {@link ros_messages.Pose.verify|verify} messages.
         * @param message Pose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pose message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.Pose;

        /**
         * Decodes a Pose message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.Pose;

        /**
         * Verifies a Pose message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pose message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pose
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.Pose;

        /**
         * Creates a plain object from a Pose message. Also converts values to other types if specified.
         * @param message Pose
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.Pose, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pose to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pose
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

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

    /** Properties of a RackStates. */
    interface IRackStates {

        /** RackStates map_uid */
        map_uid?: (string|null);

        /** RackStates racks */
        racks?: (ros_messages.RackStates.IRackState[]|null);
    }

    /** Represents a RackStates. */
    class RackStates implements IRackStates {

        /**
         * Constructs a new RackStates.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IRackStates);

        /** RackStates map_uid. */
        public map_uid: string;

        /** RackStates racks. */
        public racks: ros_messages.RackStates.IRackState[];

        /**
         * Creates a new RackStates instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RackStates instance
         */
        public static create(properties?: ros_messages.IRackStates): ros_messages.RackStates;

        /**
         * Encodes the specified RackStates message. Does not implicitly {@link ros_messages.RackStates.verify|verify} messages.
         * @param message RackStates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IRackStates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RackStates message, length delimited. Does not implicitly {@link ros_messages.RackStates.verify|verify} messages.
         * @param message RackStates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IRackStates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RackStates message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.RackStates;

        /**
         * Decodes a RackStates message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.RackStates;

        /**
         * Verifies a RackStates message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RackStates message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RackStates
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.RackStates;

        /**
         * Creates a plain object from a RackStates message. Also converts values to other types if specified.
         * @param message RackStates
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.RackStates, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RackStates to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RackStates
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RackStates {

        /** Properties of a RackLevelState. */
        interface IRackLevelState {

            /** RackLevelState timestamp_ns */
            timestamp_ns?: (number|Long|null);

            /** RackLevelState level */
            level?: (number|null);

            /** RackLevelState state */
            state?: (ros_messages.RackStates.RackLevelState.SpaceState|null);
        }

        /** Represents a RackLevelState. */
        class RackLevelState implements IRackLevelState {

            /**
             * Constructs a new RackLevelState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.RackStates.IRackLevelState);

            /** RackLevelState timestamp_ns. */
            public timestamp_ns: (number|Long);

            /** RackLevelState level. */
            public level: number;

            /** RackLevelState state. */
            public state: ros_messages.RackStates.RackLevelState.SpaceState;

            /**
             * Creates a new RackLevelState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RackLevelState instance
             */
            public static create(properties?: ros_messages.RackStates.IRackLevelState): ros_messages.RackStates.RackLevelState;

            /**
             * Encodes the specified RackLevelState message. Does not implicitly {@link ros_messages.RackStates.RackLevelState.verify|verify} messages.
             * @param message RackLevelState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.RackStates.IRackLevelState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RackLevelState message, length delimited. Does not implicitly {@link ros_messages.RackStates.RackLevelState.verify|verify} messages.
             * @param message RackLevelState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.RackStates.IRackLevelState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RackLevelState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.RackStates.RackLevelState;

            /**
             * Decodes a RackLevelState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.RackStates.RackLevelState;

            /**
             * Verifies a RackLevelState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RackLevelState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RackLevelState
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.RackStates.RackLevelState;

            /**
             * Creates a plain object from a RackLevelState message. Also converts values to other types if specified.
             * @param message RackLevelState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.RackStates.RackLevelState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RackLevelState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RackLevelState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RackLevelState {

            /** SpaceState enum. */
            enum SpaceState {
                UNKNOWN = 0,
                OCCUPIED = 3,
                FREE = 4
            }
        }

        /** Properties of a RackState. */
        interface IRackState {

            /** RackState poi_id */
            poi_id?: (string|null);

            /** RackState levels */
            levels?: (ros_messages.RackStates.IRackLevelState[]|null);
        }

        /** Represents a RackState. */
        class RackState implements IRackState {

            /**
             * Constructs a new RackState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.RackStates.IRackState);

            /** RackState poi_id. */
            public poi_id: string;

            /** RackState levels. */
            public levels: ros_messages.RackStates.IRackLevelState[];

            /**
             * Creates a new RackState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RackState instance
             */
            public static create(properties?: ros_messages.RackStates.IRackState): ros_messages.RackStates.RackState;

            /**
             * Encodes the specified RackState message. Does not implicitly {@link ros_messages.RackStates.RackState.verify|verify} messages.
             * @param message RackState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.RackStates.IRackState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RackState message, length delimited. Does not implicitly {@link ros_messages.RackStates.RackState.verify|verify} messages.
             * @param message RackState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.RackStates.IRackState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RackState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.RackStates.RackState;

            /**
             * Decodes a RackState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.RackStates.RackState;

            /**
             * Verifies a RackState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RackState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RackState
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.RackStates.RackState;

            /**
             * Creates a plain object from a RackState message. Also converts values to other types if specified.
             * @param message RackState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.RackStates.RackState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RackState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RackState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
        submap_list?: (ros_messages.slam.ISubmapList|null);

        /** RosMessageWrapper rack_states */
        rack_states?: (ros_messages.IRackStates|null);

        /** RosMessageWrapper towing_state */
        towing_state?: (ros_messages.ITowingState|null);
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
        public submap_list?: (ros_messages.slam.ISubmapList|null);

        /** RosMessageWrapper rack_states. */
        public rack_states?: (ros_messages.IRackStates|null);

        /** RosMessageWrapper towing_state. */
        public towing_state?: (ros_messages.ITowingState|null);

        /** RosMessageWrapper payload. */
        public payload?: ("point_cloud"|"raw_data"|"mast_state"|"submap_list"|"rack_states"|"towing_state");

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
            SUBMAP_LIST = 3,
            RACK_STATES = 4,
            TOWING_STATE = 5
        }
    }

    /** Namespace slam. */
    namespace slam {

        /** Properties of a SubmapEntry. */
        interface ISubmapEntry {

            /** SubmapEntry trajectory_id */
            trajectory_id?: (number|null);

            /** SubmapEntry submap_index */
            submap_index?: (number|null);

            /** SubmapEntry submap_version */
            submap_version?: (number|null);

            /** SubmapEntry pose */
            pose?: (ros_messages.IPose|null);

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
            constructor(properties?: ros_messages.slam.ISubmapEntry);

            /** SubmapEntry trajectory_id. */
            public trajectory_id: number;

            /** SubmapEntry submap_index. */
            public submap_index: number;

            /** SubmapEntry submap_version. */
            public submap_version: number;

            /** SubmapEntry pose. */
            public pose?: (ros_messages.IPose|null);

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
            public static create(properties?: ros_messages.slam.ISubmapEntry): ros_messages.slam.SubmapEntry;

            /**
             * Encodes the specified SubmapEntry message. Does not implicitly {@link ros_messages.slam.SubmapEntry.verify|verify} messages.
             * @param message SubmapEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapEntry message, length delimited. Does not implicitly {@link ros_messages.slam.SubmapEntry.verify|verify} messages.
             * @param message SubmapEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.SubmapEntry;

            /**
             * Decodes a SubmapEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.SubmapEntry;

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
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.SubmapEntry;

            /**
             * Creates a plain object from a SubmapEntry message. Also converts values to other types if specified.
             * @param message SubmapEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.SubmapEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            slam_state?: (ros_messages.slam.SubmapList.SlamState|null);

            /** SubmapList uuid */
            uuid?: (string|null);

            /** SubmapList submaps */
            submaps?: (ros_messages.slam.ISubmapEntry[]|null);
        }

        /** Represents a SubmapList. */
        class SubmapList implements ISubmapList {

            /**
             * Constructs a new SubmapList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.slam.ISubmapList);

            /** SubmapList slam_state. */
            public slam_state: ros_messages.slam.SubmapList.SlamState;

            /** SubmapList uuid. */
            public uuid: string;

            /** SubmapList submaps. */
            public submaps: ros_messages.slam.ISubmapEntry[];

            /**
             * Creates a new SubmapList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapList instance
             */
            public static create(properties?: ros_messages.slam.ISubmapList): ros_messages.slam.SubmapList;

            /**
             * Encodes the specified SubmapList message. Does not implicitly {@link ros_messages.slam.SubmapList.verify|verify} messages.
             * @param message SubmapList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapList message, length delimited. Does not implicitly {@link ros_messages.slam.SubmapList.verify|verify} messages.
             * @param message SubmapList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.SubmapList;

            /**
             * Decodes a SubmapList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.SubmapList;

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
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.SubmapList;

            /**
             * Creates a plain object from a SubmapList message. Also converts values to other types if specified.
             * @param message SubmapList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.SubmapList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** StatusCode enum. */
        enum StatusCode {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15,
            UUID_MISMATCH = 16
        }

        /** Properties of a StatusResponse. */
        interface IStatusResponse {

            /** StatusResponse code */
            code?: (ros_messages.slam.StatusCode|null);

            /** StatusResponse message */
            message?: (string|null);
        }

        /** Represents a StatusResponse. */
        class StatusResponse implements IStatusResponse {

            /**
             * Constructs a new StatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.slam.IStatusResponse);

            /** StatusResponse code. */
            public code: ros_messages.slam.StatusCode;

            /** StatusResponse message. */
            public message: string;

            /**
             * Creates a new StatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusResponse instance
             */
            public static create(properties?: ros_messages.slam.IStatusResponse): ros_messages.slam.StatusResponse;

            /**
             * Encodes the specified StatusResponse message. Does not implicitly {@link ros_messages.slam.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link ros_messages.slam.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.StatusResponse;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.StatusResponse;

            /**
             * Verifies a StatusResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusResponse
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.StatusResponse;

            /**
             * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
             * @param message StatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StatusResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetMapImageResponse. */
        interface IGetMapImageResponse {

            /** GetMapImageResponse origin_x */
            origin_x?: (number|null);

            /** GetMapImageResponse origin_y */
            origin_y?: (number|null);

            /** GetMapImageResponse resolution */
            resolution?: (number|null);

            /** GetMapImageResponse png_bytes */
            png_bytes?: (Uint8Array|null);

            /** GetMapImageResponse status_code */
            status_code?: (ros_messages.slam.StatusCode|null);

            /** GetMapImageResponse status_message */
            status_message?: (string|null);
        }

        /** Represents a GetMapImageResponse. */
        class GetMapImageResponse implements IGetMapImageResponse {

            /**
             * Constructs a new GetMapImageResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.slam.IGetMapImageResponse);

            /** GetMapImageResponse origin_x. */
            public origin_x: number;

            /** GetMapImageResponse origin_y. */
            public origin_y: number;

            /** GetMapImageResponse resolution. */
            public resolution: number;

            /** GetMapImageResponse png_bytes. */
            public png_bytes: Uint8Array;

            /** GetMapImageResponse status_code. */
            public status_code: ros_messages.slam.StatusCode;

            /** GetMapImageResponse status_message. */
            public status_message: string;

            /**
             * Creates a new GetMapImageResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetMapImageResponse instance
             */
            public static create(properties?: ros_messages.slam.IGetMapImageResponse): ros_messages.slam.GetMapImageResponse;

            /**
             * Encodes the specified GetMapImageResponse message. Does not implicitly {@link ros_messages.slam.GetMapImageResponse.verify|verify} messages.
             * @param message GetMapImageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.IGetMapImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetMapImageResponse message, length delimited. Does not implicitly {@link ros_messages.slam.GetMapImageResponse.verify|verify} messages.
             * @param message GetMapImageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.IGetMapImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetMapImageResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.GetMapImageResponse;

            /**
             * Decodes a GetMapImageResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.GetMapImageResponse;

            /**
             * Verifies a GetMapImageResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetMapImageResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetMapImageResponse
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.GetMapImageResponse;

            /**
             * Creates a plain object from a GetMapImageResponse message. Also converts values to other types if specified.
             * @param message GetMapImageResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.GetMapImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetMapImageResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetMapImageResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubmapTexture. */
        interface ISubmapTexture {

            /** SubmapTexture cell_format */
            cell_format?: (number|null);

            /** SubmapTexture cells */
            cells?: (Uint8Array|null);

            /** SubmapTexture width */
            width?: (number|null);

            /** SubmapTexture height */
            height?: (number|null);

            /** SubmapTexture resolution */
            resolution?: (number|null);

            /** SubmapTexture z_level */
            z_level?: (number|null);

            /** SubmapTexture slice_pose */
            slice_pose?: (ros_messages.IPose|null);
        }

        /** Represents a SubmapTexture. */
        class SubmapTexture implements ISubmapTexture {

            /**
             * Constructs a new SubmapTexture.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.slam.ISubmapTexture);

            /** SubmapTexture cell_format. */
            public cell_format: number;

            /** SubmapTexture cells. */
            public cells: Uint8Array;

            /** SubmapTexture width. */
            public width: number;

            /** SubmapTexture height. */
            public height: number;

            /** SubmapTexture resolution. */
            public resolution: number;

            /** SubmapTexture z_level. */
            public z_level: number;

            /** SubmapTexture slice_pose. */
            public slice_pose?: (ros_messages.IPose|null);

            /**
             * Creates a new SubmapTexture instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapTexture instance
             */
            public static create(properties?: ros_messages.slam.ISubmapTexture): ros_messages.slam.SubmapTexture;

            /**
             * Encodes the specified SubmapTexture message. Does not implicitly {@link ros_messages.slam.SubmapTexture.verify|verify} messages.
             * @param message SubmapTexture message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapTexture message, length delimited. Does not implicitly {@link ros_messages.slam.SubmapTexture.verify|verify} messages.
             * @param message SubmapTexture message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapTexture message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapTexture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.SubmapTexture;

            /**
             * Decodes a SubmapTexture message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapTexture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.SubmapTexture;

            /**
             * Verifies a SubmapTexture message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubmapTexture message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubmapTexture
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.SubmapTexture;

            /**
             * Creates a plain object from a SubmapTexture message. Also converts values to other types if specified.
             * @param message SubmapTexture
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.SubmapTexture, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubmapTexture to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubmapTexture
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubmapQueryV2Response. */
        interface ISubmapQueryV2Response {

            /** SubmapQueryV2Response status */
            status?: (ros_messages.slam.IStatusResponse|null);

            /** SubmapQueryV2Response submap_version */
            submap_version?: (number|null);

            /** SubmapQueryV2Response textures */
            textures?: (ros_messages.slam.ISubmapTexture[]|null);
        }

        /** Represents a SubmapQueryV2Response. */
        class SubmapQueryV2Response implements ISubmapQueryV2Response {

            /**
             * Constructs a new SubmapQueryV2Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: ros_messages.slam.ISubmapQueryV2Response);

            /** SubmapQueryV2Response status. */
            public status?: (ros_messages.slam.IStatusResponse|null);

            /** SubmapQueryV2Response submap_version. */
            public submap_version: number;

            /** SubmapQueryV2Response textures. */
            public textures: ros_messages.slam.ISubmapTexture[];

            /**
             * Creates a new SubmapQueryV2Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapQueryV2Response instance
             */
            public static create(properties?: ros_messages.slam.ISubmapQueryV2Response): ros_messages.slam.SubmapQueryV2Response;

            /**
             * Encodes the specified SubmapQueryV2Response message. Does not implicitly {@link ros_messages.slam.SubmapQueryV2Response.verify|verify} messages.
             * @param message SubmapQueryV2Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ros_messages.slam.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapQueryV2Response message, length delimited. Does not implicitly {@link ros_messages.slam.SubmapQueryV2Response.verify|verify} messages.
             * @param message SubmapQueryV2Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ros_messages.slam.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapQueryV2Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapQueryV2Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.slam.SubmapQueryV2Response;

            /**
             * Decodes a SubmapQueryV2Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapQueryV2Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.slam.SubmapQueryV2Response;

            /**
             * Verifies a SubmapQueryV2Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubmapQueryV2Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubmapQueryV2Response
             */
            public static fromObject(object: { [k: string]: any }): ros_messages.slam.SubmapQueryV2Response;

            /**
             * Creates a plain object from a SubmapQueryV2Response message. Also converts values to other types if specified.
             * @param message SubmapQueryV2Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ros_messages.slam.SubmapQueryV2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubmapQueryV2Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubmapQueryV2Response
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a TowingState. */
    interface ITowingState {

        /** TowingState action_progress */
        action_progress?: (number|null);

        /** TowingState hook_state */
        hook_state?: (ros_messages.TowingState.HookState|null);

        /** TowingState cargo_detected */
        cargo_detected?: (boolean|null);

        /** TowingState error_code */
        error_code?: (number|null);

        /** TowingState error_message */
        error_message?: (string|null);
    }

    /** Represents a TowingState. */
    class TowingState implements ITowingState {

        /**
         * Constructs a new TowingState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ITowingState);

        /** TowingState action_progress. */
        public action_progress: number;

        /** TowingState hook_state. */
        public hook_state: ros_messages.TowingState.HookState;

        /** TowingState cargo_detected. */
        public cargo_detected: boolean;

        /** TowingState error_code. */
        public error_code: number;

        /** TowingState error_message. */
        public error_message: string;

        /**
         * Creates a new TowingState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TowingState instance
         */
        public static create(properties?: ros_messages.ITowingState): ros_messages.TowingState;

        /**
         * Encodes the specified TowingState message. Does not implicitly {@link ros_messages.TowingState.verify|verify} messages.
         * @param message TowingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ITowingState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TowingState message, length delimited. Does not implicitly {@link ros_messages.TowingState.verify|verify} messages.
         * @param message TowingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ITowingState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TowingState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.TowingState;

        /**
         * Decodes a TowingState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.TowingState;

        /**
         * Verifies a TowingState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TowingState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TowingState
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.TowingState;

        /**
         * Creates a plain object from a TowingState message. Also converts values to other types if specified.
         * @param message TowingState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.TowingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TowingState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TowingState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TowingState {

        /** HookState enum. */
        enum HookState {
            UNKNOWN = 0,
            LOCKED = 1,
            RELEASED = 2,
            LOCKING = 3,
            RELEASING = 4,
            SELF_CHECKING = 5,
            ERROR = 6
        }
    }

    /** Properties of a SubmapTexture. */
    interface ISubmapTexture {

        /** SubmapTexture cell_format */
        cell_format?: (number|null);

        /** SubmapTexture cells */
        cells?: (Uint8Array|null);

        /** SubmapTexture width */
        width?: (number|null);

        /** SubmapTexture height */
        height?: (number|null);

        /** SubmapTexture resolution */
        resolution?: (number|null);

        /** SubmapTexture z_level */
        z_level?: (number|null);

        /** SubmapTexture slice_pose */
        slice_pose?: (ros_messages.IPose|null);
    }

    /** Represents a SubmapTexture. */
    class SubmapTexture implements ISubmapTexture {

        /**
         * Constructs a new SubmapTexture.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ISubmapTexture);

        /** SubmapTexture cell_format. */
        public cell_format: number;

        /** SubmapTexture cells. */
        public cells: Uint8Array;

        /** SubmapTexture width. */
        public width: number;

        /** SubmapTexture height. */
        public height: number;

        /** SubmapTexture resolution. */
        public resolution: number;

        /** SubmapTexture z_level. */
        public z_level: number;

        /** SubmapTexture slice_pose. */
        public slice_pose?: (ros_messages.IPose|null);

        /**
         * Creates a new SubmapTexture instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmapTexture instance
         */
        public static create(properties?: ros_messages.ISubmapTexture): ros_messages.SubmapTexture;

        /**
         * Encodes the specified SubmapTexture message. Does not implicitly {@link ros_messages.SubmapTexture.verify|verify} messages.
         * @param message SubmapTexture message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmapTexture message, length delimited. Does not implicitly {@link ros_messages.SubmapTexture.verify|verify} messages.
         * @param message SubmapTexture message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmapTexture message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmapTexture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.SubmapTexture;

        /**
         * Decodes a SubmapTexture message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmapTexture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.SubmapTexture;

        /**
         * Verifies a SubmapTexture message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmapTexture message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmapTexture
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.SubmapTexture;

        /**
         * Creates a plain object from a SubmapTexture message. Also converts values to other types if specified.
         * @param message SubmapTexture
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.SubmapTexture, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmapTexture to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubmapTexture
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubmapQueryV2Response. */
    interface ISubmapQueryV2Response {

        /** SubmapQueryV2Response status */
        status?: (ros_messages.slam.IStatusResponse|null);

        /** SubmapQueryV2Response submap_version */
        submap_version?: (number|null);

        /** SubmapQueryV2Response textures */
        textures?: (ros_messages.ISubmapTexture[]|null);
    }

    /** Represents a SubmapQueryV2Response. */
    class SubmapQueryV2Response implements ISubmapQueryV2Response {

        /**
         * Constructs a new SubmapQueryV2Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ISubmapQueryV2Response);

        /** SubmapQueryV2Response status. */
        public status?: (ros_messages.slam.IStatusResponse|null);

        /** SubmapQueryV2Response submap_version. */
        public submap_version: number;

        /** SubmapQueryV2Response textures. */
        public textures: ros_messages.ISubmapTexture[];

        /**
         * Creates a new SubmapQueryV2Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmapQueryV2Response instance
         */
        public static create(properties?: ros_messages.ISubmapQueryV2Response): ros_messages.SubmapQueryV2Response;

        /**
         * Encodes the specified SubmapQueryV2Response message. Does not implicitly {@link ros_messages.SubmapQueryV2Response.verify|verify} messages.
         * @param message SubmapQueryV2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmapQueryV2Response message, length delimited. Does not implicitly {@link ros_messages.SubmapQueryV2Response.verify|verify} messages.
         * @param message SubmapQueryV2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmapQueryV2Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmapQueryV2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.SubmapQueryV2Response;

        /**
         * Decodes a SubmapQueryV2Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmapQueryV2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.SubmapQueryV2Response;

        /**
         * Verifies a SubmapQueryV2Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmapQueryV2Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmapQueryV2Response
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.SubmapQueryV2Response;

        /**
         * Creates a plain object from a SubmapQueryV2Response message. Also converts values to other types if specified.
         * @param message SubmapQueryV2Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.SubmapQueryV2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmapQueryV2Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubmapQueryV2Response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TopicInfo. */
    interface ITopicInfo {

        /** TopicInfo name */
        name?: (string|null);

        /** TopicInfo type */
        type?: (string|null);

        /** TopicInfo publisher_count */
        publisher_count?: (number|null);

        /** TopicInfo subscriber_count */
        subscriber_count?: (number|null);
    }

    /** Represents a TopicInfo. */
    class TopicInfo implements ITopicInfo {

        /**
         * Constructs a new TopicInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ITopicInfo);

        /** TopicInfo name. */
        public name: string;

        /** TopicInfo type. */
        public type: string;

        /** TopicInfo publisher_count. */
        public publisher_count: number;

        /** TopicInfo subscriber_count. */
        public subscriber_count: number;

        /**
         * Creates a new TopicInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopicInfo instance
         */
        public static create(properties?: ros_messages.ITopicInfo): ros_messages.TopicInfo;

        /**
         * Encodes the specified TopicInfo message. Does not implicitly {@link ros_messages.TopicInfo.verify|verify} messages.
         * @param message TopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ITopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopicInfo message, length delimited. Does not implicitly {@link ros_messages.TopicInfo.verify|verify} messages.
         * @param message TopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ITopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopicInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.TopicInfo;

        /**
         * Decodes a TopicInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.TopicInfo;

        /**
         * Verifies a TopicInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TopicInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TopicInfo
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.TopicInfo;

        /**
         * Creates a plain object from a TopicInfo message. Also converts values to other types if specified.
         * @param message TopicInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.TopicInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TopicInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TopicInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TopicListResponse. */
    interface ITopicListResponse {

        /** TopicListResponse topics */
        topics?: (ros_messages.ITopicInfo[]|null);
    }

    /** Represents a TopicListResponse. */
    class TopicListResponse implements ITopicListResponse {

        /**
         * Constructs a new TopicListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.ITopicListResponse);

        /** TopicListResponse topics. */
        public topics: ros_messages.ITopicInfo[];

        /**
         * Creates a new TopicListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopicListResponse instance
         */
        public static create(properties?: ros_messages.ITopicListResponse): ros_messages.TopicListResponse;

        /**
         * Encodes the specified TopicListResponse message. Does not implicitly {@link ros_messages.TopicListResponse.verify|verify} messages.
         * @param message TopicListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.ITopicListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopicListResponse message, length delimited. Does not implicitly {@link ros_messages.TopicListResponse.verify|verify} messages.
         * @param message TopicListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.ITopicListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopicListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.TopicListResponse;

        /**
         * Decodes a TopicListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.TopicListResponse;

        /**
         * Verifies a TopicListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TopicListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TopicListResponse
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.TopicListResponse;

        /**
         * Creates a plain object from a TopicListResponse message. Also converts values to other types if specified.
         * @param message TopicListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.TopicListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TopicListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TopicListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublishedTopicNamesResponse. */
    interface IPublishedTopicNamesResponse {

        /** PublishedTopicNamesResponse names */
        names?: (string[]|null);
    }

    /** Represents a PublishedTopicNamesResponse. */
    class PublishedTopicNamesResponse implements IPublishedTopicNamesResponse {

        /**
         * Constructs a new PublishedTopicNamesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ros_messages.IPublishedTopicNamesResponse);

        /** PublishedTopicNamesResponse names. */
        public names: string[];

        /**
         * Creates a new PublishedTopicNamesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishedTopicNamesResponse instance
         */
        public static create(properties?: ros_messages.IPublishedTopicNamesResponse): ros_messages.PublishedTopicNamesResponse;

        /**
         * Encodes the specified PublishedTopicNamesResponse message. Does not implicitly {@link ros_messages.PublishedTopicNamesResponse.verify|verify} messages.
         * @param message PublishedTopicNamesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ros_messages.IPublishedTopicNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishedTopicNamesResponse message, length delimited. Does not implicitly {@link ros_messages.PublishedTopicNamesResponse.verify|verify} messages.
         * @param message PublishedTopicNamesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ros_messages.IPublishedTopicNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ros_messages.PublishedTopicNamesResponse;

        /**
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ros_messages.PublishedTopicNamesResponse;

        /**
         * Verifies a PublishedTopicNamesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishedTopicNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishedTopicNamesResponse
         */
        public static fromObject(object: { [k: string]: any }): ros_messages.PublishedTopicNamesResponse;

        /**
         * Creates a plain object from a PublishedTopicNamesResponse message. Also converts values to other types if specified.
         * @param message PublishedTopicNamesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ros_messages.PublishedTopicNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishedTopicNamesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublishedTopicNamesResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
