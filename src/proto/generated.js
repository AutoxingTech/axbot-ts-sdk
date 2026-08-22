/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ax_proto_msgs = $root.ax_proto_msgs = (() => {

    /**
     * Namespace ax_proto_msgs.
     * @exports ax_proto_msgs
     * @namespace
     */
    const ax_proto_msgs = {};

    ax_proto_msgs.DepthImage = (function() {

        /**
         * Properties of a DepthImage.
         * @memberof ax_proto_msgs
         * @interface IDepthImage
         * @property {number|null} [width] DepthImage width
         * @property {number|null} [height] DepthImage height
         * @property {ax_proto_msgs.DepthImage.Encoding.Type|null} [encoding] DepthImage encoding
         * @property {Uint8Array|null} [image_data] DepthImage image_data
         */

        /**
         * Constructs a new DepthImage.
         * @memberof ax_proto_msgs
         * @classdesc Represents a DepthImage.
         * @implements IDepthImage
         * @constructor
         * @param {ax_proto_msgs.IDepthImage=} [properties] Properties to set
         */
        function DepthImage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DepthImage width.
         * @member {number} width
         * @memberof ax_proto_msgs.DepthImage
         * @instance
         */
        DepthImage.prototype.width = 0;

        /**
         * DepthImage height.
         * @member {number} height
         * @memberof ax_proto_msgs.DepthImage
         * @instance
         */
        DepthImage.prototype.height = 0;

        /**
         * DepthImage encoding.
         * @member {ax_proto_msgs.DepthImage.Encoding.Type} encoding
         * @memberof ax_proto_msgs.DepthImage
         * @instance
         */
        DepthImage.prototype.encoding = 0;

        /**
         * DepthImage image_data.
         * @member {Uint8Array} image_data
         * @memberof ax_proto_msgs.DepthImage
         * @instance
         */
        DepthImage.prototype.image_data = $util.newBuffer([]);

        /**
         * Creates a new DepthImage instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {ax_proto_msgs.IDepthImage=} [properties] Properties to set
         * @returns {ax_proto_msgs.DepthImage} DepthImage instance
         */
        DepthImage.create = function create(properties) {
            return new DepthImage(properties);
        };

        /**
         * Encodes the specified DepthImage message. Does not implicitly {@link ax_proto_msgs.DepthImage.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {ax_proto_msgs.IDepthImage} message DepthImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepthImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            if (message.encoding != null && Object.hasOwnProperty.call(message, "encoding"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.encoding);
            if (message.image_data != null && Object.hasOwnProperty.call(message, "image_data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.image_data);
            return writer;
        };

        /**
         * Encodes the specified DepthImage message, length delimited. Does not implicitly {@link ax_proto_msgs.DepthImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {ax_proto_msgs.IDepthImage} message DepthImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepthImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DepthImage message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.DepthImage} DepthImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepthImage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.DepthImage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
                        break;
                    }
                case 3: {
                        message.encoding = reader.int32();
                        break;
                    }
                case 4: {
                        message.image_data = reader.bytes();
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
         * Decodes a DepthImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.DepthImage} DepthImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepthImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DepthImage message.
         * @function verify
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepthImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                switch (message.encoding) {
                default:
                    return "encoding: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.image_data != null && message.hasOwnProperty("image_data"))
                if (!(message.image_data && typeof message.image_data.length === "number" || $util.isString(message.image_data)))
                    return "image_data: buffer expected";
            return null;
        };

        /**
         * Creates a DepthImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.DepthImage} DepthImage
         */
        DepthImage.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.DepthImage)
                return object;
            let message = new $root.ax_proto_msgs.DepthImage();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            switch (object.encoding) {
            default:
                if (typeof object.encoding === "number") {
                    message.encoding = object.encoding;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.encoding = 0;
                break;
            case "PNG_INDEXED_8":
            case 1:
                message.encoding = 1;
                break;
            case "PNG_GRAY_8":
            case 2:
                message.encoding = 2;
                break;
            }
            if (object.image_data != null)
                if (typeof object.image_data === "string")
                    $util.base64.decode(object.image_data, message.image_data = $util.newBuffer($util.base64.length(object.image_data)), 0);
                else if (object.image_data.length >= 0)
                    message.image_data = object.image_data;
            return message;
        };

        /**
         * Creates a plain object from a DepthImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {ax_proto_msgs.DepthImage} message DepthImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepthImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                object.encoding = options.enums === String ? "UNKNOWN" : 0;
                if (options.bytes === String)
                    object.image_data = "";
                else {
                    object.image_data = [];
                    if (options.bytes !== Array)
                        object.image_data = $util.newBuffer(object.image_data);
                }
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                object.encoding = options.enums === String ? $root.ax_proto_msgs.DepthImage.Encoding.Type[message.encoding] === undefined ? message.encoding : $root.ax_proto_msgs.DepthImage.Encoding.Type[message.encoding] : message.encoding;
            if (message.image_data != null && message.hasOwnProperty("image_data"))
                object.image_data = options.bytes === String ? $util.base64.encode(message.image_data, 0, message.image_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.image_data) : message.image_data;
            return object;
        };

        /**
         * Converts this DepthImage to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.DepthImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepthImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DepthImage
         * @function getTypeUrl
         * @memberof ax_proto_msgs.DepthImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DepthImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.DepthImage";
        };

        DepthImage.Encoding = (function() {

            /**
             * Properties of an Encoding.
             * @memberof ax_proto_msgs.DepthImage
             * @interface IEncoding
             */

            /**
             * Constructs a new Encoding.
             * @memberof ax_proto_msgs.DepthImage
             * @classdesc Represents an Encoding.
             * @implements IEncoding
             * @constructor
             * @param {ax_proto_msgs.DepthImage.IEncoding=} [properties] Properties to set
             */
            function Encoding(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Encoding instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {ax_proto_msgs.DepthImage.IEncoding=} [properties] Properties to set
             * @returns {ax_proto_msgs.DepthImage.Encoding} Encoding instance
             */
            Encoding.create = function create(properties) {
                return new Encoding(properties);
            };

            /**
             * Encodes the specified Encoding message. Does not implicitly {@link ax_proto_msgs.DepthImage.Encoding.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {ax_proto_msgs.DepthImage.IEncoding} message Encoding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Encoding.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Encoding message, length delimited. Does not implicitly {@link ax_proto_msgs.DepthImage.Encoding.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {ax_proto_msgs.DepthImage.IEncoding} message Encoding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Encoding.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Encoding message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.DepthImage.Encoding} Encoding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Encoding.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.DepthImage.Encoding();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Encoding message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.DepthImage.Encoding} Encoding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Encoding.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Encoding message.
             * @function verify
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Encoding.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Encoding message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.DepthImage.Encoding} Encoding
             */
            Encoding.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.DepthImage.Encoding)
                    return object;
                return new $root.ax_proto_msgs.DepthImage.Encoding();
            };

            /**
             * Creates a plain object from an Encoding message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {ax_proto_msgs.DepthImage.Encoding} message Encoding
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Encoding.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Encoding to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Encoding.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Encoding
             * @function getTypeUrl
             * @memberof ax_proto_msgs.DepthImage.Encoding
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Encoding.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.DepthImage.Encoding";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.DepthImage.Encoding.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} PNG_INDEXED_8=1 PNG_INDEXED_8 value
             * @property {number} PNG_GRAY_8=2 PNG_GRAY_8 value
             */
            Encoding.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "PNG_INDEXED_8"] = 1;
                values[valuesById[2] = "PNG_GRAY_8"] = 2;
                return values;
            })();

            return Encoding;
        })();

        return DepthImage;
    })();

    ax_proto_msgs.DwaCandidatePath = (function() {

        /**
         * Properties of a DwaCandidatePath.
         * @memberof ax_proto_msgs
         * @interface IDwaCandidatePath
         * @property {number|null} [id] DwaCandidatePath id
         * @property {boolean|null} [is_selected] DwaCandidatePath is_selected
         * @property {Array.<number>|null} [xs] DwaCandidatePath xs
         * @property {Array.<number>|null} [ys] DwaCandidatePath ys
         * @property {boolean|null} [is_invalid] DwaCandidatePath is_invalid
         * @property {boolean|null} [has_collision] DwaCandidatePath has_collision
         * @property {boolean|null} [is_diagonal] DwaCandidatePath is_diagonal
         * @property {number|null} [linear_velocity] DwaCandidatePath linear_velocity
         * @property {number|null} [angular_velocity] DwaCandidatePath angular_velocity
         * @property {number|null} [linear_acceleration] DwaCandidatePath linear_acceleration
         * @property {number|null} [angular_acceleration] DwaCandidatePath angular_acceleration
         * @property {number|null} [front_wheel_velocity] DwaCandidatePath front_wheel_velocity
         * @property {number|null} [steering_angle] DwaCandidatePath steering_angle
         * @property {number|null} [max_depart_distance_left] DwaCandidatePath max_depart_distance_left
         * @property {number|null} [max_depart_distance_right] DwaCandidatePath max_depart_distance_right
         * @property {number|null} [ending_depart_distance] DwaCandidatePath ending_depart_distance
         * @property {number|null} [ending_depart_distance_cost] DwaCandidatePath ending_depart_distance_cost
         * @property {number|null} [trend_turn_angle] DwaCandidatePath trend_turn_angle
         * @property {number|null} [trend_turn_angle_cost] DwaCandidatePath trend_turn_angle_cost
         * @property {number|null} [ending_turn_angle] DwaCandidatePath ending_turn_angle
         * @property {number|null} [ending_turn_angle_cost] DwaCandidatePath ending_turn_angle_cost
         * @property {number|null} [path_progress] DwaCandidatePath path_progress
         * @property {number|null} [progress_scale] DwaCandidatePath progress_scale
         * @property {number|null} [progress_penalty_cost] DwaCandidatePath progress_penalty_cost
         * @property {number|null} [progress_max_penalty_scale] DwaCandidatePath progress_max_penalty_scale
         * @property {number|null} [progress_exploit_scale] DwaCandidatePath progress_exploit_scale
         * @property {number|null} [progress_exploit_penalty_cost] DwaCandidatePath progress_exploit_penalty_cost
         * @property {number|null} [max_topography] DwaCandidatePath max_topography
         * @property {number|null} [max_topography_penalty_cost] DwaCandidatePath max_topography_penalty_cost
         * @property {number|null} [trend_topography] DwaCandidatePath trend_topography
         * @property {number|null} [trend_topography_penalty_in_travel_cost] DwaCandidatePath trend_topography_penalty_in_travel_cost
         * @property {number|null} [trend_topography_penalty_in_evade_cost] DwaCandidatePath trend_topography_penalty_in_evade_cost
         * @property {number|null} [min_distance_to_obstacle] DwaCandidatePath min_distance_to_obstacle
         * @property {number|null} [min_distance_to_obstacle_cost] DwaCandidatePath min_distance_to_obstacle_cost
         * @property {number|null} [trend_distance_to_obstacle] DwaCandidatePath trend_distance_to_obstacle
         * @property {number|null} [trend_distance_to_obstacle_in_travel_cost] DwaCandidatePath trend_distance_to_obstacle_in_travel_cost
         * @property {number|null} [trend_distance_to_obstacle_in_evade_cost] DwaCandidatePath trend_distance_to_obstacle_in_evade_cost
         * @property {number|null} [trend_distance_to_obstacle_with_window] DwaCandidatePath trend_distance_to_obstacle_with_window
         * @property {number|null} [collision_range_location] DwaCandidatePath collision_range_location
         * @property {number|null} [collision_range_length] DwaCandidatePath collision_range_length
         * @property {number|null} [obstacle_penalty_cost] DwaCandidatePath obstacle_penalty_cost
         * @property {number|null} [curl_angle] DwaCandidatePath curl_angle
         * @property {number|null} [arc_angle] DwaCandidatePath arc_angle
         * @property {number|null} [linear_cost] DwaCandidatePath linear_cost
         * @property {number|null} [angular_cost] DwaCandidatePath angular_cost
         * @property {number|null} [path_left_distance] DwaCandidatePath path_left_distance
         * @property {number|null} [point_count] DwaCandidatePath point_count
         * @property {number|null} [trend_path_index] DwaCandidatePath trend_path_index
         * @property {number|null} [trend_path_heading] DwaCandidatePath trend_path_heading
         * @property {number|null} [trend_dwa_index] DwaCandidatePath trend_dwa_index
         * @property {number|null} [trend_dwa_heading] DwaCandidatePath trend_dwa_heading
         * @property {number|null} [ending_path_index] DwaCandidatePath ending_path_index
         * @property {number|null} [ending_path_heading] DwaCandidatePath ending_path_heading
         * @property {number|null} [ending_dwa_heading] DwaCandidatePath ending_dwa_heading
         * @property {number|null} [travel_distance] DwaCandidatePath travel_distance
         * @property {number|null} [travel_score] DwaCandidatePath travel_score
         * @property {number|null} [evade_score_for_direction] DwaCandidatePath evade_score_for_direction
         * @property {number|null} [evade_score_for_selector] DwaCandidatePath evade_score_for_selector
         * @property {number|null} [cost] DwaCandidatePath cost
         * @property {number|null} [end_point_deviation_cost] DwaCandidatePath end_point_deviation_cost
         * @property {number|null} [end_point_deviation] DwaCandidatePath end_point_deviation
         * @property {number|null} [mean_path_deviation_cost] DwaCandidatePath mean_path_deviation_cost
         * @property {number|null} [mean_path_deviation] DwaCandidatePath mean_path_deviation
         * @property {number|null} [progress_cost] DwaCandidatePath progress_cost
         * @property {number|null} [progress_made] DwaCandidatePath progress_made
         * @property {number|null} [heading_cost] DwaCandidatePath heading_cost
         * @property {number|null} [end_point_heading_error] DwaCandidatePath end_point_heading_error
         * @property {number|null} [steering_cost] DwaCandidatePath steering_cost
         * @property {number|null} [steering_change_cost] DwaCandidatePath steering_change_cost
         * @property {number|null} [velocity_change_cost] DwaCandidatePath velocity_change_cost
         * @property {number|null} [resolution_index] DwaCandidatePath resolution_index
         */

        /**
         * Constructs a new DwaCandidatePath.
         * @memberof ax_proto_msgs
         * @classdesc Represents a DwaCandidatePath.
         * @implements IDwaCandidatePath
         * @constructor
         * @param {ax_proto_msgs.IDwaCandidatePath=} [properties] Properties to set
         */
        function DwaCandidatePath(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DwaCandidatePath id.
         * @member {number} id
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.id = 0;

        /**
         * DwaCandidatePath is_selected.
         * @member {boolean} is_selected
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.is_selected = false;

        /**
         * DwaCandidatePath xs.
         * @member {Array.<number>} xs
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.xs = $util.emptyArray;

        /**
         * DwaCandidatePath ys.
         * @member {Array.<number>} ys
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ys = $util.emptyArray;

        /**
         * DwaCandidatePath is_invalid.
         * @member {boolean} is_invalid
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.is_invalid = false;

        /**
         * DwaCandidatePath has_collision.
         * @member {boolean} has_collision
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.has_collision = false;

        /**
         * DwaCandidatePath is_diagonal.
         * @member {boolean} is_diagonal
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.is_diagonal = false;

        /**
         * DwaCandidatePath linear_velocity.
         * @member {number} linear_velocity
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.linear_velocity = 0;

        /**
         * DwaCandidatePath angular_velocity.
         * @member {number} angular_velocity
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.angular_velocity = 0;

        /**
         * DwaCandidatePath linear_acceleration.
         * @member {number} linear_acceleration
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.linear_acceleration = 0;

        /**
         * DwaCandidatePath angular_acceleration.
         * @member {number} angular_acceleration
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.angular_acceleration = 0;

        /**
         * DwaCandidatePath front_wheel_velocity.
         * @member {number} front_wheel_velocity
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.front_wheel_velocity = 0;

        /**
         * DwaCandidatePath steering_angle.
         * @member {number} steering_angle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.steering_angle = 0;

        /**
         * DwaCandidatePath max_depart_distance_left.
         * @member {number} max_depart_distance_left
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.max_depart_distance_left = 0;

        /**
         * DwaCandidatePath max_depart_distance_right.
         * @member {number} max_depart_distance_right
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.max_depart_distance_right = 0;

        /**
         * DwaCandidatePath ending_depart_distance.
         * @member {number} ending_depart_distance
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_depart_distance = 0;

        /**
         * DwaCandidatePath ending_depart_distance_cost.
         * @member {number} ending_depart_distance_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_depart_distance_cost = 0;

        /**
         * DwaCandidatePath trend_turn_angle.
         * @member {number} trend_turn_angle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_turn_angle = 0;

        /**
         * DwaCandidatePath trend_turn_angle_cost.
         * @member {number} trend_turn_angle_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_turn_angle_cost = 0;

        /**
         * DwaCandidatePath ending_turn_angle.
         * @member {number} ending_turn_angle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_turn_angle = 0;

        /**
         * DwaCandidatePath ending_turn_angle_cost.
         * @member {number} ending_turn_angle_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_turn_angle_cost = 0;

        /**
         * DwaCandidatePath path_progress.
         * @member {number} path_progress
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.path_progress = 0;

        /**
         * DwaCandidatePath progress_scale.
         * @member {number} progress_scale
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_scale = 0;

        /**
         * DwaCandidatePath progress_penalty_cost.
         * @member {number} progress_penalty_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_penalty_cost = 0;

        /**
         * DwaCandidatePath progress_max_penalty_scale.
         * @member {number} progress_max_penalty_scale
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_max_penalty_scale = 0;

        /**
         * DwaCandidatePath progress_exploit_scale.
         * @member {number} progress_exploit_scale
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_exploit_scale = 0;

        /**
         * DwaCandidatePath progress_exploit_penalty_cost.
         * @member {number} progress_exploit_penalty_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_exploit_penalty_cost = 0;

        /**
         * DwaCandidatePath max_topography.
         * @member {number} max_topography
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.max_topography = 0;

        /**
         * DwaCandidatePath max_topography_penalty_cost.
         * @member {number} max_topography_penalty_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.max_topography_penalty_cost = 0;

        /**
         * DwaCandidatePath trend_topography.
         * @member {number} trend_topography
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_topography = 0;

        /**
         * DwaCandidatePath trend_topography_penalty_in_travel_cost.
         * @member {number} trend_topography_penalty_in_travel_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_topography_penalty_in_travel_cost = 0;

        /**
         * DwaCandidatePath trend_topography_penalty_in_evade_cost.
         * @member {number} trend_topography_penalty_in_evade_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_topography_penalty_in_evade_cost = 0;

        /**
         * DwaCandidatePath min_distance_to_obstacle.
         * @member {number} min_distance_to_obstacle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.min_distance_to_obstacle = 0;

        /**
         * DwaCandidatePath min_distance_to_obstacle_cost.
         * @member {number} min_distance_to_obstacle_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.min_distance_to_obstacle_cost = 0;

        /**
         * DwaCandidatePath trend_distance_to_obstacle.
         * @member {number} trend_distance_to_obstacle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_distance_to_obstacle = 0;

        /**
         * DwaCandidatePath trend_distance_to_obstacle_in_travel_cost.
         * @member {number} trend_distance_to_obstacle_in_travel_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_distance_to_obstacle_in_travel_cost = 0;

        /**
         * DwaCandidatePath trend_distance_to_obstacle_in_evade_cost.
         * @member {number} trend_distance_to_obstacle_in_evade_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_distance_to_obstacle_in_evade_cost = 0;

        /**
         * DwaCandidatePath trend_distance_to_obstacle_with_window.
         * @member {number} trend_distance_to_obstacle_with_window
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_distance_to_obstacle_with_window = 0;

        /**
         * DwaCandidatePath collision_range_location.
         * @member {number} collision_range_location
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.collision_range_location = 0;

        /**
         * DwaCandidatePath collision_range_length.
         * @member {number} collision_range_length
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.collision_range_length = 0;

        /**
         * DwaCandidatePath obstacle_penalty_cost.
         * @member {number} obstacle_penalty_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.obstacle_penalty_cost = 0;

        /**
         * DwaCandidatePath curl_angle.
         * @member {number} curl_angle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.curl_angle = 0;

        /**
         * DwaCandidatePath arc_angle.
         * @member {number} arc_angle
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.arc_angle = 0;

        /**
         * DwaCandidatePath linear_cost.
         * @member {number} linear_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.linear_cost = 0;

        /**
         * DwaCandidatePath angular_cost.
         * @member {number} angular_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.angular_cost = 0;

        /**
         * DwaCandidatePath path_left_distance.
         * @member {number} path_left_distance
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.path_left_distance = 0;

        /**
         * DwaCandidatePath point_count.
         * @member {number} point_count
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.point_count = 0;

        /**
         * DwaCandidatePath trend_path_index.
         * @member {number} trend_path_index
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_path_index = 0;

        /**
         * DwaCandidatePath trend_path_heading.
         * @member {number} trend_path_heading
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_path_heading = 0;

        /**
         * DwaCandidatePath trend_dwa_index.
         * @member {number} trend_dwa_index
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_dwa_index = 0;

        /**
         * DwaCandidatePath trend_dwa_heading.
         * @member {number} trend_dwa_heading
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.trend_dwa_heading = 0;

        /**
         * DwaCandidatePath ending_path_index.
         * @member {number} ending_path_index
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_path_index = 0;

        /**
         * DwaCandidatePath ending_path_heading.
         * @member {number} ending_path_heading
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_path_heading = 0;

        /**
         * DwaCandidatePath ending_dwa_heading.
         * @member {number} ending_dwa_heading
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.ending_dwa_heading = 0;

        /**
         * DwaCandidatePath travel_distance.
         * @member {number} travel_distance
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.travel_distance = 0;

        /**
         * DwaCandidatePath travel_score.
         * @member {number} travel_score
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.travel_score = 0;

        /**
         * DwaCandidatePath evade_score_for_direction.
         * @member {number} evade_score_for_direction
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.evade_score_for_direction = 0;

        /**
         * DwaCandidatePath evade_score_for_selector.
         * @member {number} evade_score_for_selector
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.evade_score_for_selector = 0;

        /**
         * DwaCandidatePath cost.
         * @member {number} cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.cost = 0;

        /**
         * DwaCandidatePath end_point_deviation_cost.
         * @member {number} end_point_deviation_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.end_point_deviation_cost = 0;

        /**
         * DwaCandidatePath end_point_deviation.
         * @member {number} end_point_deviation
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.end_point_deviation = 0;

        /**
         * DwaCandidatePath mean_path_deviation_cost.
         * @member {number} mean_path_deviation_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.mean_path_deviation_cost = 0;

        /**
         * DwaCandidatePath mean_path_deviation.
         * @member {number} mean_path_deviation
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.mean_path_deviation = 0;

        /**
         * DwaCandidatePath progress_cost.
         * @member {number} progress_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_cost = 0;

        /**
         * DwaCandidatePath progress_made.
         * @member {number} progress_made
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.progress_made = 0;

        /**
         * DwaCandidatePath heading_cost.
         * @member {number} heading_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.heading_cost = 0;

        /**
         * DwaCandidatePath end_point_heading_error.
         * @member {number} end_point_heading_error
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.end_point_heading_error = 0;

        /**
         * DwaCandidatePath steering_cost.
         * @member {number} steering_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.steering_cost = 0;

        /**
         * DwaCandidatePath steering_change_cost.
         * @member {number} steering_change_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.steering_change_cost = 0;

        /**
         * DwaCandidatePath velocity_change_cost.
         * @member {number} velocity_change_cost
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.velocity_change_cost = 0;

        /**
         * DwaCandidatePath resolution_index.
         * @member {number} resolution_index
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         */
        DwaCandidatePath.prototype.resolution_index = 0;

        /**
         * Creates a new DwaCandidatePath instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePath=} [properties] Properties to set
         * @returns {ax_proto_msgs.DwaCandidatePath} DwaCandidatePath instance
         */
        DwaCandidatePath.create = function create(properties) {
            return new DwaCandidatePath(properties);
        };

        /**
         * Encodes the specified DwaCandidatePath message. Does not implicitly {@link ax_proto_msgs.DwaCandidatePath.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePath} message DwaCandidatePath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DwaCandidatePath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.is_selected != null && Object.hasOwnProperty.call(message, "is_selected"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_selected);
            if (message.xs != null && message.xs.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.xs.length; ++i)
                    writer.sint32(message.xs[i]);
                writer.ldelim();
            }
            if (message.ys != null && message.ys.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.ys.length; ++i)
                    writer.sint32(message.ys[i]);
                writer.ldelim();
            }
            if (message.is_invalid != null && Object.hasOwnProperty.call(message, "is_invalid"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_invalid);
            if (message.has_collision != null && Object.hasOwnProperty.call(message, "has_collision"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.has_collision);
            if (message.is_diagonal != null && Object.hasOwnProperty.call(message, "is_diagonal"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_diagonal);
            if (message.linear_velocity != null && Object.hasOwnProperty.call(message, "linear_velocity"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.linear_velocity);
            if (message.angular_velocity != null && Object.hasOwnProperty.call(message, "angular_velocity"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.angular_velocity);
            if (message.linear_acceleration != null && Object.hasOwnProperty.call(message, "linear_acceleration"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.linear_acceleration);
            if (message.angular_acceleration != null && Object.hasOwnProperty.call(message, "angular_acceleration"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.angular_acceleration);
            if (message.front_wheel_velocity != null && Object.hasOwnProperty.call(message, "front_wheel_velocity"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.front_wheel_velocity);
            if (message.steering_angle != null && Object.hasOwnProperty.call(message, "steering_angle"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.steering_angle);
            if (message.max_depart_distance_left != null && Object.hasOwnProperty.call(message, "max_depart_distance_left"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.max_depart_distance_left);
            if (message.max_depart_distance_right != null && Object.hasOwnProperty.call(message, "max_depart_distance_right"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.max_depart_distance_right);
            if (message.ending_depart_distance != null && Object.hasOwnProperty.call(message, "ending_depart_distance"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.ending_depart_distance);
            if (message.ending_depart_distance_cost != null && Object.hasOwnProperty.call(message, "ending_depart_distance_cost"))
                writer.uint32(/* id 17, wireType 5 =*/141).float(message.ending_depart_distance_cost);
            if (message.trend_turn_angle != null && Object.hasOwnProperty.call(message, "trend_turn_angle"))
                writer.uint32(/* id 18, wireType 5 =*/149).float(message.trend_turn_angle);
            if (message.trend_turn_angle_cost != null && Object.hasOwnProperty.call(message, "trend_turn_angle_cost"))
                writer.uint32(/* id 19, wireType 5 =*/157).float(message.trend_turn_angle_cost);
            if (message.ending_turn_angle != null && Object.hasOwnProperty.call(message, "ending_turn_angle"))
                writer.uint32(/* id 20, wireType 5 =*/165).float(message.ending_turn_angle);
            if (message.ending_turn_angle_cost != null && Object.hasOwnProperty.call(message, "ending_turn_angle_cost"))
                writer.uint32(/* id 21, wireType 5 =*/173).float(message.ending_turn_angle_cost);
            if (message.path_progress != null && Object.hasOwnProperty.call(message, "path_progress"))
                writer.uint32(/* id 22, wireType 5 =*/181).float(message.path_progress);
            if (message.progress_scale != null && Object.hasOwnProperty.call(message, "progress_scale"))
                writer.uint32(/* id 23, wireType 5 =*/189).float(message.progress_scale);
            if (message.progress_penalty_cost != null && Object.hasOwnProperty.call(message, "progress_penalty_cost"))
                writer.uint32(/* id 24, wireType 5 =*/197).float(message.progress_penalty_cost);
            if (message.progress_max_penalty_scale != null && Object.hasOwnProperty.call(message, "progress_max_penalty_scale"))
                writer.uint32(/* id 25, wireType 5 =*/205).float(message.progress_max_penalty_scale);
            if (message.progress_exploit_scale != null && Object.hasOwnProperty.call(message, "progress_exploit_scale"))
                writer.uint32(/* id 26, wireType 5 =*/213).float(message.progress_exploit_scale);
            if (message.progress_exploit_penalty_cost != null && Object.hasOwnProperty.call(message, "progress_exploit_penalty_cost"))
                writer.uint32(/* id 27, wireType 5 =*/221).float(message.progress_exploit_penalty_cost);
            if (message.max_topography != null && Object.hasOwnProperty.call(message, "max_topography"))
                writer.uint32(/* id 28, wireType 5 =*/229).float(message.max_topography);
            if (message.max_topography_penalty_cost != null && Object.hasOwnProperty.call(message, "max_topography_penalty_cost"))
                writer.uint32(/* id 29, wireType 5 =*/237).float(message.max_topography_penalty_cost);
            if (message.trend_topography != null && Object.hasOwnProperty.call(message, "trend_topography"))
                writer.uint32(/* id 30, wireType 5 =*/245).float(message.trend_topography);
            if (message.trend_topography_penalty_in_travel_cost != null && Object.hasOwnProperty.call(message, "trend_topography_penalty_in_travel_cost"))
                writer.uint32(/* id 31, wireType 5 =*/253).float(message.trend_topography_penalty_in_travel_cost);
            if (message.trend_topography_penalty_in_evade_cost != null && Object.hasOwnProperty.call(message, "trend_topography_penalty_in_evade_cost"))
                writer.uint32(/* id 32, wireType 5 =*/261).float(message.trend_topography_penalty_in_evade_cost);
            if (message.min_distance_to_obstacle != null && Object.hasOwnProperty.call(message, "min_distance_to_obstacle"))
                writer.uint32(/* id 33, wireType 5 =*/269).float(message.min_distance_to_obstacle);
            if (message.min_distance_to_obstacle_cost != null && Object.hasOwnProperty.call(message, "min_distance_to_obstacle_cost"))
                writer.uint32(/* id 34, wireType 5 =*/277).float(message.min_distance_to_obstacle_cost);
            if (message.trend_distance_to_obstacle != null && Object.hasOwnProperty.call(message, "trend_distance_to_obstacle"))
                writer.uint32(/* id 35, wireType 5 =*/285).float(message.trend_distance_to_obstacle);
            if (message.trend_distance_to_obstacle_in_travel_cost != null && Object.hasOwnProperty.call(message, "trend_distance_to_obstacle_in_travel_cost"))
                writer.uint32(/* id 36, wireType 5 =*/293).float(message.trend_distance_to_obstacle_in_travel_cost);
            if (message.trend_distance_to_obstacle_in_evade_cost != null && Object.hasOwnProperty.call(message, "trend_distance_to_obstacle_in_evade_cost"))
                writer.uint32(/* id 37, wireType 5 =*/301).float(message.trend_distance_to_obstacle_in_evade_cost);
            if (message.trend_distance_to_obstacle_with_window != null && Object.hasOwnProperty.call(message, "trend_distance_to_obstacle_with_window"))
                writer.uint32(/* id 38, wireType 5 =*/309).float(message.trend_distance_to_obstacle_with_window);
            if (message.collision_range_location != null && Object.hasOwnProperty.call(message, "collision_range_location"))
                writer.uint32(/* id 39, wireType 0 =*/312).int32(message.collision_range_location);
            if (message.collision_range_length != null && Object.hasOwnProperty.call(message, "collision_range_length"))
                writer.uint32(/* id 40, wireType 0 =*/320).int32(message.collision_range_length);
            if (message.obstacle_penalty_cost != null && Object.hasOwnProperty.call(message, "obstacle_penalty_cost"))
                writer.uint32(/* id 41, wireType 5 =*/333).float(message.obstacle_penalty_cost);
            if (message.curl_angle != null && Object.hasOwnProperty.call(message, "curl_angle"))
                writer.uint32(/* id 42, wireType 5 =*/341).float(message.curl_angle);
            if (message.arc_angle != null && Object.hasOwnProperty.call(message, "arc_angle"))
                writer.uint32(/* id 43, wireType 5 =*/349).float(message.arc_angle);
            if (message.linear_cost != null && Object.hasOwnProperty.call(message, "linear_cost"))
                writer.uint32(/* id 44, wireType 5 =*/357).float(message.linear_cost);
            if (message.angular_cost != null && Object.hasOwnProperty.call(message, "angular_cost"))
                writer.uint32(/* id 45, wireType 5 =*/365).float(message.angular_cost);
            if (message.path_left_distance != null && Object.hasOwnProperty.call(message, "path_left_distance"))
                writer.uint32(/* id 46, wireType 5 =*/373).float(message.path_left_distance);
            if (message.point_count != null && Object.hasOwnProperty.call(message, "point_count"))
                writer.uint32(/* id 47, wireType 0 =*/376).int32(message.point_count);
            if (message.trend_path_index != null && Object.hasOwnProperty.call(message, "trend_path_index"))
                writer.uint32(/* id 48, wireType 0 =*/384).int32(message.trend_path_index);
            if (message.trend_path_heading != null && Object.hasOwnProperty.call(message, "trend_path_heading"))
                writer.uint32(/* id 49, wireType 5 =*/397).float(message.trend_path_heading);
            if (message.trend_dwa_index != null && Object.hasOwnProperty.call(message, "trend_dwa_index"))
                writer.uint32(/* id 50, wireType 0 =*/400).int32(message.trend_dwa_index);
            if (message.trend_dwa_heading != null && Object.hasOwnProperty.call(message, "trend_dwa_heading"))
                writer.uint32(/* id 51, wireType 5 =*/413).float(message.trend_dwa_heading);
            if (message.ending_path_index != null && Object.hasOwnProperty.call(message, "ending_path_index"))
                writer.uint32(/* id 52, wireType 0 =*/416).int32(message.ending_path_index);
            if (message.ending_path_heading != null && Object.hasOwnProperty.call(message, "ending_path_heading"))
                writer.uint32(/* id 53, wireType 5 =*/429).float(message.ending_path_heading);
            if (message.ending_dwa_heading != null && Object.hasOwnProperty.call(message, "ending_dwa_heading"))
                writer.uint32(/* id 54, wireType 5 =*/437).float(message.ending_dwa_heading);
            if (message.travel_distance != null && Object.hasOwnProperty.call(message, "travel_distance"))
                writer.uint32(/* id 55, wireType 5 =*/445).float(message.travel_distance);
            if (message.travel_score != null && Object.hasOwnProperty.call(message, "travel_score"))
                writer.uint32(/* id 56, wireType 5 =*/453).float(message.travel_score);
            if (message.evade_score_for_direction != null && Object.hasOwnProperty.call(message, "evade_score_for_direction"))
                writer.uint32(/* id 57, wireType 5 =*/461).float(message.evade_score_for_direction);
            if (message.evade_score_for_selector != null && Object.hasOwnProperty.call(message, "evade_score_for_selector"))
                writer.uint32(/* id 58, wireType 5 =*/469).float(message.evade_score_for_selector);
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 59, wireType 5 =*/477).float(message.cost);
            if (message.end_point_deviation_cost != null && Object.hasOwnProperty.call(message, "end_point_deviation_cost"))
                writer.uint32(/* id 60, wireType 5 =*/485).float(message.end_point_deviation_cost);
            if (message.end_point_deviation != null && Object.hasOwnProperty.call(message, "end_point_deviation"))
                writer.uint32(/* id 61, wireType 5 =*/493).float(message.end_point_deviation);
            if (message.mean_path_deviation_cost != null && Object.hasOwnProperty.call(message, "mean_path_deviation_cost"))
                writer.uint32(/* id 62, wireType 5 =*/501).float(message.mean_path_deviation_cost);
            if (message.mean_path_deviation != null && Object.hasOwnProperty.call(message, "mean_path_deviation"))
                writer.uint32(/* id 63, wireType 5 =*/509).float(message.mean_path_deviation);
            if (message.progress_cost != null && Object.hasOwnProperty.call(message, "progress_cost"))
                writer.uint32(/* id 64, wireType 5 =*/517).float(message.progress_cost);
            if (message.progress_made != null && Object.hasOwnProperty.call(message, "progress_made"))
                writer.uint32(/* id 65, wireType 5 =*/525).float(message.progress_made);
            if (message.heading_cost != null && Object.hasOwnProperty.call(message, "heading_cost"))
                writer.uint32(/* id 66, wireType 5 =*/533).float(message.heading_cost);
            if (message.end_point_heading_error != null && Object.hasOwnProperty.call(message, "end_point_heading_error"))
                writer.uint32(/* id 67, wireType 5 =*/541).float(message.end_point_heading_error);
            if (message.steering_cost != null && Object.hasOwnProperty.call(message, "steering_cost"))
                writer.uint32(/* id 68, wireType 5 =*/549).float(message.steering_cost);
            if (message.steering_change_cost != null && Object.hasOwnProperty.call(message, "steering_change_cost"))
                writer.uint32(/* id 69, wireType 5 =*/557).float(message.steering_change_cost);
            if (message.velocity_change_cost != null && Object.hasOwnProperty.call(message, "velocity_change_cost"))
                writer.uint32(/* id 70, wireType 5 =*/565).float(message.velocity_change_cost);
            if (message.resolution_index != null && Object.hasOwnProperty.call(message, "resolution_index"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.resolution_index);
            return writer;
        };

        /**
         * Encodes the specified DwaCandidatePath message, length delimited. Does not implicitly {@link ax_proto_msgs.DwaCandidatePath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePath} message DwaCandidatePath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DwaCandidatePath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DwaCandidatePath message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.DwaCandidatePath} DwaCandidatePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DwaCandidatePath.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.DwaCandidatePath();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.is_selected = reader.bool();
                        break;
                    }
                case 3: {
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
                case 4: {
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
                case 5: {
                        message.is_invalid = reader.bool();
                        break;
                    }
                case 6: {
                        message.has_collision = reader.bool();
                        break;
                    }
                case 7: {
                        message.is_diagonal = reader.bool();
                        break;
                    }
                case 8: {
                        message.linear_velocity = reader.float();
                        break;
                    }
                case 9: {
                        message.angular_velocity = reader.float();
                        break;
                    }
                case 10: {
                        message.linear_acceleration = reader.float();
                        break;
                    }
                case 11: {
                        message.angular_acceleration = reader.float();
                        break;
                    }
                case 12: {
                        message.front_wheel_velocity = reader.float();
                        break;
                    }
                case 13: {
                        message.steering_angle = reader.float();
                        break;
                    }
                case 14: {
                        message.max_depart_distance_left = reader.float();
                        break;
                    }
                case 15: {
                        message.max_depart_distance_right = reader.float();
                        break;
                    }
                case 16: {
                        message.ending_depart_distance = reader.float();
                        break;
                    }
                case 17: {
                        message.ending_depart_distance_cost = reader.float();
                        break;
                    }
                case 18: {
                        message.trend_turn_angle = reader.float();
                        break;
                    }
                case 19: {
                        message.trend_turn_angle_cost = reader.float();
                        break;
                    }
                case 20: {
                        message.ending_turn_angle = reader.float();
                        break;
                    }
                case 21: {
                        message.ending_turn_angle_cost = reader.float();
                        break;
                    }
                case 22: {
                        message.path_progress = reader.float();
                        break;
                    }
                case 23: {
                        message.progress_scale = reader.float();
                        break;
                    }
                case 24: {
                        message.progress_penalty_cost = reader.float();
                        break;
                    }
                case 25: {
                        message.progress_max_penalty_scale = reader.float();
                        break;
                    }
                case 26: {
                        message.progress_exploit_scale = reader.float();
                        break;
                    }
                case 27: {
                        message.progress_exploit_penalty_cost = reader.float();
                        break;
                    }
                case 28: {
                        message.max_topography = reader.float();
                        break;
                    }
                case 29: {
                        message.max_topography_penalty_cost = reader.float();
                        break;
                    }
                case 30: {
                        message.trend_topography = reader.float();
                        break;
                    }
                case 31: {
                        message.trend_topography_penalty_in_travel_cost = reader.float();
                        break;
                    }
                case 32: {
                        message.trend_topography_penalty_in_evade_cost = reader.float();
                        break;
                    }
                case 33: {
                        message.min_distance_to_obstacle = reader.float();
                        break;
                    }
                case 34: {
                        message.min_distance_to_obstacle_cost = reader.float();
                        break;
                    }
                case 35: {
                        message.trend_distance_to_obstacle = reader.float();
                        break;
                    }
                case 36: {
                        message.trend_distance_to_obstacle_in_travel_cost = reader.float();
                        break;
                    }
                case 37: {
                        message.trend_distance_to_obstacle_in_evade_cost = reader.float();
                        break;
                    }
                case 38: {
                        message.trend_distance_to_obstacle_with_window = reader.float();
                        break;
                    }
                case 39: {
                        message.collision_range_location = reader.int32();
                        break;
                    }
                case 40: {
                        message.collision_range_length = reader.int32();
                        break;
                    }
                case 41: {
                        message.obstacle_penalty_cost = reader.float();
                        break;
                    }
                case 42: {
                        message.curl_angle = reader.float();
                        break;
                    }
                case 43: {
                        message.arc_angle = reader.float();
                        break;
                    }
                case 44: {
                        message.linear_cost = reader.float();
                        break;
                    }
                case 45: {
                        message.angular_cost = reader.float();
                        break;
                    }
                case 46: {
                        message.path_left_distance = reader.float();
                        break;
                    }
                case 47: {
                        message.point_count = reader.int32();
                        break;
                    }
                case 48: {
                        message.trend_path_index = reader.int32();
                        break;
                    }
                case 49: {
                        message.trend_path_heading = reader.float();
                        break;
                    }
                case 50: {
                        message.trend_dwa_index = reader.int32();
                        break;
                    }
                case 51: {
                        message.trend_dwa_heading = reader.float();
                        break;
                    }
                case 52: {
                        message.ending_path_index = reader.int32();
                        break;
                    }
                case 53: {
                        message.ending_path_heading = reader.float();
                        break;
                    }
                case 54: {
                        message.ending_dwa_heading = reader.float();
                        break;
                    }
                case 55: {
                        message.travel_distance = reader.float();
                        break;
                    }
                case 56: {
                        message.travel_score = reader.float();
                        break;
                    }
                case 57: {
                        message.evade_score_for_direction = reader.float();
                        break;
                    }
                case 58: {
                        message.evade_score_for_selector = reader.float();
                        break;
                    }
                case 59: {
                        message.cost = reader.float();
                        break;
                    }
                case 60: {
                        message.end_point_deviation_cost = reader.float();
                        break;
                    }
                case 61: {
                        message.end_point_deviation = reader.float();
                        break;
                    }
                case 62: {
                        message.mean_path_deviation_cost = reader.float();
                        break;
                    }
                case 63: {
                        message.mean_path_deviation = reader.float();
                        break;
                    }
                case 64: {
                        message.progress_cost = reader.float();
                        break;
                    }
                case 65: {
                        message.progress_made = reader.float();
                        break;
                    }
                case 66: {
                        message.heading_cost = reader.float();
                        break;
                    }
                case 67: {
                        message.end_point_heading_error = reader.float();
                        break;
                    }
                case 68: {
                        message.steering_cost = reader.float();
                        break;
                    }
                case 69: {
                        message.steering_change_cost = reader.float();
                        break;
                    }
                case 70: {
                        message.velocity_change_cost = reader.float();
                        break;
                    }
                case 71: {
                        message.resolution_index = reader.uint32();
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
         * Decodes a DwaCandidatePath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.DwaCandidatePath} DwaCandidatePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DwaCandidatePath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DwaCandidatePath message.
         * @function verify
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DwaCandidatePath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.is_selected != null && message.hasOwnProperty("is_selected"))
                if (typeof message.is_selected !== "boolean")
                    return "is_selected: boolean expected";
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
            if (message.is_invalid != null && message.hasOwnProperty("is_invalid"))
                if (typeof message.is_invalid !== "boolean")
                    return "is_invalid: boolean expected";
            if (message.has_collision != null && message.hasOwnProperty("has_collision"))
                if (typeof message.has_collision !== "boolean")
                    return "has_collision: boolean expected";
            if (message.is_diagonal != null && message.hasOwnProperty("is_diagonal"))
                if (typeof message.is_diagonal !== "boolean")
                    return "is_diagonal: boolean expected";
            if (message.linear_velocity != null && message.hasOwnProperty("linear_velocity"))
                if (typeof message.linear_velocity !== "number")
                    return "linear_velocity: number expected";
            if (message.angular_velocity != null && message.hasOwnProperty("angular_velocity"))
                if (typeof message.angular_velocity !== "number")
                    return "angular_velocity: number expected";
            if (message.linear_acceleration != null && message.hasOwnProperty("linear_acceleration"))
                if (typeof message.linear_acceleration !== "number")
                    return "linear_acceleration: number expected";
            if (message.angular_acceleration != null && message.hasOwnProperty("angular_acceleration"))
                if (typeof message.angular_acceleration !== "number")
                    return "angular_acceleration: number expected";
            if (message.front_wheel_velocity != null && message.hasOwnProperty("front_wheel_velocity"))
                if (typeof message.front_wheel_velocity !== "number")
                    return "front_wheel_velocity: number expected";
            if (message.steering_angle != null && message.hasOwnProperty("steering_angle"))
                if (typeof message.steering_angle !== "number")
                    return "steering_angle: number expected";
            if (message.max_depart_distance_left != null && message.hasOwnProperty("max_depart_distance_left"))
                if (typeof message.max_depart_distance_left !== "number")
                    return "max_depart_distance_left: number expected";
            if (message.max_depart_distance_right != null && message.hasOwnProperty("max_depart_distance_right"))
                if (typeof message.max_depart_distance_right !== "number")
                    return "max_depart_distance_right: number expected";
            if (message.ending_depart_distance != null && message.hasOwnProperty("ending_depart_distance"))
                if (typeof message.ending_depart_distance !== "number")
                    return "ending_depart_distance: number expected";
            if (message.ending_depart_distance_cost != null && message.hasOwnProperty("ending_depart_distance_cost"))
                if (typeof message.ending_depart_distance_cost !== "number")
                    return "ending_depart_distance_cost: number expected";
            if (message.trend_turn_angle != null && message.hasOwnProperty("trend_turn_angle"))
                if (typeof message.trend_turn_angle !== "number")
                    return "trend_turn_angle: number expected";
            if (message.trend_turn_angle_cost != null && message.hasOwnProperty("trend_turn_angle_cost"))
                if (typeof message.trend_turn_angle_cost !== "number")
                    return "trend_turn_angle_cost: number expected";
            if (message.ending_turn_angle != null && message.hasOwnProperty("ending_turn_angle"))
                if (typeof message.ending_turn_angle !== "number")
                    return "ending_turn_angle: number expected";
            if (message.ending_turn_angle_cost != null && message.hasOwnProperty("ending_turn_angle_cost"))
                if (typeof message.ending_turn_angle_cost !== "number")
                    return "ending_turn_angle_cost: number expected";
            if (message.path_progress != null && message.hasOwnProperty("path_progress"))
                if (typeof message.path_progress !== "number")
                    return "path_progress: number expected";
            if (message.progress_scale != null && message.hasOwnProperty("progress_scale"))
                if (typeof message.progress_scale !== "number")
                    return "progress_scale: number expected";
            if (message.progress_penalty_cost != null && message.hasOwnProperty("progress_penalty_cost"))
                if (typeof message.progress_penalty_cost !== "number")
                    return "progress_penalty_cost: number expected";
            if (message.progress_max_penalty_scale != null && message.hasOwnProperty("progress_max_penalty_scale"))
                if (typeof message.progress_max_penalty_scale !== "number")
                    return "progress_max_penalty_scale: number expected";
            if (message.progress_exploit_scale != null && message.hasOwnProperty("progress_exploit_scale"))
                if (typeof message.progress_exploit_scale !== "number")
                    return "progress_exploit_scale: number expected";
            if (message.progress_exploit_penalty_cost != null && message.hasOwnProperty("progress_exploit_penalty_cost"))
                if (typeof message.progress_exploit_penalty_cost !== "number")
                    return "progress_exploit_penalty_cost: number expected";
            if (message.max_topography != null && message.hasOwnProperty("max_topography"))
                if (typeof message.max_topography !== "number")
                    return "max_topography: number expected";
            if (message.max_topography_penalty_cost != null && message.hasOwnProperty("max_topography_penalty_cost"))
                if (typeof message.max_topography_penalty_cost !== "number")
                    return "max_topography_penalty_cost: number expected";
            if (message.trend_topography != null && message.hasOwnProperty("trend_topography"))
                if (typeof message.trend_topography !== "number")
                    return "trend_topography: number expected";
            if (message.trend_topography_penalty_in_travel_cost != null && message.hasOwnProperty("trend_topography_penalty_in_travel_cost"))
                if (typeof message.trend_topography_penalty_in_travel_cost !== "number")
                    return "trend_topography_penalty_in_travel_cost: number expected";
            if (message.trend_topography_penalty_in_evade_cost != null && message.hasOwnProperty("trend_topography_penalty_in_evade_cost"))
                if (typeof message.trend_topography_penalty_in_evade_cost !== "number")
                    return "trend_topography_penalty_in_evade_cost: number expected";
            if (message.min_distance_to_obstacle != null && message.hasOwnProperty("min_distance_to_obstacle"))
                if (typeof message.min_distance_to_obstacle !== "number")
                    return "min_distance_to_obstacle: number expected";
            if (message.min_distance_to_obstacle_cost != null && message.hasOwnProperty("min_distance_to_obstacle_cost"))
                if (typeof message.min_distance_to_obstacle_cost !== "number")
                    return "min_distance_to_obstacle_cost: number expected";
            if (message.trend_distance_to_obstacle != null && message.hasOwnProperty("trend_distance_to_obstacle"))
                if (typeof message.trend_distance_to_obstacle !== "number")
                    return "trend_distance_to_obstacle: number expected";
            if (message.trend_distance_to_obstacle_in_travel_cost != null && message.hasOwnProperty("trend_distance_to_obstacle_in_travel_cost"))
                if (typeof message.trend_distance_to_obstacle_in_travel_cost !== "number")
                    return "trend_distance_to_obstacle_in_travel_cost: number expected";
            if (message.trend_distance_to_obstacle_in_evade_cost != null && message.hasOwnProperty("trend_distance_to_obstacle_in_evade_cost"))
                if (typeof message.trend_distance_to_obstacle_in_evade_cost !== "number")
                    return "trend_distance_to_obstacle_in_evade_cost: number expected";
            if (message.trend_distance_to_obstacle_with_window != null && message.hasOwnProperty("trend_distance_to_obstacle_with_window"))
                if (typeof message.trend_distance_to_obstacle_with_window !== "number")
                    return "trend_distance_to_obstacle_with_window: number expected";
            if (message.collision_range_location != null && message.hasOwnProperty("collision_range_location"))
                if (!$util.isInteger(message.collision_range_location))
                    return "collision_range_location: integer expected";
            if (message.collision_range_length != null && message.hasOwnProperty("collision_range_length"))
                if (!$util.isInteger(message.collision_range_length))
                    return "collision_range_length: integer expected";
            if (message.obstacle_penalty_cost != null && message.hasOwnProperty("obstacle_penalty_cost"))
                if (typeof message.obstacle_penalty_cost !== "number")
                    return "obstacle_penalty_cost: number expected";
            if (message.curl_angle != null && message.hasOwnProperty("curl_angle"))
                if (typeof message.curl_angle !== "number")
                    return "curl_angle: number expected";
            if (message.arc_angle != null && message.hasOwnProperty("arc_angle"))
                if (typeof message.arc_angle !== "number")
                    return "arc_angle: number expected";
            if (message.linear_cost != null && message.hasOwnProperty("linear_cost"))
                if (typeof message.linear_cost !== "number")
                    return "linear_cost: number expected";
            if (message.angular_cost != null && message.hasOwnProperty("angular_cost"))
                if (typeof message.angular_cost !== "number")
                    return "angular_cost: number expected";
            if (message.path_left_distance != null && message.hasOwnProperty("path_left_distance"))
                if (typeof message.path_left_distance !== "number")
                    return "path_left_distance: number expected";
            if (message.point_count != null && message.hasOwnProperty("point_count"))
                if (!$util.isInteger(message.point_count))
                    return "point_count: integer expected";
            if (message.trend_path_index != null && message.hasOwnProperty("trend_path_index"))
                if (!$util.isInteger(message.trend_path_index))
                    return "trend_path_index: integer expected";
            if (message.trend_path_heading != null && message.hasOwnProperty("trend_path_heading"))
                if (typeof message.trend_path_heading !== "number")
                    return "trend_path_heading: number expected";
            if (message.trend_dwa_index != null && message.hasOwnProperty("trend_dwa_index"))
                if (!$util.isInteger(message.trend_dwa_index))
                    return "trend_dwa_index: integer expected";
            if (message.trend_dwa_heading != null && message.hasOwnProperty("trend_dwa_heading"))
                if (typeof message.trend_dwa_heading !== "number")
                    return "trend_dwa_heading: number expected";
            if (message.ending_path_index != null && message.hasOwnProperty("ending_path_index"))
                if (!$util.isInteger(message.ending_path_index))
                    return "ending_path_index: integer expected";
            if (message.ending_path_heading != null && message.hasOwnProperty("ending_path_heading"))
                if (typeof message.ending_path_heading !== "number")
                    return "ending_path_heading: number expected";
            if (message.ending_dwa_heading != null && message.hasOwnProperty("ending_dwa_heading"))
                if (typeof message.ending_dwa_heading !== "number")
                    return "ending_dwa_heading: number expected";
            if (message.travel_distance != null && message.hasOwnProperty("travel_distance"))
                if (typeof message.travel_distance !== "number")
                    return "travel_distance: number expected";
            if (message.travel_score != null && message.hasOwnProperty("travel_score"))
                if (typeof message.travel_score !== "number")
                    return "travel_score: number expected";
            if (message.evade_score_for_direction != null && message.hasOwnProperty("evade_score_for_direction"))
                if (typeof message.evade_score_for_direction !== "number")
                    return "evade_score_for_direction: number expected";
            if (message.evade_score_for_selector != null && message.hasOwnProperty("evade_score_for_selector"))
                if (typeof message.evade_score_for_selector !== "number")
                    return "evade_score_for_selector: number expected";
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (typeof message.cost !== "number")
                    return "cost: number expected";
            if (message.end_point_deviation_cost != null && message.hasOwnProperty("end_point_deviation_cost"))
                if (typeof message.end_point_deviation_cost !== "number")
                    return "end_point_deviation_cost: number expected";
            if (message.end_point_deviation != null && message.hasOwnProperty("end_point_deviation"))
                if (typeof message.end_point_deviation !== "number")
                    return "end_point_deviation: number expected";
            if (message.mean_path_deviation_cost != null && message.hasOwnProperty("mean_path_deviation_cost"))
                if (typeof message.mean_path_deviation_cost !== "number")
                    return "mean_path_deviation_cost: number expected";
            if (message.mean_path_deviation != null && message.hasOwnProperty("mean_path_deviation"))
                if (typeof message.mean_path_deviation !== "number")
                    return "mean_path_deviation: number expected";
            if (message.progress_cost != null && message.hasOwnProperty("progress_cost"))
                if (typeof message.progress_cost !== "number")
                    return "progress_cost: number expected";
            if (message.progress_made != null && message.hasOwnProperty("progress_made"))
                if (typeof message.progress_made !== "number")
                    return "progress_made: number expected";
            if (message.heading_cost != null && message.hasOwnProperty("heading_cost"))
                if (typeof message.heading_cost !== "number")
                    return "heading_cost: number expected";
            if (message.end_point_heading_error != null && message.hasOwnProperty("end_point_heading_error"))
                if (typeof message.end_point_heading_error !== "number")
                    return "end_point_heading_error: number expected";
            if (message.steering_cost != null && message.hasOwnProperty("steering_cost"))
                if (typeof message.steering_cost !== "number")
                    return "steering_cost: number expected";
            if (message.steering_change_cost != null && message.hasOwnProperty("steering_change_cost"))
                if (typeof message.steering_change_cost !== "number")
                    return "steering_change_cost: number expected";
            if (message.velocity_change_cost != null && message.hasOwnProperty("velocity_change_cost"))
                if (typeof message.velocity_change_cost !== "number")
                    return "velocity_change_cost: number expected";
            if (message.resolution_index != null && message.hasOwnProperty("resolution_index"))
                if (!$util.isInteger(message.resolution_index))
                    return "resolution_index: integer expected";
            return null;
        };

        /**
         * Creates a DwaCandidatePath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.DwaCandidatePath} DwaCandidatePath
         */
        DwaCandidatePath.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.DwaCandidatePath)
                return object;
            let message = new $root.ax_proto_msgs.DwaCandidatePath();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.is_selected != null)
                message.is_selected = Boolean(object.is_selected);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".ax_proto_msgs.DwaCandidatePath.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = object.xs[i] | 0;
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".ax_proto_msgs.DwaCandidatePath.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = object.ys[i] | 0;
            }
            if (object.is_invalid != null)
                message.is_invalid = Boolean(object.is_invalid);
            if (object.has_collision != null)
                message.has_collision = Boolean(object.has_collision);
            if (object.is_diagonal != null)
                message.is_diagonal = Boolean(object.is_diagonal);
            if (object.linear_velocity != null)
                message.linear_velocity = Number(object.linear_velocity);
            if (object.angular_velocity != null)
                message.angular_velocity = Number(object.angular_velocity);
            if (object.linear_acceleration != null)
                message.linear_acceleration = Number(object.linear_acceleration);
            if (object.angular_acceleration != null)
                message.angular_acceleration = Number(object.angular_acceleration);
            if (object.front_wheel_velocity != null)
                message.front_wheel_velocity = Number(object.front_wheel_velocity);
            if (object.steering_angle != null)
                message.steering_angle = Number(object.steering_angle);
            if (object.max_depart_distance_left != null)
                message.max_depart_distance_left = Number(object.max_depart_distance_left);
            if (object.max_depart_distance_right != null)
                message.max_depart_distance_right = Number(object.max_depart_distance_right);
            if (object.ending_depart_distance != null)
                message.ending_depart_distance = Number(object.ending_depart_distance);
            if (object.ending_depart_distance_cost != null)
                message.ending_depart_distance_cost = Number(object.ending_depart_distance_cost);
            if (object.trend_turn_angle != null)
                message.trend_turn_angle = Number(object.trend_turn_angle);
            if (object.trend_turn_angle_cost != null)
                message.trend_turn_angle_cost = Number(object.trend_turn_angle_cost);
            if (object.ending_turn_angle != null)
                message.ending_turn_angle = Number(object.ending_turn_angle);
            if (object.ending_turn_angle_cost != null)
                message.ending_turn_angle_cost = Number(object.ending_turn_angle_cost);
            if (object.path_progress != null)
                message.path_progress = Number(object.path_progress);
            if (object.progress_scale != null)
                message.progress_scale = Number(object.progress_scale);
            if (object.progress_penalty_cost != null)
                message.progress_penalty_cost = Number(object.progress_penalty_cost);
            if (object.progress_max_penalty_scale != null)
                message.progress_max_penalty_scale = Number(object.progress_max_penalty_scale);
            if (object.progress_exploit_scale != null)
                message.progress_exploit_scale = Number(object.progress_exploit_scale);
            if (object.progress_exploit_penalty_cost != null)
                message.progress_exploit_penalty_cost = Number(object.progress_exploit_penalty_cost);
            if (object.max_topography != null)
                message.max_topography = Number(object.max_topography);
            if (object.max_topography_penalty_cost != null)
                message.max_topography_penalty_cost = Number(object.max_topography_penalty_cost);
            if (object.trend_topography != null)
                message.trend_topography = Number(object.trend_topography);
            if (object.trend_topography_penalty_in_travel_cost != null)
                message.trend_topography_penalty_in_travel_cost = Number(object.trend_topography_penalty_in_travel_cost);
            if (object.trend_topography_penalty_in_evade_cost != null)
                message.trend_topography_penalty_in_evade_cost = Number(object.trend_topography_penalty_in_evade_cost);
            if (object.min_distance_to_obstacle != null)
                message.min_distance_to_obstacle = Number(object.min_distance_to_obstacle);
            if (object.min_distance_to_obstacle_cost != null)
                message.min_distance_to_obstacle_cost = Number(object.min_distance_to_obstacle_cost);
            if (object.trend_distance_to_obstacle != null)
                message.trend_distance_to_obstacle = Number(object.trend_distance_to_obstacle);
            if (object.trend_distance_to_obstacle_in_travel_cost != null)
                message.trend_distance_to_obstacle_in_travel_cost = Number(object.trend_distance_to_obstacle_in_travel_cost);
            if (object.trend_distance_to_obstacle_in_evade_cost != null)
                message.trend_distance_to_obstacle_in_evade_cost = Number(object.trend_distance_to_obstacle_in_evade_cost);
            if (object.trend_distance_to_obstacle_with_window != null)
                message.trend_distance_to_obstacle_with_window = Number(object.trend_distance_to_obstacle_with_window);
            if (object.collision_range_location != null)
                message.collision_range_location = object.collision_range_location | 0;
            if (object.collision_range_length != null)
                message.collision_range_length = object.collision_range_length | 0;
            if (object.obstacle_penalty_cost != null)
                message.obstacle_penalty_cost = Number(object.obstacle_penalty_cost);
            if (object.curl_angle != null)
                message.curl_angle = Number(object.curl_angle);
            if (object.arc_angle != null)
                message.arc_angle = Number(object.arc_angle);
            if (object.linear_cost != null)
                message.linear_cost = Number(object.linear_cost);
            if (object.angular_cost != null)
                message.angular_cost = Number(object.angular_cost);
            if (object.path_left_distance != null)
                message.path_left_distance = Number(object.path_left_distance);
            if (object.point_count != null)
                message.point_count = object.point_count | 0;
            if (object.trend_path_index != null)
                message.trend_path_index = object.trend_path_index | 0;
            if (object.trend_path_heading != null)
                message.trend_path_heading = Number(object.trend_path_heading);
            if (object.trend_dwa_index != null)
                message.trend_dwa_index = object.trend_dwa_index | 0;
            if (object.trend_dwa_heading != null)
                message.trend_dwa_heading = Number(object.trend_dwa_heading);
            if (object.ending_path_index != null)
                message.ending_path_index = object.ending_path_index | 0;
            if (object.ending_path_heading != null)
                message.ending_path_heading = Number(object.ending_path_heading);
            if (object.ending_dwa_heading != null)
                message.ending_dwa_heading = Number(object.ending_dwa_heading);
            if (object.travel_distance != null)
                message.travel_distance = Number(object.travel_distance);
            if (object.travel_score != null)
                message.travel_score = Number(object.travel_score);
            if (object.evade_score_for_direction != null)
                message.evade_score_for_direction = Number(object.evade_score_for_direction);
            if (object.evade_score_for_selector != null)
                message.evade_score_for_selector = Number(object.evade_score_for_selector);
            if (object.cost != null)
                message.cost = Number(object.cost);
            if (object.end_point_deviation_cost != null)
                message.end_point_deviation_cost = Number(object.end_point_deviation_cost);
            if (object.end_point_deviation != null)
                message.end_point_deviation = Number(object.end_point_deviation);
            if (object.mean_path_deviation_cost != null)
                message.mean_path_deviation_cost = Number(object.mean_path_deviation_cost);
            if (object.mean_path_deviation != null)
                message.mean_path_deviation = Number(object.mean_path_deviation);
            if (object.progress_cost != null)
                message.progress_cost = Number(object.progress_cost);
            if (object.progress_made != null)
                message.progress_made = Number(object.progress_made);
            if (object.heading_cost != null)
                message.heading_cost = Number(object.heading_cost);
            if (object.end_point_heading_error != null)
                message.end_point_heading_error = Number(object.end_point_heading_error);
            if (object.steering_cost != null)
                message.steering_cost = Number(object.steering_cost);
            if (object.steering_change_cost != null)
                message.steering_change_cost = Number(object.steering_change_cost);
            if (object.velocity_change_cost != null)
                message.velocity_change_cost = Number(object.velocity_change_cost);
            if (object.resolution_index != null)
                message.resolution_index = object.resolution_index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a DwaCandidatePath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {ax_proto_msgs.DwaCandidatePath} message DwaCandidatePath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DwaCandidatePath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.is_selected = false;
                object.is_invalid = false;
                object.has_collision = false;
                object.is_diagonal = false;
                object.linear_velocity = 0;
                object.angular_velocity = 0;
                object.linear_acceleration = 0;
                object.angular_acceleration = 0;
                object.front_wheel_velocity = 0;
                object.steering_angle = 0;
                object.max_depart_distance_left = 0;
                object.max_depart_distance_right = 0;
                object.ending_depart_distance = 0;
                object.ending_depart_distance_cost = 0;
                object.trend_turn_angle = 0;
                object.trend_turn_angle_cost = 0;
                object.ending_turn_angle = 0;
                object.ending_turn_angle_cost = 0;
                object.path_progress = 0;
                object.progress_scale = 0;
                object.progress_penalty_cost = 0;
                object.progress_max_penalty_scale = 0;
                object.progress_exploit_scale = 0;
                object.progress_exploit_penalty_cost = 0;
                object.max_topography = 0;
                object.max_topography_penalty_cost = 0;
                object.trend_topography = 0;
                object.trend_topography_penalty_in_travel_cost = 0;
                object.trend_topography_penalty_in_evade_cost = 0;
                object.min_distance_to_obstacle = 0;
                object.min_distance_to_obstacle_cost = 0;
                object.trend_distance_to_obstacle = 0;
                object.trend_distance_to_obstacle_in_travel_cost = 0;
                object.trend_distance_to_obstacle_in_evade_cost = 0;
                object.trend_distance_to_obstacle_with_window = 0;
                object.collision_range_location = 0;
                object.collision_range_length = 0;
                object.obstacle_penalty_cost = 0;
                object.curl_angle = 0;
                object.arc_angle = 0;
                object.linear_cost = 0;
                object.angular_cost = 0;
                object.path_left_distance = 0;
                object.point_count = 0;
                object.trend_path_index = 0;
                object.trend_path_heading = 0;
                object.trend_dwa_index = 0;
                object.trend_dwa_heading = 0;
                object.ending_path_index = 0;
                object.ending_path_heading = 0;
                object.ending_dwa_heading = 0;
                object.travel_distance = 0;
                object.travel_score = 0;
                object.evade_score_for_direction = 0;
                object.evade_score_for_selector = 0;
                object.cost = 0;
                object.end_point_deviation_cost = 0;
                object.end_point_deviation = 0;
                object.mean_path_deviation_cost = 0;
                object.mean_path_deviation = 0;
                object.progress_cost = 0;
                object.progress_made = 0;
                object.heading_cost = 0;
                object.end_point_heading_error = 0;
                object.steering_cost = 0;
                object.steering_change_cost = 0;
                object.velocity_change_cost = 0;
                object.resolution_index = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.is_selected != null && message.hasOwnProperty("is_selected"))
                object.is_selected = message.is_selected;
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
            if (message.is_invalid != null && message.hasOwnProperty("is_invalid"))
                object.is_invalid = message.is_invalid;
            if (message.has_collision != null && message.hasOwnProperty("has_collision"))
                object.has_collision = message.has_collision;
            if (message.is_diagonal != null && message.hasOwnProperty("is_diagonal"))
                object.is_diagonal = message.is_diagonal;
            if (message.linear_velocity != null && message.hasOwnProperty("linear_velocity"))
                object.linear_velocity = options.json && !isFinite(message.linear_velocity) ? String(message.linear_velocity) : message.linear_velocity;
            if (message.angular_velocity != null && message.hasOwnProperty("angular_velocity"))
                object.angular_velocity = options.json && !isFinite(message.angular_velocity) ? String(message.angular_velocity) : message.angular_velocity;
            if (message.linear_acceleration != null && message.hasOwnProperty("linear_acceleration"))
                object.linear_acceleration = options.json && !isFinite(message.linear_acceleration) ? String(message.linear_acceleration) : message.linear_acceleration;
            if (message.angular_acceleration != null && message.hasOwnProperty("angular_acceleration"))
                object.angular_acceleration = options.json && !isFinite(message.angular_acceleration) ? String(message.angular_acceleration) : message.angular_acceleration;
            if (message.front_wheel_velocity != null && message.hasOwnProperty("front_wheel_velocity"))
                object.front_wheel_velocity = options.json && !isFinite(message.front_wheel_velocity) ? String(message.front_wheel_velocity) : message.front_wheel_velocity;
            if (message.steering_angle != null && message.hasOwnProperty("steering_angle"))
                object.steering_angle = options.json && !isFinite(message.steering_angle) ? String(message.steering_angle) : message.steering_angle;
            if (message.max_depart_distance_left != null && message.hasOwnProperty("max_depart_distance_left"))
                object.max_depart_distance_left = options.json && !isFinite(message.max_depart_distance_left) ? String(message.max_depart_distance_left) : message.max_depart_distance_left;
            if (message.max_depart_distance_right != null && message.hasOwnProperty("max_depart_distance_right"))
                object.max_depart_distance_right = options.json && !isFinite(message.max_depart_distance_right) ? String(message.max_depart_distance_right) : message.max_depart_distance_right;
            if (message.ending_depart_distance != null && message.hasOwnProperty("ending_depart_distance"))
                object.ending_depart_distance = options.json && !isFinite(message.ending_depart_distance) ? String(message.ending_depart_distance) : message.ending_depart_distance;
            if (message.ending_depart_distance_cost != null && message.hasOwnProperty("ending_depart_distance_cost"))
                object.ending_depart_distance_cost = options.json && !isFinite(message.ending_depart_distance_cost) ? String(message.ending_depart_distance_cost) : message.ending_depart_distance_cost;
            if (message.trend_turn_angle != null && message.hasOwnProperty("trend_turn_angle"))
                object.trend_turn_angle = options.json && !isFinite(message.trend_turn_angle) ? String(message.trend_turn_angle) : message.trend_turn_angle;
            if (message.trend_turn_angle_cost != null && message.hasOwnProperty("trend_turn_angle_cost"))
                object.trend_turn_angle_cost = options.json && !isFinite(message.trend_turn_angle_cost) ? String(message.trend_turn_angle_cost) : message.trend_turn_angle_cost;
            if (message.ending_turn_angle != null && message.hasOwnProperty("ending_turn_angle"))
                object.ending_turn_angle = options.json && !isFinite(message.ending_turn_angle) ? String(message.ending_turn_angle) : message.ending_turn_angle;
            if (message.ending_turn_angle_cost != null && message.hasOwnProperty("ending_turn_angle_cost"))
                object.ending_turn_angle_cost = options.json && !isFinite(message.ending_turn_angle_cost) ? String(message.ending_turn_angle_cost) : message.ending_turn_angle_cost;
            if (message.path_progress != null && message.hasOwnProperty("path_progress"))
                object.path_progress = options.json && !isFinite(message.path_progress) ? String(message.path_progress) : message.path_progress;
            if (message.progress_scale != null && message.hasOwnProperty("progress_scale"))
                object.progress_scale = options.json && !isFinite(message.progress_scale) ? String(message.progress_scale) : message.progress_scale;
            if (message.progress_penalty_cost != null && message.hasOwnProperty("progress_penalty_cost"))
                object.progress_penalty_cost = options.json && !isFinite(message.progress_penalty_cost) ? String(message.progress_penalty_cost) : message.progress_penalty_cost;
            if (message.progress_max_penalty_scale != null && message.hasOwnProperty("progress_max_penalty_scale"))
                object.progress_max_penalty_scale = options.json && !isFinite(message.progress_max_penalty_scale) ? String(message.progress_max_penalty_scale) : message.progress_max_penalty_scale;
            if (message.progress_exploit_scale != null && message.hasOwnProperty("progress_exploit_scale"))
                object.progress_exploit_scale = options.json && !isFinite(message.progress_exploit_scale) ? String(message.progress_exploit_scale) : message.progress_exploit_scale;
            if (message.progress_exploit_penalty_cost != null && message.hasOwnProperty("progress_exploit_penalty_cost"))
                object.progress_exploit_penalty_cost = options.json && !isFinite(message.progress_exploit_penalty_cost) ? String(message.progress_exploit_penalty_cost) : message.progress_exploit_penalty_cost;
            if (message.max_topography != null && message.hasOwnProperty("max_topography"))
                object.max_topography = options.json && !isFinite(message.max_topography) ? String(message.max_topography) : message.max_topography;
            if (message.max_topography_penalty_cost != null && message.hasOwnProperty("max_topography_penalty_cost"))
                object.max_topography_penalty_cost = options.json && !isFinite(message.max_topography_penalty_cost) ? String(message.max_topography_penalty_cost) : message.max_topography_penalty_cost;
            if (message.trend_topography != null && message.hasOwnProperty("trend_topography"))
                object.trend_topography = options.json && !isFinite(message.trend_topography) ? String(message.trend_topography) : message.trend_topography;
            if (message.trend_topography_penalty_in_travel_cost != null && message.hasOwnProperty("trend_topography_penalty_in_travel_cost"))
                object.trend_topography_penalty_in_travel_cost = options.json && !isFinite(message.trend_topography_penalty_in_travel_cost) ? String(message.trend_topography_penalty_in_travel_cost) : message.trend_topography_penalty_in_travel_cost;
            if (message.trend_topography_penalty_in_evade_cost != null && message.hasOwnProperty("trend_topography_penalty_in_evade_cost"))
                object.trend_topography_penalty_in_evade_cost = options.json && !isFinite(message.trend_topography_penalty_in_evade_cost) ? String(message.trend_topography_penalty_in_evade_cost) : message.trend_topography_penalty_in_evade_cost;
            if (message.min_distance_to_obstacle != null && message.hasOwnProperty("min_distance_to_obstacle"))
                object.min_distance_to_obstacle = options.json && !isFinite(message.min_distance_to_obstacle) ? String(message.min_distance_to_obstacle) : message.min_distance_to_obstacle;
            if (message.min_distance_to_obstacle_cost != null && message.hasOwnProperty("min_distance_to_obstacle_cost"))
                object.min_distance_to_obstacle_cost = options.json && !isFinite(message.min_distance_to_obstacle_cost) ? String(message.min_distance_to_obstacle_cost) : message.min_distance_to_obstacle_cost;
            if (message.trend_distance_to_obstacle != null && message.hasOwnProperty("trend_distance_to_obstacle"))
                object.trend_distance_to_obstacle = options.json && !isFinite(message.trend_distance_to_obstacle) ? String(message.trend_distance_to_obstacle) : message.trend_distance_to_obstacle;
            if (message.trend_distance_to_obstacle_in_travel_cost != null && message.hasOwnProperty("trend_distance_to_obstacle_in_travel_cost"))
                object.trend_distance_to_obstacle_in_travel_cost = options.json && !isFinite(message.trend_distance_to_obstacle_in_travel_cost) ? String(message.trend_distance_to_obstacle_in_travel_cost) : message.trend_distance_to_obstacle_in_travel_cost;
            if (message.trend_distance_to_obstacle_in_evade_cost != null && message.hasOwnProperty("trend_distance_to_obstacle_in_evade_cost"))
                object.trend_distance_to_obstacle_in_evade_cost = options.json && !isFinite(message.trend_distance_to_obstacle_in_evade_cost) ? String(message.trend_distance_to_obstacle_in_evade_cost) : message.trend_distance_to_obstacle_in_evade_cost;
            if (message.trend_distance_to_obstacle_with_window != null && message.hasOwnProperty("trend_distance_to_obstacle_with_window"))
                object.trend_distance_to_obstacle_with_window = options.json && !isFinite(message.trend_distance_to_obstacle_with_window) ? String(message.trend_distance_to_obstacle_with_window) : message.trend_distance_to_obstacle_with_window;
            if (message.collision_range_location != null && message.hasOwnProperty("collision_range_location"))
                object.collision_range_location = message.collision_range_location;
            if (message.collision_range_length != null && message.hasOwnProperty("collision_range_length"))
                object.collision_range_length = message.collision_range_length;
            if (message.obstacle_penalty_cost != null && message.hasOwnProperty("obstacle_penalty_cost"))
                object.obstacle_penalty_cost = options.json && !isFinite(message.obstacle_penalty_cost) ? String(message.obstacle_penalty_cost) : message.obstacle_penalty_cost;
            if (message.curl_angle != null && message.hasOwnProperty("curl_angle"))
                object.curl_angle = options.json && !isFinite(message.curl_angle) ? String(message.curl_angle) : message.curl_angle;
            if (message.arc_angle != null && message.hasOwnProperty("arc_angle"))
                object.arc_angle = options.json && !isFinite(message.arc_angle) ? String(message.arc_angle) : message.arc_angle;
            if (message.linear_cost != null && message.hasOwnProperty("linear_cost"))
                object.linear_cost = options.json && !isFinite(message.linear_cost) ? String(message.linear_cost) : message.linear_cost;
            if (message.angular_cost != null && message.hasOwnProperty("angular_cost"))
                object.angular_cost = options.json && !isFinite(message.angular_cost) ? String(message.angular_cost) : message.angular_cost;
            if (message.path_left_distance != null && message.hasOwnProperty("path_left_distance"))
                object.path_left_distance = options.json && !isFinite(message.path_left_distance) ? String(message.path_left_distance) : message.path_left_distance;
            if (message.point_count != null && message.hasOwnProperty("point_count"))
                object.point_count = message.point_count;
            if (message.trend_path_index != null && message.hasOwnProperty("trend_path_index"))
                object.trend_path_index = message.trend_path_index;
            if (message.trend_path_heading != null && message.hasOwnProperty("trend_path_heading"))
                object.trend_path_heading = options.json && !isFinite(message.trend_path_heading) ? String(message.trend_path_heading) : message.trend_path_heading;
            if (message.trend_dwa_index != null && message.hasOwnProperty("trend_dwa_index"))
                object.trend_dwa_index = message.trend_dwa_index;
            if (message.trend_dwa_heading != null && message.hasOwnProperty("trend_dwa_heading"))
                object.trend_dwa_heading = options.json && !isFinite(message.trend_dwa_heading) ? String(message.trend_dwa_heading) : message.trend_dwa_heading;
            if (message.ending_path_index != null && message.hasOwnProperty("ending_path_index"))
                object.ending_path_index = message.ending_path_index;
            if (message.ending_path_heading != null && message.hasOwnProperty("ending_path_heading"))
                object.ending_path_heading = options.json && !isFinite(message.ending_path_heading) ? String(message.ending_path_heading) : message.ending_path_heading;
            if (message.ending_dwa_heading != null && message.hasOwnProperty("ending_dwa_heading"))
                object.ending_dwa_heading = options.json && !isFinite(message.ending_dwa_heading) ? String(message.ending_dwa_heading) : message.ending_dwa_heading;
            if (message.travel_distance != null && message.hasOwnProperty("travel_distance"))
                object.travel_distance = options.json && !isFinite(message.travel_distance) ? String(message.travel_distance) : message.travel_distance;
            if (message.travel_score != null && message.hasOwnProperty("travel_score"))
                object.travel_score = options.json && !isFinite(message.travel_score) ? String(message.travel_score) : message.travel_score;
            if (message.evade_score_for_direction != null && message.hasOwnProperty("evade_score_for_direction"))
                object.evade_score_for_direction = options.json && !isFinite(message.evade_score_for_direction) ? String(message.evade_score_for_direction) : message.evade_score_for_direction;
            if (message.evade_score_for_selector != null && message.hasOwnProperty("evade_score_for_selector"))
                object.evade_score_for_selector = options.json && !isFinite(message.evade_score_for_selector) ? String(message.evade_score_for_selector) : message.evade_score_for_selector;
            if (message.cost != null && message.hasOwnProperty("cost"))
                object.cost = options.json && !isFinite(message.cost) ? String(message.cost) : message.cost;
            if (message.end_point_deviation_cost != null && message.hasOwnProperty("end_point_deviation_cost"))
                object.end_point_deviation_cost = options.json && !isFinite(message.end_point_deviation_cost) ? String(message.end_point_deviation_cost) : message.end_point_deviation_cost;
            if (message.end_point_deviation != null && message.hasOwnProperty("end_point_deviation"))
                object.end_point_deviation = options.json && !isFinite(message.end_point_deviation) ? String(message.end_point_deviation) : message.end_point_deviation;
            if (message.mean_path_deviation_cost != null && message.hasOwnProperty("mean_path_deviation_cost"))
                object.mean_path_deviation_cost = options.json && !isFinite(message.mean_path_deviation_cost) ? String(message.mean_path_deviation_cost) : message.mean_path_deviation_cost;
            if (message.mean_path_deviation != null && message.hasOwnProperty("mean_path_deviation"))
                object.mean_path_deviation = options.json && !isFinite(message.mean_path_deviation) ? String(message.mean_path_deviation) : message.mean_path_deviation;
            if (message.progress_cost != null && message.hasOwnProperty("progress_cost"))
                object.progress_cost = options.json && !isFinite(message.progress_cost) ? String(message.progress_cost) : message.progress_cost;
            if (message.progress_made != null && message.hasOwnProperty("progress_made"))
                object.progress_made = options.json && !isFinite(message.progress_made) ? String(message.progress_made) : message.progress_made;
            if (message.heading_cost != null && message.hasOwnProperty("heading_cost"))
                object.heading_cost = options.json && !isFinite(message.heading_cost) ? String(message.heading_cost) : message.heading_cost;
            if (message.end_point_heading_error != null && message.hasOwnProperty("end_point_heading_error"))
                object.end_point_heading_error = options.json && !isFinite(message.end_point_heading_error) ? String(message.end_point_heading_error) : message.end_point_heading_error;
            if (message.steering_cost != null && message.hasOwnProperty("steering_cost"))
                object.steering_cost = options.json && !isFinite(message.steering_cost) ? String(message.steering_cost) : message.steering_cost;
            if (message.steering_change_cost != null && message.hasOwnProperty("steering_change_cost"))
                object.steering_change_cost = options.json && !isFinite(message.steering_change_cost) ? String(message.steering_change_cost) : message.steering_change_cost;
            if (message.velocity_change_cost != null && message.hasOwnProperty("velocity_change_cost"))
                object.velocity_change_cost = options.json && !isFinite(message.velocity_change_cost) ? String(message.velocity_change_cost) : message.velocity_change_cost;
            if (message.resolution_index != null && message.hasOwnProperty("resolution_index"))
                object.resolution_index = message.resolution_index;
            return object;
        };

        /**
         * Converts this DwaCandidatePath to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DwaCandidatePath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DwaCandidatePath
         * @function getTypeUrl
         * @memberof ax_proto_msgs.DwaCandidatePath
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DwaCandidatePath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.DwaCandidatePath";
        };

        return DwaCandidatePath;
    })();

    /**
     * DwaCandidateKind enum.
     * @name ax_proto_msgs.DwaCandidateKind
     * @enum {number}
     * @property {number} DWA_KIND_UNSPECIFIED=0 DWA_KIND_UNSPECIFIED value
     * @property {number} DWA_KIND_BASE=1 DWA_KIND_BASE value
     * @property {number} DWA_KIND_V2=2 DWA_KIND_V2 value
     * @property {number} DWA_KIND_V2_LEGACY=3 DWA_KIND_V2_LEGACY value
     */
    ax_proto_msgs.DwaCandidateKind = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DWA_KIND_UNSPECIFIED"] = 0;
        values[valuesById[1] = "DWA_KIND_BASE"] = 1;
        values[valuesById[2] = "DWA_KIND_V2"] = 2;
        values[valuesById[3] = "DWA_KIND_V2_LEGACY"] = 3;
        return values;
    })();

    ax_proto_msgs.DwaCandidatePathSet = (function() {

        /**
         * Properties of a DwaCandidatePathSet.
         * @memberof ax_proto_msgs
         * @interface IDwaCandidatePathSet
         * @property {ax_proto_msgs.IHeader|null} [header] DwaCandidatePathSet header
         * @property {number|null} [origin_x] DwaCandidatePathSet origin_x
         * @property {number|null} [origin_y] DwaCandidatePathSet origin_y
         * @property {number|null} [resolution] DwaCandidatePathSet resolution
         * @property {Array.<ax_proto_msgs.IDwaCandidatePath>|null} [paths] DwaCandidatePathSet paths
         * @property {ax_proto_msgs.DwaCandidateKind|null} [kind] DwaCandidatePathSet kind
         */

        /**
         * Constructs a new DwaCandidatePathSet.
         * @memberof ax_proto_msgs
         * @classdesc Represents a DwaCandidatePathSet.
         * @implements IDwaCandidatePathSet
         * @constructor
         * @param {ax_proto_msgs.IDwaCandidatePathSet=} [properties] Properties to set
         */
        function DwaCandidatePathSet(properties) {
            this.paths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DwaCandidatePathSet header.
         * @member {ax_proto_msgs.IHeader|null|undefined} header
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.header = null;

        /**
         * DwaCandidatePathSet origin_x.
         * @member {number} origin_x
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.origin_x = 0;

        /**
         * DwaCandidatePathSet origin_y.
         * @member {number} origin_y
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.origin_y = 0;

        /**
         * DwaCandidatePathSet resolution.
         * @member {number} resolution
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.resolution = 0;

        /**
         * DwaCandidatePathSet paths.
         * @member {Array.<ax_proto_msgs.IDwaCandidatePath>} paths
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.paths = $util.emptyArray;

        /**
         * DwaCandidatePathSet kind.
         * @member {ax_proto_msgs.DwaCandidateKind} kind
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         */
        DwaCandidatePathSet.prototype.kind = 0;

        /**
         * Creates a new DwaCandidatePathSet instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePathSet=} [properties] Properties to set
         * @returns {ax_proto_msgs.DwaCandidatePathSet} DwaCandidatePathSet instance
         */
        DwaCandidatePathSet.create = function create(properties) {
            return new DwaCandidatePathSet(properties);
        };

        /**
         * Encodes the specified DwaCandidatePathSet message. Does not implicitly {@link ax_proto_msgs.DwaCandidatePathSet.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePathSet} message DwaCandidatePathSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DwaCandidatePathSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.ax_proto_msgs.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.origin_x != null && Object.hasOwnProperty.call(message, "origin_x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.origin_x);
            if (message.origin_y != null && Object.hasOwnProperty.call(message, "origin_y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.origin_y);
            if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.resolution);
            if (message.paths != null && message.paths.length)
                for (let i = 0; i < message.paths.length; ++i)
                    $root.ax_proto_msgs.DwaCandidatePath.encode(message.paths[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.kind);
            return writer;
        };

        /**
         * Encodes the specified DwaCandidatePathSet message, length delimited. Does not implicitly {@link ax_proto_msgs.DwaCandidatePathSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {ax_proto_msgs.IDwaCandidatePathSet} message DwaCandidatePathSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DwaCandidatePathSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DwaCandidatePathSet message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.DwaCandidatePathSet} DwaCandidatePathSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DwaCandidatePathSet.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.DwaCandidatePathSet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.ax_proto_msgs.Header.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.origin_x = reader.double();
                        break;
                    }
                case 3: {
                        message.origin_y = reader.double();
                        break;
                    }
                case 4: {
                        message.resolution = reader.float();
                        break;
                    }
                case 5: {
                        if (!(message.paths && message.paths.length))
                            message.paths = [];
                        message.paths.push($root.ax_proto_msgs.DwaCandidatePath.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.kind = reader.int32();
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
         * Decodes a DwaCandidatePathSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.DwaCandidatePathSet} DwaCandidatePathSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DwaCandidatePathSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DwaCandidatePathSet message.
         * @function verify
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DwaCandidatePathSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.ax_proto_msgs.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.origin_x != null && message.hasOwnProperty("origin_x"))
                if (typeof message.origin_x !== "number")
                    return "origin_x: number expected";
            if (message.origin_y != null && message.hasOwnProperty("origin_y"))
                if (typeof message.origin_y !== "number")
                    return "origin_y: number expected";
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                if (typeof message.resolution !== "number")
                    return "resolution: number expected";
            if (message.paths != null && message.hasOwnProperty("paths")) {
                if (!Array.isArray(message.paths))
                    return "paths: array expected";
                for (let i = 0; i < message.paths.length; ++i) {
                    let error = $root.ax_proto_msgs.DwaCandidatePath.verify(message.paths[i]);
                    if (error)
                        return "paths." + error;
                }
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                default:
                    return "kind: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a DwaCandidatePathSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.DwaCandidatePathSet} DwaCandidatePathSet
         */
        DwaCandidatePathSet.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.DwaCandidatePathSet)
                return object;
            let message = new $root.ax_proto_msgs.DwaCandidatePathSet();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".ax_proto_msgs.DwaCandidatePathSet.header: object expected");
                message.header = $root.ax_proto_msgs.Header.fromObject(object.header);
            }
            if (object.origin_x != null)
                message.origin_x = Number(object.origin_x);
            if (object.origin_y != null)
                message.origin_y = Number(object.origin_y);
            if (object.resolution != null)
                message.resolution = Number(object.resolution);
            if (object.paths) {
                if (!Array.isArray(object.paths))
                    throw TypeError(".ax_proto_msgs.DwaCandidatePathSet.paths: array expected");
                message.paths = [];
                for (let i = 0; i < object.paths.length; ++i) {
                    if (typeof object.paths[i] !== "object")
                        throw TypeError(".ax_proto_msgs.DwaCandidatePathSet.paths: object expected");
                    message.paths[i] = $root.ax_proto_msgs.DwaCandidatePath.fromObject(object.paths[i]);
                }
            }
            switch (object.kind) {
            default:
                if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                }
                break;
            case "DWA_KIND_UNSPECIFIED":
            case 0:
                message.kind = 0;
                break;
            case "DWA_KIND_BASE":
            case 1:
                message.kind = 1;
                break;
            case "DWA_KIND_V2":
            case 2:
                message.kind = 2;
                break;
            case "DWA_KIND_V2_LEGACY":
            case 3:
                message.kind = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DwaCandidatePathSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {ax_proto_msgs.DwaCandidatePathSet} message DwaCandidatePathSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DwaCandidatePathSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.paths = [];
            if (options.defaults) {
                object.header = null;
                object.origin_x = 0;
                object.origin_y = 0;
                object.resolution = 0;
                object.kind = options.enums === String ? "DWA_KIND_UNSPECIFIED" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.ax_proto_msgs.Header.toObject(message.header, options);
            if (message.origin_x != null && message.hasOwnProperty("origin_x"))
                object.origin_x = options.json && !isFinite(message.origin_x) ? String(message.origin_x) : message.origin_x;
            if (message.origin_y != null && message.hasOwnProperty("origin_y"))
                object.origin_y = options.json && !isFinite(message.origin_y) ? String(message.origin_y) : message.origin_y;
            if (message.resolution != null && message.hasOwnProperty("resolution"))
                object.resolution = options.json && !isFinite(message.resolution) ? String(message.resolution) : message.resolution;
            if (message.paths && message.paths.length) {
                object.paths = [];
                for (let j = 0; j < message.paths.length; ++j)
                    object.paths[j] = $root.ax_proto_msgs.DwaCandidatePath.toObject(message.paths[j], options);
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.ax_proto_msgs.DwaCandidateKind[message.kind] === undefined ? message.kind : $root.ax_proto_msgs.DwaCandidateKind[message.kind] : message.kind;
            return object;
        };

        /**
         * Converts this DwaCandidatePathSet to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DwaCandidatePathSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DwaCandidatePathSet
         * @function getTypeUrl
         * @memberof ax_proto_msgs.DwaCandidatePathSet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DwaCandidatePathSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.DwaCandidatePathSet";
        };

        return DwaCandidatePathSet;
    })();

    ax_proto_msgs.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof ax_proto_msgs
         * @interface IHeader
         * @property {number|null} [seq] Header seq
         * @property {number|Long|null} [stamp_nsec] Header stamp_nsec
         * @property {string|null} [frame_id] Header frame_id
         */

        /**
         * Constructs a new Header.
         * @memberof ax_proto_msgs
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {ax_proto_msgs.IHeader=} [properties] Properties to set
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
         * @memberof ax_proto_msgs.Header
         * @instance
         */
        Header.prototype.seq = 0;

        /**
         * Header stamp_nsec.
         * @member {number|Long} stamp_nsec
         * @memberof ax_proto_msgs.Header
         * @instance
         */
        Header.prototype.stamp_nsec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Header frame_id.
         * @member {string} frame_id
         * @memberof ax_proto_msgs.Header
         * @instance
         */
        Header.prototype.frame_id = "";

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {ax_proto_msgs.IHeader=} [properties] Properties to set
         * @returns {ax_proto_msgs.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link ax_proto_msgs.Header.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {ax_proto_msgs.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
            if (message.stamp_nsec != null && Object.hasOwnProperty.call(message, "stamp_nsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.stamp_nsec);
            if (message.frame_id != null && Object.hasOwnProperty.call(message, "frame_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.frame_id);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link ax_proto_msgs.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {ax_proto_msgs.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.uint32();
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
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.Header} Header
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
         * @memberof ax_proto_msgs.Header
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
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.Header)
                return object;
            let message = new $root.ax_proto_msgs.Header();
            if (object.seq != null)
                message.seq = object.seq >>> 0;
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
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {ax_proto_msgs.Header} message Header
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
                    object.stamp_nsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stamp_nsec = options.longs === String ? "0" : 0;
                object.frame_id = "";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
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
         * @memberof ax_proto_msgs.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof ax_proto_msgs.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.Header";
        };

        return Header;
    })();

    ax_proto_msgs.Pose = (function() {

        /**
         * Properties of a Pose.
         * @memberof ax_proto_msgs
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
         * @memberof ax_proto_msgs
         * @classdesc Represents a Pose.
         * @implements IPose
         * @constructor
         * @param {ax_proto_msgs.IPose=} [properties] Properties to set
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
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.x = 0;

        /**
         * Pose y.
         * @member {number} y
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.y = 0;

        /**
         * Pose z.
         * @member {number} z
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.z = 0;

        /**
         * Pose qx.
         * @member {number} qx
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.qx = 0;

        /**
         * Pose qy.
         * @member {number} qy
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.qy = 0;

        /**
         * Pose qz.
         * @member {number} qz
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.qz = 0;

        /**
         * Pose qw.
         * @member {number} qw
         * @memberof ax_proto_msgs.Pose
         * @instance
         */
        Pose.prototype.qw = 0;

        /**
         * Creates a new Pose instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {ax_proto_msgs.IPose=} [properties] Properties to set
         * @returns {ax_proto_msgs.Pose} Pose instance
         */
        Pose.create = function create(properties) {
            return new Pose(properties);
        };

        /**
         * Encodes the specified Pose message. Does not implicitly {@link ax_proto_msgs.Pose.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {ax_proto_msgs.IPose} message Pose message or plain object to encode
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
         * Encodes the specified Pose message, length delimited. Does not implicitly {@link ax_proto_msgs.Pose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {ax_proto_msgs.IPose} message Pose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pose message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.Pose} Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pose.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.Pose();
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
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.Pose} Pose
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
         * @memberof ax_proto_msgs.Pose
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
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.Pose} Pose
         */
        Pose.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.Pose)
                return object;
            let message = new $root.ax_proto_msgs.Pose();
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
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {ax_proto_msgs.Pose} message Pose
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
         * @memberof ax_proto_msgs.Pose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pose
         * @function getTypeUrl
         * @memberof ax_proto_msgs.Pose
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pose.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.Pose";
        };

        return Pose;
    })();

    ax_proto_msgs.MastState = (function() {

        /**
         * Properties of a MastState.
         * @memberof ax_proto_msgs
         * @interface IMastState
         * @property {number|null} [target_height] MastState target_height
         * @property {number|null} [current_height] MastState current_height
         * @property {ax_proto_msgs.MastState.MotionState.Type|null} [motion_state] MastState motion_state
         * @property {number|null} [error] MastState error
         * @property {string|null} [error_message] MastState error_message
         */

        /**
         * Constructs a new MastState.
         * @memberof ax_proto_msgs
         * @classdesc Represents a MastState.
         * @implements IMastState
         * @constructor
         * @param {ax_proto_msgs.IMastState=} [properties] Properties to set
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
         * @memberof ax_proto_msgs.MastState
         * @instance
         */
        MastState.prototype.target_height = 0;

        /**
         * MastState current_height.
         * @member {number} current_height
         * @memberof ax_proto_msgs.MastState
         * @instance
         */
        MastState.prototype.current_height = 0;

        /**
         * MastState motion_state.
         * @member {ax_proto_msgs.MastState.MotionState.Type} motion_state
         * @memberof ax_proto_msgs.MastState
         * @instance
         */
        MastState.prototype.motion_state = 0;

        /**
         * MastState error.
         * @member {number} error
         * @memberof ax_proto_msgs.MastState
         * @instance
         */
        MastState.prototype.error = 0;

        /**
         * MastState error_message.
         * @member {string} error_message
         * @memberof ax_proto_msgs.MastState
         * @instance
         */
        MastState.prototype.error_message = "";

        /**
         * Creates a new MastState instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {ax_proto_msgs.IMastState=} [properties] Properties to set
         * @returns {ax_proto_msgs.MastState} MastState instance
         */
        MastState.create = function create(properties) {
            return new MastState(properties);
        };

        /**
         * Encodes the specified MastState message. Does not implicitly {@link ax_proto_msgs.MastState.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {ax_proto_msgs.IMastState} message MastState message or plain object to encode
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
         * Encodes the specified MastState message, length delimited. Does not implicitly {@link ax_proto_msgs.MastState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {ax_proto_msgs.IMastState} message MastState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MastState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MastState message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.MastState} MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MastState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MastState();
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
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.MastState} MastState
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
         * @memberof ax_proto_msgs.MastState
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
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.MastState} MastState
         */
        MastState.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.MastState)
                return object;
            let message = new $root.ax_proto_msgs.MastState();
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
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {ax_proto_msgs.MastState} message MastState
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
                object.motion_state = options.enums === String ? $root.ax_proto_msgs.MastState.MotionState.Type[message.motion_state] === undefined ? message.motion_state : $root.ax_proto_msgs.MastState.MotionState.Type[message.motion_state] : message.motion_state;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            return object;
        };

        /**
         * Converts this MastState to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.MastState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MastState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MastState
         * @function getTypeUrl
         * @memberof ax_proto_msgs.MastState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MastState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.MastState";
        };

        MastState.MotionState = (function() {

            /**
             * Properties of a MotionState.
             * @memberof ax_proto_msgs.MastState
             * @interface IMotionState
             */

            /**
             * Constructs a new MotionState.
             * @memberof ax_proto_msgs.MastState
             * @classdesc Represents a MotionState.
             * @implements IMotionState
             * @constructor
             * @param {ax_proto_msgs.MastState.IMotionState=} [properties] Properties to set
             */
            function MotionState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new MotionState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {ax_proto_msgs.MastState.IMotionState=} [properties] Properties to set
             * @returns {ax_proto_msgs.MastState.MotionState} MotionState instance
             */
            MotionState.create = function create(properties) {
                return new MotionState(properties);
            };

            /**
             * Encodes the specified MotionState message. Does not implicitly {@link ax_proto_msgs.MastState.MotionState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {ax_proto_msgs.MastState.IMotionState} message MotionState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MotionState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified MotionState message, length delimited. Does not implicitly {@link ax_proto_msgs.MastState.MotionState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {ax_proto_msgs.MastState.IMotionState} message MotionState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MotionState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MotionState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MastState.MotionState} MotionState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MotionState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MastState.MotionState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MotionState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MastState.MotionState} MotionState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MotionState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MotionState message.
             * @function verify
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MotionState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a MotionState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MastState.MotionState} MotionState
             */
            MotionState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MastState.MotionState)
                    return object;
                return new $root.ax_proto_msgs.MastState.MotionState();
            };

            /**
             * Creates a plain object from a MotionState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {ax_proto_msgs.MastState.MotionState} message MotionState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MotionState.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this MotionState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MastState.MotionState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MotionState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MotionState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MastState.MotionState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MotionState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MastState.MotionState";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MastState.MotionState.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} MOVING_HOLD=1 MOVING_HOLD value
             * @property {number} MOVING_UP=2 MOVING_UP value
             * @property {number} MOVING_DOWN=3 MOVING_DOWN value
             */
            MotionState.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "MOVING_HOLD"] = 1;
                values[valuesById[2] = "MOVING_UP"] = 2;
                values[valuesById[3] = "MOVING_DOWN"] = 3;
                return values;
            })();

            return MotionState;
        })();

        return MastState;
    })();

    ax_proto_msgs.MobileNetworkState = (function() {

        /**
         * Properties of a MobileNetworkState.
         * @memberof ax_proto_msgs
         * @interface IMobileNetworkState
         * @property {ax_proto_msgs.MobileNetworkState.ModemState.Type|null} [modem_state] MobileNetworkState modem_state
         * @property {ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type|null} [recovery_request] MobileNetworkState recovery_request
         * @property {string|null} [recovery_reason] MobileNetworkState recovery_reason
         * @property {ax_proto_msgs.MobileNetworkState.SimState.Type|null} [sim_state] MobileNetworkState sim_state
         * @property {string|null} [iccid] MobileNetworkState iccid
         * @property {string|null} [imei] MobileNetworkState imei
         * @property {string|null} [imsi] MobileNetworkState imsi
         * @property {string|null} [model] MobileNetworkState model
         * @property {string|null} [firmware_ver] MobileNetworkState firmware_ver
         * @property {ax_proto_msgs.MobileNetworkState.RegState.Type|null} [reg_state] MobileNetworkState reg_state
         * @property {ax_proto_msgs.MobileNetworkState.Rat.Type|null} [rat] MobileNetworkState rat
         * @property {string|null} [operator_name] MobileNetworkState operator_name
         * @property {number|null} [lac] MobileNetworkState lac
         * @property {number|null} [cell_id] MobileNetworkState cell_id
         * @property {number|null} [rssi_dbm] MobileNetworkState rssi_dbm
         * @property {number|null} [rsrp_dbm] MobileNetworkState rsrp_dbm
         * @property {number|null} [rsrq_db] MobileNetworkState rsrq_db
         * @property {number|null} [sinr_db] MobileNetworkState sinr_db
         * @property {number|null} [signal_level] MobileNetworkState signal_level
         * @property {ax_proto_msgs.MobileNetworkState.DataState.Type|null} [data_state] MobileNetworkState data_state
         * @property {string|null} [apn] MobileNetworkState apn
         * @property {string|null} [ip_address] MobileNetworkState ip_address
         * @property {number|null} [connected_duration_sec] MobileNetworkState connected_duration_sec
         * @property {number|Long|null} [tx_bytes] MobileNetworkState tx_bytes
         * @property {number|Long|null} [rx_bytes] MobileNetworkState rx_bytes
         */

        /**
         * Constructs a new MobileNetworkState.
         * @memberof ax_proto_msgs
         * @classdesc Represents a MobileNetworkState.
         * @implements IMobileNetworkState
         * @constructor
         * @param {ax_proto_msgs.IMobileNetworkState=} [properties] Properties to set
         */
        function MobileNetworkState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MobileNetworkState modem_state.
         * @member {ax_proto_msgs.MobileNetworkState.ModemState.Type} modem_state
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.modem_state = 0;

        /**
         * MobileNetworkState recovery_request.
         * @member {ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type} recovery_request
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.recovery_request = 0;

        /**
         * MobileNetworkState recovery_reason.
         * @member {string} recovery_reason
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.recovery_reason = "";

        /**
         * MobileNetworkState sim_state.
         * @member {ax_proto_msgs.MobileNetworkState.SimState.Type} sim_state
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.sim_state = 0;

        /**
         * MobileNetworkState iccid.
         * @member {string} iccid
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.iccid = "";

        /**
         * MobileNetworkState imei.
         * @member {string} imei
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.imei = "";

        /**
         * MobileNetworkState imsi.
         * @member {string} imsi
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.imsi = "";

        /**
         * MobileNetworkState model.
         * @member {string} model
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.model = "";

        /**
         * MobileNetworkState firmware_ver.
         * @member {string} firmware_ver
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.firmware_ver = "";

        /**
         * MobileNetworkState reg_state.
         * @member {ax_proto_msgs.MobileNetworkState.RegState.Type} reg_state
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.reg_state = 0;

        /**
         * MobileNetworkState rat.
         * @member {ax_proto_msgs.MobileNetworkState.Rat.Type} rat
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.rat = 0;

        /**
         * MobileNetworkState operator_name.
         * @member {string} operator_name
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.operator_name = "";

        /**
         * MobileNetworkState lac.
         * @member {number} lac
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.lac = 0;

        /**
         * MobileNetworkState cell_id.
         * @member {number} cell_id
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.cell_id = 0;

        /**
         * MobileNetworkState rssi_dbm.
         * @member {number} rssi_dbm
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.rssi_dbm = 0;

        /**
         * MobileNetworkState rsrp_dbm.
         * @member {number} rsrp_dbm
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.rsrp_dbm = 0;

        /**
         * MobileNetworkState rsrq_db.
         * @member {number} rsrq_db
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.rsrq_db = 0;

        /**
         * MobileNetworkState sinr_db.
         * @member {number} sinr_db
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.sinr_db = 0;

        /**
         * MobileNetworkState signal_level.
         * @member {number} signal_level
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.signal_level = 0;

        /**
         * MobileNetworkState data_state.
         * @member {ax_proto_msgs.MobileNetworkState.DataState.Type} data_state
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.data_state = 0;

        /**
         * MobileNetworkState apn.
         * @member {string} apn
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.apn = "";

        /**
         * MobileNetworkState ip_address.
         * @member {string} ip_address
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.ip_address = "";

        /**
         * MobileNetworkState connected_duration_sec.
         * @member {number} connected_duration_sec
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.connected_duration_sec = 0;

        /**
         * MobileNetworkState tx_bytes.
         * @member {number|Long} tx_bytes
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.tx_bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MobileNetworkState rx_bytes.
         * @member {number|Long} rx_bytes
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         */
        MobileNetworkState.prototype.rx_bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MobileNetworkState instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {ax_proto_msgs.IMobileNetworkState=} [properties] Properties to set
         * @returns {ax_proto_msgs.MobileNetworkState} MobileNetworkState instance
         */
        MobileNetworkState.create = function create(properties) {
            return new MobileNetworkState(properties);
        };

        /**
         * Encodes the specified MobileNetworkState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {ax_proto_msgs.IMobileNetworkState} message MobileNetworkState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MobileNetworkState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modem_state != null && Object.hasOwnProperty.call(message, "modem_state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modem_state);
            if (message.recovery_request != null && Object.hasOwnProperty.call(message, "recovery_request"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.recovery_request);
            if (message.recovery_reason != null && Object.hasOwnProperty.call(message, "recovery_reason"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.recovery_reason);
            if (message.sim_state != null && Object.hasOwnProperty.call(message, "sim_state"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sim_state);
            if (message.iccid != null && Object.hasOwnProperty.call(message, "iccid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.iccid);
            if (message.imei != null && Object.hasOwnProperty.call(message, "imei"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.imei);
            if (message.imsi != null && Object.hasOwnProperty.call(message, "imsi"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.imsi);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.model);
            if (message.firmware_ver != null && Object.hasOwnProperty.call(message, "firmware_ver"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.firmware_ver);
            if (message.reg_state != null && Object.hasOwnProperty.call(message, "reg_state"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.reg_state);
            if (message.rat != null && Object.hasOwnProperty.call(message, "rat"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.rat);
            if (message.operator_name != null && Object.hasOwnProperty.call(message, "operator_name"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.operator_name);
            if (message.lac != null && Object.hasOwnProperty.call(message, "lac"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.lac);
            if (message.cell_id != null && Object.hasOwnProperty.call(message, "cell_id"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.cell_id);
            if (message.rssi_dbm != null && Object.hasOwnProperty.call(message, "rssi_dbm"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.rssi_dbm);
            if (message.rsrp_dbm != null && Object.hasOwnProperty.call(message, "rsrp_dbm"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.rsrp_dbm);
            if (message.rsrq_db != null && Object.hasOwnProperty.call(message, "rsrq_db"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.rsrq_db);
            if (message.sinr_db != null && Object.hasOwnProperty.call(message, "sinr_db"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.sinr_db);
            if (message.signal_level != null && Object.hasOwnProperty.call(message, "signal_level"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.signal_level);
            if (message.data_state != null && Object.hasOwnProperty.call(message, "data_state"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.data_state);
            if (message.apn != null && Object.hasOwnProperty.call(message, "apn"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.apn);
            if (message.ip_address != null && Object.hasOwnProperty.call(message, "ip_address"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.ip_address);
            if (message.connected_duration_sec != null && Object.hasOwnProperty.call(message, "connected_duration_sec"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.connected_duration_sec);
            if (message.tx_bytes != null && Object.hasOwnProperty.call(message, "tx_bytes"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint64(message.tx_bytes);
            if (message.rx_bytes != null && Object.hasOwnProperty.call(message, "rx_bytes"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint64(message.rx_bytes);
            return writer;
        };

        /**
         * Encodes the specified MobileNetworkState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {ax_proto_msgs.IMobileNetworkState} message MobileNetworkState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MobileNetworkState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MobileNetworkState message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.MobileNetworkState} MobileNetworkState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MobileNetworkState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.modem_state = reader.int32();
                        break;
                    }
                case 2: {
                        message.recovery_request = reader.int32();
                        break;
                    }
                case 3: {
                        message.recovery_reason = reader.string();
                        break;
                    }
                case 4: {
                        message.sim_state = reader.int32();
                        break;
                    }
                case 5: {
                        message.iccid = reader.string();
                        break;
                    }
                case 6: {
                        message.imei = reader.string();
                        break;
                    }
                case 7: {
                        message.imsi = reader.string();
                        break;
                    }
                case 8: {
                        message.model = reader.string();
                        break;
                    }
                case 9: {
                        message.firmware_ver = reader.string();
                        break;
                    }
                case 10: {
                        message.reg_state = reader.int32();
                        break;
                    }
                case 11: {
                        message.rat = reader.int32();
                        break;
                    }
                case 12: {
                        message.operator_name = reader.string();
                        break;
                    }
                case 13: {
                        message.lac = reader.uint32();
                        break;
                    }
                case 14: {
                        message.cell_id = reader.uint32();
                        break;
                    }
                case 15: {
                        message.rssi_dbm = reader.int32();
                        break;
                    }
                case 16: {
                        message.rsrp_dbm = reader.int32();
                        break;
                    }
                case 17: {
                        message.rsrq_db = reader.int32();
                        break;
                    }
                case 18: {
                        message.sinr_db = reader.int32();
                        break;
                    }
                case 19: {
                        message.signal_level = reader.uint32();
                        break;
                    }
                case 20: {
                        message.data_state = reader.int32();
                        break;
                    }
                case 21: {
                        message.apn = reader.string();
                        break;
                    }
                case 22: {
                        message.ip_address = reader.string();
                        break;
                    }
                case 23: {
                        message.connected_duration_sec = reader.uint32();
                        break;
                    }
                case 24: {
                        message.tx_bytes = reader.uint64();
                        break;
                    }
                case 25: {
                        message.rx_bytes = reader.uint64();
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
         * Decodes a MobileNetworkState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.MobileNetworkState} MobileNetworkState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MobileNetworkState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MobileNetworkState message.
         * @function verify
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MobileNetworkState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modem_state != null && message.hasOwnProperty("modem_state"))
                switch (message.modem_state) {
                default:
                    return "modem_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.recovery_request != null && message.hasOwnProperty("recovery_request"))
                switch (message.recovery_request) {
                default:
                    return "recovery_request: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.recovery_reason != null && message.hasOwnProperty("recovery_reason"))
                if (!$util.isString(message.recovery_reason))
                    return "recovery_reason: string expected";
            if (message.sim_state != null && message.hasOwnProperty("sim_state"))
                switch (message.sim_state) {
                default:
                    return "sim_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 255:
                    break;
                }
            if (message.iccid != null && message.hasOwnProperty("iccid"))
                if (!$util.isString(message.iccid))
                    return "iccid: string expected";
            if (message.imei != null && message.hasOwnProperty("imei"))
                if (!$util.isString(message.imei))
                    return "imei: string expected";
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                if (!$util.isString(message.imsi))
                    return "imsi: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.firmware_ver != null && message.hasOwnProperty("firmware_ver"))
                if (!$util.isString(message.firmware_ver))
                    return "firmware_ver: string expected";
            if (message.reg_state != null && message.hasOwnProperty("reg_state"))
                switch (message.reg_state) {
                default:
                    return "reg_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.rat != null && message.hasOwnProperty("rat"))
                switch (message.rat) {
                default:
                    return "rat: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 13:
                case 19:
                    break;
                }
            if (message.operator_name != null && message.hasOwnProperty("operator_name"))
                if (!$util.isString(message.operator_name))
                    return "operator_name: string expected";
            if (message.lac != null && message.hasOwnProperty("lac"))
                if (!$util.isInteger(message.lac))
                    return "lac: integer expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.rssi_dbm != null && message.hasOwnProperty("rssi_dbm"))
                if (!$util.isInteger(message.rssi_dbm))
                    return "rssi_dbm: integer expected";
            if (message.rsrp_dbm != null && message.hasOwnProperty("rsrp_dbm"))
                if (!$util.isInteger(message.rsrp_dbm))
                    return "rsrp_dbm: integer expected";
            if (message.rsrq_db != null && message.hasOwnProperty("rsrq_db"))
                if (!$util.isInteger(message.rsrq_db))
                    return "rsrq_db: integer expected";
            if (message.sinr_db != null && message.hasOwnProperty("sinr_db"))
                if (!$util.isInteger(message.sinr_db))
                    return "sinr_db: integer expected";
            if (message.signal_level != null && message.hasOwnProperty("signal_level"))
                if (!$util.isInteger(message.signal_level))
                    return "signal_level: integer expected";
            if (message.data_state != null && message.hasOwnProperty("data_state"))
                switch (message.data_state) {
                default:
                    return "data_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.apn != null && message.hasOwnProperty("apn"))
                if (!$util.isString(message.apn))
                    return "apn: string expected";
            if (message.ip_address != null && message.hasOwnProperty("ip_address"))
                if (!$util.isString(message.ip_address))
                    return "ip_address: string expected";
            if (message.connected_duration_sec != null && message.hasOwnProperty("connected_duration_sec"))
                if (!$util.isInteger(message.connected_duration_sec))
                    return "connected_duration_sec: integer expected";
            if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                if (!$util.isInteger(message.tx_bytes) && !(message.tx_bytes && $util.isInteger(message.tx_bytes.low) && $util.isInteger(message.tx_bytes.high)))
                    return "tx_bytes: integer|Long expected";
            if (message.rx_bytes != null && message.hasOwnProperty("rx_bytes"))
                if (!$util.isInteger(message.rx_bytes) && !(message.rx_bytes && $util.isInteger(message.rx_bytes.low) && $util.isInteger(message.rx_bytes.high)))
                    return "rx_bytes: integer|Long expected";
            return null;
        };

        /**
         * Creates a MobileNetworkState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.MobileNetworkState} MobileNetworkState
         */
        MobileNetworkState.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.MobileNetworkState)
                return object;
            let message = new $root.ax_proto_msgs.MobileNetworkState();
            switch (object.modem_state) {
            default:
                if (typeof object.modem_state === "number") {
                    message.modem_state = object.modem_state;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.modem_state = 0;
                break;
            case "INITIALIZING":
            case 1:
                message.modem_state = 1;
                break;
            case "READY":
            case 2:
                message.modem_state = 2;
                break;
            case "FAULT":
            case 3:
                message.modem_state = 3;
                break;
            }
            switch (object.recovery_request) {
            default:
                if (typeof object.recovery_request === "number") {
                    message.recovery_request = object.recovery_request;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.recovery_request = 0;
                break;
            case "USB_RESET":
            case 1:
                message.recovery_request = 1;
                break;
            case "HOST_REBOOT":
            case 2:
                message.recovery_request = 2;
                break;
            }
            if (object.recovery_reason != null)
                message.recovery_reason = String(object.recovery_reason);
            switch (object.sim_state) {
            default:
                if (typeof object.sim_state === "number") {
                    message.sim_state = object.sim_state;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.sim_state = 0;
                break;
            case "ABSENT":
            case 1:
                message.sim_state = 1;
                break;
            case "PIN_REQUIRED":
            case 2:
                message.sim_state = 2;
                break;
            case "PUK_REQUIRED":
            case 3:
                message.sim_state = 3;
                break;
            case "NETWORK_LOCKED":
            case 4:
                message.sim_state = 4;
                break;
            case "READY":
            case 5:
                message.sim_state = 5;
                break;
            case "NOT_READY":
            case 6:
                message.sim_state = 6;
                break;
            case "CARD_IO_ERROR":
            case 8:
                message.sim_state = 8;
                break;
            case "NO_RESPONSE":
            case 255:
                message.sim_state = 255;
                break;
            }
            if (object.iccid != null)
                message.iccid = String(object.iccid);
            if (object.imei != null)
                message.imei = String(object.imei);
            if (object.imsi != null)
                message.imsi = String(object.imsi);
            if (object.model != null)
                message.model = String(object.model);
            if (object.firmware_ver != null)
                message.firmware_ver = String(object.firmware_ver);
            switch (object.reg_state) {
            default:
                if (typeof object.reg_state === "number") {
                    message.reg_state = object.reg_state;
                    break;
                }
                break;
            case "NOT_REGISTERED":
            case 0:
                message.reg_state = 0;
                break;
            case "HOME":
            case 1:
                message.reg_state = 1;
                break;
            case "SEARCHING":
            case 2:
                message.reg_state = 2;
                break;
            case "DENIED":
            case 3:
                message.reg_state = 3;
                break;
            case "UNKNOWN":
            case 4:
                message.reg_state = 4;
                break;
            case "ROAMING":
            case 5:
                message.reg_state = 5;
                break;
            case "HOME_SMS_ONLY":
            case 6:
                message.reg_state = 6;
                break;
            case "ROAMING_SMS_ONLY":
            case 7:
                message.reg_state = 7;
                break;
            }
            switch (object.rat) {
            default:
                if (typeof object.rat === "number") {
                    message.rat = object.rat;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.rat = 0;
                break;
            case "GSM":
            case 1:
                message.rat = 1;
                break;
            case "GPRS":
            case 2:
                message.rat = 2;
                break;
            case "EDGE":
            case 3:
                message.rat = 3;
                break;
            case "UMTS":
            case 4:
                message.rat = 4;
                break;
            case "HSDPA":
            case 5:
                message.rat = 5;
                break;
            case "HSUPA":
            case 6:
                message.rat = 6;
                break;
            case "HSPA":
            case 7:
                message.rat = 7;
                break;
            case "LTE":
            case 13:
                message.rat = 13;
                break;
            case "LTE_CA":
            case 19:
                message.rat = 19;
                break;
            }
            if (object.operator_name != null)
                message.operator_name = String(object.operator_name);
            if (object.lac != null)
                message.lac = object.lac >>> 0;
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.rssi_dbm != null)
                message.rssi_dbm = object.rssi_dbm | 0;
            if (object.rsrp_dbm != null)
                message.rsrp_dbm = object.rsrp_dbm | 0;
            if (object.rsrq_db != null)
                message.rsrq_db = object.rsrq_db | 0;
            if (object.sinr_db != null)
                message.sinr_db = object.sinr_db | 0;
            if (object.signal_level != null)
                message.signal_level = object.signal_level >>> 0;
            switch (object.data_state) {
            default:
                if (typeof object.data_state === "number") {
                    message.data_state = object.data_state;
                    break;
                }
                break;
            case "DISCONNECTED":
            case 0:
                message.data_state = 0;
                break;
            case "CONNECTING":
            case 1:
                message.data_state = 1;
                break;
            case "CONNECTED":
            case 2:
                message.data_state = 2;
                break;
            case "SUSPENDED":
            case 3:
                message.data_state = 3;
                break;
            }
            if (object.apn != null)
                message.apn = String(object.apn);
            if (object.ip_address != null)
                message.ip_address = String(object.ip_address);
            if (object.connected_duration_sec != null)
                message.connected_duration_sec = object.connected_duration_sec >>> 0;
            if (object.tx_bytes != null)
                if ($util.Long)
                    (message.tx_bytes = $util.Long.fromValue(object.tx_bytes)).unsigned = true;
                else if (typeof object.tx_bytes === "string")
                    message.tx_bytes = parseInt(object.tx_bytes, 10);
                else if (typeof object.tx_bytes === "number")
                    message.tx_bytes = object.tx_bytes;
                else if (typeof object.tx_bytes === "object")
                    message.tx_bytes = new $util.LongBits(object.tx_bytes.low >>> 0, object.tx_bytes.high >>> 0).toNumber(true);
            if (object.rx_bytes != null)
                if ($util.Long)
                    (message.rx_bytes = $util.Long.fromValue(object.rx_bytes)).unsigned = true;
                else if (typeof object.rx_bytes === "string")
                    message.rx_bytes = parseInt(object.rx_bytes, 10);
                else if (typeof object.rx_bytes === "number")
                    message.rx_bytes = object.rx_bytes;
                else if (typeof object.rx_bytes === "object")
                    message.rx_bytes = new $util.LongBits(object.rx_bytes.low >>> 0, object.rx_bytes.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MobileNetworkState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {ax_proto_msgs.MobileNetworkState} message MobileNetworkState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MobileNetworkState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.modem_state = options.enums === String ? "UNKNOWN" : 0;
                object.recovery_request = options.enums === String ? "NONE" : 0;
                object.recovery_reason = "";
                object.sim_state = options.enums === String ? "UNKNOWN" : 0;
                object.iccid = "";
                object.imei = "";
                object.imsi = "";
                object.model = "";
                object.firmware_ver = "";
                object.reg_state = options.enums === String ? "NOT_REGISTERED" : 0;
                object.rat = options.enums === String ? "UNKNOWN" : 0;
                object.operator_name = "";
                object.lac = 0;
                object.cell_id = 0;
                object.rssi_dbm = 0;
                object.rsrp_dbm = 0;
                object.rsrq_db = 0;
                object.sinr_db = 0;
                object.signal_level = 0;
                object.data_state = options.enums === String ? "DISCONNECTED" : 0;
                object.apn = "";
                object.ip_address = "";
                object.connected_duration_sec = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.tx_bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tx_bytes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.rx_bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rx_bytes = options.longs === String ? "0" : 0;
            }
            if (message.modem_state != null && message.hasOwnProperty("modem_state"))
                object.modem_state = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.ModemState.Type[message.modem_state] === undefined ? message.modem_state : $root.ax_proto_msgs.MobileNetworkState.ModemState.Type[message.modem_state] : message.modem_state;
            if (message.recovery_request != null && message.hasOwnProperty("recovery_request"))
                object.recovery_request = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type[message.recovery_request] === undefined ? message.recovery_request : $root.ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type[message.recovery_request] : message.recovery_request;
            if (message.recovery_reason != null && message.hasOwnProperty("recovery_reason"))
                object.recovery_reason = message.recovery_reason;
            if (message.sim_state != null && message.hasOwnProperty("sim_state"))
                object.sim_state = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.SimState.Type[message.sim_state] === undefined ? message.sim_state : $root.ax_proto_msgs.MobileNetworkState.SimState.Type[message.sim_state] : message.sim_state;
            if (message.iccid != null && message.hasOwnProperty("iccid"))
                object.iccid = message.iccid;
            if (message.imei != null && message.hasOwnProperty("imei"))
                object.imei = message.imei;
            if (message.imsi != null && message.hasOwnProperty("imsi"))
                object.imsi = message.imsi;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.firmware_ver != null && message.hasOwnProperty("firmware_ver"))
                object.firmware_ver = message.firmware_ver;
            if (message.reg_state != null && message.hasOwnProperty("reg_state"))
                object.reg_state = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.RegState.Type[message.reg_state] === undefined ? message.reg_state : $root.ax_proto_msgs.MobileNetworkState.RegState.Type[message.reg_state] : message.reg_state;
            if (message.rat != null && message.hasOwnProperty("rat"))
                object.rat = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.Rat.Type[message.rat] === undefined ? message.rat : $root.ax_proto_msgs.MobileNetworkState.Rat.Type[message.rat] : message.rat;
            if (message.operator_name != null && message.hasOwnProperty("operator_name"))
                object.operator_name = message.operator_name;
            if (message.lac != null && message.hasOwnProperty("lac"))
                object.lac = message.lac;
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.rssi_dbm != null && message.hasOwnProperty("rssi_dbm"))
                object.rssi_dbm = message.rssi_dbm;
            if (message.rsrp_dbm != null && message.hasOwnProperty("rsrp_dbm"))
                object.rsrp_dbm = message.rsrp_dbm;
            if (message.rsrq_db != null && message.hasOwnProperty("rsrq_db"))
                object.rsrq_db = message.rsrq_db;
            if (message.sinr_db != null && message.hasOwnProperty("sinr_db"))
                object.sinr_db = message.sinr_db;
            if (message.signal_level != null && message.hasOwnProperty("signal_level"))
                object.signal_level = message.signal_level;
            if (message.data_state != null && message.hasOwnProperty("data_state"))
                object.data_state = options.enums === String ? $root.ax_proto_msgs.MobileNetworkState.DataState.Type[message.data_state] === undefined ? message.data_state : $root.ax_proto_msgs.MobileNetworkState.DataState.Type[message.data_state] : message.data_state;
            if (message.apn != null && message.hasOwnProperty("apn"))
                object.apn = message.apn;
            if (message.ip_address != null && message.hasOwnProperty("ip_address"))
                object.ip_address = message.ip_address;
            if (message.connected_duration_sec != null && message.hasOwnProperty("connected_duration_sec"))
                object.connected_duration_sec = message.connected_duration_sec;
            if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                if (typeof message.tx_bytes === "number")
                    object.tx_bytes = options.longs === String ? String(message.tx_bytes) : message.tx_bytes;
                else
                    object.tx_bytes = options.longs === String ? $util.Long.prototype.toString.call(message.tx_bytes) : options.longs === Number ? new $util.LongBits(message.tx_bytes.low >>> 0, message.tx_bytes.high >>> 0).toNumber(true) : message.tx_bytes;
            if (message.rx_bytes != null && message.hasOwnProperty("rx_bytes"))
                if (typeof message.rx_bytes === "number")
                    object.rx_bytes = options.longs === String ? String(message.rx_bytes) : message.rx_bytes;
                else
                    object.rx_bytes = options.longs === String ? $util.Long.prototype.toString.call(message.rx_bytes) : options.longs === Number ? new $util.LongBits(message.rx_bytes.low >>> 0, message.rx_bytes.high >>> 0).toNumber(true) : message.rx_bytes;
            return object;
        };

        /**
         * Converts this MobileNetworkState to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.MobileNetworkState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MobileNetworkState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MobileNetworkState
         * @function getTypeUrl
         * @memberof ax_proto_msgs.MobileNetworkState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MobileNetworkState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState";
        };

        MobileNetworkState.ModemState = (function() {

            /**
             * Properties of a ModemState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface IModemState
             */

            /**
             * Constructs a new ModemState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a ModemState.
             * @implements IModemState
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.IModemState=} [properties] Properties to set
             */
            function ModemState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ModemState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IModemState=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.ModemState} ModemState instance
             */
            ModemState.create = function create(properties) {
                return new ModemState(properties);
            };

            /**
             * Encodes the specified ModemState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.ModemState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IModemState} message ModemState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModemState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ModemState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.ModemState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IModemState} message ModemState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModemState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ModemState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.ModemState} ModemState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModemState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.ModemState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ModemState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.ModemState} ModemState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModemState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ModemState message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ModemState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ModemState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.ModemState} ModemState
             */
            ModemState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.ModemState)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.ModemState();
            };

            /**
             * Creates a plain object from a ModemState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.ModemState} message ModemState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ModemState.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ModemState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ModemState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ModemState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.ModemState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ModemState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.ModemState";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.ModemState.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} INITIALIZING=1 INITIALIZING value
             * @property {number} READY=2 READY value
             * @property {number} FAULT=3 FAULT value
             */
            ModemState.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INITIALIZING"] = 1;
                values[valuesById[2] = "READY"] = 2;
                values[valuesById[3] = "FAULT"] = 3;
                return values;
            })();

            return ModemState;
        })();

        MobileNetworkState.RecoveryRequest = (function() {

            /**
             * Properties of a RecoveryRequest.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface IRecoveryRequest
             */

            /**
             * Constructs a new RecoveryRequest.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a RecoveryRequest.
             * @implements IRecoveryRequest
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.IRecoveryRequest=} [properties] Properties to set
             */
            function RecoveryRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RecoveryRequest instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRecoveryRequest=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.RecoveryRequest} RecoveryRequest instance
             */
            RecoveryRequest.create = function create(properties) {
                return new RecoveryRequest(properties);
            };

            /**
             * Encodes the specified RecoveryRequest message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RecoveryRequest.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRecoveryRequest} message RecoveryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RecoveryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RecoveryRequest message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RecoveryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRecoveryRequest} message RecoveryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RecoveryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RecoveryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.RecoveryRequest} RecoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RecoveryRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.RecoveryRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RecoveryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.RecoveryRequest} RecoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RecoveryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RecoveryRequest message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RecoveryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RecoveryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.RecoveryRequest} RecoveryRequest
             */
            RecoveryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.RecoveryRequest)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.RecoveryRequest();
            };

            /**
             * Creates a plain object from a RecoveryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.RecoveryRequest} message RecoveryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RecoveryRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RecoveryRequest to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RecoveryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RecoveryRequest
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.RecoveryRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RecoveryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.RecoveryRequest";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type
             * @enum {number}
             * @property {number} NONE=0 NONE value
             * @property {number} USB_RESET=1 USB_RESET value
             * @property {number} HOST_REBOOT=2 HOST_REBOOT value
             */
            RecoveryRequest.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "USB_RESET"] = 1;
                values[valuesById[2] = "HOST_REBOOT"] = 2;
                return values;
            })();

            return RecoveryRequest;
        })();

        MobileNetworkState.SimState = (function() {

            /**
             * Properties of a SimState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface ISimState
             */

            /**
             * Constructs a new SimState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a SimState.
             * @implements ISimState
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.ISimState=} [properties] Properties to set
             */
            function SimState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new SimState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.ISimState=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.SimState} SimState instance
             */
            SimState.create = function create(properties) {
                return new SimState(properties);
            };

            /**
             * Encodes the specified SimState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.SimState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.ISimState} message SimState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified SimState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.SimState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.ISimState} message SimState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.SimState} SimState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.SimState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.SimState} SimState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimState message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a SimState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.SimState} SimState
             */
            SimState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.SimState)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.SimState();
            };

            /**
             * Creates a plain object from a SimState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.SimState} message SimState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimState.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this SimState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SimState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.SimState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SimState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.SimState";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.SimState.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} ABSENT=1 ABSENT value
             * @property {number} PIN_REQUIRED=2 PIN_REQUIRED value
             * @property {number} PUK_REQUIRED=3 PUK_REQUIRED value
             * @property {number} NETWORK_LOCKED=4 NETWORK_LOCKED value
             * @property {number} READY=5 READY value
             * @property {number} NOT_READY=6 NOT_READY value
             * @property {number} CARD_IO_ERROR=8 CARD_IO_ERROR value
             * @property {number} NO_RESPONSE=255 NO_RESPONSE value
             */
            SimState.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "ABSENT"] = 1;
                values[valuesById[2] = "PIN_REQUIRED"] = 2;
                values[valuesById[3] = "PUK_REQUIRED"] = 3;
                values[valuesById[4] = "NETWORK_LOCKED"] = 4;
                values[valuesById[5] = "READY"] = 5;
                values[valuesById[6] = "NOT_READY"] = 6;
                values[valuesById[8] = "CARD_IO_ERROR"] = 8;
                values[valuesById[255] = "NO_RESPONSE"] = 255;
                return values;
            })();

            return SimState;
        })();

        MobileNetworkState.RegState = (function() {

            /**
             * Properties of a RegState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface IRegState
             */

            /**
             * Constructs a new RegState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a RegState.
             * @implements IRegState
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.IRegState=} [properties] Properties to set
             */
            function RegState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RegState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRegState=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.RegState} RegState instance
             */
            RegState.create = function create(properties) {
                return new RegState(properties);
            };

            /**
             * Encodes the specified RegState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RegState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRegState} message RegState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RegState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RegState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRegState} message RegState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RegState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.RegState} RegState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.RegState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RegState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.RegState} RegState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RegState message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RegState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.RegState} RegState
             */
            RegState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.RegState)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.RegState();
            };

            /**
             * Creates a plain object from a RegState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.RegState} message RegState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegState.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RegState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RegState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.RegState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RegState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.RegState";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.RegState.Type
             * @enum {number}
             * @property {number} NOT_REGISTERED=0 NOT_REGISTERED value
             * @property {number} HOME=1 HOME value
             * @property {number} SEARCHING=2 SEARCHING value
             * @property {number} DENIED=3 DENIED value
             * @property {number} UNKNOWN=4 UNKNOWN value
             * @property {number} ROAMING=5 ROAMING value
             * @property {number} HOME_SMS_ONLY=6 HOME_SMS_ONLY value
             * @property {number} ROAMING_SMS_ONLY=7 ROAMING_SMS_ONLY value
             */
            RegState.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_REGISTERED"] = 0;
                values[valuesById[1] = "HOME"] = 1;
                values[valuesById[2] = "SEARCHING"] = 2;
                values[valuesById[3] = "DENIED"] = 3;
                values[valuesById[4] = "UNKNOWN"] = 4;
                values[valuesById[5] = "ROAMING"] = 5;
                values[valuesById[6] = "HOME_SMS_ONLY"] = 6;
                values[valuesById[7] = "ROAMING_SMS_ONLY"] = 7;
                return values;
            })();

            return RegState;
        })();

        MobileNetworkState.Rat = (function() {

            /**
             * Properties of a Rat.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface IRat
             */

            /**
             * Constructs a new Rat.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a Rat.
             * @implements IRat
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.IRat=} [properties] Properties to set
             */
            function Rat(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Rat instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRat=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.Rat} Rat instance
             */
            Rat.create = function create(properties) {
                return new Rat(properties);
            };

            /**
             * Encodes the specified Rat message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.Rat.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRat} message Rat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Rat message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.Rat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IRat} message Rat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Rat message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.Rat} Rat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rat.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.Rat();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Rat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.Rat} Rat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Rat message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Rat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Rat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.Rat} Rat
             */
            Rat.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.Rat)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.Rat();
            };

            /**
             * Creates a plain object from a Rat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.Rat} message Rat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Rat.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Rat to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Rat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Rat
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.Rat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Rat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.Rat";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.Rat.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} GSM=1 GSM value
             * @property {number} GPRS=2 GPRS value
             * @property {number} EDGE=3 EDGE value
             * @property {number} UMTS=4 UMTS value
             * @property {number} HSDPA=5 HSDPA value
             * @property {number} HSUPA=6 HSUPA value
             * @property {number} HSPA=7 HSPA value
             * @property {number} LTE=13 LTE value
             * @property {number} LTE_CA=19 LTE_CA value
             */
            Rat.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "GSM"] = 1;
                values[valuesById[2] = "GPRS"] = 2;
                values[valuesById[3] = "EDGE"] = 3;
                values[valuesById[4] = "UMTS"] = 4;
                values[valuesById[5] = "HSDPA"] = 5;
                values[valuesById[6] = "HSUPA"] = 6;
                values[valuesById[7] = "HSPA"] = 7;
                values[valuesById[13] = "LTE"] = 13;
                values[valuesById[19] = "LTE_CA"] = 19;
                return values;
            })();

            return Rat;
        })();

        MobileNetworkState.DataState = (function() {

            /**
             * Properties of a DataState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @interface IDataState
             */

            /**
             * Constructs a new DataState.
             * @memberof ax_proto_msgs.MobileNetworkState
             * @classdesc Represents a DataState.
             * @implements IDataState
             * @constructor
             * @param {ax_proto_msgs.MobileNetworkState.IDataState=} [properties] Properties to set
             */
            function DataState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DataState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IDataState=} [properties] Properties to set
             * @returns {ax_proto_msgs.MobileNetworkState.DataState} DataState instance
             */
            DataState.create = function create(properties) {
                return new DataState(properties);
            };

            /**
             * Encodes the specified DataState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.DataState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IDataState} message DataState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DataState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DataState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.DataState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.IDataState} message DataState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DataState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DataState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.MobileNetworkState.DataState} DataState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DataState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.MobileNetworkState.DataState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DataState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.MobileNetworkState.DataState} DataState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DataState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DataState message.
             * @function verify
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DataState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DataState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.MobileNetworkState.DataState} DataState
             */
            DataState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.MobileNetworkState.DataState)
                    return object;
                return new $root.ax_proto_msgs.MobileNetworkState.DataState();
            };

            /**
             * Creates a plain object from a DataState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {ax_proto_msgs.MobileNetworkState.DataState} message DataState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DataState.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DataState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DataState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DataState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.MobileNetworkState.DataState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DataState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.MobileNetworkState.DataState";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.MobileNetworkState.DataState.Type
             * @enum {number}
             * @property {number} DISCONNECTED=0 DISCONNECTED value
             * @property {number} CONNECTING=1 CONNECTING value
             * @property {number} CONNECTED=2 CONNECTED value
             * @property {number} SUSPENDED=3 SUSPENDED value
             */
            DataState.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DISCONNECTED"] = 0;
                values[valuesById[1] = "CONNECTING"] = 1;
                values[valuesById[2] = "CONNECTED"] = 2;
                values[valuesById[3] = "SUSPENDED"] = 3;
                return values;
            })();

            return DataState;
        })();

        return MobileNetworkState;
    })();

    ax_proto_msgs.PointCloud = (function() {

        /**
         * Properties of a PointCloud.
         * @memberof ax_proto_msgs
         * @interface IPointCloud
         * @property {ax_proto_msgs.IHeader|null} [header] PointCloud header
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
         * @property {Uint8Array|null} [probabilities] PointCloud probabilities
         * @property {Uint8Array|null} [oris] PointCloud oris
         * @property {Uint8Array|null} [speeds] PointCloud speeds
         */

        /**
         * Constructs a new PointCloud.
         * @memberof ax_proto_msgs
         * @classdesc Represents a PointCloud.
         * @implements IPointCloud
         * @constructor
         * @param {ax_proto_msgs.IPointCloud=} [properties] Properties to set
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
         * @member {ax_proto_msgs.IHeader|null|undefined} header
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.header = null;

        /**
         * PointCloud point_number.
         * @member {number} point_number
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.point_number = 0;

        /**
         * PointCloud center_x.
         * @member {number} center_x
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.center_x = 0;

        /**
         * PointCloud center_y.
         * @member {number} center_y
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.center_y = 0;

        /**
         * PointCloud center_z.
         * @member {number} center_z
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.center_z = 0;

        /**
         * PointCloud resolution.
         * @member {number} resolution
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.resolution = 0;

        /**
         * PointCloud xs.
         * @member {Array.<number>} xs
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.xs = $util.emptyArray;

        /**
         * PointCloud ys.
         * @member {Array.<number>} ys
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.ys = $util.emptyArray;

        /**
         * PointCloud zs.
         * @member {Array.<number>} zs
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.zs = $util.emptyArray;

        /**
         * PointCloud intensities.
         * @member {Uint8Array} intensities
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.intensities = $util.newBuffer([]);

        /**
         * PointCloud is_delta_encoded.
         * @member {boolean} is_delta_encoded
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.is_delta_encoded = false;

        /**
         * PointCloud probabilities.
         * @member {Uint8Array} probabilities
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.probabilities = $util.newBuffer([]);

        /**
         * PointCloud oris.
         * @member {Uint8Array} oris
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.oris = $util.newBuffer([]);

        /**
         * PointCloud speeds.
         * @member {Uint8Array} speeds
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         */
        PointCloud.prototype.speeds = $util.newBuffer([]);

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {ax_proto_msgs.IPointCloud=} [properties] Properties to set
         * @returns {ax_proto_msgs.PointCloud} PointCloud instance
         */
        PointCloud.create = function create(properties) {
            return new PointCloud(properties);
        };

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link ax_proto_msgs.PointCloud.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {ax_proto_msgs.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.ax_proto_msgs.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
            if (message.probabilities != null && Object.hasOwnProperty.call(message, "probabilities"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.probabilities);
            if (message.oris != null && Object.hasOwnProperty.call(message, "oris"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.oris);
            if (message.speeds != null && Object.hasOwnProperty.call(message, "speeds"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.speeds);
            return writer;
        };

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link ax_proto_msgs.PointCloud.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {ax_proto_msgs.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.PointCloud} PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointCloud.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.PointCloud();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.ax_proto_msgs.Header.decode(reader, reader.uint32());
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
                case 12: {
                        message.probabilities = reader.bytes();
                        break;
                    }
                case 13: {
                        message.oris = reader.bytes();
                        break;
                    }
                case 14: {
                        message.speeds = reader.bytes();
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
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.PointCloud} PointCloud
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
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointCloud.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.ax_proto_msgs.Header.verify(message.header);
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
            if (message.probabilities != null && message.hasOwnProperty("probabilities"))
                if (!(message.probabilities && typeof message.probabilities.length === "number" || $util.isString(message.probabilities)))
                    return "probabilities: buffer expected";
            if (message.oris != null && message.hasOwnProperty("oris"))
                if (!(message.oris && typeof message.oris.length === "number" || $util.isString(message.oris)))
                    return "oris: buffer expected";
            if (message.speeds != null && message.hasOwnProperty("speeds"))
                if (!(message.speeds && typeof message.speeds.length === "number" || $util.isString(message.speeds)))
                    return "speeds: buffer expected";
            return null;
        };

        /**
         * Creates a PointCloud message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.PointCloud} PointCloud
         */
        PointCloud.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.PointCloud)
                return object;
            let message = new $root.ax_proto_msgs.PointCloud();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".ax_proto_msgs.PointCloud.header: object expected");
                message.header = $root.ax_proto_msgs.Header.fromObject(object.header);
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
                    throw TypeError(".ax_proto_msgs.PointCloud.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = object.xs[i] | 0;
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".ax_proto_msgs.PointCloud.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = object.ys[i] | 0;
            }
            if (object.zs) {
                if (!Array.isArray(object.zs))
                    throw TypeError(".ax_proto_msgs.PointCloud.zs: array expected");
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
            if (object.probabilities != null)
                if (typeof object.probabilities === "string")
                    $util.base64.decode(object.probabilities, message.probabilities = $util.newBuffer($util.base64.length(object.probabilities)), 0);
                else if (object.probabilities.length >= 0)
                    message.probabilities = object.probabilities;
            if (object.oris != null)
                if (typeof object.oris === "string")
                    $util.base64.decode(object.oris, message.oris = $util.newBuffer($util.base64.length(object.oris)), 0);
                else if (object.oris.length >= 0)
                    message.oris = object.oris;
            if (object.speeds != null)
                if (typeof object.speeds === "string")
                    $util.base64.decode(object.speeds, message.speeds = $util.newBuffer($util.base64.length(object.speeds)), 0);
                else if (object.speeds.length >= 0)
                    message.speeds = object.speeds;
            return message;
        };

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {ax_proto_msgs.PointCloud} message PointCloud
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
                if (options.bytes === String)
                    object.probabilities = "";
                else {
                    object.probabilities = [];
                    if (options.bytes !== Array)
                        object.probabilities = $util.newBuffer(object.probabilities);
                }
                if (options.bytes === String)
                    object.oris = "";
                else {
                    object.oris = [];
                    if (options.bytes !== Array)
                        object.oris = $util.newBuffer(object.oris);
                }
                if (options.bytes === String)
                    object.speeds = "";
                else {
                    object.speeds = [];
                    if (options.bytes !== Array)
                        object.speeds = $util.newBuffer(object.speeds);
                }
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.ax_proto_msgs.Header.toObject(message.header, options);
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
            if (message.probabilities != null && message.hasOwnProperty("probabilities"))
                object.probabilities = options.bytes === String ? $util.base64.encode(message.probabilities, 0, message.probabilities.length) : options.bytes === Array ? Array.prototype.slice.call(message.probabilities) : message.probabilities;
            if (message.oris != null && message.hasOwnProperty("oris"))
                object.oris = options.bytes === String ? $util.base64.encode(message.oris, 0, message.oris.length) : options.bytes === Array ? Array.prototype.slice.call(message.oris) : message.oris;
            if (message.speeds != null && message.hasOwnProperty("speeds"))
                object.speeds = options.bytes === String ? $util.base64.encode(message.speeds, 0, message.speeds.length) : options.bytes === Array ? Array.prototype.slice.call(message.speeds) : message.speeds;
            return object;
        };

        /**
         * Converts this PointCloud to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.PointCloud
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointCloud.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointCloud
         * @function getTypeUrl
         * @memberof ax_proto_msgs.PointCloud
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointCloud.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.PointCloud";
        };

        return PointCloud;
    })();

    ax_proto_msgs.RackStates = (function() {

        /**
         * Properties of a RackStates.
         * @memberof ax_proto_msgs
         * @interface IRackStates
         * @property {string|null} [map_uid] RackStates map_uid
         * @property {Array.<ax_proto_msgs.RackStates.IRackState>|null} [racks] RackStates racks
         */

        /**
         * Constructs a new RackStates.
         * @memberof ax_proto_msgs
         * @classdesc Represents a RackStates.
         * @implements IRackStates
         * @constructor
         * @param {ax_proto_msgs.IRackStates=} [properties] Properties to set
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
         * @memberof ax_proto_msgs.RackStates
         * @instance
         */
        RackStates.prototype.map_uid = "";

        /**
         * RackStates racks.
         * @member {Array.<ax_proto_msgs.RackStates.IRackState>} racks
         * @memberof ax_proto_msgs.RackStates
         * @instance
         */
        RackStates.prototype.racks = $util.emptyArray;

        /**
         * Creates a new RackStates instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {ax_proto_msgs.IRackStates=} [properties] Properties to set
         * @returns {ax_proto_msgs.RackStates} RackStates instance
         */
        RackStates.create = function create(properties) {
            return new RackStates(properties);
        };

        /**
         * Encodes the specified RackStates message. Does not implicitly {@link ax_proto_msgs.RackStates.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {ax_proto_msgs.IRackStates} message RackStates message or plain object to encode
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
                    $root.ax_proto_msgs.RackStates.RackState.encode(message.racks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RackStates message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {ax_proto_msgs.IRackStates} message RackStates message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RackStates.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RackStates message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.RackStates} RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RackStates.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.RackStates();
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
                        message.racks.push($root.ax_proto_msgs.RackStates.RackState.decode(reader, reader.uint32()));
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
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.RackStates} RackStates
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
         * @memberof ax_proto_msgs.RackStates
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
                    let error = $root.ax_proto_msgs.RackStates.RackState.verify(message.racks[i]);
                    if (error)
                        return "racks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RackStates message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.RackStates} RackStates
         */
        RackStates.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.RackStates)
                return object;
            let message = new $root.ax_proto_msgs.RackStates();
            if (object.map_uid != null)
                message.map_uid = String(object.map_uid);
            if (object.racks) {
                if (!Array.isArray(object.racks))
                    throw TypeError(".ax_proto_msgs.RackStates.racks: array expected");
                message.racks = [];
                for (let i = 0; i < object.racks.length; ++i) {
                    if (typeof object.racks[i] !== "object")
                        throw TypeError(".ax_proto_msgs.RackStates.racks: object expected");
                    message.racks[i] = $root.ax_proto_msgs.RackStates.RackState.fromObject(object.racks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RackStates message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {ax_proto_msgs.RackStates} message RackStates
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
                    object.racks[j] = $root.ax_proto_msgs.RackStates.RackState.toObject(message.racks[j], options);
            }
            return object;
        };

        /**
         * Converts this RackStates to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.RackStates
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RackStates.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RackStates
         * @function getTypeUrl
         * @memberof ax_proto_msgs.RackStates
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RackStates.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.RackStates";
        };

        RackStates.RackLevelState = (function() {

            /**
             * Properties of a RackLevelState.
             * @memberof ax_proto_msgs.RackStates
             * @interface IRackLevelState
             * @property {number|Long|null} [timestamp_ns] RackLevelState timestamp_ns
             * @property {number|null} [level] RackLevelState level
             * @property {ax_proto_msgs.RackStates.RackLevelState.SpaceState|null} [state] RackLevelState state
             */

            /**
             * Constructs a new RackLevelState.
             * @memberof ax_proto_msgs.RackStates
             * @classdesc Represents a RackLevelState.
             * @implements IRackLevelState
             * @constructor
             * @param {ax_proto_msgs.RackStates.IRackLevelState=} [properties] Properties to set
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
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.timestamp_ns = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * RackLevelState level.
             * @member {number} level
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.level = 0;

            /**
             * RackLevelState state.
             * @member {ax_proto_msgs.RackStates.RackLevelState.SpaceState} state
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @instance
             */
            RackLevelState.prototype.state = 0;

            /**
             * Creates a new RackLevelState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackLevelState=} [properties] Properties to set
             * @returns {ax_proto_msgs.RackStates.RackLevelState} RackLevelState instance
             */
            RackLevelState.create = function create(properties) {
                return new RackLevelState(properties);
            };

            /**
             * Encodes the specified RackLevelState message. Does not implicitly {@link ax_proto_msgs.RackStates.RackLevelState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackLevelState} message RackLevelState message or plain object to encode
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
             * Encodes the specified RackLevelState message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.RackLevelState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackLevelState} message RackLevelState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackLevelState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RackLevelState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.RackStates.RackLevelState} RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackLevelState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.RackStates.RackLevelState();
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
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.RackStates.RackLevelState} RackLevelState
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
             * @memberof ax_proto_msgs.RackStates.RackLevelState
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
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.RackStates.RackLevelState} RackLevelState
             */
            RackLevelState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.RackStates.RackLevelState)
                    return object;
                let message = new $root.ax_proto_msgs.RackStates.RackLevelState();
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
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {ax_proto_msgs.RackStates.RackLevelState} message RackLevelState
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
                    object.state = options.enums === String ? $root.ax_proto_msgs.RackStates.RackLevelState.SpaceState[message.state] === undefined ? message.state : $root.ax_proto_msgs.RackStates.RackLevelState.SpaceState[message.state] : message.state;
                return object;
            };

            /**
             * Converts this RackLevelState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RackLevelState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RackLevelState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.RackStates.RackLevelState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RackLevelState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.RackStates.RackLevelState";
            };

            /**
             * SpaceState enum.
             * @name ax_proto_msgs.RackStates.RackLevelState.SpaceState
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
             * @memberof ax_proto_msgs.RackStates
             * @interface IRackState
             * @property {string|null} [poi_id] RackState poi_id
             * @property {Array.<ax_proto_msgs.RackStates.IRackLevelState>|null} [levels] RackState levels
             */

            /**
             * Constructs a new RackState.
             * @memberof ax_proto_msgs.RackStates
             * @classdesc Represents a RackState.
             * @implements IRackState
             * @constructor
             * @param {ax_proto_msgs.RackStates.IRackState=} [properties] Properties to set
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
             * @memberof ax_proto_msgs.RackStates.RackState
             * @instance
             */
            RackState.prototype.poi_id = "";

            /**
             * RackState levels.
             * @member {Array.<ax_proto_msgs.RackStates.IRackLevelState>} levels
             * @memberof ax_proto_msgs.RackStates.RackState
             * @instance
             */
            RackState.prototype.levels = $util.emptyArray;

            /**
             * Creates a new RackState instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackState=} [properties] Properties to set
             * @returns {ax_proto_msgs.RackStates.RackState} RackState instance
             */
            RackState.create = function create(properties) {
                return new RackState(properties);
            };

            /**
             * Encodes the specified RackState message. Does not implicitly {@link ax_proto_msgs.RackStates.RackState.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackState} message RackState message or plain object to encode
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
                        $root.ax_proto_msgs.RackStates.RackLevelState.encode(message.levels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RackState message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.RackState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {ax_proto_msgs.RackStates.IRackState} message RackState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RackState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RackState message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.RackStates.RackState} RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RackState.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.RackStates.RackState();
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
                            message.levels.push($root.ax_proto_msgs.RackStates.RackLevelState.decode(reader, reader.uint32()));
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
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.RackStates.RackState} RackState
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
             * @memberof ax_proto_msgs.RackStates.RackState
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
                        let error = $root.ax_proto_msgs.RackStates.RackLevelState.verify(message.levels[i]);
                        if (error)
                            return "levels." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RackState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.RackStates.RackState} RackState
             */
            RackState.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.RackStates.RackState)
                    return object;
                let message = new $root.ax_proto_msgs.RackStates.RackState();
                if (object.poi_id != null)
                    message.poi_id = String(object.poi_id);
                if (object.levels) {
                    if (!Array.isArray(object.levels))
                        throw TypeError(".ax_proto_msgs.RackStates.RackState.levels: array expected");
                    message.levels = [];
                    for (let i = 0; i < object.levels.length; ++i) {
                        if (typeof object.levels[i] !== "object")
                            throw TypeError(".ax_proto_msgs.RackStates.RackState.levels: object expected");
                        message.levels[i] = $root.ax_proto_msgs.RackStates.RackLevelState.fromObject(object.levels[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RackState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {ax_proto_msgs.RackStates.RackState} message RackState
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
                        object.levels[j] = $root.ax_proto_msgs.RackStates.RackLevelState.toObject(message.levels[j], options);
                }
                return object;
            };

            /**
             * Converts this RackState to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.RackStates.RackState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RackState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RackState
             * @function getTypeUrl
             * @memberof ax_proto_msgs.RackStates.RackState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RackState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.RackStates.RackState";
            };

            return RackState;
        })();

        return RackStates;
    })();

    ax_proto_msgs.RosMessageWrapper = (function() {

        /**
         * Properties of a RosMessageWrapper.
         * @memberof ax_proto_msgs
         * @interface IRosMessageWrapper
         * @property {ax_proto_msgs.RosMessageWrapper.MessageType|null} [type] RosMessageWrapper type
         * @property {ax_proto_msgs.IPointCloud|null} [point_cloud] RosMessageWrapper point_cloud
         * @property {ax_proto_msgs.IMastState|null} [mast_state] RosMessageWrapper mast_state
         * @property {ax_proto_msgs.slam.ISubmapList|null} [submap_list] RosMessageWrapper submap_list
         * @property {ax_proto_msgs.IRackStates|null} [rack_states] RosMessageWrapper rack_states
         * @property {ax_proto_msgs.ITowingState|null} [towing_state] RosMessageWrapper towing_state
         * @property {ax_proto_msgs.IMobileNetworkState|null} [mobile_network_state] RosMessageWrapper mobile_network_state
         * @property {ax_proto_msgs.IVideoData|null} [video_data] RosMessageWrapper video_data
         * @property {ax_proto_msgs.IDepthImage|null} [depth_image] RosMessageWrapper depth_image
         * @property {ax_proto_msgs.IDwaCandidatePathSet|null} [dwa_candidate_path_set] RosMessageWrapper dwa_candidate_path_set
         */

        /**
         * Constructs a new RosMessageWrapper.
         * @memberof ax_proto_msgs
         * @classdesc Represents a RosMessageWrapper.
         * @implements IRosMessageWrapper
         * @constructor
         * @param {ax_proto_msgs.IRosMessageWrapper=} [properties] Properties to set
         */
        function RosMessageWrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RosMessageWrapper type.
         * @member {ax_proto_msgs.RosMessageWrapper.MessageType} type
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.type = 0;

        /**
         * RosMessageWrapper point_cloud.
         * @member {ax_proto_msgs.IPointCloud|null|undefined} point_cloud
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.point_cloud = null;

        /**
         * RosMessageWrapper mast_state.
         * @member {ax_proto_msgs.IMastState|null|undefined} mast_state
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.mast_state = null;

        /**
         * RosMessageWrapper submap_list.
         * @member {ax_proto_msgs.slam.ISubmapList|null|undefined} submap_list
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.submap_list = null;

        /**
         * RosMessageWrapper rack_states.
         * @member {ax_proto_msgs.IRackStates|null|undefined} rack_states
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.rack_states = null;

        /**
         * RosMessageWrapper towing_state.
         * @member {ax_proto_msgs.ITowingState|null|undefined} towing_state
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.towing_state = null;

        /**
         * RosMessageWrapper mobile_network_state.
         * @member {ax_proto_msgs.IMobileNetworkState|null|undefined} mobile_network_state
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.mobile_network_state = null;

        /**
         * RosMessageWrapper video_data.
         * @member {ax_proto_msgs.IVideoData|null|undefined} video_data
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.video_data = null;

        /**
         * RosMessageWrapper depth_image.
         * @member {ax_proto_msgs.IDepthImage|null|undefined} depth_image
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.depth_image = null;

        /**
         * RosMessageWrapper dwa_candidate_path_set.
         * @member {ax_proto_msgs.IDwaCandidatePathSet|null|undefined} dwa_candidate_path_set
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        RosMessageWrapper.prototype.dwa_candidate_path_set = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * RosMessageWrapper payload.
         * @member {"point_cloud"|"mast_state"|"submap_list"|"rack_states"|"towing_state"|"mobile_network_state"|"video_data"|"depth_image"|"dwa_candidate_path_set"|undefined} payload
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         */
        Object.defineProperty(RosMessageWrapper.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["point_cloud", "mast_state", "submap_list", "rack_states", "towing_state", "mobile_network_state", "video_data", "depth_image", "dwa_candidate_path_set"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RosMessageWrapper instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {ax_proto_msgs.IRosMessageWrapper=} [properties] Properties to set
         * @returns {ax_proto_msgs.RosMessageWrapper} RosMessageWrapper instance
         */
        RosMessageWrapper.create = function create(properties) {
            return new RosMessageWrapper(properties);
        };

        /**
         * Encodes the specified RosMessageWrapper message. Does not implicitly {@link ax_proto_msgs.RosMessageWrapper.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {ax_proto_msgs.IRosMessageWrapper} message RosMessageWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RosMessageWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.point_cloud != null && Object.hasOwnProperty.call(message, "point_cloud"))
                $root.ax_proto_msgs.PointCloud.encode(message.point_cloud, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.mast_state != null && Object.hasOwnProperty.call(message, "mast_state"))
                $root.ax_proto_msgs.MastState.encode(message.mast_state, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.submap_list != null && Object.hasOwnProperty.call(message, "submap_list"))
                $root.ax_proto_msgs.slam.SubmapList.encode(message.submap_list, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.rack_states != null && Object.hasOwnProperty.call(message, "rack_states"))
                $root.ax_proto_msgs.RackStates.encode(message.rack_states, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.towing_state != null && Object.hasOwnProperty.call(message, "towing_state"))
                $root.ax_proto_msgs.TowingState.encode(message.towing_state, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.mobile_network_state != null && Object.hasOwnProperty.call(message, "mobile_network_state"))
                $root.ax_proto_msgs.MobileNetworkState.encode(message.mobile_network_state, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.video_data != null && Object.hasOwnProperty.call(message, "video_data"))
                $root.ax_proto_msgs.VideoData.encode(message.video_data, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.depth_image != null && Object.hasOwnProperty.call(message, "depth_image"))
                $root.ax_proto_msgs.DepthImage.encode(message.depth_image, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.dwa_candidate_path_set != null && Object.hasOwnProperty.call(message, "dwa_candidate_path_set"))
                $root.ax_proto_msgs.DwaCandidatePathSet.encode(message.dwa_candidate_path_set, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RosMessageWrapper message, length delimited. Does not implicitly {@link ax_proto_msgs.RosMessageWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {ax_proto_msgs.IRosMessageWrapper} message RosMessageWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RosMessageWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.RosMessageWrapper} RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RosMessageWrapper.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.RosMessageWrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 10: {
                        message.point_cloud = $root.ax_proto_msgs.PointCloud.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.mast_state = $root.ax_proto_msgs.MastState.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.submap_list = $root.ax_proto_msgs.slam.SubmapList.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.rack_states = $root.ax_proto_msgs.RackStates.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.towing_state = $root.ax_proto_msgs.TowingState.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.mobile_network_state = $root.ax_proto_msgs.MobileNetworkState.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.video_data = $root.ax_proto_msgs.VideoData.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.depth_image = $root.ax_proto_msgs.DepthImage.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.dwa_candidate_path_set = $root.ax_proto_msgs.DwaCandidatePathSet.decode(reader, reader.uint32());
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
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.RosMessageWrapper} RosMessageWrapper
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
         * @memberof ax_proto_msgs.RosMessageWrapper
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
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.point_cloud != null && message.hasOwnProperty("point_cloud")) {
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.PointCloud.verify(message.point_cloud);
                    if (error)
                        return "point_cloud." + error;
                }
            }
            if (message.mast_state != null && message.hasOwnProperty("mast_state")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.MastState.verify(message.mast_state);
                    if (error)
                        return "mast_state." + error;
                }
            }
            if (message.submap_list != null && message.hasOwnProperty("submap_list")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.slam.SubmapList.verify(message.submap_list);
                    if (error)
                        return "submap_list." + error;
                }
            }
            if (message.rack_states != null && message.hasOwnProperty("rack_states")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.RackStates.verify(message.rack_states);
                    if (error)
                        return "rack_states." + error;
                }
            }
            if (message.towing_state != null && message.hasOwnProperty("towing_state")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.TowingState.verify(message.towing_state);
                    if (error)
                        return "towing_state." + error;
                }
            }
            if (message.mobile_network_state != null && message.hasOwnProperty("mobile_network_state")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.MobileNetworkState.verify(message.mobile_network_state);
                    if (error)
                        return "mobile_network_state." + error;
                }
            }
            if (message.video_data != null && message.hasOwnProperty("video_data")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.VideoData.verify(message.video_data);
                    if (error)
                        return "video_data." + error;
                }
            }
            if (message.depth_image != null && message.hasOwnProperty("depth_image")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.DepthImage.verify(message.depth_image);
                    if (error)
                        return "depth_image." + error;
                }
            }
            if (message.dwa_candidate_path_set != null && message.hasOwnProperty("dwa_candidate_path_set")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.ax_proto_msgs.DwaCandidatePathSet.verify(message.dwa_candidate_path_set);
                    if (error)
                        return "dwa_candidate_path_set." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RosMessageWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.RosMessageWrapper} RosMessageWrapper
         */
        RosMessageWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.RosMessageWrapper)
                return object;
            let message = new $root.ax_proto_msgs.RosMessageWrapper();
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
            case "TOWING_STATE":
            case 5:
                message.type = 5;
                break;
            case "MOBILE_NETWORK_STATE":
            case 6:
                message.type = 6;
                break;
            case "VIDEO_DATA":
            case 7:
                message.type = 7;
                break;
            case "DEPTH_IMAGE":
            case 8:
                message.type = 8;
                break;
            case "DWA_CANDIDATE_PATH_SET":
            case 9:
                message.type = 9;
                break;
            }
            if (object.point_cloud != null) {
                if (typeof object.point_cloud !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.point_cloud: object expected");
                message.point_cloud = $root.ax_proto_msgs.PointCloud.fromObject(object.point_cloud);
            }
            if (object.mast_state != null) {
                if (typeof object.mast_state !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.mast_state: object expected");
                message.mast_state = $root.ax_proto_msgs.MastState.fromObject(object.mast_state);
            }
            if (object.submap_list != null) {
                if (typeof object.submap_list !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.submap_list: object expected");
                message.submap_list = $root.ax_proto_msgs.slam.SubmapList.fromObject(object.submap_list);
            }
            if (object.rack_states != null) {
                if (typeof object.rack_states !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.rack_states: object expected");
                message.rack_states = $root.ax_proto_msgs.RackStates.fromObject(object.rack_states);
            }
            if (object.towing_state != null) {
                if (typeof object.towing_state !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.towing_state: object expected");
                message.towing_state = $root.ax_proto_msgs.TowingState.fromObject(object.towing_state);
            }
            if (object.mobile_network_state != null) {
                if (typeof object.mobile_network_state !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.mobile_network_state: object expected");
                message.mobile_network_state = $root.ax_proto_msgs.MobileNetworkState.fromObject(object.mobile_network_state);
            }
            if (object.video_data != null) {
                if (typeof object.video_data !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.video_data: object expected");
                message.video_data = $root.ax_proto_msgs.VideoData.fromObject(object.video_data);
            }
            if (object.depth_image != null) {
                if (typeof object.depth_image !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.depth_image: object expected");
                message.depth_image = $root.ax_proto_msgs.DepthImage.fromObject(object.depth_image);
            }
            if (object.dwa_candidate_path_set != null) {
                if (typeof object.dwa_candidate_path_set !== "object")
                    throw TypeError(".ax_proto_msgs.RosMessageWrapper.dwa_candidate_path_set: object expected");
                message.dwa_candidate_path_set = $root.ax_proto_msgs.DwaCandidatePathSet.fromObject(object.dwa_candidate_path_set);
            }
            return message;
        };

        /**
         * Creates a plain object from a RosMessageWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {ax_proto_msgs.RosMessageWrapper} message RosMessageWrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RosMessageWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.type = options.enums === String ? "UNKNOWN" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ax_proto_msgs.RosMessageWrapper.MessageType[message.type] === undefined ? message.type : $root.ax_proto_msgs.RosMessageWrapper.MessageType[message.type] : message.type;
            if (message.point_cloud != null && message.hasOwnProperty("point_cloud")) {
                object.point_cloud = $root.ax_proto_msgs.PointCloud.toObject(message.point_cloud, options);
                if (options.oneofs)
                    object.payload = "point_cloud";
            }
            if (message.mast_state != null && message.hasOwnProperty("mast_state")) {
                object.mast_state = $root.ax_proto_msgs.MastState.toObject(message.mast_state, options);
                if (options.oneofs)
                    object.payload = "mast_state";
            }
            if (message.submap_list != null && message.hasOwnProperty("submap_list")) {
                object.submap_list = $root.ax_proto_msgs.slam.SubmapList.toObject(message.submap_list, options);
                if (options.oneofs)
                    object.payload = "submap_list";
            }
            if (message.rack_states != null && message.hasOwnProperty("rack_states")) {
                object.rack_states = $root.ax_proto_msgs.RackStates.toObject(message.rack_states, options);
                if (options.oneofs)
                    object.payload = "rack_states";
            }
            if (message.towing_state != null && message.hasOwnProperty("towing_state")) {
                object.towing_state = $root.ax_proto_msgs.TowingState.toObject(message.towing_state, options);
                if (options.oneofs)
                    object.payload = "towing_state";
            }
            if (message.mobile_network_state != null && message.hasOwnProperty("mobile_network_state")) {
                object.mobile_network_state = $root.ax_proto_msgs.MobileNetworkState.toObject(message.mobile_network_state, options);
                if (options.oneofs)
                    object.payload = "mobile_network_state";
            }
            if (message.video_data != null && message.hasOwnProperty("video_data")) {
                object.video_data = $root.ax_proto_msgs.VideoData.toObject(message.video_data, options);
                if (options.oneofs)
                    object.payload = "video_data";
            }
            if (message.depth_image != null && message.hasOwnProperty("depth_image")) {
                object.depth_image = $root.ax_proto_msgs.DepthImage.toObject(message.depth_image, options);
                if (options.oneofs)
                    object.payload = "depth_image";
            }
            if (message.dwa_candidate_path_set != null && message.hasOwnProperty("dwa_candidate_path_set")) {
                object.dwa_candidate_path_set = $root.ax_proto_msgs.DwaCandidatePathSet.toObject(message.dwa_candidate_path_set, options);
                if (options.oneofs)
                    object.payload = "dwa_candidate_path_set";
            }
            return object;
        };

        /**
         * Converts this RosMessageWrapper to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RosMessageWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RosMessageWrapper
         * @function getTypeUrl
         * @memberof ax_proto_msgs.RosMessageWrapper
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RosMessageWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.RosMessageWrapper";
        };

        /**
         * MessageType enum.
         * @name ax_proto_msgs.RosMessageWrapper.MessageType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} POINT_CLOUD=1 POINT_CLOUD value
         * @property {number} MAST_STATE=2 MAST_STATE value
         * @property {number} SUBMAP_LIST=3 SUBMAP_LIST value
         * @property {number} RACK_STATES=4 RACK_STATES value
         * @property {number} TOWING_STATE=5 TOWING_STATE value
         * @property {number} MOBILE_NETWORK_STATE=6 MOBILE_NETWORK_STATE value
         * @property {number} VIDEO_DATA=7 VIDEO_DATA value
         * @property {number} DEPTH_IMAGE=8 DEPTH_IMAGE value
         * @property {number} DWA_CANDIDATE_PATH_SET=9 DWA_CANDIDATE_PATH_SET value
         */
        RosMessageWrapper.MessageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT_CLOUD"] = 1;
            values[valuesById[2] = "MAST_STATE"] = 2;
            values[valuesById[3] = "SUBMAP_LIST"] = 3;
            values[valuesById[4] = "RACK_STATES"] = 4;
            values[valuesById[5] = "TOWING_STATE"] = 5;
            values[valuesById[6] = "MOBILE_NETWORK_STATE"] = 6;
            values[valuesById[7] = "VIDEO_DATA"] = 7;
            values[valuesById[8] = "DEPTH_IMAGE"] = 8;
            values[valuesById[9] = "DWA_CANDIDATE_PATH_SET"] = 9;
            return values;
        })();

        return RosMessageWrapper;
    })();

    ax_proto_msgs.slam = (function() {

        /**
         * Namespace slam.
         * @memberof ax_proto_msgs
         * @namespace
         */
        const slam = {};

        slam.SubmapEntry = (function() {

            /**
             * Properties of a SubmapEntry.
             * @memberof ax_proto_msgs.slam
             * @interface ISubmapEntry
             * @property {number|null} [trajectory_id] SubmapEntry trajectory_id
             * @property {number|null} [submap_index] SubmapEntry submap_index
             * @property {number|null} [submap_version] SubmapEntry submap_version
             * @property {ax_proto_msgs.IPose|null} [pose] SubmapEntry pose
             * @property {boolean|null} [is_frozen] SubmapEntry is_frozen
             * @property {boolean|null} [is_incremental_submap] SubmapEntry is_incremental_submap
             * @property {boolean|null} [is_nearby_map] SubmapEntry is_nearby_map
             */

            /**
             * Constructs a new SubmapEntry.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a SubmapEntry.
             * @implements ISubmapEntry
             * @constructor
             * @param {ax_proto_msgs.slam.ISubmapEntry=} [properties] Properties to set
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.trajectory_id = 0;

            /**
             * SubmapEntry submap_index.
             * @member {number} submap_index
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.submap_index = 0;

            /**
             * SubmapEntry submap_version.
             * @member {number} submap_version
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.submap_version = 0;

            /**
             * SubmapEntry pose.
             * @member {ax_proto_msgs.IPose|null|undefined} pose
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.pose = null;

            /**
             * SubmapEntry is_frozen.
             * @member {boolean} is_frozen
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.is_frozen = false;

            /**
             * SubmapEntry is_incremental_submap.
             * @member {boolean} is_incremental_submap
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.is_incremental_submap = false;

            /**
             * SubmapEntry is_nearby_map.
             * @member {boolean} is_nearby_map
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             */
            SubmapEntry.prototype.is_nearby_map = false;

            /**
             * Creates a new SubmapEntry instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {ax_proto_msgs.slam.ISubmapEntry=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.SubmapEntry} SubmapEntry instance
             */
            SubmapEntry.create = function create(properties) {
                return new SubmapEntry(properties);
            };

            /**
             * Encodes the specified SubmapEntry message. Does not implicitly {@link ax_proto_msgs.slam.SubmapEntry.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {ax_proto_msgs.slam.ISubmapEntry} message SubmapEntry message or plain object to encode
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
                    $root.ax_proto_msgs.Pose.encode(message.pose, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.is_frozen != null && Object.hasOwnProperty.call(message, "is_frozen"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_frozen);
                if (message.is_incremental_submap != null && Object.hasOwnProperty.call(message, "is_incremental_submap"))
                    writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_incremental_submap);
                if (message.is_nearby_map != null && Object.hasOwnProperty.call(message, "is_nearby_map"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.is_nearby_map);
                return writer;
            };

            /**
             * Encodes the specified SubmapEntry message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {ax_proto_msgs.slam.ISubmapEntry} message SubmapEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubmapEntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubmapEntry message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.SubmapEntry} SubmapEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubmapEntry.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.SubmapEntry();
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
                            message.pose = $root.ax_proto_msgs.Pose.decode(reader, reader.uint32());
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.SubmapEntry} SubmapEntry
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
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
                    let error = $root.ax_proto_msgs.Pose.verify(message.pose);
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.SubmapEntry} SubmapEntry
             */
            SubmapEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.SubmapEntry)
                    return object;
                let message = new $root.ax_proto_msgs.slam.SubmapEntry();
                if (object.trajectory_id != null)
                    message.trajectory_id = object.trajectory_id | 0;
                if (object.submap_index != null)
                    message.submap_index = object.submap_index | 0;
                if (object.submap_version != null)
                    message.submap_version = object.submap_version | 0;
                if (object.pose != null) {
                    if (typeof object.pose !== "object")
                        throw TypeError(".ax_proto_msgs.slam.SubmapEntry.pose: object expected");
                    message.pose = $root.ax_proto_msgs.Pose.fromObject(object.pose);
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {ax_proto_msgs.slam.SubmapEntry} message SubmapEntry
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
                    object.pose = $root.ax_proto_msgs.Pose.toObject(message.pose, options);
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
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubmapEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubmapEntry
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.SubmapEntry
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubmapEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.SubmapEntry";
            };

            return SubmapEntry;
        })();

        slam.SubmapList = (function() {

            /**
             * Properties of a SubmapList.
             * @memberof ax_proto_msgs.slam
             * @interface ISubmapList
             * @property {ax_proto_msgs.slam.SubmapList.SlamState|null} [slam_state] SubmapList slam_state
             * @property {string|null} [uuid] SubmapList uuid
             * @property {Array.<ax_proto_msgs.slam.ISubmapEntry>|null} [submaps] SubmapList submaps
             */

            /**
             * Constructs a new SubmapList.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a SubmapList.
             * @implements ISubmapList
             * @constructor
             * @param {ax_proto_msgs.slam.ISubmapList=} [properties] Properties to set
             */
            function SubmapList(properties) {
                this.submaps = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubmapList slam_state.
             * @member {ax_proto_msgs.slam.SubmapList.SlamState} slam_state
             * @memberof ax_proto_msgs.slam.SubmapList
             * @instance
             */
            SubmapList.prototype.slam_state = 0;

            /**
             * SubmapList uuid.
             * @member {string} uuid
             * @memberof ax_proto_msgs.slam.SubmapList
             * @instance
             */
            SubmapList.prototype.uuid = "";

            /**
             * SubmapList submaps.
             * @member {Array.<ax_proto_msgs.slam.ISubmapEntry>} submaps
             * @memberof ax_proto_msgs.slam.SubmapList
             * @instance
             */
            SubmapList.prototype.submaps = $util.emptyArray;

            /**
             * Creates a new SubmapList instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {ax_proto_msgs.slam.ISubmapList=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.SubmapList} SubmapList instance
             */
            SubmapList.create = function create(properties) {
                return new SubmapList(properties);
            };

            /**
             * Encodes the specified SubmapList message. Does not implicitly {@link ax_proto_msgs.slam.SubmapList.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {ax_proto_msgs.slam.ISubmapList} message SubmapList message or plain object to encode
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
                if (message.submaps != null && message.submaps.length)
                    for (let i = 0; i < message.submaps.length; ++i)
                        $root.ax_proto_msgs.slam.SubmapEntry.encode(message.submaps[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SubmapList message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {ax_proto_msgs.slam.ISubmapList} message SubmapList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubmapList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubmapList message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.SubmapList} SubmapList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubmapList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.SubmapList();
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
                            if (!(message.submaps && message.submaps.length))
                                message.submaps = [];
                            message.submaps.push($root.ax_proto_msgs.slam.SubmapEntry.decode(reader, reader.uint32()));
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
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.SubmapList} SubmapList
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
             * @memberof ax_proto_msgs.slam.SubmapList
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
                if (message.submaps != null && message.hasOwnProperty("submaps")) {
                    if (!Array.isArray(message.submaps))
                        return "submaps: array expected";
                    for (let i = 0; i < message.submaps.length; ++i) {
                        let error = $root.ax_proto_msgs.slam.SubmapEntry.verify(message.submaps[i]);
                        if (error)
                            return "submaps." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SubmapList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.SubmapList} SubmapList
             */
            SubmapList.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.SubmapList)
                    return object;
                let message = new $root.ax_proto_msgs.slam.SubmapList();
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
                if (object.submaps) {
                    if (!Array.isArray(object.submaps))
                        throw TypeError(".ax_proto_msgs.slam.SubmapList.submaps: array expected");
                    message.submaps = [];
                    for (let i = 0; i < object.submaps.length; ++i) {
                        if (typeof object.submaps[i] !== "object")
                            throw TypeError(".ax_proto_msgs.slam.SubmapList.submaps: object expected");
                        message.submaps[i] = $root.ax_proto_msgs.slam.SubmapEntry.fromObject(object.submaps[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SubmapList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {ax_proto_msgs.slam.SubmapList} message SubmapList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubmapList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.submaps = [];
                if (options.defaults) {
                    object.slam_state = options.enums === String ? "SLAM_STATE_INVALID" : 0;
                    object.uuid = "";
                }
                if (message.slam_state != null && message.hasOwnProperty("slam_state"))
                    object.slam_state = options.enums === String ? $root.ax_proto_msgs.slam.SubmapList.SlamState[message.slam_state] === undefined ? message.slam_state : $root.ax_proto_msgs.slam.SubmapList.SlamState[message.slam_state] : message.slam_state;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.submaps && message.submaps.length) {
                    object.submaps = [];
                    for (let j = 0; j < message.submaps.length; ++j)
                        object.submaps[j] = $root.ax_proto_msgs.slam.SubmapEntry.toObject(message.submaps[j], options);
                }
                return object;
            };

            /**
             * Converts this SubmapList to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.slam.SubmapList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubmapList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubmapList
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.SubmapList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubmapList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.SubmapList";
            };

            /**
             * SlamState enum.
             * @name ax_proto_msgs.slam.SubmapList.SlamState
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

        slam.GetMapImageResponse = (function() {

            /**
             * Properties of a GetMapImageResponse.
             * @memberof ax_proto_msgs.slam
             * @interface IGetMapImageResponse
             * @property {number|null} [origin_x] GetMapImageResponse origin_x
             * @property {number|null} [origin_y] GetMapImageResponse origin_y
             * @property {number|null} [resolution] GetMapImageResponse resolution
             * @property {Uint8Array|null} [png_bytes] GetMapImageResponse png_bytes
             * @property {ax_proto_msgs.slam.StatusCode|null} [status_code] GetMapImageResponse status_code
             * @property {string|null} [status_message] GetMapImageResponse status_message
             */

            /**
             * Constructs a new GetMapImageResponse.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a GetMapImageResponse.
             * @implements IGetMapImageResponse
             * @constructor
             * @param {ax_proto_msgs.slam.IGetMapImageResponse=} [properties] Properties to set
             */
            function GetMapImageResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetMapImageResponse origin_x.
             * @member {number} origin_x
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.origin_x = 0;

            /**
             * GetMapImageResponse origin_y.
             * @member {number} origin_y
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.origin_y = 0;

            /**
             * GetMapImageResponse resolution.
             * @member {number} resolution
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.resolution = 0;

            /**
             * GetMapImageResponse png_bytes.
             * @member {Uint8Array} png_bytes
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.png_bytes = $util.newBuffer([]);

            /**
             * GetMapImageResponse status_code.
             * @member {ax_proto_msgs.slam.StatusCode} status_code
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.status_code = 0;

            /**
             * GetMapImageResponse status_message.
             * @member {string} status_message
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             */
            GetMapImageResponse.prototype.status_message = "";

            /**
             * Creates a new GetMapImageResponse instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {ax_proto_msgs.slam.IGetMapImageResponse=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.GetMapImageResponse} GetMapImageResponse instance
             */
            GetMapImageResponse.create = function create(properties) {
                return new GetMapImageResponse(properties);
            };

            /**
             * Encodes the specified GetMapImageResponse message. Does not implicitly {@link ax_proto_msgs.slam.GetMapImageResponse.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {ax_proto_msgs.slam.IGetMapImageResponse} message GetMapImageResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMapImageResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.origin_x != null && Object.hasOwnProperty.call(message, "origin_x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.origin_x);
                if (message.origin_y != null && Object.hasOwnProperty.call(message, "origin_y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.origin_y);
                if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.resolution);
                if (message.png_bytes != null && Object.hasOwnProperty.call(message, "png_bytes"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.png_bytes);
                if (message.status_code != null && Object.hasOwnProperty.call(message, "status_code"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status_code);
                if (message.status_message != null && Object.hasOwnProperty.call(message, "status_message"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.status_message);
                return writer;
            };

            /**
             * Encodes the specified GetMapImageResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.GetMapImageResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {ax_proto_msgs.slam.IGetMapImageResponse} message GetMapImageResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMapImageResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetMapImageResponse message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.GetMapImageResponse} GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMapImageResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.GetMapImageResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.origin_x = reader.double();
                            break;
                        }
                    case 2: {
                            message.origin_y = reader.double();
                            break;
                        }
                    case 3: {
                            message.resolution = reader.double();
                            break;
                        }
                    case 4: {
                            message.png_bytes = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.status_code = reader.int32();
                            break;
                        }
                    case 6: {
                            message.status_message = reader.string();
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
             * Decodes a GetMapImageResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.GetMapImageResponse} GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMapImageResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetMapImageResponse message.
             * @function verify
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMapImageResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.origin_x != null && message.hasOwnProperty("origin_x"))
                    if (typeof message.origin_x !== "number")
                        return "origin_x: number expected";
                if (message.origin_y != null && message.hasOwnProperty("origin_y"))
                    if (typeof message.origin_y !== "number")
                        return "origin_y: number expected";
                if (message.resolution != null && message.hasOwnProperty("resolution"))
                    if (typeof message.resolution !== "number")
                        return "resolution: number expected";
                if (message.png_bytes != null && message.hasOwnProperty("png_bytes"))
                    if (!(message.png_bytes && typeof message.png_bytes.length === "number" || $util.isString(message.png_bytes)))
                        return "png_bytes: buffer expected";
                if (message.status_code != null && message.hasOwnProperty("status_code"))
                    switch (message.status_code) {
                    default:
                        return "status_code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                        break;
                    }
                if (message.status_message != null && message.hasOwnProperty("status_message"))
                    if (!$util.isString(message.status_message))
                        return "status_message: string expected";
                return null;
            };

            /**
             * Creates a GetMapImageResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.GetMapImageResponse} GetMapImageResponse
             */
            GetMapImageResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.GetMapImageResponse)
                    return object;
                let message = new $root.ax_proto_msgs.slam.GetMapImageResponse();
                if (object.origin_x != null)
                    message.origin_x = Number(object.origin_x);
                if (object.origin_y != null)
                    message.origin_y = Number(object.origin_y);
                if (object.resolution != null)
                    message.resolution = Number(object.resolution);
                if (object.png_bytes != null)
                    if (typeof object.png_bytes === "string")
                        $util.base64.decode(object.png_bytes, message.png_bytes = $util.newBuffer($util.base64.length(object.png_bytes)), 0);
                    else if (object.png_bytes.length >= 0)
                        message.png_bytes = object.png_bytes;
                switch (object.status_code) {
                default:
                    if (typeof object.status_code === "number") {
                        message.status_code = object.status_code;
                        break;
                    }
                    break;
                case "OK":
                case 0:
                    message.status_code = 0;
                    break;
                case "CANCELLED":
                case 1:
                    message.status_code = 1;
                    break;
                case "UNKNOWN":
                case 2:
                    message.status_code = 2;
                    break;
                case "INVALID_ARGUMENT":
                case 3:
                    message.status_code = 3;
                    break;
                case "DEADLINE_EXCEEDED":
                case 4:
                    message.status_code = 4;
                    break;
                case "NOT_FOUND":
                case 5:
                    message.status_code = 5;
                    break;
                case "ALREADY_EXISTS":
                case 6:
                    message.status_code = 6;
                    break;
                case "PERMISSION_DENIED":
                case 7:
                    message.status_code = 7;
                    break;
                case "RESOURCE_EXHAUSTED":
                case 8:
                    message.status_code = 8;
                    break;
                case "FAILED_PRECONDITION":
                case 9:
                    message.status_code = 9;
                    break;
                case "ABORTED":
                case 10:
                    message.status_code = 10;
                    break;
                case "OUT_OF_RANGE":
                case 11:
                    message.status_code = 11;
                    break;
                case "UNIMPLEMENTED":
                case 12:
                    message.status_code = 12;
                    break;
                case "INTERNAL":
                case 13:
                    message.status_code = 13;
                    break;
                case "UNAVAILABLE":
                case 14:
                    message.status_code = 14;
                    break;
                case "DATA_LOSS":
                case 15:
                    message.status_code = 15;
                    break;
                case "UUID_MISMATCH":
                case 16:
                    message.status_code = 16;
                    break;
                }
                if (object.status_message != null)
                    message.status_message = String(object.status_message);
                return message;
            };

            /**
             * Creates a plain object from a GetMapImageResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {ax_proto_msgs.slam.GetMapImageResponse} message GetMapImageResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMapImageResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.origin_x = 0;
                    object.origin_y = 0;
                    object.resolution = 0;
                    if (options.bytes === String)
                        object.png_bytes = "";
                    else {
                        object.png_bytes = [];
                        if (options.bytes !== Array)
                            object.png_bytes = $util.newBuffer(object.png_bytes);
                    }
                    object.status_code = options.enums === String ? "OK" : 0;
                    object.status_message = "";
                }
                if (message.origin_x != null && message.hasOwnProperty("origin_x"))
                    object.origin_x = options.json && !isFinite(message.origin_x) ? String(message.origin_x) : message.origin_x;
                if (message.origin_y != null && message.hasOwnProperty("origin_y"))
                    object.origin_y = options.json && !isFinite(message.origin_y) ? String(message.origin_y) : message.origin_y;
                if (message.resolution != null && message.hasOwnProperty("resolution"))
                    object.resolution = options.json && !isFinite(message.resolution) ? String(message.resolution) : message.resolution;
                if (message.png_bytes != null && message.hasOwnProperty("png_bytes"))
                    object.png_bytes = options.bytes === String ? $util.base64.encode(message.png_bytes, 0, message.png_bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.png_bytes) : message.png_bytes;
                if (message.status_code != null && message.hasOwnProperty("status_code"))
                    object.status_code = options.enums === String ? $root.ax_proto_msgs.slam.StatusCode[message.status_code] === undefined ? message.status_code : $root.ax_proto_msgs.slam.StatusCode[message.status_code] : message.status_code;
                if (message.status_message != null && message.hasOwnProperty("status_message"))
                    object.status_message = message.status_message;
                return object;
            };

            /**
             * Converts this GetMapImageResponse to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMapImageResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetMapImageResponse
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.GetMapImageResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetMapImageResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.GetMapImageResponse";
            };

            return GetMapImageResponse;
        })();

        /**
         * StatusCode enum.
         * @name ax_proto_msgs.slam.StatusCode
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         * @property {number} UUID_MISMATCH=16 UUID_MISMATCH value
         */
        slam.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            values[valuesById[16] = "UUID_MISMATCH"] = 16;
            return values;
        })();

        slam.StatusResponse = (function() {

            /**
             * Properties of a StatusResponse.
             * @memberof ax_proto_msgs.slam
             * @interface IStatusResponse
             * @property {ax_proto_msgs.slam.StatusCode|null} [code] StatusResponse code
             * @property {string|null} [message] StatusResponse message
             */

            /**
             * Constructs a new StatusResponse.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a StatusResponse.
             * @implements IStatusResponse
             * @constructor
             * @param {ax_proto_msgs.slam.IStatusResponse=} [properties] Properties to set
             */
            function StatusResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StatusResponse code.
             * @member {ax_proto_msgs.slam.StatusCode} code
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @instance
             */
            StatusResponse.prototype.code = 0;

            /**
             * StatusResponse message.
             * @member {string} message
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @instance
             */
            StatusResponse.prototype.message = "";

            /**
             * Creates a new StatusResponse instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {ax_proto_msgs.slam.IStatusResponse=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.StatusResponse} StatusResponse instance
             */
            StatusResponse.create = function create(properties) {
                return new StatusResponse(properties);
            };

            /**
             * Encodes the specified StatusResponse message. Does not implicitly {@link ax_proto_msgs.slam.StatusResponse.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {ax_proto_msgs.slam.IStatusResponse} message StatusResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.StatusResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {ax_proto_msgs.slam.IStatusResponse} message StatusResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StatusResponse message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.StatusResponse} StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatusResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.StatusResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.int32();
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
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.StatusResponse} StatusResponse
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
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StatusResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.StatusResponse} StatusResponse
             */
            StatusResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.StatusResponse)
                    return object;
                let message = new $root.ax_proto_msgs.slam.StatusResponse();
                switch (object.code) {
                default:
                    if (typeof object.code === "number") {
                        message.code = object.code;
                        break;
                    }
                    break;
                case "OK":
                case 0:
                    message.code = 0;
                    break;
                case "CANCELLED":
                case 1:
                    message.code = 1;
                    break;
                case "UNKNOWN":
                case 2:
                    message.code = 2;
                    break;
                case "INVALID_ARGUMENT":
                case 3:
                    message.code = 3;
                    break;
                case "DEADLINE_EXCEEDED":
                case 4:
                    message.code = 4;
                    break;
                case "NOT_FOUND":
                case 5:
                    message.code = 5;
                    break;
                case "ALREADY_EXISTS":
                case 6:
                    message.code = 6;
                    break;
                case "PERMISSION_DENIED":
                case 7:
                    message.code = 7;
                    break;
                case "RESOURCE_EXHAUSTED":
                case 8:
                    message.code = 8;
                    break;
                case "FAILED_PRECONDITION":
                case 9:
                    message.code = 9;
                    break;
                case "ABORTED":
                case 10:
                    message.code = 10;
                    break;
                case "OUT_OF_RANGE":
                case 11:
                    message.code = 11;
                    break;
                case "UNIMPLEMENTED":
                case 12:
                    message.code = 12;
                    break;
                case "INTERNAL":
                case 13:
                    message.code = 13;
                    break;
                case "UNAVAILABLE":
                case 14:
                    message.code = 14;
                    break;
                case "DATA_LOSS":
                case 15:
                    message.code = 15;
                    break;
                case "UUID_MISMATCH":
                case 16:
                    message.code = 16;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {ax_proto_msgs.slam.StatusResponse} message StatusResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StatusResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "OK" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.ax_proto_msgs.slam.StatusCode[message.code] === undefined ? message.code : $root.ax_proto_msgs.slam.StatusCode[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this StatusResponse to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StatusResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StatusResponse
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.StatusResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StatusResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.StatusResponse";
            };

            return StatusResponse;
        })();

        slam.SubmapTexture = (function() {

            /**
             * Properties of a SubmapTexture.
             * @memberof ax_proto_msgs.slam
             * @interface ISubmapTexture
             * @property {number|null} [cell_format] SubmapTexture cell_format
             * @property {Uint8Array|null} [cells] SubmapTexture cells
             * @property {number|null} [width] SubmapTexture width
             * @property {number|null} [height] SubmapTexture height
             * @property {number|null} [resolution] SubmapTexture resolution
             * @property {number|null} [z_level] SubmapTexture z_level
             * @property {ax_proto_msgs.IPose|null} [slice_pose] SubmapTexture slice_pose
             */

            /**
             * Constructs a new SubmapTexture.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a SubmapTexture.
             * @implements ISubmapTexture
             * @constructor
             * @param {ax_proto_msgs.slam.ISubmapTexture=} [properties] Properties to set
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
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.cell_format = 0;

            /**
             * SubmapTexture cells.
             * @member {Uint8Array} cells
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.cells = $util.newBuffer([]);

            /**
             * SubmapTexture width.
             * @member {number} width
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.width = 0;

            /**
             * SubmapTexture height.
             * @member {number} height
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.height = 0;

            /**
             * SubmapTexture resolution.
             * @member {number} resolution
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.resolution = 0;

            /**
             * SubmapTexture z_level.
             * @member {number} z_level
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.z_level = 0;

            /**
             * SubmapTexture slice_pose.
             * @member {ax_proto_msgs.IPose|null|undefined} slice_pose
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             */
            SubmapTexture.prototype.slice_pose = null;

            /**
             * Creates a new SubmapTexture instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {ax_proto_msgs.slam.ISubmapTexture=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.SubmapTexture} SubmapTexture instance
             */
            SubmapTexture.create = function create(properties) {
                return new SubmapTexture(properties);
            };

            /**
             * Encodes the specified SubmapTexture message. Does not implicitly {@link ax_proto_msgs.slam.SubmapTexture.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {ax_proto_msgs.slam.ISubmapTexture} message SubmapTexture message or plain object to encode
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
                    $root.ax_proto_msgs.Pose.encode(message.slice_pose, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SubmapTexture message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapTexture.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {ax_proto_msgs.slam.ISubmapTexture} message SubmapTexture message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubmapTexture.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubmapTexture message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.SubmapTexture} SubmapTexture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubmapTexture.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.SubmapTexture();
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
                            message.slice_pose = $root.ax_proto_msgs.Pose.decode(reader, reader.uint32());
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
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.SubmapTexture} SubmapTexture
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
             * @memberof ax_proto_msgs.slam.SubmapTexture
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
                    let error = $root.ax_proto_msgs.Pose.verify(message.slice_pose);
                    if (error)
                        return "slice_pose." + error;
                }
                return null;
            };

            /**
             * Creates a SubmapTexture message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.SubmapTexture} SubmapTexture
             */
            SubmapTexture.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.SubmapTexture)
                    return object;
                let message = new $root.ax_proto_msgs.slam.SubmapTexture();
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
                        throw TypeError(".ax_proto_msgs.slam.SubmapTexture.slice_pose: object expected");
                    message.slice_pose = $root.ax_proto_msgs.Pose.fromObject(object.slice_pose);
                }
                return message;
            };

            /**
             * Creates a plain object from a SubmapTexture message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {ax_proto_msgs.slam.SubmapTexture} message SubmapTexture
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
                    object.slice_pose = $root.ax_proto_msgs.Pose.toObject(message.slice_pose, options);
                return object;
            };

            /**
             * Converts this SubmapTexture to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubmapTexture.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubmapTexture
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.SubmapTexture
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubmapTexture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.SubmapTexture";
            };

            return SubmapTexture;
        })();

        slam.SubmapQueryV2Response = (function() {

            /**
             * Properties of a SubmapQueryV2Response.
             * @memberof ax_proto_msgs.slam
             * @interface ISubmapQueryV2Response
             * @property {ax_proto_msgs.slam.IStatusResponse|null} [status] SubmapQueryV2Response status
             * @property {number|null} [submap_version] SubmapQueryV2Response submap_version
             * @property {Array.<ax_proto_msgs.slam.ISubmapTexture>|null} [textures] SubmapQueryV2Response textures
             */

            /**
             * Constructs a new SubmapQueryV2Response.
             * @memberof ax_proto_msgs.slam
             * @classdesc Represents a SubmapQueryV2Response.
             * @implements ISubmapQueryV2Response
             * @constructor
             * @param {ax_proto_msgs.slam.ISubmapQueryV2Response=} [properties] Properties to set
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
             * @member {ax_proto_msgs.slam.IStatusResponse|null|undefined} status
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @instance
             */
            SubmapQueryV2Response.prototype.status = null;

            /**
             * SubmapQueryV2Response submap_version.
             * @member {number} submap_version
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @instance
             */
            SubmapQueryV2Response.prototype.submap_version = 0;

            /**
             * SubmapQueryV2Response textures.
             * @member {Array.<ax_proto_msgs.slam.ISubmapTexture>} textures
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @instance
             */
            SubmapQueryV2Response.prototype.textures = $util.emptyArray;

            /**
             * Creates a new SubmapQueryV2Response instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {ax_proto_msgs.slam.ISubmapQueryV2Response=} [properties] Properties to set
             * @returns {ax_proto_msgs.slam.SubmapQueryV2Response} SubmapQueryV2Response instance
             */
            SubmapQueryV2Response.create = function create(properties) {
                return new SubmapQueryV2Response(properties);
            };

            /**
             * Encodes the specified SubmapQueryV2Response message. Does not implicitly {@link ax_proto_msgs.slam.SubmapQueryV2Response.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {ax_proto_msgs.slam.ISubmapQueryV2Response} message SubmapQueryV2Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubmapQueryV2Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    $root.ax_proto_msgs.slam.StatusResponse.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.submap_version != null && Object.hasOwnProperty.call(message, "submap_version"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.submap_version);
                if (message.textures != null && message.textures.length)
                    for (let i = 0; i < message.textures.length; ++i)
                        $root.ax_proto_msgs.slam.SubmapTexture.encode(message.textures[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SubmapQueryV2Response message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapQueryV2Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {ax_proto_msgs.slam.ISubmapQueryV2Response} message SubmapQueryV2Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubmapQueryV2Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubmapQueryV2Response message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.slam.SubmapQueryV2Response} SubmapQueryV2Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubmapQueryV2Response.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.slam.SubmapQueryV2Response();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = $root.ax_proto_msgs.slam.StatusResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.submap_version = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.textures && message.textures.length))
                                message.textures = [];
                            message.textures.push($root.ax_proto_msgs.slam.SubmapTexture.decode(reader, reader.uint32()));
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
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.slam.SubmapQueryV2Response} SubmapQueryV2Response
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
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubmapQueryV2Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    let error = $root.ax_proto_msgs.slam.StatusResponse.verify(message.status);
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
                        let error = $root.ax_proto_msgs.slam.SubmapTexture.verify(message.textures[i]);
                        if (error)
                            return "textures." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SubmapQueryV2Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.slam.SubmapQueryV2Response} SubmapQueryV2Response
             */
            SubmapQueryV2Response.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.slam.SubmapQueryV2Response)
                    return object;
                let message = new $root.ax_proto_msgs.slam.SubmapQueryV2Response();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".ax_proto_msgs.slam.SubmapQueryV2Response.status: object expected");
                    message.status = $root.ax_proto_msgs.slam.StatusResponse.fromObject(object.status);
                }
                if (object.submap_version != null)
                    message.submap_version = object.submap_version | 0;
                if (object.textures) {
                    if (!Array.isArray(object.textures))
                        throw TypeError(".ax_proto_msgs.slam.SubmapQueryV2Response.textures: array expected");
                    message.textures = [];
                    for (let i = 0; i < object.textures.length; ++i) {
                        if (typeof object.textures[i] !== "object")
                            throw TypeError(".ax_proto_msgs.slam.SubmapQueryV2Response.textures: object expected");
                        message.textures[i] = $root.ax_proto_msgs.slam.SubmapTexture.fromObject(object.textures[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SubmapQueryV2Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {ax_proto_msgs.slam.SubmapQueryV2Response} message SubmapQueryV2Response
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
                    object.status = $root.ax_proto_msgs.slam.StatusResponse.toObject(message.status, options);
                if (message.submap_version != null && message.hasOwnProperty("submap_version"))
                    object.submap_version = message.submap_version;
                if (message.textures && message.textures.length) {
                    object.textures = [];
                    for (let j = 0; j < message.textures.length; ++j)
                        object.textures[j] = $root.ax_proto_msgs.slam.SubmapTexture.toObject(message.textures[j], options);
                }
                return object;
            };

            /**
             * Converts this SubmapQueryV2Response to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubmapQueryV2Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubmapQueryV2Response
             * @function getTypeUrl
             * @memberof ax_proto_msgs.slam.SubmapQueryV2Response
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubmapQueryV2Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.slam.SubmapQueryV2Response";
            };

            return SubmapQueryV2Response;
        })();

        return slam;
    })();

    ax_proto_msgs.TowingState = (function() {

        /**
         * Properties of a TowingState.
         * @memberof ax_proto_msgs
         * @interface ITowingState
         * @property {number|null} [action_progress] TowingState action_progress
         * @property {ax_proto_msgs.TowingState.HookState|null} [hook_state] TowingState hook_state
         * @property {boolean|null} [cargo_detected] TowingState cargo_detected
         * @property {number|null} [error_code] TowingState error_code
         * @property {string|null} [error_message] TowingState error_message
         */

        /**
         * Constructs a new TowingState.
         * @memberof ax_proto_msgs
         * @classdesc Represents a TowingState.
         * @implements ITowingState
         * @constructor
         * @param {ax_proto_msgs.ITowingState=} [properties] Properties to set
         */
        function TowingState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TowingState action_progress.
         * @member {number} action_progress
         * @memberof ax_proto_msgs.TowingState
         * @instance
         */
        TowingState.prototype.action_progress = 0;

        /**
         * TowingState hook_state.
         * @member {ax_proto_msgs.TowingState.HookState} hook_state
         * @memberof ax_proto_msgs.TowingState
         * @instance
         */
        TowingState.prototype.hook_state = 0;

        /**
         * TowingState cargo_detected.
         * @member {boolean} cargo_detected
         * @memberof ax_proto_msgs.TowingState
         * @instance
         */
        TowingState.prototype.cargo_detected = false;

        /**
         * TowingState error_code.
         * @member {number} error_code
         * @memberof ax_proto_msgs.TowingState
         * @instance
         */
        TowingState.prototype.error_code = 0;

        /**
         * TowingState error_message.
         * @member {string} error_message
         * @memberof ax_proto_msgs.TowingState
         * @instance
         */
        TowingState.prototype.error_message = "";

        /**
         * Creates a new TowingState instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {ax_proto_msgs.ITowingState=} [properties] Properties to set
         * @returns {ax_proto_msgs.TowingState} TowingState instance
         */
        TowingState.create = function create(properties) {
            return new TowingState(properties);
        };

        /**
         * Encodes the specified TowingState message. Does not implicitly {@link ax_proto_msgs.TowingState.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {ax_proto_msgs.ITowingState} message TowingState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TowingState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action_progress != null && Object.hasOwnProperty.call(message, "action_progress"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.action_progress);
            if (message.hook_state != null && Object.hasOwnProperty.call(message, "hook_state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hook_state);
            if (message.cargo_detected != null && Object.hasOwnProperty.call(message, "cargo_detected"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.cargo_detected);
            if (message.error_code != null && Object.hasOwnProperty.call(message, "error_code"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.error_code);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.error_message);
            return writer;
        };

        /**
         * Encodes the specified TowingState message, length delimited. Does not implicitly {@link ax_proto_msgs.TowingState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {ax_proto_msgs.ITowingState} message TowingState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TowingState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TowingState message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.TowingState} TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TowingState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.TowingState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action_progress = reader.float();
                        break;
                    }
                case 2: {
                        message.hook_state = reader.int32();
                        break;
                    }
                case 3: {
                        message.cargo_detected = reader.bool();
                        break;
                    }
                case 4: {
                        message.error_code = reader.uint32();
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
         * Decodes a TowingState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.TowingState} TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TowingState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TowingState message.
         * @function verify
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TowingState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action_progress != null && message.hasOwnProperty("action_progress"))
                if (typeof message.action_progress !== "number")
                    return "action_progress: number expected";
            if (message.hook_state != null && message.hasOwnProperty("hook_state"))
                switch (message.hook_state) {
                default:
                    return "hook_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.cargo_detected != null && message.hasOwnProperty("cargo_detected"))
                if (typeof message.cargo_detected !== "boolean")
                    return "cargo_detected: boolean expected";
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                if (!$util.isInteger(message.error_code))
                    return "error_code: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            return null;
        };

        /**
         * Creates a TowingState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.TowingState} TowingState
         */
        TowingState.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.TowingState)
                return object;
            let message = new $root.ax_proto_msgs.TowingState();
            if (object.action_progress != null)
                message.action_progress = Number(object.action_progress);
            switch (object.hook_state) {
            default:
                if (typeof object.hook_state === "number") {
                    message.hook_state = object.hook_state;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.hook_state = 0;
                break;
            case "LOCKED":
            case 1:
                message.hook_state = 1;
                break;
            case "RELEASED":
            case 2:
                message.hook_state = 2;
                break;
            case "LOCKING":
            case 3:
                message.hook_state = 3;
                break;
            case "RELEASING":
            case 4:
                message.hook_state = 4;
                break;
            case "SELF_CHECKING":
            case 5:
                message.hook_state = 5;
                break;
            case "ERROR":
            case 6:
                message.hook_state = 6;
                break;
            }
            if (object.cargo_detected != null)
                message.cargo_detected = Boolean(object.cargo_detected);
            if (object.error_code != null)
                message.error_code = object.error_code >>> 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            return message;
        };

        /**
         * Creates a plain object from a TowingState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {ax_proto_msgs.TowingState} message TowingState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TowingState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.action_progress = 0;
                object.hook_state = options.enums === String ? "UNKNOWN" : 0;
                object.cargo_detected = false;
                object.error_code = 0;
                object.error_message = "";
            }
            if (message.action_progress != null && message.hasOwnProperty("action_progress"))
                object.action_progress = options.json && !isFinite(message.action_progress) ? String(message.action_progress) : message.action_progress;
            if (message.hook_state != null && message.hasOwnProperty("hook_state"))
                object.hook_state = options.enums === String ? $root.ax_proto_msgs.TowingState.HookState[message.hook_state] === undefined ? message.hook_state : $root.ax_proto_msgs.TowingState.HookState[message.hook_state] : message.hook_state;
            if (message.cargo_detected != null && message.hasOwnProperty("cargo_detected"))
                object.cargo_detected = message.cargo_detected;
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                object.error_code = message.error_code;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            return object;
        };

        /**
         * Converts this TowingState to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.TowingState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TowingState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TowingState
         * @function getTypeUrl
         * @memberof ax_proto_msgs.TowingState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TowingState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.TowingState";
        };

        /**
         * HookState enum.
         * @name ax_proto_msgs.TowingState.HookState
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LOCKED=1 LOCKED value
         * @property {number} RELEASED=2 RELEASED value
         * @property {number} LOCKING=3 LOCKING value
         * @property {number} RELEASING=4 RELEASING value
         * @property {number} SELF_CHECKING=5 SELF_CHECKING value
         * @property {number} ERROR=6 ERROR value
         */
        TowingState.HookState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOCKED"] = 1;
            values[valuesById[2] = "RELEASED"] = 2;
            values[valuesById[3] = "LOCKING"] = 3;
            values[valuesById[4] = "RELEASING"] = 4;
            values[valuesById[5] = "SELF_CHECKING"] = 5;
            values[valuesById[6] = "ERROR"] = 6;
            return values;
        })();

        return TowingState;
    })();

    ax_proto_msgs.VideoData = (function() {

        /**
         * Properties of a VideoData.
         * @memberof ax_proto_msgs
         * @interface IVideoData
         * @property {number|null} [width] VideoData width
         * @property {number|null} [height] VideoData height
         * @property {ax_proto_msgs.VideoData.VideoFormat.Type|null} [video_format] VideoData video_format
         * @property {Uint8Array|null} [data] VideoData data
         */

        /**
         * Constructs a new VideoData.
         * @memberof ax_proto_msgs
         * @classdesc Represents a VideoData.
         * @implements IVideoData
         * @constructor
         * @param {ax_proto_msgs.IVideoData=} [properties] Properties to set
         */
        function VideoData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoData width.
         * @member {number} width
         * @memberof ax_proto_msgs.VideoData
         * @instance
         */
        VideoData.prototype.width = 0;

        /**
         * VideoData height.
         * @member {number} height
         * @memberof ax_proto_msgs.VideoData
         * @instance
         */
        VideoData.prototype.height = 0;

        /**
         * VideoData video_format.
         * @member {ax_proto_msgs.VideoData.VideoFormat.Type} video_format
         * @memberof ax_proto_msgs.VideoData
         * @instance
         */
        VideoData.prototype.video_format = 0;

        /**
         * VideoData data.
         * @member {Uint8Array} data
         * @memberof ax_proto_msgs.VideoData
         * @instance
         */
        VideoData.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new VideoData instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {ax_proto_msgs.IVideoData=} [properties] Properties to set
         * @returns {ax_proto_msgs.VideoData} VideoData instance
         */
        VideoData.create = function create(properties) {
            return new VideoData(properties);
        };

        /**
         * Encodes the specified VideoData message. Does not implicitly {@link ax_proto_msgs.VideoData.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {ax_proto_msgs.IVideoData} message VideoData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            if (message.video_format != null && Object.hasOwnProperty.call(message, "video_format"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.video_format);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified VideoData message, length delimited. Does not implicitly {@link ax_proto_msgs.VideoData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {ax_proto_msgs.IVideoData} message VideoData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoData message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.VideoData} VideoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.VideoData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
                        break;
                    }
                case 3: {
                        message.video_format = reader.int32();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
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
         * Decodes a VideoData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.VideoData} VideoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoData message.
         * @function verify
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.video_format != null && message.hasOwnProperty("video_format"))
                switch (message.video_format) {
                default:
                    return "video_format: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a VideoData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.VideoData} VideoData
         */
        VideoData.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.VideoData)
                return object;
            let message = new $root.ax_proto_msgs.VideoData();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            switch (object.video_format) {
            default:
                if (typeof object.video_format === "number") {
                    message.video_format = object.video_format;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.video_format = 0;
                break;
            case "H264":
            case 1:
                message.video_format = 1;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a VideoData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {ax_proto_msgs.VideoData} message VideoData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                object.video_format = options.enums === String ? "UNKNOWN" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.video_format != null && message.hasOwnProperty("video_format"))
                object.video_format = options.enums === String ? $root.ax_proto_msgs.VideoData.VideoFormat.Type[message.video_format] === undefined ? message.video_format : $root.ax_proto_msgs.VideoData.VideoFormat.Type[message.video_format] : message.video_format;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this VideoData to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.VideoData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoData
         * @function getTypeUrl
         * @memberof ax_proto_msgs.VideoData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.VideoData";
        };

        VideoData.VideoFormat = (function() {

            /**
             * Properties of a VideoFormat.
             * @memberof ax_proto_msgs.VideoData
             * @interface IVideoFormat
             */

            /**
             * Constructs a new VideoFormat.
             * @memberof ax_proto_msgs.VideoData
             * @classdesc Represents a VideoFormat.
             * @implements IVideoFormat
             * @constructor
             * @param {ax_proto_msgs.VideoData.IVideoFormat=} [properties] Properties to set
             */
            function VideoFormat(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new VideoFormat instance using the specified properties.
             * @function create
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {ax_proto_msgs.VideoData.IVideoFormat=} [properties] Properties to set
             * @returns {ax_proto_msgs.VideoData.VideoFormat} VideoFormat instance
             */
            VideoFormat.create = function create(properties) {
                return new VideoFormat(properties);
            };

            /**
             * Encodes the specified VideoFormat message. Does not implicitly {@link ax_proto_msgs.VideoData.VideoFormat.verify|verify} messages.
             * @function encode
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {ax_proto_msgs.VideoData.IVideoFormat} message VideoFormat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoFormat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified VideoFormat message, length delimited. Does not implicitly {@link ax_proto_msgs.VideoData.VideoFormat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {ax_proto_msgs.VideoData.IVideoFormat} message VideoFormat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoFormat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VideoFormat message from the specified reader or buffer.
             * @function decode
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ax_proto_msgs.VideoData.VideoFormat} VideoFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoFormat.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.VideoData.VideoFormat();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VideoFormat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ax_proto_msgs.VideoData.VideoFormat} VideoFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoFormat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VideoFormat message.
             * @function verify
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VideoFormat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a VideoFormat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ax_proto_msgs.VideoData.VideoFormat} VideoFormat
             */
            VideoFormat.fromObject = function fromObject(object) {
                if (object instanceof $root.ax_proto_msgs.VideoData.VideoFormat)
                    return object;
                return new $root.ax_proto_msgs.VideoData.VideoFormat();
            };

            /**
             * Creates a plain object from a VideoFormat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {ax_proto_msgs.VideoData.VideoFormat} message VideoFormat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VideoFormat.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this VideoFormat to JSON.
             * @function toJSON
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VideoFormat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VideoFormat
             * @function getTypeUrl
             * @memberof ax_proto_msgs.VideoData.VideoFormat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VideoFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ax_proto_msgs.VideoData.VideoFormat";
            };

            /**
             * Type enum.
             * @name ax_proto_msgs.VideoData.VideoFormat.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} H264=1 H264 value
             */
            VideoFormat.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "H264"] = 1;
                return values;
            })();

            return VideoFormat;
        })();

        return VideoData;
    })();

    ax_proto_msgs.TopicInfo = (function() {

        /**
         * Properties of a TopicInfo.
         * @memberof ax_proto_msgs
         * @interface ITopicInfo
         * @property {string|null} [name] TopicInfo name
         * @property {string|null} [type] TopicInfo type
         * @property {number|null} [publisher_count] TopicInfo publisher_count
         * @property {number|null} [subscriber_count] TopicInfo subscriber_count
         */

        /**
         * Constructs a new TopicInfo.
         * @memberof ax_proto_msgs
         * @classdesc Represents a TopicInfo.
         * @implements ITopicInfo
         * @constructor
         * @param {ax_proto_msgs.ITopicInfo=} [properties] Properties to set
         */
        function TopicInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopicInfo name.
         * @member {string} name
         * @memberof ax_proto_msgs.TopicInfo
         * @instance
         */
        TopicInfo.prototype.name = "";

        /**
         * TopicInfo type.
         * @member {string} type
         * @memberof ax_proto_msgs.TopicInfo
         * @instance
         */
        TopicInfo.prototype.type = "";

        /**
         * TopicInfo publisher_count.
         * @member {number} publisher_count
         * @memberof ax_proto_msgs.TopicInfo
         * @instance
         */
        TopicInfo.prototype.publisher_count = 0;

        /**
         * TopicInfo subscriber_count.
         * @member {number} subscriber_count
         * @memberof ax_proto_msgs.TopicInfo
         * @instance
         */
        TopicInfo.prototype.subscriber_count = 0;

        /**
         * Creates a new TopicInfo instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {ax_proto_msgs.ITopicInfo=} [properties] Properties to set
         * @returns {ax_proto_msgs.TopicInfo} TopicInfo instance
         */
        TopicInfo.create = function create(properties) {
            return new TopicInfo(properties);
        };

        /**
         * Encodes the specified TopicInfo message. Does not implicitly {@link ax_proto_msgs.TopicInfo.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {ax_proto_msgs.ITopicInfo} message TopicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.publisher_count != null && Object.hasOwnProperty.call(message, "publisher_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.publisher_count);
            if (message.subscriber_count != null && Object.hasOwnProperty.call(message, "subscriber_count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.subscriber_count);
            return writer;
        };

        /**
         * Encodes the specified TopicInfo message, length delimited. Does not implicitly {@link ax_proto_msgs.TopicInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {ax_proto_msgs.ITopicInfo} message TopicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopicInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.TopicInfo} TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.TopicInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.publisher_count = reader.int32();
                        break;
                    }
                case 4: {
                        message.subscriber_count = reader.int32();
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
         * Decodes a TopicInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.TopicInfo} TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopicInfo message.
         * @function verify
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopicInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.publisher_count != null && message.hasOwnProperty("publisher_count"))
                if (!$util.isInteger(message.publisher_count))
                    return "publisher_count: integer expected";
            if (message.subscriber_count != null && message.hasOwnProperty("subscriber_count"))
                if (!$util.isInteger(message.subscriber_count))
                    return "subscriber_count: integer expected";
            return null;
        };

        /**
         * Creates a TopicInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.TopicInfo} TopicInfo
         */
        TopicInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.TopicInfo)
                return object;
            let message = new $root.ax_proto_msgs.TopicInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.publisher_count != null)
                message.publisher_count = object.publisher_count | 0;
            if (object.subscriber_count != null)
                message.subscriber_count = object.subscriber_count | 0;
            return message;
        };

        /**
         * Creates a plain object from a TopicInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {ax_proto_msgs.TopicInfo} message TopicInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopicInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.publisher_count = 0;
                object.subscriber_count = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.publisher_count != null && message.hasOwnProperty("publisher_count"))
                object.publisher_count = message.publisher_count;
            if (message.subscriber_count != null && message.hasOwnProperty("subscriber_count"))
                object.subscriber_count = message.subscriber_count;
            return object;
        };

        /**
         * Converts this TopicInfo to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.TopicInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopicInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TopicInfo
         * @function getTypeUrl
         * @memberof ax_proto_msgs.TopicInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopicInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.TopicInfo";
        };

        return TopicInfo;
    })();

    ax_proto_msgs.TopicListResponse = (function() {

        /**
         * Properties of a TopicListResponse.
         * @memberof ax_proto_msgs
         * @interface ITopicListResponse
         * @property {Array.<ax_proto_msgs.ITopicInfo>|null} [topics] TopicListResponse topics
         */

        /**
         * Constructs a new TopicListResponse.
         * @memberof ax_proto_msgs
         * @classdesc Represents a TopicListResponse.
         * @implements ITopicListResponse
         * @constructor
         * @param {ax_proto_msgs.ITopicListResponse=} [properties] Properties to set
         */
        function TopicListResponse(properties) {
            this.topics = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopicListResponse topics.
         * @member {Array.<ax_proto_msgs.ITopicInfo>} topics
         * @memberof ax_proto_msgs.TopicListResponse
         * @instance
         */
        TopicListResponse.prototype.topics = $util.emptyArray;

        /**
         * Creates a new TopicListResponse instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {ax_proto_msgs.ITopicListResponse=} [properties] Properties to set
         * @returns {ax_proto_msgs.TopicListResponse} TopicListResponse instance
         */
        TopicListResponse.create = function create(properties) {
            return new TopicListResponse(properties);
        };

        /**
         * Encodes the specified TopicListResponse message. Does not implicitly {@link ax_proto_msgs.TopicListResponse.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {ax_proto_msgs.ITopicListResponse} message TopicListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.topics != null && message.topics.length)
                for (let i = 0; i < message.topics.length; ++i)
                    $root.ax_proto_msgs.TopicInfo.encode(message.topics[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TopicListResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.TopicListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {ax_proto_msgs.ITopicListResponse} message TopicListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopicListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.TopicListResponse} TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicListResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.TopicListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.topics && message.topics.length))
                            message.topics = [];
                        message.topics.push($root.ax_proto_msgs.TopicInfo.decode(reader, reader.uint32()));
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
         * Decodes a TopicListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.TopicListResponse} TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopicListResponse message.
         * @function verify
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopicListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.topics != null && message.hasOwnProperty("topics")) {
                if (!Array.isArray(message.topics))
                    return "topics: array expected";
                for (let i = 0; i < message.topics.length; ++i) {
                    let error = $root.ax_proto_msgs.TopicInfo.verify(message.topics[i]);
                    if (error)
                        return "topics." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TopicListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.TopicListResponse} TopicListResponse
         */
        TopicListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.TopicListResponse)
                return object;
            let message = new $root.ax_proto_msgs.TopicListResponse();
            if (object.topics) {
                if (!Array.isArray(object.topics))
                    throw TypeError(".ax_proto_msgs.TopicListResponse.topics: array expected");
                message.topics = [];
                for (let i = 0; i < object.topics.length; ++i) {
                    if (typeof object.topics[i] !== "object")
                        throw TypeError(".ax_proto_msgs.TopicListResponse.topics: object expected");
                    message.topics[i] = $root.ax_proto_msgs.TopicInfo.fromObject(object.topics[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TopicListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {ax_proto_msgs.TopicListResponse} message TopicListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopicListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.topics = [];
            if (message.topics && message.topics.length) {
                object.topics = [];
                for (let j = 0; j < message.topics.length; ++j)
                    object.topics[j] = $root.ax_proto_msgs.TopicInfo.toObject(message.topics[j], options);
            }
            return object;
        };

        /**
         * Converts this TopicListResponse to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.TopicListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopicListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TopicListResponse
         * @function getTypeUrl
         * @memberof ax_proto_msgs.TopicListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopicListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.TopicListResponse";
        };

        return TopicListResponse;
    })();

    ax_proto_msgs.PublishedTopicNamesResponse = (function() {

        /**
         * Properties of a PublishedTopicNamesResponse.
         * @memberof ax_proto_msgs
         * @interface IPublishedTopicNamesResponse
         * @property {Array.<string>|null} [names] PublishedTopicNamesResponse names
         */

        /**
         * Constructs a new PublishedTopicNamesResponse.
         * @memberof ax_proto_msgs
         * @classdesc Represents a PublishedTopicNamesResponse.
         * @implements IPublishedTopicNamesResponse
         * @constructor
         * @param {ax_proto_msgs.IPublishedTopicNamesResponse=} [properties] Properties to set
         */
        function PublishedTopicNamesResponse(properties) {
            this.names = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublishedTopicNamesResponse names.
         * @member {Array.<string>} names
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @instance
         */
        PublishedTopicNamesResponse.prototype.names = $util.emptyArray;

        /**
         * Creates a new PublishedTopicNamesResponse instance using the specified properties.
         * @function create
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {ax_proto_msgs.IPublishedTopicNamesResponse=} [properties] Properties to set
         * @returns {ax_proto_msgs.PublishedTopicNamesResponse} PublishedTopicNamesResponse instance
         */
        PublishedTopicNamesResponse.create = function create(properties) {
            return new PublishedTopicNamesResponse(properties);
        };

        /**
         * Encodes the specified PublishedTopicNamesResponse message. Does not implicitly {@link ax_proto_msgs.PublishedTopicNamesResponse.verify|verify} messages.
         * @function encode
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {ax_proto_msgs.IPublishedTopicNamesResponse} message PublishedTopicNamesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedTopicNamesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.names != null && message.names.length)
                for (let i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.names[i]);
            return writer;
        };

        /**
         * Encodes the specified PublishedTopicNamesResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.PublishedTopicNamesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {ax_proto_msgs.IPublishedTopicNamesResponse} message PublishedTopicNamesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedTopicNamesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ax_proto_msgs.PublishedTopicNamesResponse} PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedTopicNamesResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ax_proto_msgs.PublishedTopicNamesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.names && message.names.length))
                            message.names = [];
                        message.names.push(reader.string());
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
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ax_proto_msgs.PublishedTopicNamesResponse} PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedTopicNamesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PublishedTopicNamesResponse message.
         * @function verify
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublishedTopicNamesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.names != null && message.hasOwnProperty("names")) {
                if (!Array.isArray(message.names))
                    return "names: array expected";
                for (let i = 0; i < message.names.length; ++i)
                    if (!$util.isString(message.names[i]))
                        return "names: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PublishedTopicNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ax_proto_msgs.PublishedTopicNamesResponse} PublishedTopicNamesResponse
         */
        PublishedTopicNamesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ax_proto_msgs.PublishedTopicNamesResponse)
                return object;
            let message = new $root.ax_proto_msgs.PublishedTopicNamesResponse();
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".ax_proto_msgs.PublishedTopicNamesResponse.names: array expected");
                message.names = [];
                for (let i = 0; i < object.names.length; ++i)
                    message.names[i] = String(object.names[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PublishedTopicNamesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {ax_proto_msgs.PublishedTopicNamesResponse} message PublishedTopicNamesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublishedTopicNamesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (message.names && message.names.length) {
                object.names = [];
                for (let j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            return object;
        };

        /**
         * Converts this PublishedTopicNamesResponse to JSON.
         * @function toJSON
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublishedTopicNamesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PublishedTopicNamesResponse
         * @function getTypeUrl
         * @memberof ax_proto_msgs.PublishedTopicNamesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublishedTopicNamesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ax_proto_msgs.PublishedTopicNamesResponse";
        };

        return PublishedTopicNamesResponse;
    })();

    return ax_proto_msgs;
})();

export { $root as default };
