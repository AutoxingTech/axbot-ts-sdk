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
         * @property {number|Long|null} [stamp_sec] Header stamp_sec
         * @property {number|Long|null} [stamp_nsec] Header stamp_nsec
         * @property {string|null} [frame_id] Header frame_id
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
         * Header stamp_sec.
         * @member {number|Long} stamp_sec
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.stamp_sec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Header stamp_nsec.
         * @member {number|Long} stamp_nsec
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.stamp_nsec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Header frame_id.
         * @member {string} frame_id
         * @memberof ros_messages.Header
         * @instance
         */
        Header.prototype.frame_id = "";

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
            if (message.stamp_sec != null && Object.hasOwnProperty.call(message, "stamp_sec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stamp_sec);
            if (message.stamp_nsec != null && Object.hasOwnProperty.call(message, "stamp_nsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.stamp_nsec);
            if (message.frame_id != null && Object.hasOwnProperty.call(message, "frame_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.frame_id);
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
                        message.stamp_sec = reader.uint64();
                        break;
                    }
                case 3: {
                        message.stamp_nsec = reader.uint64();
                        break;
                    }
                case 4: {
                        message.frame_id = reader.string();
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
            if (message.stamp_sec != null && message.hasOwnProperty("stamp_sec"))
                if (!$util.isInteger(message.stamp_sec) && !(message.stamp_sec && $util.isInteger(message.stamp_sec.low) && $util.isInteger(message.stamp_sec.high)))
                    return "stamp_sec: integer|Long expected";
            if (message.stamp_nsec != null && message.hasOwnProperty("stamp_nsec"))
                if (!$util.isInteger(message.stamp_nsec) && !(message.stamp_nsec && $util.isInteger(message.stamp_nsec.low) && $util.isInteger(message.stamp_nsec.high)))
                    return "stamp_nsec: integer|Long expected";
            if (message.frame_id != null && message.hasOwnProperty("frame_id"))
                if (!$util.isString(message.frame_id))
                    return "frame_id: string expected";
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
            if (object.stamp_sec != null)
                if ($util.Long)
                    (message.stamp_sec = $util.Long.fromValue(object.stamp_sec)).unsigned = true;
                else if (typeof object.stamp_sec === "string")
                    message.stamp_sec = parseInt(object.stamp_sec, 10);
                else if (typeof object.stamp_sec === "number")
                    message.stamp_sec = object.stamp_sec;
                else if (typeof object.stamp_sec === "object")
                    message.stamp_sec = new $util.LongBits(object.stamp_sec.low >>> 0, object.stamp_sec.high >>> 0).toNumber(true);
            if (object.stamp_nsec != null)
                if ($util.Long)
                    (message.stamp_nsec = $util.Long.fromValue(object.stamp_nsec)).unsigned = true;
                else if (typeof object.stamp_nsec === "string")
                    message.stamp_nsec = parseInt(object.stamp_nsec, 10);
                else if (typeof object.stamp_nsec === "number")
                    message.stamp_nsec = object.stamp_nsec;
                else if (typeof object.stamp_nsec === "object")
                    message.stamp_nsec = new $util.LongBits(object.stamp_nsec.low >>> 0, object.stamp_nsec.high >>> 0).toNumber(true);
            if (object.frame_id != null)
                message.frame_id = String(object.frame_id);
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
                    object.stamp_sec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stamp_sec = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stamp_nsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stamp_nsec = options.longs === String ? "0" : 0;
                object.frame_id = "";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.stamp_sec != null && message.hasOwnProperty("stamp_sec"))
                if (typeof message.stamp_sec === "number")
                    object.stamp_sec = options.longs === String ? String(message.stamp_sec) : message.stamp_sec;
                else
                    object.stamp_sec = options.longs === String ? $util.Long.prototype.toString.call(message.stamp_sec) : options.longs === Number ? new $util.LongBits(message.stamp_sec.low >>> 0, message.stamp_sec.high >>> 0).toNumber(true) : message.stamp_sec;
            if (message.stamp_nsec != null && message.hasOwnProperty("stamp_nsec"))
                if (typeof message.stamp_nsec === "number")
                    object.stamp_nsec = options.longs === String ? String(message.stamp_nsec) : message.stamp_nsec;
                else
                    object.stamp_nsec = options.longs === String ? $util.Long.prototype.toString.call(message.stamp_nsec) : options.longs === Number ? new $util.LongBits(message.stamp_nsec.low >>> 0, message.stamp_nsec.high >>> 0).toNumber(true) : message.stamp_nsec;
            if (message.frame_id != null && message.hasOwnProperty("frame_id"))
                object.frame_id = message.frame_id;
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

    ros_messages.Pose = (function() {

        /**
         * Properties of a Pose.
         * @memberof ros_messages
         * @interface IPose
         * @property {number|null} [x] Pose x
         * @property {number|null} [y] Pose y
         * @property {number|null} [z] Pose z
         * @property {number|null} [qx] Pose qx
         * @property {number|null} [qy] Pose qy
         * @property {number|null} [qz] Pose qz
         * @property {number|null} [qw] Pose qw
         */

        /**
         * Constructs a new Pose.
         * @memberof ros_messages
         * @classdesc Represents a Pose.
         * @implements IPose
         * @constructor
         * @param {ros_messages.IPose=} [properties] Properties to set
         */
        function Pose(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pose x.
         * @member {number} x
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.x = 0;

        /**
         * Pose y.
         * @member {number} y
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.y = 0;

        /**
         * Pose z.
         * @member {number} z
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.z = 0;

        /**
         * Pose qx.
         * @member {number} qx
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.qx = 0;

        /**
         * Pose qy.
         * @member {number} qy
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.qy = 0;

        /**
         * Pose qz.
         * @member {number} qz
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.qz = 0;

        /**
         * Pose qw.
         * @member {number} qw
         * @memberof ros_messages.Pose
         * @instance
         */
        Pose.prototype.qw = 0;

        /**
         * Creates a new Pose instance using the specified properties.
         * @function create
         * @memberof ros_messages.Pose
         * @static
         * @param {ros_messages.IPose=} [properties] Properties to set
         * @returns {ros_messages.Pose} Pose instance
         */
        Pose.create = function create(properties) {
            return new Pose(properties);
        };

        /**
         * Encodes the specified Pose message. Does not implicitly {@link ros_messages.Pose.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.Pose
         * @static
         * @param {ros_messages.IPose} message Pose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
            if (message.qx != null && Object.hasOwnProperty.call(message, "qx"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.qx);
            if (message.qy != null && Object.hasOwnProperty.call(message, "qy"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.qy);
            if (message.qz != null && Object.hasOwnProperty.call(message, "qz"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.qz);
            if (message.qw != null && Object.hasOwnProperty.call(message, "qw"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.qw);
            return writer;
        };

        /**
         * Encodes the specified Pose message, length delimited. Does not implicitly {@link ros_messages.Pose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.Pose
         * @static
         * @param {ros_messages.IPose} message Pose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pose message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.Pose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.Pose} Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pose.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.Pose();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.double();
                        break;
                    }
                case 2: {
                        message.y = reader.double();
                        break;
                    }
                case 3: {
                        message.z = reader.double();
                        break;
                    }
                case 4: {
                        message.qx = reader.double();
                        break;
                    }
                case 5: {
                        message.qy = reader.double();
                        break;
                    }
                case 6: {
                        message.qz = reader.double();
                        break;
                    }
                case 7: {
                        message.qw = reader.double();
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
         * Decodes a Pose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.Pose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.Pose} Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pose message.
         * @function verify
         * @memberof ros_messages.Pose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.qx != null && message.hasOwnProperty("qx"))
                if (typeof message.qx !== "number")
                    return "qx: number expected";
            if (message.qy != null && message.hasOwnProperty("qy"))
                if (typeof message.qy !== "number")
                    return "qy: number expected";
            if (message.qz != null && message.hasOwnProperty("qz"))
                if (typeof message.qz !== "number")
                    return "qz: number expected";
            if (message.qw != null && message.hasOwnProperty("qw"))
                if (typeof message.qw !== "number")
                    return "qw: number expected";
            return null;
        };

        /**
         * Creates a Pose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.Pose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.Pose} Pose
         */
        Pose.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.Pose)
                return object;
            let message = new $root.ros_messages.Pose();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.qx != null)
                message.qx = Number(object.qx);
            if (object.qy != null)
                message.qy = Number(object.qy);
            if (object.qz != null)
                message.qz = Number(object.qz);
            if (object.qw != null)
                message.qw = Number(object.qw);
            return message;
        };

        /**
         * Creates a plain object from a Pose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.Pose
         * @static
         * @param {ros_messages.Pose} message Pose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.qx = 0;
                object.qy = 0;
                object.qz = 0;
                object.qw = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.qx != null && message.hasOwnProperty("qx"))
                object.qx = options.json && !isFinite(message.qx) ? String(message.qx) : message.qx;
            if (message.qy != null && message.hasOwnProperty("qy"))
                object.qy = options.json && !isFinite(message.qy) ? String(message.qy) : message.qy;
            if (message.qz != null && message.hasOwnProperty("qz"))
                object.qz = options.json && !isFinite(message.qz) ? String(message.qz) : message.qz;
            if (message.qw != null && message.hasOwnProperty("qw"))
                object.qw = options.json && !isFinite(message.qw) ? String(message.qw) : message.qw;
            return object;
        };

        /**
         * Converts this Pose to JSON.
         * @function toJSON
         * @memberof ros_messages.Pose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pose
         * @function getTypeUrl
         * @memberof ros_messages.Pose
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pose.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.Pose";
        };

        return Pose;
    })();

    ros_messages.PointCloud = (function() {

        /**
         * Properties of a PointCloud.
         * @memberof ros_messages
         * @interface IPointCloud
         * @property {ros_messages.IHeader|null} [header] PointCloud header
         * @property {number|null} [point_number] PointCloud point_number
         * @property {number|null} [center_x] PointCloud center_x
         * @property {number|null} [center_y] PointCloud center_y
         * @property {number|null} [center_z] PointCloud center_z
         * @property {number|null} [resolution] PointCloud resolution
         * @property {Array.<number>|null} [xs] PointCloud xs
         * @property {Array.<number>|null} [ys] PointCloud ys
         * @property {Array.<number>|null} [zs] PointCloud zs
         * @property {Uint8Array|null} [intensities] PointCloud intensities
         * @property {boolean|null} [is_delta_encoded] PointCloud is_delta_encoded
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
         * PointCloud point_number.
         * @member {number} point_number
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.point_number = 0;

        /**
         * PointCloud center_x.
         * @member {number} center_x
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.center_x = 0;

        /**
         * PointCloud center_y.
         * @member {number} center_y
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.center_y = 0;

        /**
         * PointCloud center_z.
         * @member {number} center_z
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.center_z = 0;

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
         * PointCloud is_delta_encoded.
         * @member {boolean} is_delta_encoded
         * @memberof ros_messages.PointCloud
         * @instance
         */
        PointCloud.prototype.is_delta_encoded = false;

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
            if (message.point_number != null && Object.hasOwnProperty.call(message, "point_number"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.point_number);
            if (message.center_x != null && Object.hasOwnProperty.call(message, "center_x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.center_x);
            if (message.center_y != null && Object.hasOwnProperty.call(message, "center_y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.center_y);
            if (message.center_z != null && Object.hasOwnProperty.call(message, "center_z"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.center_z);
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
            if (message.is_delta_encoded != null && Object.hasOwnProperty.call(message, "is_delta_encoded"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_delta_encoded);
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
                        message.point_number = reader.uint32();
                        break;
                    }
                case 3: {
                        message.center_x = reader.double();
                        break;
                    }
                case 4: {
                        message.center_y = reader.double();
                        break;
                    }
                case 5: {
                        message.center_z = reader.double();
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
                        message.is_delta_encoded = reader.bool();
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
            if (message.point_number != null && message.hasOwnProperty("point_number"))
                if (!$util.isInteger(message.point_number))
                    return "point_number: integer expected";
            if (message.center_x != null && message.hasOwnProperty("center_x"))
                if (typeof message.center_x !== "number")
                    return "center_x: number expected";
            if (message.center_y != null && message.hasOwnProperty("center_y"))
                if (typeof message.center_y !== "number")
                    return "center_y: number expected";
            if (message.center_z != null && message.hasOwnProperty("center_z"))
                if (typeof message.center_z !== "number")
                    return "center_z: number expected";
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
            if (message.is_delta_encoded != null && message.hasOwnProperty("is_delta_encoded"))
                if (typeof message.is_delta_encoded !== "boolean")
                    return "is_delta_encoded: boolean expected";
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
            if (object.point_number != null)
                message.point_number = object.point_number >>> 0;
            if (object.center_x != null)
                message.center_x = Number(object.center_x);
            if (object.center_y != null)
                message.center_y = Number(object.center_y);
            if (object.center_z != null)
                message.center_z = Number(object.center_z);
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
            if (object.is_delta_encoded != null)
                message.is_delta_encoded = Boolean(object.is_delta_encoded);
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
                object.point_number = 0;
                object.center_x = 0;
                object.center_y = 0;
                object.center_z = 0;
                object.resolution = 0;
                if (options.bytes === String)
                    object.intensities = "";
                else {
                    object.intensities = [];
                    if (options.bytes !== Array)
                        object.intensities = $util.newBuffer(object.intensities);
                }
                object.is_delta_encoded = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.ros_messages.Header.toObject(message.header, options);
            if (message.point_number != null && message.hasOwnProperty("point_number"))
                object.point_number = message.point_number;
            if (message.center_x != null && message.hasOwnProperty("center_x"))
                object.center_x = options.json && !isFinite(message.center_x) ? String(message.center_x) : message.center_x;
            if (message.center_y != null && message.hasOwnProperty("center_y"))
                object.center_y = options.json && !isFinite(message.center_y) ? String(message.center_y) : message.center_y;
            if (message.center_z != null && message.hasOwnProperty("center_z"))
                object.center_z = options.json && !isFinite(message.center_z) ? String(message.center_z) : message.center_z;
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
            if (message.is_delta_encoded != null && message.hasOwnProperty("is_delta_encoded"))
                object.is_delta_encoded = message.is_delta_encoded;
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

    ros_messages.MastState = (function() {

        /**
         * Properties of a MastState.
         * @memberof ros_messages
         * @interface IMastState
         * @property {number|null} [target_height] MastState target_height
         * @property {number|null} [current_height] MastState current_height
         * @property {ros_messages.MastState.MotionState|null} [motion_state] MastState motion_state
         * @property {number|null} [error] MastState error
         * @property {string|null} [error_message] MastState error_message
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
         * MastState target_height.
         * @member {number} target_height
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.target_height = 0;

        /**
         * MastState current_height.
         * @member {number} current_height
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.current_height = 0;

        /**
         * MastState motion_state.
         * @member {ros_messages.MastState.MotionState} motion_state
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.motion_state = 0;

        /**
         * MastState error.
         * @member {number} error
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.error = 0;

        /**
         * MastState error_message.
         * @member {string} error_message
         * @memberof ros_messages.MastState
         * @instance
         */
        MastState.prototype.error_message = "";

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
            if (message.target_height != null && Object.hasOwnProperty.call(message, "target_height"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.target_height);
            if (message.current_height != null && Object.hasOwnProperty.call(message, "current_height"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.current_height);
            if (message.motion_state != null && Object.hasOwnProperty.call(message, "motion_state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.motion_state);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.error);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.error_message);
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
                        message.target_height = reader.float();
                        break;
                    }
                case 2: {
                        message.current_height = reader.float();
                        break;
                    }
                case 3: {
                        message.motion_state = reader.int32();
                        break;
                    }
                case 4: {
                        message.error = reader.int32();
                        break;
                    }
                case 5: {
                        message.error_message = reader.string();
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
            if (message.target_height != null && message.hasOwnProperty("target_height"))
                if (typeof message.target_height !== "number")
                    return "target_height: number expected";
            if (message.current_height != null && message.hasOwnProperty("current_height"))
                if (typeof message.current_height !== "number")
                    return "current_height: number expected";
            if (message.motion_state != null && message.hasOwnProperty("motion_state"))
                switch (message.motion_state) {
                default:
                    return "motion_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isInteger(message.error))
                    return "error: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
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
            if (object.target_height != null)
                message.target_height = Number(object.target_height);
            if (object.current_height != null)
                message.current_height = Number(object.current_height);
            switch (object.motion_state) {
            default:
                if (typeof object.motion_state === "number") {
                    message.motion_state = object.motion_state;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.motion_state = 0;
                break;
            case "MOVING_HOLD":
            case 1:
                message.motion_state = 1;
                break;
            case "MOVING_UP":
            case 2:
                message.motion_state = 2;
                break;
            case "MOVING_DOWN":
            case 3:
                message.motion_state = 3;
                break;
            }
            if (object.error != null)
                message.error = object.error | 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
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
                object.target_height = 0;
                object.current_height = 0;
                object.motion_state = options.enums === String ? "UNKNOWN" : 0;
                object.error = 0;
                object.error_message = "";
            }
            if (message.target_height != null && message.hasOwnProperty("target_height"))
                object.target_height = options.json && !isFinite(message.target_height) ? String(message.target_height) : message.target_height;
            if (message.current_height != null && message.hasOwnProperty("current_height"))
                object.current_height = options.json && !isFinite(message.current_height) ? String(message.current_height) : message.current_height;
            if (message.motion_state != null && message.hasOwnProperty("motion_state"))
                object.motion_state = options.enums === String ? $root.ros_messages.MastState.MotionState[message.motion_state] === undefined ? message.motion_state : $root.ros_messages.MastState.MotionState[message.motion_state] : message.motion_state;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
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

    ros_messages.SubmapEntry = (function() {

        /**
         * Properties of a SubmapEntry.
         * @memberof ros_messages
         * @interface ISubmapEntry
         * @property {number|null} [trajectory_id] SubmapEntry trajectory_id
         * @property {number|null} [submap_index] SubmapEntry submap_index
         * @property {number|null} [submap_version] SubmapEntry submap_version
         * @property {ros_messages.IPose|null} [pose] SubmapEntry pose
         * @property {boolean|null} [is_frozen] SubmapEntry is_frozen
         * @property {boolean|null} [is_incremental_submap] SubmapEntry is_incremental_submap
         * @property {boolean|null} [is_nearby_map] SubmapEntry is_nearby_map
         */

        /**
         * Constructs a new SubmapEntry.
         * @memberof ros_messages
         * @classdesc Represents a SubmapEntry.
         * @implements ISubmapEntry
         * @constructor
         * @param {ros_messages.ISubmapEntry=} [properties] Properties to set
         */
        function SubmapEntry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmapEntry trajectory_id.
         * @member {number} trajectory_id
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.trajectory_id = 0;

        /**
         * SubmapEntry submap_index.
         * @member {number} submap_index
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.submap_index = 0;

        /**
         * SubmapEntry submap_version.
         * @member {number} submap_version
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.submap_version = 0;

        /**
         * SubmapEntry pose.
         * @member {ros_messages.IPose|null|undefined} pose
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.pose = null;

        /**
         * SubmapEntry is_frozen.
         * @member {boolean} is_frozen
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.is_frozen = false;

        /**
         * SubmapEntry is_incremental_submap.
         * @member {boolean} is_incremental_submap
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.is_incremental_submap = false;

        /**
         * SubmapEntry is_nearby_map.
         * @member {boolean} is_nearby_map
         * @memberof ros_messages.SubmapEntry
         * @instance
         */
        SubmapEntry.prototype.is_nearby_map = false;

        /**
         * Creates a new SubmapEntry instance using the specified properties.
         * @function create
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {ros_messages.ISubmapEntry=} [properties] Properties to set
         * @returns {ros_messages.SubmapEntry} SubmapEntry instance
         */
        SubmapEntry.create = function create(properties) {
            return new SubmapEntry(properties);
        };

        /**
         * Encodes the specified SubmapEntry message. Does not implicitly {@link ros_messages.SubmapEntry.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {ros_messages.ISubmapEntry} message SubmapEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trajectory_id != null && Object.hasOwnProperty.call(message, "trajectory_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.trajectory_id);
            if (message.submap_index != null && Object.hasOwnProperty.call(message, "submap_index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.submap_index);
            if (message.submap_version != null && Object.hasOwnProperty.call(message, "submap_version"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.submap_version);
            if (message.pose != null && Object.hasOwnProperty.call(message, "pose"))
                $root.ros_messages.Pose.encode(message.pose, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.is_frozen != null && Object.hasOwnProperty.call(message, "is_frozen"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_frozen);
            if (message.is_incremental_submap != null && Object.hasOwnProperty.call(message, "is_incremental_submap"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_incremental_submap);
            if (message.is_nearby_map != null && Object.hasOwnProperty.call(message, "is_nearby_map"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.is_nearby_map);
            return writer;
        };

        /**
         * Encodes the specified SubmapEntry message, length delimited. Does not implicitly {@link ros_messages.SubmapEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {ros_messages.ISubmapEntry} message SubmapEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmapEntry message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.SubmapEntry} SubmapEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapEntry.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.SubmapEntry();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.trajectory_id = reader.int32();
                        break;
                    }
                case 2: {
                        message.submap_index = reader.int32();
                        break;
                    }
                case 3: {
                        message.submap_version = reader.int32();
                        break;
                    }
                case 4: {
                        message.pose = $root.ros_messages.Pose.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.is_frozen = reader.bool();
                        break;
                    }
                case 12: {
                        message.is_incremental_submap = reader.bool();
                        break;
                    }
                case 13: {
                        message.is_nearby_map = reader.bool();
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
         * Decodes a SubmapEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.SubmapEntry} SubmapEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmapEntry message.
         * @function verify
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmapEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trajectory_id != null && message.hasOwnProperty("trajectory_id"))
                if (!$util.isInteger(message.trajectory_id))
                    return "trajectory_id: integer expected";
            if (message.submap_index != null && message.hasOwnProperty("submap_index"))
                if (!$util.isInteger(message.submap_index))
                    return "submap_index: integer expected";
            if (message.submap_version != null && message.hasOwnProperty("submap_version"))
                if (!$util.isInteger(message.submap_version))
                    return "submap_version: integer expected";
            if (message.pose != null && message.hasOwnProperty("pose")) {
                let error = $root.ros_messages.Pose.verify(message.pose);
                if (error)
                    return "pose." + error;
            }
            if (message.is_frozen != null && message.hasOwnProperty("is_frozen"))
                if (typeof message.is_frozen !== "boolean")
                    return "is_frozen: boolean expected";
            if (message.is_incremental_submap != null && message.hasOwnProperty("is_incremental_submap"))
                if (typeof message.is_incremental_submap !== "boolean")
                    return "is_incremental_submap: boolean expected";
            if (message.is_nearby_map != null && message.hasOwnProperty("is_nearby_map"))
                if (typeof message.is_nearby_map !== "boolean")
                    return "is_nearby_map: boolean expected";
            return null;
        };

        /**
         * Creates a SubmapEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.SubmapEntry} SubmapEntry
         */
        SubmapEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.SubmapEntry)
                return object;
            let message = new $root.ros_messages.SubmapEntry();
            if (object.trajectory_id != null)
                message.trajectory_id = object.trajectory_id | 0;
            if (object.submap_index != null)
                message.submap_index = object.submap_index | 0;
            if (object.submap_version != null)
                message.submap_version = object.submap_version | 0;
            if (object.pose != null) {
                if (typeof object.pose !== "object")
                    throw TypeError(".ros_messages.SubmapEntry.pose: object expected");
                message.pose = $root.ros_messages.Pose.fromObject(object.pose);
            }
            if (object.is_frozen != null)
                message.is_frozen = Boolean(object.is_frozen);
            if (object.is_incremental_submap != null)
                message.is_incremental_submap = Boolean(object.is_incremental_submap);
            if (object.is_nearby_map != null)
                message.is_nearby_map = Boolean(object.is_nearby_map);
            return message;
        };

        /**
         * Creates a plain object from a SubmapEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {ros_messages.SubmapEntry} message SubmapEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmapEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.trajectory_id = 0;
                object.submap_index = 0;
                object.submap_version = 0;
                object.pose = null;
                object.is_frozen = false;
                object.is_incremental_submap = false;
                object.is_nearby_map = false;
            }
            if (message.trajectory_id != null && message.hasOwnProperty("trajectory_id"))
                object.trajectory_id = message.trajectory_id;
            if (message.submap_index != null && message.hasOwnProperty("submap_index"))
                object.submap_index = message.submap_index;
            if (message.submap_version != null && message.hasOwnProperty("submap_version"))
                object.submap_version = message.submap_version;
            if (message.pose != null && message.hasOwnProperty("pose"))
                object.pose = $root.ros_messages.Pose.toObject(message.pose, options);
            if (message.is_frozen != null && message.hasOwnProperty("is_frozen"))
                object.is_frozen = message.is_frozen;
            if (message.is_incremental_submap != null && message.hasOwnProperty("is_incremental_submap"))
                object.is_incremental_submap = message.is_incremental_submap;
            if (message.is_nearby_map != null && message.hasOwnProperty("is_nearby_map"))
                object.is_nearby_map = message.is_nearby_map;
            return object;
        };

        /**
         * Converts this SubmapEntry to JSON.
         * @function toJSON
         * @memberof ros_messages.SubmapEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmapEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubmapEntry
         * @function getTypeUrl
         * @memberof ros_messages.SubmapEntry
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubmapEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.SubmapEntry";
        };

        return SubmapEntry;
    })();

    ros_messages.SubmapList = (function() {

        /**
         * Properties of a SubmapList.
         * @memberof ros_messages
         * @interface ISubmapList
         * @property {ros_messages.SubmapList.SlamState|null} [slam_state] SubmapList slam_state
         * @property {string|null} [uuid] SubmapList uuid
         * @property {Array.<ros_messages.ISubmapEntry>|null} [submap] SubmapList submap
         */

        /**
         * Constructs a new SubmapList.
         * @memberof ros_messages
         * @classdesc Represents a SubmapList.
         * @implements ISubmapList
         * @constructor
         * @param {ros_messages.ISubmapList=} [properties] Properties to set
         */
        function SubmapList(properties) {
            this.submap = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmapList slam_state.
         * @member {ros_messages.SubmapList.SlamState} slam_state
         * @memberof ros_messages.SubmapList
         * @instance
         */
        SubmapList.prototype.slam_state = 0;

        /**
         * SubmapList uuid.
         * @member {string} uuid
         * @memberof ros_messages.SubmapList
         * @instance
         */
        SubmapList.prototype.uuid = "";

        /**
         * SubmapList submap.
         * @member {Array.<ros_messages.ISubmapEntry>} submap
         * @memberof ros_messages.SubmapList
         * @instance
         */
        SubmapList.prototype.submap = $util.emptyArray;

        /**
         * Creates a new SubmapList instance using the specified properties.
         * @function create
         * @memberof ros_messages.SubmapList
         * @static
         * @param {ros_messages.ISubmapList=} [properties] Properties to set
         * @returns {ros_messages.SubmapList} SubmapList instance
         */
        SubmapList.create = function create(properties) {
            return new SubmapList(properties);
        };

        /**
         * Encodes the specified SubmapList message. Does not implicitly {@link ros_messages.SubmapList.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.SubmapList
         * @static
         * @param {ros_messages.ISubmapList} message SubmapList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slam_state != null && Object.hasOwnProperty.call(message, "slam_state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slam_state);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            if (message.submap != null && message.submap.length)
                for (let i = 0; i < message.submap.length; ++i)
                    $root.ros_messages.SubmapEntry.encode(message.submap[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubmapList message, length delimited. Does not implicitly {@link ros_messages.SubmapList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.SubmapList
         * @static
         * @param {ros_messages.ISubmapList} message SubmapList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmapList message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.SubmapList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.SubmapList} SubmapList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.SubmapList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.slam_state = reader.int32();
                        break;
                    }
                case 2: {
                        message.uuid = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.submap && message.submap.length))
                            message.submap = [];
                        message.submap.push($root.ros_messages.SubmapEntry.decode(reader, reader.uint32()));
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
         * Decodes a SubmapList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.SubmapList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.SubmapList} SubmapList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmapList message.
         * @function verify
         * @memberof ros_messages.SubmapList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmapList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slam_state != null && message.hasOwnProperty("slam_state"))
                switch (message.slam_state) {
                default:
                    return "slam_state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.submap != null && message.hasOwnProperty("submap")) {
                if (!Array.isArray(message.submap))
                    return "submap: array expected";
                for (let i = 0; i < message.submap.length; ++i) {
                    let error = $root.ros_messages.SubmapEntry.verify(message.submap[i]);
                    if (error)
                        return "submap." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SubmapList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.SubmapList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.SubmapList} SubmapList
         */
        SubmapList.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.SubmapList)
                return object;
            let message = new $root.ros_messages.SubmapList();
            switch (object.slam_state) {
            default:
                if (typeof object.slam_state === "number") {
                    message.slam_state = object.slam_state;
                    break;
                }
                break;
            case "SLAM_STATE_INVALID":
            case 0:
                message.slam_state = 0;
                break;
            case "SLAM_STATE_SLAM":
            case 1:
                message.slam_state = 1;
                break;
            case "SLAM_STATE_POSITIONING":
            case 2:
                message.slam_state = 2;
                break;
            }
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.submap) {
                if (!Array.isArray(object.submap))
                    throw TypeError(".ros_messages.SubmapList.submap: array expected");
                message.submap = [];
                for (let i = 0; i < object.submap.length; ++i) {
                    if (typeof object.submap[i] !== "object")
                        throw TypeError(".ros_messages.SubmapList.submap: object expected");
                    message.submap[i] = $root.ros_messages.SubmapEntry.fromObject(object.submap[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmapList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.SubmapList
         * @static
         * @param {ros_messages.SubmapList} message SubmapList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmapList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.submap = [];
            if (options.defaults) {
                object.slam_state = options.enums === String ? "SLAM_STATE_INVALID" : 0;
                object.uuid = "";
            }
            if (message.slam_state != null && message.hasOwnProperty("slam_state"))
                object.slam_state = options.enums === String ? $root.ros_messages.SubmapList.SlamState[message.slam_state] === undefined ? message.slam_state : $root.ros_messages.SubmapList.SlamState[message.slam_state] : message.slam_state;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.submap && message.submap.length) {
                object.submap = [];
                for (let j = 0; j < message.submap.length; ++j)
                    object.submap[j] = $root.ros_messages.SubmapEntry.toObject(message.submap[j], options);
            }
            return object;
        };

        /**
         * Converts this SubmapList to JSON.
         * @function toJSON
         * @memberof ros_messages.SubmapList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmapList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubmapList
         * @function getTypeUrl
         * @memberof ros_messages.SubmapList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubmapList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.SubmapList";
        };

        /**
         * SlamState enum.
         * @name ros_messages.SubmapList.SlamState
         * @enum {number}
         * @property {number} SLAM_STATE_INVALID=0 SLAM_STATE_INVALID value
         * @property {number} SLAM_STATE_SLAM=1 SLAM_STATE_SLAM value
         * @property {number} SLAM_STATE_POSITIONING=2 SLAM_STATE_POSITIONING value
         */
        SubmapList.SlamState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SLAM_STATE_INVALID"] = 0;
            values[valuesById[1] = "SLAM_STATE_SLAM"] = 1;
            values[valuesById[2] = "SLAM_STATE_POSITIONING"] = 2;
            return values;
        })();

        return SubmapList;
    })();

    ros_messages.StatusResponse = (function() {

        /**
         * Properties of a StatusResponse.
         * @memberof ros_messages
         * @interface IStatusResponse
         * @property {number|null} [code] StatusResponse code
         * @property {string|null} [message] StatusResponse message
         */

        /**
         * Constructs a new StatusResponse.
         * @memberof ros_messages
         * @classdesc Represents a StatusResponse.
         * @implements IStatusResponse
         * @constructor
         * @param {ros_messages.IStatusResponse=} [properties] Properties to set
         */
        function StatusResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatusResponse code.
         * @member {number} code
         * @memberof ros_messages.StatusResponse
         * @instance
         */
        StatusResponse.prototype.code = 0;

        /**
         * StatusResponse message.
         * @member {string} message
         * @memberof ros_messages.StatusResponse
         * @instance
         */
        StatusResponse.prototype.message = "";

        /**
         * Creates a new StatusResponse instance using the specified properties.
         * @function create
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {ros_messages.IStatusResponse=} [properties] Properties to set
         * @returns {ros_messages.StatusResponse} StatusResponse instance
         */
        StatusResponse.create = function create(properties) {
            return new StatusResponse(properties);
        };

        /**
         * Encodes the specified StatusResponse message. Does not implicitly {@link ros_messages.StatusResponse.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {ros_messages.IStatusResponse} message StatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link ros_messages.StatusResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {ros_messages.IStatusResponse} message StatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StatusResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.StatusResponse} StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.StatusResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
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
         * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.StatusResponse} StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StatusResponse message.
         * @function verify
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StatusResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.StatusResponse} StatusResponse
         */
        StatusResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.StatusResponse)
                return object;
            let message = new $root.ros_messages.StatusResponse();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {ros_messages.StatusResponse} message StatusResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StatusResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this StatusResponse to JSON.
         * @function toJSON
         * @memberof ros_messages.StatusResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatusResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StatusResponse
         * @function getTypeUrl
         * @memberof ros_messages.StatusResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StatusResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.StatusResponse";
        };

        return StatusResponse;
    })();

    ros_messages.SubmapTexture = (function() {

        /**
         * Properties of a SubmapTexture.
         * @memberof ros_messages
         * @interface ISubmapTexture
         * @property {number|null} [cell_format] SubmapTexture cell_format
         * @property {Uint8Array|null} [cells] SubmapTexture cells
         * @property {number|null} [width] SubmapTexture width
         * @property {number|null} [height] SubmapTexture height
         * @property {number|null} [resolution] SubmapTexture resolution
         * @property {number|null} [z_level] SubmapTexture z_level
         * @property {ros_messages.IPose|null} [slice_pose] SubmapTexture slice_pose
         */

        /**
         * Constructs a new SubmapTexture.
         * @memberof ros_messages
         * @classdesc Represents a SubmapTexture.
         * @implements ISubmapTexture
         * @constructor
         * @param {ros_messages.ISubmapTexture=} [properties] Properties to set
         */
        function SubmapTexture(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmapTexture cell_format.
         * @member {number} cell_format
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.cell_format = 0;

        /**
         * SubmapTexture cells.
         * @member {Uint8Array} cells
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.cells = $util.newBuffer([]);

        /**
         * SubmapTexture width.
         * @member {number} width
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.width = 0;

        /**
         * SubmapTexture height.
         * @member {number} height
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.height = 0;

        /**
         * SubmapTexture resolution.
         * @member {number} resolution
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.resolution = 0;

        /**
         * SubmapTexture z_level.
         * @member {number} z_level
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.z_level = 0;

        /**
         * SubmapTexture slice_pose.
         * @member {ros_messages.IPose|null|undefined} slice_pose
         * @memberof ros_messages.SubmapTexture
         * @instance
         */
        SubmapTexture.prototype.slice_pose = null;

        /**
         * Creates a new SubmapTexture instance using the specified properties.
         * @function create
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {ros_messages.ISubmapTexture=} [properties] Properties to set
         * @returns {ros_messages.SubmapTexture} SubmapTexture instance
         */
        SubmapTexture.create = function create(properties) {
            return new SubmapTexture(properties);
        };

        /**
         * Encodes the specified SubmapTexture message. Does not implicitly {@link ros_messages.SubmapTexture.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {ros_messages.ISubmapTexture} message SubmapTexture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapTexture.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cell_format != null && Object.hasOwnProperty.call(message, "cell_format"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cell_format);
            if (message.cells != null && Object.hasOwnProperty.call(message, "cells"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cells);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.height);
            if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.resolution);
            if (message.z_level != null && Object.hasOwnProperty.call(message, "z_level"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.z_level);
            if (message.slice_pose != null && Object.hasOwnProperty.call(message, "slice_pose"))
                $root.ros_messages.Pose.encode(message.slice_pose, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubmapTexture message, length delimited. Does not implicitly {@link ros_messages.SubmapTexture.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {ros_messages.ISubmapTexture} message SubmapTexture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapTexture.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmapTexture message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.SubmapTexture} SubmapTexture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapTexture.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.SubmapTexture();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cell_format = reader.int32();
                        break;
                    }
                case 2: {
                        message.cells = reader.bytes();
                        break;
                    }
                case 3: {
                        message.width = reader.int32();
                        break;
                    }
                case 4: {
                        message.height = reader.int32();
                        break;
                    }
                case 5: {
                        message.resolution = reader.double();
                        break;
                    }
                case 6: {
                        message.z_level = reader.int32();
                        break;
                    }
                case 7: {
                        message.slice_pose = $root.ros_messages.Pose.decode(reader, reader.uint32());
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
         * Decodes a SubmapTexture message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.SubmapTexture} SubmapTexture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapTexture.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmapTexture message.
         * @function verify
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmapTexture.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cell_format != null && message.hasOwnProperty("cell_format"))
                if (!$util.isInteger(message.cell_format))
                    return "cell_format: integer expected";
            if (message.cells != null && message.hasOwnProperty("cells"))
                if (!(message.cells && typeof message.cells.length === "number" || $util.isString(message.cells)))
                    return "cells: buffer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                if (typeof message.resolution !== "number")
                    return "resolution: number expected";
            if (message.z_level != null && message.hasOwnProperty("z_level"))
                if (!$util.isInteger(message.z_level))
                    return "z_level: integer expected";
            if (message.slice_pose != null && message.hasOwnProperty("slice_pose")) {
                let error = $root.ros_messages.Pose.verify(message.slice_pose);
                if (error)
                    return "slice_pose." + error;
            }
            return null;
        };

        /**
         * Creates a SubmapTexture message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.SubmapTexture} SubmapTexture
         */
        SubmapTexture.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.SubmapTexture)
                return object;
            let message = new $root.ros_messages.SubmapTexture();
            if (object.cell_format != null)
                message.cell_format = object.cell_format | 0;
            if (object.cells != null)
                if (typeof object.cells === "string")
                    $util.base64.decode(object.cells, message.cells = $util.newBuffer($util.base64.length(object.cells)), 0);
                else if (object.cells.length >= 0)
                    message.cells = object.cells;
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.resolution != null)
                message.resolution = Number(object.resolution);
            if (object.z_level != null)
                message.z_level = object.z_level | 0;
            if (object.slice_pose != null) {
                if (typeof object.slice_pose !== "object")
                    throw TypeError(".ros_messages.SubmapTexture.slice_pose: object expected");
                message.slice_pose = $root.ros_messages.Pose.fromObject(object.slice_pose);
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmapTexture message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {ros_messages.SubmapTexture} message SubmapTexture
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmapTexture.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cell_format = 0;
                if (options.bytes === String)
                    object.cells = "";
                else {
                    object.cells = [];
                    if (options.bytes !== Array)
                        object.cells = $util.newBuffer(object.cells);
                }
                object.width = 0;
                object.height = 0;
                object.resolution = 0;
                object.z_level = 0;
                object.slice_pose = null;
            }
            if (message.cell_format != null && message.hasOwnProperty("cell_format"))
                object.cell_format = message.cell_format;
            if (message.cells != null && message.hasOwnProperty("cells"))
                object.cells = options.bytes === String ? $util.base64.encode(message.cells, 0, message.cells.length) : options.bytes === Array ? Array.prototype.slice.call(message.cells) : message.cells;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                object.resolution = options.json && !isFinite(message.resolution) ? String(message.resolution) : message.resolution;
            if (message.z_level != null && message.hasOwnProperty("z_level"))
                object.z_level = message.z_level;
            if (message.slice_pose != null && message.hasOwnProperty("slice_pose"))
                object.slice_pose = $root.ros_messages.Pose.toObject(message.slice_pose, options);
            return object;
        };

        /**
         * Converts this SubmapTexture to JSON.
         * @function toJSON
         * @memberof ros_messages.SubmapTexture
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmapTexture.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubmapTexture
         * @function getTypeUrl
         * @memberof ros_messages.SubmapTexture
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubmapTexture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.SubmapTexture";
        };

        return SubmapTexture;
    })();

    ros_messages.SubmapQueryV2Response = (function() {

        /**
         * Properties of a SubmapQueryV2Response.
         * @memberof ros_messages
         * @interface ISubmapQueryV2Response
         * @property {ros_messages.IStatusResponse|null} [status] SubmapQueryV2Response status
         * @property {number|null} [submap_version] SubmapQueryV2Response submap_version
         * @property {Array.<ros_messages.ISubmapTexture>|null} [textures] SubmapQueryV2Response textures
         */

        /**
         * Constructs a new SubmapQueryV2Response.
         * @memberof ros_messages
         * @classdesc Represents a SubmapQueryV2Response.
         * @implements ISubmapQueryV2Response
         * @constructor
         * @param {ros_messages.ISubmapQueryV2Response=} [properties] Properties to set
         */
        function SubmapQueryV2Response(properties) {
            this.textures = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmapQueryV2Response status.
         * @member {ros_messages.IStatusResponse|null|undefined} status
         * @memberof ros_messages.SubmapQueryV2Response
         * @instance
         */
        SubmapQueryV2Response.prototype.status = null;

        /**
         * SubmapQueryV2Response submap_version.
         * @member {number} submap_version
         * @memberof ros_messages.SubmapQueryV2Response
         * @instance
         */
        SubmapQueryV2Response.prototype.submap_version = 0;

        /**
         * SubmapQueryV2Response textures.
         * @member {Array.<ros_messages.ISubmapTexture>} textures
         * @memberof ros_messages.SubmapQueryV2Response
         * @instance
         */
        SubmapQueryV2Response.prototype.textures = $util.emptyArray;

        /**
         * Creates a new SubmapQueryV2Response instance using the specified properties.
         * @function create
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {ros_messages.ISubmapQueryV2Response=} [properties] Properties to set
         * @returns {ros_messages.SubmapQueryV2Response} SubmapQueryV2Response instance
         */
        SubmapQueryV2Response.create = function create(properties) {
            return new SubmapQueryV2Response(properties);
        };

        /**
         * Encodes the specified SubmapQueryV2Response message. Does not implicitly {@link ros_messages.SubmapQueryV2Response.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {ros_messages.ISubmapQueryV2Response} message SubmapQueryV2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapQueryV2Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.ros_messages.StatusResponse.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.submap_version != null && Object.hasOwnProperty.call(message, "submap_version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.submap_version);
            if (message.textures != null && message.textures.length)
                for (let i = 0; i < message.textures.length; ++i)
                    $root.ros_messages.SubmapTexture.encode(message.textures[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubmapQueryV2Response message, length delimited. Does not implicitly {@link ros_messages.SubmapQueryV2Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {ros_messages.ISubmapQueryV2Response} message SubmapQueryV2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmapQueryV2Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmapQueryV2Response message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.SubmapQueryV2Response} SubmapQueryV2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapQueryV2Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.SubmapQueryV2Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = $root.ros_messages.StatusResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.submap_version = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.textures && message.textures.length))
                            message.textures = [];
                        message.textures.push($root.ros_messages.SubmapTexture.decode(reader, reader.uint32()));
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
         * Decodes a SubmapQueryV2Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.SubmapQueryV2Response} SubmapQueryV2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmapQueryV2Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmapQueryV2Response message.
         * @function verify
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmapQueryV2Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.ros_messages.StatusResponse.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.submap_version != null && message.hasOwnProperty("submap_version"))
                if (!$util.isInteger(message.submap_version))
                    return "submap_version: integer expected";
            if (message.textures != null && message.hasOwnProperty("textures")) {
                if (!Array.isArray(message.textures))
                    return "textures: array expected";
                for (let i = 0; i < message.textures.length; ++i) {
                    let error = $root.ros_messages.SubmapTexture.verify(message.textures[i]);
                    if (error)
                        return "textures." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SubmapQueryV2Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.SubmapQueryV2Response} SubmapQueryV2Response
         */
        SubmapQueryV2Response.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.SubmapQueryV2Response)
                return object;
            let message = new $root.ros_messages.SubmapQueryV2Response();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".ros_messages.SubmapQueryV2Response.status: object expected");
                message.status = $root.ros_messages.StatusResponse.fromObject(object.status);
            }
            if (object.submap_version != null)
                message.submap_version = object.submap_version | 0;
            if (object.textures) {
                if (!Array.isArray(object.textures))
                    throw TypeError(".ros_messages.SubmapQueryV2Response.textures: array expected");
                message.textures = [];
                for (let i = 0; i < object.textures.length; ++i) {
                    if (typeof object.textures[i] !== "object")
                        throw TypeError(".ros_messages.SubmapQueryV2Response.textures: object expected");
                    message.textures[i] = $root.ros_messages.SubmapTexture.fromObject(object.textures[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmapQueryV2Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {ros_messages.SubmapQueryV2Response} message SubmapQueryV2Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmapQueryV2Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.textures = [];
            if (options.defaults) {
                object.status = null;
                object.submap_version = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.ros_messages.StatusResponse.toObject(message.status, options);
            if (message.submap_version != null && message.hasOwnProperty("submap_version"))
                object.submap_version = message.submap_version;
            if (message.textures && message.textures.length) {
                object.textures = [];
                for (let j = 0; j < message.textures.length; ++j)
                    object.textures[j] = $root.ros_messages.SubmapTexture.toObject(message.textures[j], options);
            }
            return object;
        };

        /**
         * Converts this SubmapQueryV2Response to JSON.
         * @function toJSON
         * @memberof ros_messages.SubmapQueryV2Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmapQueryV2Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubmapQueryV2Response
         * @function getTypeUrl
         * @memberof ros_messages.SubmapQueryV2Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubmapQueryV2Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.SubmapQueryV2Response";
        };

        return SubmapQueryV2Response;
    })();

    ros_messages.RosMessageWrapper = (function() {

        /**
         * Properties of a RosMessageWrapper.
         * @memberof ros_messages
         * @interface IRosMessageWrapper
         * @property {ros_messages.RosMessageWrapper.MessageType|null} [type] RosMessageWrapper type
         * @property {number|Long|null} [timestamp_ns] RosMessageWrapper timestamp_ns
         * @property {number|null} [sequence_id] RosMessageWrapper sequence_id
         * @property {ros_messages.IPointCloud|null} [point_cloud] RosMessageWrapper point_cloud
         * @property {Uint8Array|null} [raw_data] RosMessageWrapper raw_data
         * @property {ros_messages.IMastState|null} [mast_state] RosMessageWrapper mast_state
         * @property {ros_messages.ISubmapList|null} [submap_list] RosMessageWrapper submap_list
         * @property {ros_messages.IRackStates|null} [rack_states] RosMessageWrapper rack_states
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
         * RosMessageWrapper timestamp_ns.
         * @member {number|Long} timestamp_ns
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.timestamp_ns = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RosMessageWrapper sequence_id.
         * @member {number} sequence_id
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.sequence_id = 0;

        /**
         * RosMessageWrapper point_cloud.
         * @member {ros_messages.IPointCloud|null|undefined} point_cloud
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.point_cloud = null;

        /**
         * RosMessageWrapper raw_data.
         * @member {Uint8Array|null|undefined} raw_data
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.raw_data = null;

        /**
         * RosMessageWrapper mast_state.
         * @member {ros_messages.IMastState|null|undefined} mast_state
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.mast_state = null;

        /**
         * RosMessageWrapper submap_list.
         * @member {ros_messages.ISubmapList|null|undefined} submap_list
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.submap_list = null;

        /**
         * RosMessageWrapper rack_states.
         * @member {ros_messages.IRackStates|null|undefined} rack_states
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.rack_states = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * RosMessageWrapper payload.
         * @member {"point_cloud"|"raw_data"|"mast_state"|"submap_list"|"rack_states"|undefined} payload
         * @memberof ros_messages.RosMessageWrapper
         * @instance
         */
        Object.defineProperty(RosMessageWrapper.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["point_cloud", "raw_data", "mast_state", "submap_list", "rack_states"]),
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
            if (message.timestamp_ns != null && Object.hasOwnProperty.call(message, "timestamp_ns"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp_ns);
            if (message.sequence_id != null && Object.hasOwnProperty.call(message, "sequence_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sequence_id);
            if (message.point_cloud != null && Object.hasOwnProperty.call(message, "point_cloud"))
                $root.ros_messages.PointCloud.encode(message.point_cloud, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.raw_data != null && Object.hasOwnProperty.call(message, "raw_data"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.raw_data);
            if (message.mast_state != null && Object.hasOwnProperty.call(message, "mast_state"))
                $root.ros_messages.MastState.encode(message.mast_state, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.submap_list != null && Object.hasOwnProperty.call(message, "submap_list"))
                $root.ros_messages.SubmapList.encode(message.submap_list, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.rack_states != null && Object.hasOwnProperty.call(message, "rack_states"))
                $root.ros_messages.RackStates.encode(message.rack_states, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
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
                        message.timestamp_ns = reader.uint64();
                        break;
                    }
                case 3: {
                        message.sequence_id = reader.uint32();
                        break;
                    }
                case 10: {
                        message.point_cloud = $root.ros_messages.PointCloud.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.raw_data = reader.bytes();
                        break;
                    }
                case 12: {
                        message.mast_state = $root.ros_messages.MastState.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.submap_list = $root.ros_messages.SubmapList.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.rack_states = $root.ros_messages.RackStates.decode(reader, reader.uint32());
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
                case 3:
                case 4:
                    break;
                }
            if (message.timestamp_ns != null && message.hasOwnProperty("timestamp_ns"))
                if (!$util.isInteger(message.timestamp_ns) && !(message.timestamp_ns && $util.isInteger(message.timestamp_ns.low) && $util.isInteger(message.timestamp_ns.high)))
                    return "timestamp_ns: integer|Long expected";
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                if (!$util.isInteger(message.sequence_id))
                    return "sequence_id: integer expected";
            if (message.point_cloud != null && message.hasOwnProperty("point_cloud")) {
                properties.payload = 1;
                {
                    let error = $root.ros_messages.PointCloud.verify(message.point_cloud);
                    if (error)
                        return "point_cloud." + error;
                }
            }
            if (message.raw_data != null && message.hasOwnProperty("raw_data")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                if (!(message.raw_data && typeof message.raw_data.length === "number" || $util.isString(message.raw_data)))
                    return "raw_data: buffer expected";
            }
            if (message.mast_state != null && message.hasOwnProperty("mast_state")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ros_messages.MastState.verify(message.mast_state);
                    if (error)
                        return "mast_state." + error;
                }
            }
            if (message.submap_list != null && message.hasOwnProperty("submap_list")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ros_messages.SubmapList.verify(message.submap_list);
                    if (error)
                        return "submap_list." + error;
                }
            }
            if (message.rack_states != null && message.hasOwnProperty("rack_states")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ros_messages.RackStates.verify(message.rack_states);
                    if (error)
                        return "rack_states." + error;
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
            case "SUBMAP_LIST":
            case 3:
                message.type = 3;
                break;
            case "RACK_STATES":
            case 4:
                message.type = 4;
                break;
            }
            if (object.timestamp_ns != null)
                if ($util.Long)
                    (message.timestamp_ns = $util.Long.fromValue(object.timestamp_ns)).unsigned = true;
                else if (typeof object.timestamp_ns === "string")
                    message.timestamp_ns = parseInt(object.timestamp_ns, 10);
                else if (typeof object.timestamp_ns === "number")
                    message.timestamp_ns = object.timestamp_ns;
                else if (typeof object.timestamp_ns === "object")
                    message.timestamp_ns = new $util.LongBits(object.timestamp_ns.low >>> 0, object.timestamp_ns.high >>> 0).toNumber(true);
            if (object.sequence_id != null)
                message.sequence_id = object.sequence_id >>> 0;
            if (object.point_cloud != null) {
                if (typeof object.point_cloud !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.point_cloud: object expected");
                message.point_cloud = $root.ros_messages.PointCloud.fromObject(object.point_cloud);
            }
            if (object.raw_data != null)
                if (typeof object.raw_data === "string")
                    $util.base64.decode(object.raw_data, message.raw_data = $util.newBuffer($util.base64.length(object.raw_data)), 0);
                else if (object.raw_data.length >= 0)
                    message.raw_data = object.raw_data;
            if (object.mast_state != null) {
                if (typeof object.mast_state !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.mast_state: object expected");
                message.mast_state = $root.ros_messages.MastState.fromObject(object.mast_state);
            }
            if (object.submap_list != null) {
                if (typeof object.submap_list !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.submap_list: object expected");
                message.submap_list = $root.ros_messages.SubmapList.fromObject(object.submap_list);
            }
            if (object.rack_states != null) {
                if (typeof object.rack_states !== "object")
                    throw TypeError(".ros_messages.RosMessageWrapper.rack_states: object expected");
                message.rack_states = $root.ros_messages.RackStates.fromObject(object.rack_states);
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
                    object.timestamp_ns = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp_ns = options.longs === String ? "0" : 0;
                object.sequence_id = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ros_messages.RosMessageWrapper.MessageType[message.type] === undefined ? message.type : $root.ros_messages.RosMessageWrapper.MessageType[message.type] : message.type;
            if (message.timestamp_ns != null && message.hasOwnProperty("timestamp_ns"))
                if (typeof message.timestamp_ns === "number")
                    object.timestamp_ns = options.longs === String ? String(message.timestamp_ns) : message.timestamp_ns;
                else
                    object.timestamp_ns = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp_ns) : options.longs === Number ? new $util.LongBits(message.timestamp_ns.low >>> 0, message.timestamp_ns.high >>> 0).toNumber(true) : message.timestamp_ns;
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                object.sequence_id = message.sequence_id;
            if (message.point_cloud != null && message.hasOwnProperty("point_cloud")) {
                object.point_cloud = $root.ros_messages.PointCloud.toObject(message.point_cloud, options);
                if (options.oneofs)
                    object.payload = "point_cloud";
            }
            if (message.raw_data != null && message.hasOwnProperty("raw_data")) {
                object.raw_data = options.bytes === String ? $util.base64.encode(message.raw_data, 0, message.raw_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw_data) : message.raw_data;
                if (options.oneofs)
                    object.payload = "raw_data";
            }
            if (message.mast_state != null && message.hasOwnProperty("mast_state")) {
                object.mast_state = $root.ros_messages.MastState.toObject(message.mast_state, options);
                if (options.oneofs)
                    object.payload = "mast_state";
            }
            if (message.submap_list != null && message.hasOwnProperty("submap_list")) {
                object.submap_list = $root.ros_messages.SubmapList.toObject(message.submap_list, options);
                if (options.oneofs)
                    object.payload = "submap_list";
            }
            if (message.rack_states != null && message.hasOwnProperty("rack_states")) {
                object.rack_states = $root.ros_messages.RackStates.toObject(message.rack_states, options);
                if (options.oneofs)
                    object.payload = "rack_states";
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
         * @property {number} SUBMAP_LIST=3 SUBMAP_LIST value
         * @property {number} RACK_STATES=4 RACK_STATES value
         */
        RosMessageWrapper.MessageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT_CLOUD"] = 1;
            values[valuesById[2] = "MAST_STATE"] = 2;
            values[valuesById[3] = "SUBMAP_LIST"] = 3;
            values[valuesById[4] = "RACK_STATES"] = 4;
            return values;
        })();

        return RosMessageWrapper;
    })();

    ros_messages.RackStates = (function() {

        /**
         * Properties of a RackStates.
         * @memberof ros_messages
         * @interface IRackStates
         * @property {string|null} [map_uid] RackStates map_uid
         * @property {Array.<ros_messages.RackStates.IRackState>|null} [racks] RackStates racks
         */

        /**
         * Constructs a new RackStates.
         * @memberof ros_messages
         * @classdesc Represents a RackStates.
         * @implements IRackStates
         * @constructor
         * @param {ros_messages.IRackStates=} [properties] Properties to set
         */
        function RackStates(properties) {
            this.racks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RackStates map_uid.
         * @member {string} map_uid
         * @memberof ros_messages.RackStates
         * @instance
         */
        RackStates.prototype.map_uid = "";

        /**
         * RackStates racks.
         * @member {Array.<ros_messages.RackStates.IRackState>} racks
         * @memberof ros_messages.RackStates
         * @instance
         */
        RackStates.prototype.racks = $util.emptyArray;

        /**
         * Creates a new RackStates instance using the specified properties.
         * @function create
         * @memberof ros_messages.RackStates
         * @static
         * @param {ros_messages.IRackStates=} [properties] Properties to set
         * @returns {ros_messages.RackStates} RackStates instance
         */
        RackStates.create = function create(properties) {
            return new RackStates(properties);
        };

        /**
         * Encodes the specified RackStates message. Does not implicitly {@link ros_messages.RackStates.verify|verify} messages.
         * @function encode
         * @memberof ros_messages.RackStates
         * @static
         * @param {ros_messages.IRackStates} message RackStates message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RackStates.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_uid != null && Object.hasOwnProperty.call(message, "map_uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.map_uid);
            if (message.racks != null && message.racks.length)
                for (let i = 0; i < message.racks.length; ++i)
                    $root.ros_messages.RackStates.RackState.encode(message.racks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RackStates message, length delimited. Does not implicitly {@link ros_messages.RackStates.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ros_messages.RackStates
         * @static
         * @param {ros_messages.IRackStates} message RackStates message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RackStates.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RackStates message from the specified reader or buffer.
         * @function decode
         * @memberof ros_messages.RackStates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ros_messages.RackStates} RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RackStates.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.RackStates();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.map_uid = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.racks && message.racks.length))
                            message.racks = [];
                        message.racks.push($root.ros_messages.RackStates.RackState.decode(reader, reader.uint32()));
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
         * Decodes a RackStates message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ros_messages.RackStates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ros_messages.RackStates} RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RackStates.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RackStates message.
         * @function verify
         * @memberof ros_messages.RackStates
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RackStates.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.map_uid != null && message.hasOwnProperty("map_uid"))
                if (!$util.isString(message.map_uid))
                    return "map_uid: string expected";
            if (message.racks != null && message.hasOwnProperty("racks")) {
                if (!Array.isArray(message.racks))
                    return "racks: array expected";
                for (let i = 0; i < message.racks.length; ++i) {
                    let error = $root.ros_messages.RackStates.RackState.verify(message.racks[i]);
                    if (error)
                        return "racks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RackStates message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ros_messages.RackStates
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ros_messages.RackStates} RackStates
         */
        RackStates.fromObject = function fromObject(object) {
            if (object instanceof $root.ros_messages.RackStates)
                return object;
            let message = new $root.ros_messages.RackStates();
            if (object.map_uid != null)
                message.map_uid = String(object.map_uid);
            if (object.racks) {
                if (!Array.isArray(object.racks))
                    throw TypeError(".ros_messages.RackStates.racks: array expected");
                message.racks = [];
                for (let i = 0; i < object.racks.length; ++i) {
                    if (typeof object.racks[i] !== "object")
                        throw TypeError(".ros_messages.RackStates.racks: object expected");
                    message.racks[i] = $root.ros_messages.RackStates.RackState.fromObject(object.racks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RackStates message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ros_messages.RackStates
         * @static
         * @param {ros_messages.RackStates} message RackStates
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RackStates.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.racks = [];
            if (options.defaults)
                object.map_uid = "";
            if (message.map_uid != null && message.hasOwnProperty("map_uid"))
                object.map_uid = message.map_uid;
            if (message.racks && message.racks.length) {
                object.racks = [];
                for (let j = 0; j < message.racks.length; ++j)
                    object.racks[j] = $root.ros_messages.RackStates.RackState.toObject(message.racks[j], options);
            }
            return object;
        };

        /**
         * Converts this RackStates to JSON.
         * @function toJSON
         * @memberof ros_messages.RackStates
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RackStates.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RackStates
         * @function getTypeUrl
         * @memberof ros_messages.RackStates
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RackStates.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ros_messages.RackStates";
        };

        RackStates.RackLevelState = (function() {

            /**
             * Properties of a RackLevelState.
             * @memberof ros_messages.RackStates
             * @interface IRackLevelState
             * @property {number|Long|null} [timestamp_ns] RackLevelState timestamp_ns
             * @property {number|null} [level] RackLevelState level
             * @property {ros_messages.RackStates.RackLevelState.SpaceState|null} [state] RackLevelState state
             */

            /**
             * Constructs a new RackLevelState.
             * @memberof ros_messages.RackStates
             * @classdesc Represents a RackLevelState.
             * @implements IRackLevelState
             * @constructor
             * @param {ros_messages.RackStates.IRackLevelState=} [properties] Properties to set
             */
            function RackLevelState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RackLevelState timestamp_ns.
             * @member {number|Long} timestamp_ns
             * @memberof ros_messages.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.timestamp_ns = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * RackLevelState level.
             * @member {number} level
             * @memberof ros_messages.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.level = 0;

            /**
             * RackLevelState state.
             * @member {ros_messages.RackStates.RackLevelState.SpaceState} state
             * @memberof ros_messages.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.state = 0;

            /**
             * Creates a new RackLevelState instance using the specified properties.
             * @function create
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {ros_messages.RackStates.IRackLevelState=} [properties] Properties to set
             * @returns {ros_messages.RackStates.RackLevelState} RackLevelState instance
             */
            RackLevelState.create = function create(properties) {
                return new RackLevelState(properties);
            };

            /**
             * Encodes the specified RackLevelState message. Does not implicitly {@link ros_messages.RackStates.RackLevelState.verify|verify} messages.
             * @function encode
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {ros_messages.RackStates.IRackLevelState} message RackLevelState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackLevelState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp_ns != null && Object.hasOwnProperty.call(message, "timestamp_ns"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp_ns);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
                return writer;
            };

            /**
             * Encodes the specified RackLevelState message, length delimited. Does not implicitly {@link ros_messages.RackStates.RackLevelState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {ros_messages.RackStates.IRackLevelState} message RackLevelState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackLevelState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RackLevelState message from the specified reader or buffer.
             * @function decode
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ros_messages.RackStates.RackLevelState} RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackLevelState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.RackStates.RackLevelState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp_ns = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.level = reader.int32();
                            break;
                        }
                    case 3: {
                            message.state = reader.int32();
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
             * Decodes a RackLevelState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ros_messages.RackStates.RackLevelState} RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackLevelState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RackLevelState message.
             * @function verify
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RackLevelState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp_ns != null && message.hasOwnProperty("timestamp_ns"))
                    if (!$util.isInteger(message.timestamp_ns) && !(message.timestamp_ns && $util.isInteger(message.timestamp_ns.low) && $util.isInteger(message.timestamp_ns.high)))
                        return "timestamp_ns: integer|Long expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 3:
                    case 4:
                        break;
                    }
                return null;
            };

            /**
             * Creates a RackLevelState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ros_messages.RackStates.RackLevelState} RackLevelState
             */
            RackLevelState.fromObject = function fromObject(object) {
                if (object instanceof $root.ros_messages.RackStates.RackLevelState)
                    return object;
                let message = new $root.ros_messages.RackStates.RackLevelState();
                if (object.timestamp_ns != null)
                    if ($util.Long)
                        (message.timestamp_ns = $util.Long.fromValue(object.timestamp_ns)).unsigned = true;
                    else if (typeof object.timestamp_ns === "string")
                        message.timestamp_ns = parseInt(object.timestamp_ns, 10);
                    else if (typeof object.timestamp_ns === "number")
                        message.timestamp_ns = object.timestamp_ns;
                    else if (typeof object.timestamp_ns === "object")
                        message.timestamp_ns = new $util.LongBits(object.timestamp_ns.low >>> 0, object.timestamp_ns.high >>> 0).toNumber(true);
                if (object.level != null)
                    message.level = object.level | 0;
                switch (object.state) {
                default:
                    if (typeof object.state === "number") {
                        message.state = object.state;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.state = 0;
                    break;
                case "OCCUPIED":
                case 3:
                    message.state = 3;
                    break;
                case "FREE":
                case 4:
                    message.state = 4;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a RackLevelState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {ros_messages.RackStates.RackLevelState} message RackLevelState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RackLevelState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp_ns = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp_ns = options.longs === String ? "0" : 0;
                    object.level = 0;
                    object.state = options.enums === String ? "UNKNOWN" : 0;
                }
                if (message.timestamp_ns != null && message.hasOwnProperty("timestamp_ns"))
                    if (typeof message.timestamp_ns === "number")
                        object.timestamp_ns = options.longs === String ? String(message.timestamp_ns) : message.timestamp_ns;
                    else
                        object.timestamp_ns = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp_ns) : options.longs === Number ? new $util.LongBits(message.timestamp_ns.low >>> 0, message.timestamp_ns.high >>> 0).toNumber(true) : message.timestamp_ns;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.ros_messages.RackStates.RackLevelState.SpaceState[message.state] === undefined ? message.state : $root.ros_messages.RackStates.RackLevelState.SpaceState[message.state] : message.state;
                return object;
            };

            /**
             * Converts this RackLevelState to JSON.
             * @function toJSON
             * @memberof ros_messages.RackStates.RackLevelState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RackLevelState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RackLevelState
             * @function getTypeUrl
             * @memberof ros_messages.RackStates.RackLevelState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RackLevelState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ros_messages.RackStates.RackLevelState";
            };

            /**
             * SpaceState enum.
             * @name ros_messages.RackStates.RackLevelState.SpaceState
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} OCCUPIED=3 OCCUPIED value
             * @property {number} FREE=4 FREE value
             */
            RackLevelState.SpaceState = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[3] = "OCCUPIED"] = 3;
                values[valuesById[4] = "FREE"] = 4;
                return values;
            })();

            return RackLevelState;
        })();

        RackStates.RackState = (function() {

            /**
             * Properties of a RackState.
             * @memberof ros_messages.RackStates
             * @interface IRackState
             * @property {string|null} [poi_id] RackState poi_id
             * @property {Array.<ros_messages.RackStates.IRackLevelState>|null} [levels] RackState levels
             */

            /**
             * Constructs a new RackState.
             * @memberof ros_messages.RackStates
             * @classdesc Represents a RackState.
             * @implements IRackState
             * @constructor
             * @param {ros_messages.RackStates.IRackState=} [properties] Properties to set
             */
            function RackState(properties) {
                this.levels = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RackState poi_id.
             * @member {string} poi_id
             * @memberof ros_messages.RackStates.RackState
             * @instance
             */
            RackState.prototype.poi_id = "";

            /**
             * RackState levels.
             * @member {Array.<ros_messages.RackStates.IRackLevelState>} levels
             * @memberof ros_messages.RackStates.RackState
             * @instance
             */
            RackState.prototype.levels = $util.emptyArray;

            /**
             * Creates a new RackState instance using the specified properties.
             * @function create
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {ros_messages.RackStates.IRackState=} [properties] Properties to set
             * @returns {ros_messages.RackStates.RackState} RackState instance
             */
            RackState.create = function create(properties) {
                return new RackState(properties);
            };

            /**
             * Encodes the specified RackState message. Does not implicitly {@link ros_messages.RackStates.RackState.verify|verify} messages.
             * @function encode
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {ros_messages.RackStates.IRackState} message RackState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.poi_id != null && Object.hasOwnProperty.call(message, "poi_id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.poi_id);
                if (message.levels != null && message.levels.length)
                    for (let i = 0; i < message.levels.length; ++i)
                        $root.ros_messages.RackStates.RackLevelState.encode(message.levels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RackState message, length delimited. Does not implicitly {@link ros_messages.RackStates.RackState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {ros_messages.RackStates.IRackState} message RackState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RackState message from the specified reader or buffer.
             * @function decode
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ros_messages.RackStates.RackState} RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ros_messages.RackStates.RackState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.poi_id = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.levels && message.levels.length))
                                message.levels = [];
                            message.levels.push($root.ros_messages.RackStates.RackLevelState.decode(reader, reader.uint32()));
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
             * Decodes a RackState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ros_messages.RackStates.RackState} RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RackState message.
             * @function verify
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RackState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.poi_id != null && message.hasOwnProperty("poi_id"))
                    if (!$util.isString(message.poi_id))
                        return "poi_id: string expected";
                if (message.levels != null && message.hasOwnProperty("levels")) {
                    if (!Array.isArray(message.levels))
                        return "levels: array expected";
                    for (let i = 0; i < message.levels.length; ++i) {
                        let error = $root.ros_messages.RackStates.RackLevelState.verify(message.levels[i]);
                        if (error)
                            return "levels." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RackState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ros_messages.RackStates.RackState} RackState
             */
            RackState.fromObject = function fromObject(object) {
                if (object instanceof $root.ros_messages.RackStates.RackState)
                    return object;
                let message = new $root.ros_messages.RackStates.RackState();
                if (object.poi_id != null)
                    message.poi_id = String(object.poi_id);
                if (object.levels) {
                    if (!Array.isArray(object.levels))
                        throw TypeError(".ros_messages.RackStates.RackState.levels: array expected");
                    message.levels = [];
                    for (let i = 0; i < object.levels.length; ++i) {
                        if (typeof object.levels[i] !== "object")
                            throw TypeError(".ros_messages.RackStates.RackState.levels: object expected");
                        message.levels[i] = $root.ros_messages.RackStates.RackLevelState.fromObject(object.levels[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RackState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {ros_messages.RackStates.RackState} message RackState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RackState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.levels = [];
                if (options.defaults)
                    object.poi_id = "";
                if (message.poi_id != null && message.hasOwnProperty("poi_id"))
                    object.poi_id = message.poi_id;
                if (message.levels && message.levels.length) {
                    object.levels = [];
                    for (let j = 0; j < message.levels.length; ++j)
                        object.levels[j] = $root.ros_messages.RackStates.RackLevelState.toObject(message.levels[j], options);
                }
                return object;
            };

            /**
             * Converts this RackState to JSON.
             * @function toJSON
             * @memberof ros_messages.RackStates.RackState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RackState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RackState
             * @function getTypeUrl
             * @memberof ros_messages.RackStates.RackState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RackState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ros_messages.RackStates.RackState";
            };

            return RackState;
        })();

        return RackStates;
    })();

    return ros_messages;
})();

export { $root as default };
