import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ros_messages. */
export namespace ros_messages {

    /** Properties of a Header. */
    interface IHeader {

        /** Header seq */
        seq?: (number|null);

        /** Header stampSec */
        stampSec?: (number|Long|null);

        /** Header stampNsec */
        stampNsec?: (number|Long|null);

        /** Header frameId */
        frameId?: (string|null);
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

        /** Header stampSec. */
        public stampSec: (number|Long);

        /** Header stampNsec. */
        public stampNsec: (number|Long);

        /** Header frameId. */
        public frameId: string;

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

        /** PointCloud pointNumber */
        pointNumber?: (number|null);

        /** PointCloud centerX */
        centerX?: (number|null);

        /** PointCloud centerY */
        centerY?: (number|null);

        /** PointCloud centerZ */
        centerZ?: (number|null);

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

        /** PointCloud isDeltaEncoded */
        isDeltaEncoded?: (boolean|null);
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

        /** PointCloud pointNumber. */
        public pointNumber: number;

        /** PointCloud centerX. */
        public centerX: number;

        /** PointCloud centerY. */
        public centerY: number;

        /** PointCloud centerZ. */
        public centerZ: number;

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

        /** PointCloud isDeltaEncoded. */
        public isDeltaEncoded: boolean;

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

    /** Properties of a RosMessageWrapper. */
    interface IRosMessageWrapper {

        /** RosMessageWrapper type */
        type?: (ros_messages.RosMessageWrapper.MessageType|null);

        /** RosMessageWrapper timestampNs */
        timestampNs?: (number|Long|null);

        /** RosMessageWrapper sequenceId */
        sequenceId?: (number|null);

        /** RosMessageWrapper pointCloud */
        pointCloud?: (ros_messages.IPointCloud|null);

        /** RosMessageWrapper rawData */
        rawData?: (Uint8Array|null);
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

        /** RosMessageWrapper timestampNs. */
        public timestampNs: (number|Long);

        /** RosMessageWrapper sequenceId. */
        public sequenceId: number;

        /** RosMessageWrapper pointCloud. */
        public pointCloud?: (ros_messages.IPointCloud|null);

        /** RosMessageWrapper rawData. */
        public rawData?: (Uint8Array|null);

        /** RosMessageWrapper payload. */
        public payload?: ("pointCloud"|"rawData");

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
            POINT_CLOUD = 1
        }
    }
}
