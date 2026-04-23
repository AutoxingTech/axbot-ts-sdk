/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ros_messages = $root.ros_messages = (() => {

    /**
     * Namespace ros_messages.
     * @exports ros_messages
     * @namespace
     */
    const ros_messages = {};

    ros_messages.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof ros_messages
         * @interface IHeader
         * @property {number|null} [seq] Header seq
         * @property {number|Long|null} [stampSec] Header stampSec
         * @property {number|Long|null} [stampNsec] Header stampNsec
         * @property {string|null} [frameId] Header frameId
         */

        /**
         * Constructs a new Header.
         * @memberof ros_messages
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {ros_messages.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header seq.
         * @member {number} seq
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.seq = 0;

        /**
         * Header stampSec.
         * @member {number|Long} stampSec
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.stampSec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Header stampNsec.
         * @member {number|Long} stampNsec
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.stampNsec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Header frameId.
         * @member {string} frameId
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.frameId = "";

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof ros_messages.Header
         * @static
         * @param {ros_messages.IHeader=} [properties] Properties to set
         * @returns {ros_messages.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link ros_messages.Header.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.Header
         * @static
         * @param {ros_messages.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
            if (message.stampSec != null && Object.hasOwnProperty.call(message, "stampSec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stampSec);
            if (message.stampNsec != null && Object.hasOwnProperty.call(message, "stampNsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.stampNsec);
            if (message.frameId != null && Object.hasOwnProperty.call(message, "frameId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.frameId);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link ros_messages.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.Header
         * @static
         * @param {ros_messages.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.uint32();
                        break;
                    }
                case 2: {
                        message.stampSec = reader.uint64();
                        break;
                    }
                case 3: {
                        message.stampNsec = reader.uint64();
                        break;
                    }
                case 4: {
                        message.frameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof ros_messages.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.stampSec != null && message.hasOwnProperty("stampSec"))
                if (!$util.isInteger(message.stampSec) && !(message.stampSec && $util.isInteger(message.stampSec.low) && $util.isInteger(message.stampSec.high)))
                    return "stampSec: integer|Long expected";
            if (message.stampNsec != null && message.hasOwnProperty("stampNsec"))
                if (!$util.isInteger(message.stampNsec) && !(message.stampNsec && $util.isInteger(message.stampNsec.low) && $util.isInteger(message.stampNsec.high)))
                    return "stampNsec: integer|Long expected";
            if (message.frameId != null && message.hasOwnProperty("frameId"))
                if (!$util.isString(message.frameId))
                    return "frameId: string expected";
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.Header)
                return object;
            let message = new $root.ros_messages.Header();
            if (object.seq != null)
                message.seq = object.seq >>> 0;
            if (object.stampSec != null)
                if ($util.Long)
                    (message.stampSec = $util.Long.fromValue(object.stampSec)).unsigned = true;
                else if (typeof object.stampSec === "string")
                    message.stampSec = parseInt(object.stampSec, 10);
                else if (typeof object.stampSec === "number")
                    message.stampSec = object.stampSec;
                else if (typeof object.stampSec === "object")
                    message.stampSec = new $util.LongBits(object.stampSec.low >>> 0, object.stampSec.high >>> 0).toNumber(true);
            if (object.stampNsec != null)
                if ($util.Long)
                    (message.stampNsec = $util.Long.fromValue(object.stampNsec)).unsigned = true;
                else if (typeof object.stampNsec === "string")
                    message.stampNsec = parseInt(object.stampNsec, 10);
                else if (typeof object.stampNsec === "number")
                    message.stampNsec = object.stampNsec;
                else if (typeof object.stampNsec === "object")
                    message.stampNsec = new $util.LongBits(object.stampNsec.low >>> 0, object.stampNsec.high >>> 0).toNumber(true);
            if (object.frameId != null)
                message.frameId = String(object.frameId);
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.Header
         * @static
         * @param {ros_messages.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.seq = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stampSec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stampSec = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stampNsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stampNsec = options.longs === String ? "0" : 0;
                object.frameId = "";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.stampSec != null && message.hasOwnProperty("stampSec"))
                if (typeof message.stampSec === "number")
                    object.stampSec = options.longs === String ? String(message.stampSec) : message.stampSec;
                else
                    object.stampSec = options.longs === String ? $util.Long.prototype.toString.call(message.stampSec) : options.longs === Number ? new $util.LongBits(message.stampSec.low >>> 0, message.stampSec.high >>> 0).toNumber(true) : message.stampSec;
            if (message.stampNsec != null && message.hasOwnProperty("stampNsec"))
                if (typeof message.stampNsec === "number")
                    object.stampNsec = options.longs === String ? String(message.stampNsec) : message.stampNsec;
                else
                    object.stampNsec = options.longs === String ? $util.Long.prototype.toString.call(message.stampNsec) : options.longs === Number ? new $util.LongBits(message.stampNsec.low >>> 0, message.stampNsec.high >>> 0).toNumber(true) : message.stampNsec;
            if (message.frameId != null && message.hasOwnProperty("frameId"))
                object.frameId = message.frameId;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof ros_messages.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof ros_messages.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.Header";
        };

        return Header;
    })();

    ros_messages.PointCloud = (function() {

        /**
         * Properties of a PointCloud.
         * @memberof ros_messages
         * @interface IPointCloud
         * @property {ros_messages.IHeader|null} [header] PointCloud header
         * @property {number|null} [pointNumber] PointCloud pointNumber
         * @property {number|null} [centerX] PointCloud centerX
         * @property {number|null} [centerY] PointCloud centerY
         * @property {number|null} [centerZ] PointCloud centerZ
         * @property {number|null} [resolution] PointCloud resolution
         * @property {Array.<number>|null} [xs] PointCloud xs
         * @property {Array.<number>|null} [ys] PointCloud ys
         * @property {Array.<number>|null} [zs] PointCloud zs
         * @property {Uint8Array|null} [intensities] PointCloud intensities
         * @property {boolean|null} [isDeltaEncoded] PointCloud isDeltaEncoded
         */

        /**
         * Constructs a new PointCloud.
         * @memberof ros_messages
         * @classdesc Represents a PointCloud.
         * @implements IPointCloud
         * @constructor
         * @param {ros_messages.IPointCloud=} [properties] Properties to set
         */
        function PointCloud(properties) {
            this.xs = [];
            this.ys = [];
            this.zs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointCloud header.
         * @member {ros_messages.IHeader|null|undefined} header
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.header = null;

        /**
         * PointCloud pointNumber.
         * @member {number} pointNumber
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.pointNumber = 0;

        /**
         * PointCloud centerX.
         * @member {number} centerX
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.centerX = 0;

        /**
         * PointCloud centerY.
         * @member {number} centerY
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.centerY = 0;

        /**
         * PointCloud centerZ.
         * @member {number} centerZ
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.centerZ = 0;

        /**
         * PointCloud resolution.
         * @member {number} resolution
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.resolution = 0;

        /**
         * PointCloud xs.
         * @member {Array.<number>} xs
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.xs = $util.emptyArray;

        /**
         * PointCloud ys.
         * @member {Array.<number>} ys
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.ys = $util.emptyArray;

        /**
         * PointCloud zs.
         * @member {Array.<number>} zs
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.zs = $util.emptyArray;

        /**
         * PointCloud intensities.
         * @member {Uint8Array} intensities
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.intensities = $util.newBuffer([]);

        /**
         * PointCloud isDeltaEncoded.
         * @member {boolean} isDeltaEncoded
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.isDeltaEncoded = false;

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @function create
         * @memberof ros_messages.PointCloud
         * @static
         * @param {ros_messages.IPointCloud=} [properties] Properties to set
         * @returns {ros_messages.PointCloud} PointCloud instance
         */
        PointCloud.create = function create(properties) {
            return new PointCloud(properties);
        };

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link ros_messages.PointCloud.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.PointCloud
         * @static
         * @param {ros_messages.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.ros_messages.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pointNumber != null && Object.hasOwnProperty.call(message, "pointNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pointNumber);
            if (message.centerX != null && Object.hasOwnProperty.call(message, "centerX"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.centerX);
            if (message.centerY != null && Object.hasOwnProperty.call(message, "centerY"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.centerY);
            if (message.centerZ != null && Object.hasOwnProperty.call(message, "centerZ"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.centerZ);
            if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.resolution);
            if (message.xs != null && message.xs.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.xs.length; ++i)
                    writer.sint32(message.xs[i]);
                writer.ldelim();
            }
            if (message.ys != null && message.ys.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.ys.length; ++i)
                    writer.sint32(message.ys[i]);
                writer.ldelim();
            }
            if (message.zs != null && message.zs.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (let i = 0; i < message.zs.length; ++i)
                    writer.sint32(message.zs[i]);
                writer.ldelim();
            }
            if (message.intensities != null && Object.hasOwnProperty.call(message, "intensities"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.intensities);
            if (message.isDeltaEncoded != null && Object.hasOwnProperty.call(message, "isDeltaEncoded"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isDeltaEncoded);
            return writer;
        };

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link ros_messages.PointCloud.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.PointCloud
         * @static
         * @param {ros_messages.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.PointCloud} PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointCloud.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.PointCloud();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.ros_messages.Header.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.pointNumber = reader.uint32();
                        break;
                    }
                case 3: {
                        message.centerX = reader.double();
                        break;
                    }
                case 4: {
                        message.centerY = reader.double();
                        break;
                    }
                case 5: {
                        message.centerZ = reader.double();
                        break;
                    }
                case 6: {
                        message.resolution = reader.float();
                        break;
                    }
                case 7: {
                        if (!(message.xs && message.xs.length))
                            message.xs = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.xs.push(reader.sint32());
                        } else
                            message.xs.push(reader.sint32());
                        break;
                    }
                case 8: {
                        if (!(message.ys && message.ys.length))
                            message.ys = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ys.push(reader.sint32());
                        } else
                            message.ys.push(reader.sint32());
                        break;
                    }
                case 9: {
                        if (!(message.zs && message.zs.length))
                            message.zs = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.zs.push(reader.sint32());
                        } else
                            message.zs.push(reader.sint32());
                        break;
                    }
                case 10: {
                        message.intensities = reader.bytes();
                        break;
                    }
                case 11: {
                        message.isDeltaEncoded = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointCloud message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.PointCloud} PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointCloud.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointCloud message.
         * @function verify
         * @memberof ros_messages.PointCloud
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointCloud.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.ros_messages.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.pointNumber != null && message.hasOwnProperty("pointNumber"))
                if (!$util.isInteger(message.pointNumber))
                    return "pointNumber: integer expected";
            if (message.centerX != null && message.hasOwnProperty("centerX"))
                if (typeof message.centerX !== "number")
                    return "centerX: number expected";
            if (message.centerY != null && message.hasOwnProperty("centerY"))
                if (typeof message.centerY !== "number")
                    return "centerY: number expected";
            if (message.centerZ != null && message.hasOwnProperty("centerZ"))
                if (typeof message.centerZ !== "number")
                    return "centerZ: number expected";
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                if (typeof message.resolution !== "number")
                    return "resolution: number expected";
            if (message.xs != null && message.hasOwnProperty("xs")) {
                if (!Array.isArray(message.xs))
                    return "xs: array expected";
                for (let i = 0; i < message.xs.length; ++i)
                    if (!$util.isInteger(message.xs[i]))
                        return "xs: integer[] expected";
            }
            if (message.ys != null && message.hasOwnProperty("ys")) {
                if (!Array.isArray(message.ys))
                    return "ys: array expected";
                for (let i = 0; i < message.ys.length; ++i)
                    if (!$util.isInteger(message.ys[i]))
                        return "ys: integer[] expected";
            }
            if (message.zs != null && message.hasOwnProperty("zs")) {
                if (!Array.isArray(message.zs))
                    return "zs: array expected";
                for (let i = 0; i < message.zs.length; ++i)
                    if (!$util.isInteger(message.zs[i]))
                        return "zs: integer[] expected";
            }
            if (message.intensities != null && message.hasOwnProperty("intensities"))
                if (!(message.intensities && typeof message.intensities.length === "number" || $util.isString(message.intensities)))
                    return "intensities: buffer expected";
            if (message.isDeltaEncoded != null && message.hasOwnProperty("isDeltaEncoded"))
                if (typeof message.isDeltaEncoded !== "boolean")
                    return "isDeltaEncoded: boolean expected";
            return null;
        };

        /**
         * Creates a PointCloud message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.PointCloud
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.PointCloud} PointCloud
         */
        PointCloud.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.PointCloud)
                return object;
            let message = new $root.ros_messages.PointCloud();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".ros_messages.PointCloud.header: object expected");
                message.header = $root.ros_messages.Header.fromObject(object.header);
            }
            if (object.pointNumber != null)
                message.pointNumber = object.pointNumber >>> 0;
            if (object.centerX != null)
                message.centerX = Number(object.centerX);
            if (object.centerY != null)
                message.centerY = Number(object.centerY);
            if (object.centerZ != null)
                message.centerZ = Number(object.centerZ);
            if (object.resolution != null)
                message.resolution = Number(object.resolution);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".ros_messages.PointCloud.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = object.xs[i] | 0;
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".ros_messages.PointCloud.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = object.ys[i] | 0;
            }
            if (object.zs) {
                if (!Array.isArray(object.zs))
                    throw TypeError(".ros_messages.PointCloud.zs: array expected");
                message.zs = [];
                for (let i = 0; i < object.zs.length; ++i)
                    message.zs[i] = object.zs[i] | 0;
            }
            if (object.intensities != null)
                if (typeof object.intensities === "string")
                    $util.base64.decode(object.intensities, message.intensities = $util.newBuffer($util.base64.length(object.intensities)), 0);
                else if (object.intensities.length >= 0)
                    message.intensities = object.intensities;
            if (object.isDeltaEncoded != null)
                message.isDeltaEncoded = Boolean(object.isDeltaEncoded);
            return message;
        };

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.PointCloud
         * @static
         * @param {ros_messages.PointCloud} message PointCloud
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointCloud.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
                object.zs = [];
            }
            if (options.defaults) {
                object.header = null;
                object.pointNumber = 0;
                object.centerX = 0;
                object.centerY = 0;
                object.centerZ = 0;
                object.resolution = 0;
                if (options.bytes === String)
                    object.intensities = "";
                else {
                    object.intensities = [];
                    if (options.bytes !== Array)
                        object.intensities = $util.newBuffer(object.intensities);
                }
                object.isDeltaEncoded = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.ros_messages.Header.toObject(message.header, options);
            if (message.pointNumber != null && message.hasOwnProperty("pointNumber"))
                object.pointNumber = message.pointNumber;
            if (message.centerX != null && message.hasOwnProperty("centerX"))
                object.centerX = options.json && !isFinite(message.centerX) ? String(message.centerX) : message.centerX;
            if (message.centerY != null && message.hasOwnProperty("centerY"))
                object.centerY = options.json && !isFinite(message.centerY) ? String(message.centerY) : message.centerY;
            if (message.centerZ != null && message.hasOwnProperty("centerZ"))
                object.centerZ = options.json && !isFinite(message.centerZ) ? String(message.centerZ) : message.centerZ;
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                object.resolution = options.json && !isFinite(message.resolution) ? String(message.resolution) : message.resolution;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = message.ys[j];
            }
            if (message.zs && message.zs.length) {
                object.zs = [];
                for (let j = 0; j < message.zs.length; ++j)
                    object.zs[j] = message.zs[j];
            }
            if (message.intensities != null && message.hasOwnProperty("intensities"))
                object.intensities = options.bytes === String ? $util.base64.encode(message.intensities, 0, message.intensities.length) : options.bytes === Array ? Array.prototype.slice.call(message.intensities) : message.intensities;
            if (message.isDeltaEncoded != null && message.hasOwnProperty("isDeltaEncoded"))
                object.isDeltaEncoded = message.isDeltaEncoded;
            return object;
        };

        /**
         * Converts this PointCloud to JSON.
         * @function toJSON
         * @memberof ros_messages.PointCloud
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointCloud.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointCloud
         * @function getTypeUrl
         * @memberof ros_messages.PointCloud
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointCloud.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.PointCloud";
        };

        return PointCloud;
    })();

    ros_messages.RosMessageWrapper = (function() {

        /**
         * Properties of a RosMessageWrapper.
         * @memberof ros_messages
         * @interface IRosMessageWrapper
         * @property {ros_messages.RosMessageWrapper.MessageType|null} [type] RosMessageWrapper type
         * @property {number|Long|null} [timestampNs] RosMessageWrapper timestampNs
         * @property {number|null} [sequenceId] RosMessageWrapper sequenceId
         * @property {ros_messages.IPointCloud|null} [pointCloud] RosMessageWrapper pointCloud
         * @property {Uint8Array|null} [rawData] RosMessageWrapper rawData
         * @property {ros_messages.IMastState|null} [mastState] RosMessageWrapper mastState
         */

        /**
         * Constructs a new RosMessageWrapper.
         * @memberof ros_messages
         * @classdesc Represents a RosMessageWrapper.
         * @implements IRosMessageWrapper
         * @constructor
         * @param {ros_messages.IRosMessageWrapper=} [properties] Properties to set
         */
        function RosMessageWrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RosMessageWrapper type.
         * @member {ros_messages.RosMessageWrapper.MessageType} type
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.type = 0;

        /**
         * RosMessageWrapper timestampNs.
         * @member {number|Long} timestampNs
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.timestampNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RosMessageWrapper sequenceId.
         * @member {number} sequenceId
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.sequenceId = 0;

        /**
         * RosMessageWrapper pointCloud.
         * @member {ros_messages.IPointCloud|null|undefined} pointCloud
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.pointCloud = null;

        /**
         * RosMessageWrapper rawData.
         * @member {Uint8Array|null|undefined} rawData
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.rawData = null;

        /**
         * RosMessageWrapper mastState.
         * @member {ros_messages.IMastState|null|undefined} mastState
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.mastState = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * RosMessageWrapper payload.
         * @member {"pointCloud"|"rawData"|"mastState"|undefined} payload
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        Object.defineProperty(RosMessageWrapper.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["pointCloud", "rawData", "mastState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RosMessageWrapper instance using the specified properties.
         * @function create
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {ros_messages.IRosMessageWrapper=} [properties] Properties to set
         * @returns {ros_messages.RosMessageWrapper} RosMessageWrapper instance
         */
        RosMessageWrapper.create = function create(properties) {
            return new RosMessageWrapper(properties);
        };

        /**
         * Encodes the specified RosMessageWrapper message. Does not implicitly {@link ros_messages.RosMessageWrapper.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {ros_messages.IRosMessageWrapper} message RosMessageWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RosMessageWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.timestampNs != null && Object.hasOwnProperty.call(message, "timestampNs"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestampNs);
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sequenceId);
            if (message.pointCloud != null && Object.hasOwnProperty.call(message, "pointCloud"))
                $root.ros_messages.PointCloud.encode(message.pointCloud, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.rawData != null && Object.hasOwnProperty.call(message, "rawData"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.rawData);
            if (message.mastState != null && Object.hasOwnProperty.call(message, "mastState"))
                $root.ros_messages.MastState.encode(message.mastState, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RosMessageWrapper message, length delimited. Does not implicitly {@link ros_messages.RosMessageWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {ros_messages.IRosMessageWrapper} message RosMessageWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RosMessageWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.RosMessageWrapper} RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RosMessageWrapper.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.RosMessageWrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.timestampNs = reader.uint64();
                        break;
                    }
                case 3: {
                        message.sequenceId = reader.uint32();
                        break;
                    }
                case 10: {
                        message.pointCloud = $root.ros_messages.PointCloud.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.rawData = reader.bytes();
                        break;
                    }
                case 12: {
                        message.mastState = $root.ros_messages.MastState.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.RosMessageWrapper} RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RosMessageWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RosMessageWrapper message.
         * @function verify
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RosMessageWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.timestampNs != null && message.hasOwnProperty("timestampNs"))
                if (!$util.isInteger(message.timestampNs) && !(message.timestampNs && $util.isInteger(message.timestampNs.low) && $util.isInteger(message.timestampNs.high)))
                    return "timestampNs: integer|Long expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isInteger(message.sequenceId))
                    return "sequenceId: integer expected";
            if (message.pointCloud != null && message.hasOwnProperty("pointCloud")) {
                properties.payload = 1;
                {
                    let error = $root.ros_messages.PointCloud.verify(message.pointCloud);
                    if (error)
                        return "pointCloud." + error;
                }
            }
            if (message.rawData != null && message.hasOwnProperty("rawData")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData)))
                    return "rawData: buffer expected";
            }
            if (message.mastState != null && message.hasOwnProperty("mastState")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ros_messages.MastState.verify(message.mastState);
                    if (error)
                        return "mastState." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RosMessageWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.RosMessageWrapper} RosMessageWrapper
         */
        RosMessageWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.RosMessageWrapper)
                return object;
            let message = new $root.ros_messages.RosMessageWrapper();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "POINT_CLOUD":
            case 1:
                message.type = 1;
                break;
            case "MAST_STATE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.timestampNs != null)
                if ($util.Long)
                    (message.timestampNs = $util.Long.fromValue(object.timestampNs)).unsigned = true;
                else if (typeof object.timestampNs === "string")
                    message.timestampNs = parseInt(object.timestampNs, 10);
                else if (typeof object.timestampNs === "number")
                    message.timestampNs = object.timestampNs;
                else if (typeof object.timestampNs === "object")
                    message.timestampNs = new $util.LongBits(object.timestampNs.low >>> 0, object.timestampNs.high >>> 0).toNumber(true);
            if (object.sequenceId != null)
                message.sequenceId = object.sequenceId >>> 0;
            if (object.pointCloud != null) {
                if (typeof object.pointCloud !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.pointCloud: object expected");
                message.pointCloud = $root.ros_messages.PointCloud.fromObject(object.pointCloud);
            }
            if (object.rawData != null)
                if (typeof object.rawData === "string")
                    $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);
                else if (object.rawData.length >= 0)
                    message.rawData = object.rawData;
            if (object.mastState != null) {
                if (typeof object.mastState !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.mastState: object expected");
                message.mastState = $root.ros_messages.MastState.fromObject(object.mastState);
            }
            return message;
        };

        /**
         * Creates a plain object from a RosMessageWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {ros_messages.RosMessageWrapper} message RosMessageWrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RosMessageWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timestampNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestampNs = options.longs === String ? "0" : 0;
                object.sequenceId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ros_messages.RosMessageWrapper.MessageType[message.type] === undefined ? message.type : $root.ros_messages.RosMessageWrapper.MessageType[message.type] : message.type;
            if (message.timestampNs != null && message.hasOwnProperty("timestampNs"))
                if (typeof message.timestampNs === "number")
                    object.timestampNs = options.longs === String ? String(message.timestampNs) : message.timestampNs;
                else
                    object.timestampNs = options.longs === String ? $util.Long.prototype.toString.call(message.timestampNs) : options.longs === Number ? new $util.LongBits(message.timestampNs.low >>> 0, message.timestampNs.high >>> 0).toNumber(true) : message.timestampNs;
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                object.sequenceId = message.sequenceId;
            if (message.pointCloud != null && message.hasOwnProperty("pointCloud")) {
                object.pointCloud = $root.ros_messages.PointCloud.toObject(message.pointCloud, options);
                if (options.oneofs)
                    object.payload = "pointCloud";
            }
            if (message.rawData != null && message.hasOwnProperty("rawData")) {
                object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
                if (options.oneofs)
                    object.payload = "rawData";
            }
            if (message.mastState != null && message.hasOwnProperty("mastState")) {
                object.mastState = $root.ros_messages.MastState.toObject(message.mastState, options);
                if (options.oneofs)
                    object.payload = "mastState";
            }
            return object;
        };

        /**
         * Converts this RosMessageWrapper to JSON.
         * @function toJSON
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RosMessageWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RosMessageWrapper
         * @function getTypeUrl
         * @memberof ros_messages.RosMessageWrapper
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RosMessageWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.RosMessageWrapper";
        };

        /**
         * MessageType enum.
         * @name ros_messages.RosMessageWrapper.MessageType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} POINT_CLOUD=1 POINT_CLOUD value
         * @property {number} MAST_STATE=2 MAST_STATE value
         */
        RosMessageWrapper.MessageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT_CLOUD"] = 1;
            values[valuesById[2] = "MAST_STATE"] = 2;
            return values;
        })();

        return RosMessageWrapper;
    })();

    ros_messages.MastState = (function() {

        /**
         * Properties of a MastState.
         * @memberof ros_messages
         * @interface IMastState
         * @property {number|null} [targetHeight] MastState targetHeight
         * @property {number|null} [currentHeight] MastState currentHeight
         * @property {ros_messages.MastState.MotionState|null} [motionState] MastState motionState
         * @property {number|null} [error] MastState error
         * @property {string|null} [errorMessage] MastState errorMessage
         */

        /**
         * Constructs a new MastState.
         * @memberof ros_messages
         * @classdesc Represents a MastState.
         * @implements IMastState
         * @constructor
         * @param {ros_messages.IMastState=} [properties] Properties to set
         */
        function MastState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MastState targetHeight.
         * @member {number} targetHeight
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.targetHeight = 0;

        /**
         * MastState currentHeight.
         * @member {number} currentHeight
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.currentHeight = 0;

        /**
         * MastState motionState.
         * @member {ros_messages.MastState.MotionState} motionState
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.motionState = 0;

        /**
         * MastState error.
         * @member {number} error
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.error = 0;

        /**
         * MastState errorMessage.
         * @member {string} errorMessage
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.errorMessage = "";

        /**
         * Creates a new MastState instance using the specified properties.
         * @function create
         * @memberof ros_messages.MastState
         * @static
         * @param {ros_messages.IMastState=} [properties] Properties to set
         * @returns {ros_messages.MastState} MastState instance
         */
        MastState.create = function create(properties) {
            return new MastState(properties);
        };

        /**
         * Encodes the specified MastState message. Does not implicitly {@link ros_messages.MastState.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.MastState
         * @static
         * @param {ros_messages.IMastState} message MastState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MastState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetHeight != null && Object.hasOwnProperty.call(message, "targetHeight"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.targetHeight);
            if (message.currentHeight != null && Object.hasOwnProperty.call(message, "currentHeight"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.currentHeight);
            if (message.motionState != null && Object.hasOwnProperty.call(message, "motionState"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.motionState);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.error);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified MastState message, length delimited. Does not implicitly {@link ros_messages.MastState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.MastState
         * @static
         * @param {ros_messages.IMastState} message MastState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MastState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MastState message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.MastState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.MastState} MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MastState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.MastState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.targetHeight = reader.float();
                        break;
                    }
                case 2: {
                        message.currentHeight = reader.float();
                        break;
                    }
                case 3: {
                        message.motionState = reader.int32();
                        break;
                    }
                case 4: {
                        message.error = reader.int32();
                        break;
                    }
                case 5: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MastState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.MastState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.MastState} MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MastState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MastState message.
         * @function verify
         * @memberof ros_messages.MastState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MastState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetHeight != null && message.hasOwnProperty("targetHeight"))
                if (typeof message.targetHeight !== "number")
                    return "targetHeight: number expected";
            if (message.currentHeight != null && message.hasOwnProperty("currentHeight"))
                if (typeof message.currentHeight !== "number")
                    return "currentHeight: number expected";
            if (message.motionState != null && message.hasOwnProperty("motionState"))
                switch (message.motionState) {
                default:
                    return "motionState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isInteger(message.error))
                    return "error: integer expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a MastState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.MastState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.MastState} MastState
         */
        MastState.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.MastState)
                return object;
            let message = new $root.ros_messages.MastState();
            if (object.targetHeight != null)
                message.targetHeight = Number(object.targetHeight);
            if (object.currentHeight != null)
                message.currentHeight = Number(object.currentHeight);
            switch (object.motionState) {
            default:
                if (typeof object.motionState === "number") {
                    message.motionState = object.motionState;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.motionState = 0;
                break;
            case "MOVING_HOLD":
            case 1:
                message.motionState = 1;
                break;
            case "MOVING_UP":
            case 2:
                message.motionState = 2;
                break;
            case "MOVING_DOWN":
            case 3:
                message.motionState = 3;
                break;
            }
            if (object.error != null)
                message.error = object.error | 0;
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a MastState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.MastState
         * @static
         * @param {ros_messages.MastState} message MastState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MastState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.targetHeight = 0;
                object.currentHeight = 0;
                object.motionState = options.enums === String ? "UNKNOWN" : 0;
                object.error = 0;
                object.errorMessage = "";
            }
            if (message.targetHeight != null && message.hasOwnProperty("targetHeight"))
                object.targetHeight = options.json && !isFinite(message.targetHeight) ? String(message.targetHeight) : message.targetHeight;
            if (message.currentHeight != null && message.hasOwnProperty("currentHeight"))
                object.currentHeight = options.json && !isFinite(message.currentHeight) ? String(message.currentHeight) : message.currentHeight;
            if (message.motionState != null && message.hasOwnProperty("motionState"))
                object.motionState = options.enums === String ? $root.ros_messages.MastState.MotionState[message.motionState] === undefined ? message.motionState : $root.ros_messages.MastState.MotionState[message.motionState] : message.motionState;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this MastState to JSON.
         * @function toJSON
         * @memberof ros_messages.MastState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MastState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MastState
         * @function getTypeUrl
         * @memberof ros_messages.MastState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MastState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.MastState";
        };

        /**
         * MotionState enum.
         * @name ros_messages.MastState.MotionState
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} MOVING_HOLD=1 MOVING_HOLD value
         * @property {number} MOVING_UP=2 MOVING_UP value
         * @property {number} MOVING_DOWN=3 MOVING_DOWN value
         */
        MastState.MotionState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "MOVING_HOLD"] = 1;
            values[valuesById[2] = "MOVING_UP"] = 2;
            values[valuesById[3] = "MOVING_DOWN"] = 3;
            return values;
        })();

        return MastState;
    })();

    return ros_messages;
})();

export { $root as default };
