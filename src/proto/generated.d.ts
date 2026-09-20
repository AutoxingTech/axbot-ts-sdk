import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ax_proto_msgs. */
export namespace ax_proto_msgs {

    /** Properties of a DepthImage. */
    interface IDepthImage {

        /** DepthImage width */
        width?: (number|null);

        /** DepthImage height */
        height?: (number|null);

        /** DepthImage encoding */
        encoding?: (ax_proto_msgs.DepthImage.Encoding.Type|null);

        /** DepthImage image_data */
        image_data?: (Uint8Array|null);
    }

    /** Represents a DepthImage. */
    class DepthImage implements IDepthImage {

        /**
         * Constructs a new DepthImage.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IDepthImage);

        /** DepthImage width. */
        public width: number;

        /** DepthImage height. */
        public height: number;

        /** DepthImage encoding. */
        public encoding: ax_proto_msgs.DepthImage.Encoding.Type;

        /** DepthImage image_data. */
        public image_data: Uint8Array;

        /**
         * Creates a new DepthImage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DepthImage instance
         */
        public static create(properties?: ax_proto_msgs.IDepthImage): ax_proto_msgs.DepthImage;

        /**
         * Encodes the specified DepthImage message. Does not implicitly {@link ax_proto_msgs.DepthImage.verify|verify} messages.
         * @param message DepthImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IDepthImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DepthImage message, length delimited. Does not implicitly {@link ax_proto_msgs.DepthImage.verify|verify} messages.
         * @param message DepthImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IDepthImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DepthImage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DepthImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.DepthImage;

        /**
         * Decodes a DepthImage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DepthImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.DepthImage;

        /**
         * Verifies a DepthImage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DepthImage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DepthImage
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.DepthImage;

        /**
         * Creates a plain object from a DepthImage message. Also converts values to other types if specified.
         * @param message DepthImage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.DepthImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DepthImage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DepthImage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DepthImage {

        /** Properties of an Encoding. */
        interface IEncoding {
        }

        /** Represents an Encoding. */
        class Encoding implements IEncoding {

            /**
             * Constructs a new Encoding.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.DepthImage.IEncoding);

            /**
             * Creates a new Encoding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Encoding instance
             */
            public static create(properties?: ax_proto_msgs.DepthImage.IEncoding): ax_proto_msgs.DepthImage.Encoding;

            /**
             * Encodes the specified Encoding message. Does not implicitly {@link ax_proto_msgs.DepthImage.Encoding.verify|verify} messages.
             * @param message Encoding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.DepthImage.IEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Encoding message, length delimited. Does not implicitly {@link ax_proto_msgs.DepthImage.Encoding.verify|verify} messages.
             * @param message Encoding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.DepthImage.IEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Encoding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Encoding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.DepthImage.Encoding;

            /**
             * Decodes an Encoding message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Encoding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.DepthImage.Encoding;

            /**
             * Verifies an Encoding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Encoding message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Encoding
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.DepthImage.Encoding;

            /**
             * Creates a plain object from an Encoding message. Also converts values to other types if specified.
             * @param message Encoding
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.DepthImage.Encoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Encoding to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Encoding
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Encoding {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                PNG_INDEXED_8 = 1,
                PNG_GRAY_8 = 2
            }
        }
    }

    /** Properties of a DwaCandidatePath. */
    interface IDwaCandidatePath {

        /** DwaCandidatePath id */
        id?: (number|null);

        /** DwaCandidatePath is_selected */
        is_selected?: (boolean|null);

        /** DwaCandidatePath xs */
        xs?: (number[]|null);

        /** DwaCandidatePath ys */
        ys?: (number[]|null);

        /** DwaCandidatePath is_invalid */
        is_invalid?: (boolean|null);

        /** DwaCandidatePath has_collision */
        has_collision?: (boolean|null);

        /** DwaCandidatePath is_diagonal */
        is_diagonal?: (boolean|null);

        /** DwaCandidatePath linear_velocity */
        linear_velocity?: (number|null);

        /** DwaCandidatePath angular_velocity */
        angular_velocity?: (number|null);

        /** DwaCandidatePath linear_acceleration */
        linear_acceleration?: (number|null);

        /** DwaCandidatePath angular_acceleration */
        angular_acceleration?: (number|null);

        /** DwaCandidatePath front_wheel_velocity */
        front_wheel_velocity?: (number|null);

        /** DwaCandidatePath steering_angle */
        steering_angle?: (number|null);

        /** DwaCandidatePath max_depart_distance_left */
        max_depart_distance_left?: (number|null);

        /** DwaCandidatePath max_depart_distance_right */
        max_depart_distance_right?: (number|null);

        /** DwaCandidatePath ending_depart_distance */
        ending_depart_distance?: (number|null);

        /** DwaCandidatePath ending_depart_distance_cost */
        ending_depart_distance_cost?: (number|null);

        /** DwaCandidatePath trend_turn_angle */
        trend_turn_angle?: (number|null);

        /** DwaCandidatePath trend_turn_angle_cost */
        trend_turn_angle_cost?: (number|null);

        /** DwaCandidatePath ending_turn_angle */
        ending_turn_angle?: (number|null);

        /** DwaCandidatePath ending_turn_angle_cost */
        ending_turn_angle_cost?: (number|null);

        /** DwaCandidatePath path_progress */
        path_progress?: (number|null);

        /** DwaCandidatePath progress_scale */
        progress_scale?: (number|null);

        /** DwaCandidatePath progress_penalty_cost */
        progress_penalty_cost?: (number|null);

        /** DwaCandidatePath progress_max_penalty_scale */
        progress_max_penalty_scale?: (number|null);

        /** DwaCandidatePath progress_exploit_scale */
        progress_exploit_scale?: (number|null);

        /** DwaCandidatePath progress_exploit_penalty_cost */
        progress_exploit_penalty_cost?: (number|null);

        /** DwaCandidatePath max_topography */
        max_topography?: (number|null);

        /** DwaCandidatePath max_topography_penalty_cost */
        max_topography_penalty_cost?: (number|null);

        /** DwaCandidatePath trend_topography */
        trend_topography?: (number|null);

        /** DwaCandidatePath trend_topography_penalty_in_travel_cost */
        trend_topography_penalty_in_travel_cost?: (number|null);

        /** DwaCandidatePath trend_topography_penalty_in_evade_cost */
        trend_topography_penalty_in_evade_cost?: (number|null);

        /** DwaCandidatePath min_distance_to_obstacle */
        min_distance_to_obstacle?: (number|null);

        /** DwaCandidatePath min_distance_to_obstacle_cost */
        min_distance_to_obstacle_cost?: (number|null);

        /** DwaCandidatePath trend_distance_to_obstacle */
        trend_distance_to_obstacle?: (number|null);

        /** DwaCandidatePath trend_distance_to_obstacle_in_travel_cost */
        trend_distance_to_obstacle_in_travel_cost?: (number|null);

        /** DwaCandidatePath trend_distance_to_obstacle_in_evade_cost */
        trend_distance_to_obstacle_in_evade_cost?: (number|null);

        /** DwaCandidatePath trend_distance_to_obstacle_with_window */
        trend_distance_to_obstacle_with_window?: (number|null);

        /** DwaCandidatePath collision_range_location */
        collision_range_location?: (number|null);

        /** DwaCandidatePath collision_range_length */
        collision_range_length?: (number|null);

        /** DwaCandidatePath obstacle_penalty_cost */
        obstacle_penalty_cost?: (number|null);

        /** DwaCandidatePath curl_angle */
        curl_angle?: (number|null);

        /** DwaCandidatePath arc_angle */
        arc_angle?: (number|null);

        /** DwaCandidatePath linear_cost */
        linear_cost?: (number|null);

        /** DwaCandidatePath angular_cost */
        angular_cost?: (number|null);

        /** DwaCandidatePath path_left_distance */
        path_left_distance?: (number|null);

        /** DwaCandidatePath point_count */
        point_count?: (number|null);

        /** DwaCandidatePath trend_path_index */
        trend_path_index?: (number|null);

        /** DwaCandidatePath trend_path_heading */
        trend_path_heading?: (number|null);

        /** DwaCandidatePath trend_dwa_index */
        trend_dwa_index?: (number|null);

        /** DwaCandidatePath trend_dwa_heading */
        trend_dwa_heading?: (number|null);

        /** DwaCandidatePath ending_path_index */
        ending_path_index?: (number|null);

        /** DwaCandidatePath ending_path_heading */
        ending_path_heading?: (number|null);

        /** DwaCandidatePath ending_dwa_heading */
        ending_dwa_heading?: (number|null);

        /** DwaCandidatePath travel_distance */
        travel_distance?: (number|null);

        /** DwaCandidatePath travel_score */
        travel_score?: (number|null);

        /** DwaCandidatePath evade_score_for_direction */
        evade_score_for_direction?: (number|null);

        /** DwaCandidatePath evade_score_for_selector */
        evade_score_for_selector?: (number|null);

        /** DwaCandidatePath cost */
        cost?: (number|null);

        /** DwaCandidatePath end_point_deviation_cost */
        end_point_deviation_cost?: (number|null);

        /** DwaCandidatePath end_point_deviation */
        end_point_deviation?: (number|null);

        /** DwaCandidatePath mean_path_deviation_cost */
        mean_path_deviation_cost?: (number|null);

        /** DwaCandidatePath mean_path_deviation */
        mean_path_deviation?: (number|null);

        /** DwaCandidatePath progress_cost */
        progress_cost?: (number|null);

        /** DwaCandidatePath progress_made */
        progress_made?: (number|null);

        /** DwaCandidatePath heading_cost */
        heading_cost?: (number|null);

        /** DwaCandidatePath end_point_heading_error */
        end_point_heading_error?: (number|null);

        /** DwaCandidatePath steering_cost */
        steering_cost?: (number|null);

        /** DwaCandidatePath steering_change_cost */
        steering_change_cost?: (number|null);

        /** DwaCandidatePath velocity_change_cost */
        velocity_change_cost?: (number|null);

        /** DwaCandidatePath resolution_index */
        resolution_index?: (number|null);
    }

    /** Represents a DwaCandidatePath. */
    class DwaCandidatePath implements IDwaCandidatePath {

        /**
         * Constructs a new DwaCandidatePath.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IDwaCandidatePath);

        /** DwaCandidatePath id. */
        public id: number;

        /** DwaCandidatePath is_selected. */
        public is_selected: boolean;

        /** DwaCandidatePath xs. */
        public xs: number[];

        /** DwaCandidatePath ys. */
        public ys: number[];

        /** DwaCandidatePath is_invalid. */
        public is_invalid: boolean;

        /** DwaCandidatePath has_collision. */
        public has_collision: boolean;

        /** DwaCandidatePath is_diagonal. */
        public is_diagonal: boolean;

        /** DwaCandidatePath linear_velocity. */
        public linear_velocity: number;

        /** DwaCandidatePath angular_velocity. */
        public angular_velocity: number;

        /** DwaCandidatePath linear_acceleration. */
        public linear_acceleration: number;

        /** DwaCandidatePath angular_acceleration. */
        public angular_acceleration: number;

        /** DwaCandidatePath front_wheel_velocity. */
        public front_wheel_velocity: number;

        /** DwaCandidatePath steering_angle. */
        public steering_angle: number;

        /** DwaCandidatePath max_depart_distance_left. */
        public max_depart_distance_left: number;

        /** DwaCandidatePath max_depart_distance_right. */
        public max_depart_distance_right: number;

        /** DwaCandidatePath ending_depart_distance. */
        public ending_depart_distance: number;

        /** DwaCandidatePath ending_depart_distance_cost. */
        public ending_depart_distance_cost: number;

        /** DwaCandidatePath trend_turn_angle. */
        public trend_turn_angle: number;

        /** DwaCandidatePath trend_turn_angle_cost. */
        public trend_turn_angle_cost: number;

        /** DwaCandidatePath ending_turn_angle. */
        public ending_turn_angle: number;

        /** DwaCandidatePath ending_turn_angle_cost. */
        public ending_turn_angle_cost: number;

        /** DwaCandidatePath path_progress. */
        public path_progress: number;

        /** DwaCandidatePath progress_scale. */
        public progress_scale: number;

        /** DwaCandidatePath progress_penalty_cost. */
        public progress_penalty_cost: number;

        /** DwaCandidatePath progress_max_penalty_scale. */
        public progress_max_penalty_scale: number;

        /** DwaCandidatePath progress_exploit_scale. */
        public progress_exploit_scale: number;

        /** DwaCandidatePath progress_exploit_penalty_cost. */
        public progress_exploit_penalty_cost: number;

        /** DwaCandidatePath max_topography. */
        public max_topography: number;

        /** DwaCandidatePath max_topography_penalty_cost. */
        public max_topography_penalty_cost: number;

        /** DwaCandidatePath trend_topography. */
        public trend_topography: number;

        /** DwaCandidatePath trend_topography_penalty_in_travel_cost. */
        public trend_topography_penalty_in_travel_cost: number;

        /** DwaCandidatePath trend_topography_penalty_in_evade_cost. */
        public trend_topography_penalty_in_evade_cost: number;

        /** DwaCandidatePath min_distance_to_obstacle. */
        public min_distance_to_obstacle: number;

        /** DwaCandidatePath min_distance_to_obstacle_cost. */
        public min_distance_to_obstacle_cost: number;

        /** DwaCandidatePath trend_distance_to_obstacle. */
        public trend_distance_to_obstacle: number;

        /** DwaCandidatePath trend_distance_to_obstacle_in_travel_cost. */
        public trend_distance_to_obstacle_in_travel_cost: number;

        /** DwaCandidatePath trend_distance_to_obstacle_in_evade_cost. */
        public trend_distance_to_obstacle_in_evade_cost: number;

        /** DwaCandidatePath trend_distance_to_obstacle_with_window. */
        public trend_distance_to_obstacle_with_window: number;

        /** DwaCandidatePath collision_range_location. */
        public collision_range_location: number;

        /** DwaCandidatePath collision_range_length. */
        public collision_range_length: number;

        /** DwaCandidatePath obstacle_penalty_cost. */
        public obstacle_penalty_cost: number;

        /** DwaCandidatePath curl_angle. */
        public curl_angle: number;

        /** DwaCandidatePath arc_angle. */
        public arc_angle: number;

        /** DwaCandidatePath linear_cost. */
        public linear_cost: number;

        /** DwaCandidatePath angular_cost. */
        public angular_cost: number;

        /** DwaCandidatePath path_left_distance. */
        public path_left_distance: number;

        /** DwaCandidatePath point_count. */
        public point_count: number;

        /** DwaCandidatePath trend_path_index. */
        public trend_path_index: number;

        /** DwaCandidatePath trend_path_heading. */
        public trend_path_heading: number;

        /** DwaCandidatePath trend_dwa_index. */
        public trend_dwa_index: number;

        /** DwaCandidatePath trend_dwa_heading. */
        public trend_dwa_heading: number;

        /** DwaCandidatePath ending_path_index. */
        public ending_path_index: number;

        /** DwaCandidatePath ending_path_heading. */
        public ending_path_heading: number;

        /** DwaCandidatePath ending_dwa_heading. */
        public ending_dwa_heading: number;

        /** DwaCandidatePath travel_distance. */
        public travel_distance: number;

        /** DwaCandidatePath travel_score. */
        public travel_score: number;

        /** DwaCandidatePath evade_score_for_direction. */
        public evade_score_for_direction: number;

        /** DwaCandidatePath evade_score_for_selector. */
        public evade_score_for_selector: number;

        /** DwaCandidatePath cost. */
        public cost: number;

        /** DwaCandidatePath end_point_deviation_cost. */
        public end_point_deviation_cost: number;

        /** DwaCandidatePath end_point_deviation. */
        public end_point_deviation: number;

        /** DwaCandidatePath mean_path_deviation_cost. */
        public mean_path_deviation_cost: number;

        /** DwaCandidatePath mean_path_deviation. */
        public mean_path_deviation: number;

        /** DwaCandidatePath progress_cost. */
        public progress_cost: number;

        /** DwaCandidatePath progress_made. */
        public progress_made: number;

        /** DwaCandidatePath heading_cost. */
        public heading_cost: number;

        /** DwaCandidatePath end_point_heading_error. */
        public end_point_heading_error: number;

        /** DwaCandidatePath steering_cost. */
        public steering_cost: number;

        /** DwaCandidatePath steering_change_cost. */
        public steering_change_cost: number;

        /** DwaCandidatePath velocity_change_cost. */
        public velocity_change_cost: number;

        /** DwaCandidatePath resolution_index. */
        public resolution_index: number;

        /**
         * Creates a new DwaCandidatePath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DwaCandidatePath instance
         */
        public static create(properties?: ax_proto_msgs.IDwaCandidatePath): ax_proto_msgs.DwaCandidatePath;

        /**
         * Encodes the specified DwaCandidatePath message. Does not implicitly {@link ax_proto_msgs.DwaCandidatePath.verify|verify} messages.
         * @param message DwaCandidatePath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IDwaCandidatePath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DwaCandidatePath message, length delimited. Does not implicitly {@link ax_proto_msgs.DwaCandidatePath.verify|verify} messages.
         * @param message DwaCandidatePath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IDwaCandidatePath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DwaCandidatePath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DwaCandidatePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.DwaCandidatePath;

        /**
         * Decodes a DwaCandidatePath message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DwaCandidatePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.DwaCandidatePath;

        /**
         * Verifies a DwaCandidatePath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DwaCandidatePath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DwaCandidatePath
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.DwaCandidatePath;

        /**
         * Creates a plain object from a DwaCandidatePath message. Also converts values to other types if specified.
         * @param message DwaCandidatePath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.DwaCandidatePath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DwaCandidatePath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DwaCandidatePath
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** DwaCandidateKind enum. */
    enum DwaCandidateKind {
        DWA_KIND_UNSPECIFIED = 0,
        DWA_KIND_BASE = 1,
        DWA_KIND_V2 = 2,
        DWA_KIND_V2_LEGACY = 3
    }

    /** Properties of a DwaCandidatePathSet. */
    interface IDwaCandidatePathSet {

        /** DwaCandidatePathSet header */
        header?: (ax_proto_msgs.IHeader|null);

        /** DwaCandidatePathSet origin_x */
        origin_x?: (number|null);

        /** DwaCandidatePathSet origin_y */
        origin_y?: (number|null);

        /** DwaCandidatePathSet resolution */
        resolution?: (number|null);

        /** DwaCandidatePathSet paths */
        paths?: (ax_proto_msgs.IDwaCandidatePath[]|null);

        /** DwaCandidatePathSet kind */
        kind?: (ax_proto_msgs.DwaCandidateKind|null);
    }

    /** Represents a DwaCandidatePathSet. */
    class DwaCandidatePathSet implements IDwaCandidatePathSet {

        /**
         * Constructs a new DwaCandidatePathSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IDwaCandidatePathSet);

        /** DwaCandidatePathSet header. */
        public header?: (ax_proto_msgs.IHeader|null);

        /** DwaCandidatePathSet origin_x. */
        public origin_x: number;

        /** DwaCandidatePathSet origin_y. */
        public origin_y: number;

        /** DwaCandidatePathSet resolution. */
        public resolution: number;

        /** DwaCandidatePathSet paths. */
        public paths: ax_proto_msgs.IDwaCandidatePath[];

        /** DwaCandidatePathSet kind. */
        public kind: ax_proto_msgs.DwaCandidateKind;

        /**
         * Creates a new DwaCandidatePathSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DwaCandidatePathSet instance
         */
        public static create(properties?: ax_proto_msgs.IDwaCandidatePathSet): ax_proto_msgs.DwaCandidatePathSet;

        /**
         * Encodes the specified DwaCandidatePathSet message. Does not implicitly {@link ax_proto_msgs.DwaCandidatePathSet.verify|verify} messages.
         * @param message DwaCandidatePathSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IDwaCandidatePathSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DwaCandidatePathSet message, length delimited. Does not implicitly {@link ax_proto_msgs.DwaCandidatePathSet.verify|verify} messages.
         * @param message DwaCandidatePathSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IDwaCandidatePathSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DwaCandidatePathSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DwaCandidatePathSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.DwaCandidatePathSet;

        /**
         * Decodes a DwaCandidatePathSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DwaCandidatePathSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.DwaCandidatePathSet;

        /**
         * Verifies a DwaCandidatePathSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DwaCandidatePathSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DwaCandidatePathSet
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.DwaCandidatePathSet;

        /**
         * Creates a plain object from a DwaCandidatePathSet message. Also converts values to other types if specified.
         * @param message DwaCandidatePathSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.DwaCandidatePathSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DwaCandidatePathSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DwaCandidatePathSet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Header. */
    interface IHeader {

        /** Header seq */
        seq?: (number|null);

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
        constructor(properties?: ax_proto_msgs.IHeader);

        /** Header seq. */
        public seq: number;

        /** Header stamp_nsec. */
        public stamp_nsec: (number|Long);

        /** Header frame_id. */
        public frame_id: string;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: ax_proto_msgs.IHeader): ax_proto_msgs.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link ax_proto_msgs.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link ax_proto_msgs.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.Header;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: ax_proto_msgs.IPose);

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
        public static create(properties?: ax_proto_msgs.IPose): ax_proto_msgs.Pose;

        /**
         * Encodes the specified Pose message. Does not implicitly {@link ax_proto_msgs.Pose.verify|verify} messages.
         * @param message Pose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pose message, length delimited. Does not implicitly {@link ax_proto_msgs.Pose.verify|verify} messages.
         * @param message Pose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pose message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.Pose;

        /**
         * Decodes a Pose message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.Pose;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.Pose;

        /**
         * Creates a plain object from a Pose message. Also converts values to other types if specified.
         * @param message Pose
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.Pose, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a MastState. */
    interface IMastState {

        /** MastState target_height */
        target_height?: (number|null);

        /** MastState current_height */
        current_height?: (number|null);

        /** MastState motion_state */
        motion_state?: (ax_proto_msgs.MastState.MotionState.Type|null);

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
        constructor(properties?: ax_proto_msgs.IMastState);

        /** MastState target_height. */
        public target_height: number;

        /** MastState current_height. */
        public current_height: number;

        /** MastState motion_state. */
        public motion_state: ax_proto_msgs.MastState.MotionState.Type;

        /** MastState error. */
        public error: number;

        /** MastState error_message. */
        public error_message: string;

        /**
         * Creates a new MastState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MastState instance
         */
        public static create(properties?: ax_proto_msgs.IMastState): ax_proto_msgs.MastState;

        /**
         * Encodes the specified MastState message. Does not implicitly {@link ax_proto_msgs.MastState.verify|verify} messages.
         * @param message MastState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IMastState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MastState message, length delimited. Does not implicitly {@link ax_proto_msgs.MastState.verify|verify} messages.
         * @param message MastState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IMastState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MastState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MastState;

        /**
         * Decodes a MastState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MastState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MastState;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MastState;

        /**
         * Creates a plain object from a MastState message. Also converts values to other types if specified.
         * @param message MastState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.MastState, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a MotionState. */
        interface IMotionState {
        }

        /** Represents a MotionState. */
        class MotionState implements IMotionState {

            /**
             * Constructs a new MotionState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MastState.IMotionState);

            /**
             * Creates a new MotionState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MotionState instance
             */
            public static create(properties?: ax_proto_msgs.MastState.IMotionState): ax_proto_msgs.MastState.MotionState;

            /**
             * Encodes the specified MotionState message. Does not implicitly {@link ax_proto_msgs.MastState.MotionState.verify|verify} messages.
             * @param message MotionState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MastState.IMotionState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MotionState message, length delimited. Does not implicitly {@link ax_proto_msgs.MastState.MotionState.verify|verify} messages.
             * @param message MotionState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MastState.IMotionState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MotionState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MotionState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MastState.MotionState;

            /**
             * Decodes a MotionState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MotionState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MastState.MotionState;

            /**
             * Verifies a MotionState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MotionState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MotionState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MastState.MotionState;

            /**
             * Creates a plain object from a MotionState message. Also converts values to other types if specified.
             * @param message MotionState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MastState.MotionState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MotionState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MotionState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MotionState {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                MOVING_HOLD = 1,
                MOVING_UP = 2,
                MOVING_DOWN = 3
            }
        }
    }

    /** Properties of a MobileNetworkState. */
    interface IMobileNetworkState {

        /** MobileNetworkState modem_state */
        modem_state?: (ax_proto_msgs.MobileNetworkState.ModemState.Type|null);

        /** MobileNetworkState recovery_request */
        recovery_request?: (ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type|null);

        /** MobileNetworkState recovery_reason */
        recovery_reason?: (string|null);

        /** MobileNetworkState sim_state */
        sim_state?: (ax_proto_msgs.MobileNetworkState.SimState.Type|null);

        /** MobileNetworkState iccid */
        iccid?: (string|null);

        /** MobileNetworkState imei */
        imei?: (string|null);

        /** MobileNetworkState imsi */
        imsi?: (string|null);

        /** MobileNetworkState model */
        model?: (string|null);

        /** MobileNetworkState firmware_ver */
        firmware_ver?: (string|null);

        /** MobileNetworkState reg_state */
        reg_state?: (ax_proto_msgs.MobileNetworkState.RegState.Type|null);

        /** MobileNetworkState rat */
        rat?: (ax_proto_msgs.MobileNetworkState.Rat.Type|null);

        /** MobileNetworkState operator_name */
        operator_name?: (string|null);

        /** MobileNetworkState lac */
        lac?: (number|null);

        /** MobileNetworkState cell_id */
        cell_id?: (number|null);

        /** MobileNetworkState rssi_dbm */
        rssi_dbm?: (number|null);

        /** MobileNetworkState rsrp_dbm */
        rsrp_dbm?: (number|null);

        /** MobileNetworkState rsrq_db */
        rsrq_db?: (number|null);

        /** MobileNetworkState sinr_db */
        sinr_db?: (number|null);

        /** MobileNetworkState signal_level */
        signal_level?: (number|null);

        /** MobileNetworkState data_state */
        data_state?: (ax_proto_msgs.MobileNetworkState.DataState.Type|null);

        /** MobileNetworkState apn */
        apn?: (string|null);

        /** MobileNetworkState ip_address */
        ip_address?: (string|null);

        /** MobileNetworkState connected_duration_sec */
        connected_duration_sec?: (number|null);

        /** MobileNetworkState tx_bytes */
        tx_bytes?: (number|Long|null);

        /** MobileNetworkState rx_bytes */
        rx_bytes?: (number|Long|null);
    }

    /** Represents a MobileNetworkState. */
    class MobileNetworkState implements IMobileNetworkState {

        /**
         * Constructs a new MobileNetworkState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IMobileNetworkState);

        /** MobileNetworkState modem_state. */
        public modem_state: ax_proto_msgs.MobileNetworkState.ModemState.Type;

        /** MobileNetworkState recovery_request. */
        public recovery_request: ax_proto_msgs.MobileNetworkState.RecoveryRequest.Type;

        /** MobileNetworkState recovery_reason. */
        public recovery_reason: string;

        /** MobileNetworkState sim_state. */
        public sim_state: ax_proto_msgs.MobileNetworkState.SimState.Type;

        /** MobileNetworkState iccid. */
        public iccid: string;

        /** MobileNetworkState imei. */
        public imei: string;

        /** MobileNetworkState imsi. */
        public imsi: string;

        /** MobileNetworkState model. */
        public model: string;

        /** MobileNetworkState firmware_ver. */
        public firmware_ver: string;

        /** MobileNetworkState reg_state. */
        public reg_state: ax_proto_msgs.MobileNetworkState.RegState.Type;

        /** MobileNetworkState rat. */
        public rat: ax_proto_msgs.MobileNetworkState.Rat.Type;

        /** MobileNetworkState operator_name. */
        public operator_name: string;

        /** MobileNetworkState lac. */
        public lac: number;

        /** MobileNetworkState cell_id. */
        public cell_id: number;

        /** MobileNetworkState rssi_dbm. */
        public rssi_dbm: number;

        /** MobileNetworkState rsrp_dbm. */
        public rsrp_dbm: number;

        /** MobileNetworkState rsrq_db. */
        public rsrq_db: number;

        /** MobileNetworkState sinr_db. */
        public sinr_db: number;

        /** MobileNetworkState signal_level. */
        public signal_level: number;

        /** MobileNetworkState data_state. */
        public data_state: ax_proto_msgs.MobileNetworkState.DataState.Type;

        /** MobileNetworkState apn. */
        public apn: string;

        /** MobileNetworkState ip_address. */
        public ip_address: string;

        /** MobileNetworkState connected_duration_sec. */
        public connected_duration_sec: number;

        /** MobileNetworkState tx_bytes. */
        public tx_bytes: (number|Long);

        /** MobileNetworkState rx_bytes. */
        public rx_bytes: (number|Long);

        /**
         * Creates a new MobileNetworkState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MobileNetworkState instance
         */
        public static create(properties?: ax_proto_msgs.IMobileNetworkState): ax_proto_msgs.MobileNetworkState;

        /**
         * Encodes the specified MobileNetworkState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.verify|verify} messages.
         * @param message MobileNetworkState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IMobileNetworkState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MobileNetworkState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.verify|verify} messages.
         * @param message MobileNetworkState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IMobileNetworkState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MobileNetworkState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MobileNetworkState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState;

        /**
         * Decodes a MobileNetworkState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MobileNetworkState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState;

        /**
         * Verifies a MobileNetworkState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MobileNetworkState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MobileNetworkState
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState;

        /**
         * Creates a plain object from a MobileNetworkState message. Also converts values to other types if specified.
         * @param message MobileNetworkState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.MobileNetworkState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MobileNetworkState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MobileNetworkState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MobileNetworkState {

        /** Properties of a ModemState. */
        interface IModemState {
        }

        /** Represents a ModemState. */
        class ModemState implements IModemState {

            /**
             * Constructs a new ModemState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.IModemState);

            /**
             * Creates a new ModemState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModemState instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.IModemState): ax_proto_msgs.MobileNetworkState.ModemState;

            /**
             * Encodes the specified ModemState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.ModemState.verify|verify} messages.
             * @param message ModemState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.IModemState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModemState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.ModemState.verify|verify} messages.
             * @param message ModemState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.IModemState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModemState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModemState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.ModemState;

            /**
             * Decodes a ModemState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModemState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.ModemState;

            /**
             * Verifies a ModemState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModemState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModemState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.ModemState;

            /**
             * Creates a plain object from a ModemState message. Also converts values to other types if specified.
             * @param message ModemState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.ModemState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModemState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ModemState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ModemState {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                INITIALIZING = 1,
                READY = 2,
                FAULT = 3
            }
        }

        /** Properties of a RecoveryRequest. */
        interface IRecoveryRequest {
        }

        /** Represents a RecoveryRequest. */
        class RecoveryRequest implements IRecoveryRequest {

            /**
             * Constructs a new RecoveryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.IRecoveryRequest);

            /**
             * Creates a new RecoveryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RecoveryRequest instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.IRecoveryRequest): ax_proto_msgs.MobileNetworkState.RecoveryRequest;

            /**
             * Encodes the specified RecoveryRequest message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RecoveryRequest.verify|verify} messages.
             * @param message RecoveryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.IRecoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RecoveryRequest message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RecoveryRequest.verify|verify} messages.
             * @param message RecoveryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.IRecoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RecoveryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RecoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.RecoveryRequest;

            /**
             * Decodes a RecoveryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RecoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.RecoveryRequest;

            /**
             * Verifies a RecoveryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RecoveryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RecoveryRequest
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.RecoveryRequest;

            /**
             * Creates a plain object from a RecoveryRequest message. Also converts values to other types if specified.
             * @param message RecoveryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.RecoveryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RecoveryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RecoveryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RecoveryRequest {

            /** Type enum. */
            enum Type {
                NONE = 0,
                USB_RESET = 1,
                HOST_REBOOT = 2
            }
        }

        /** Properties of a SimState. */
        interface ISimState {
        }

        /** Represents a SimState. */
        class SimState implements ISimState {

            /**
             * Constructs a new SimState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.ISimState);

            /**
             * Creates a new SimState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SimState instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.ISimState): ax_proto_msgs.MobileNetworkState.SimState;

            /**
             * Encodes the specified SimState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.SimState.verify|verify} messages.
             * @param message SimState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.ISimState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SimState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.SimState.verify|verify} messages.
             * @param message SimState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.ISimState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SimState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SimState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.SimState;

            /**
             * Decodes a SimState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SimState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.SimState;

            /**
             * Verifies a SimState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SimState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SimState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.SimState;

            /**
             * Creates a plain object from a SimState message. Also converts values to other types if specified.
             * @param message SimState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.SimState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SimState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SimState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SimState {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                ABSENT = 1,
                PIN_REQUIRED = 2,
                PUK_REQUIRED = 3,
                NETWORK_LOCKED = 4,
                READY = 5,
                NOT_READY = 6,
                CARD_IO_ERROR = 8,
                NO_RESPONSE = 255
            }
        }

        /** Properties of a RegState. */
        interface IRegState {
        }

        /** Represents a RegState. */
        class RegState implements IRegState {

            /**
             * Constructs a new RegState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.IRegState);

            /**
             * Creates a new RegState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegState instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.IRegState): ax_proto_msgs.MobileNetworkState.RegState;

            /**
             * Encodes the specified RegState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RegState.verify|verify} messages.
             * @param message RegState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.IRegState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.RegState.verify|verify} messages.
             * @param message RegState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.IRegState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.RegState;

            /**
             * Decodes a RegState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.RegState;

            /**
             * Verifies a RegState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.RegState;

            /**
             * Creates a plain object from a RegState message. Also converts values to other types if specified.
             * @param message RegState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.RegState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegState {

            /** Type enum. */
            enum Type {
                NOT_REGISTERED = 0,
                HOME = 1,
                SEARCHING = 2,
                DENIED = 3,
                UNKNOWN = 4,
                ROAMING = 5,
                HOME_SMS_ONLY = 6,
                ROAMING_SMS_ONLY = 7
            }
        }

        /** Properties of a Rat. */
        interface IRat {
        }

        /** Represents a Rat. */
        class Rat implements IRat {

            /**
             * Constructs a new Rat.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.IRat);

            /**
             * Creates a new Rat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rat instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.IRat): ax_proto_msgs.MobileNetworkState.Rat;

            /**
             * Encodes the specified Rat message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.Rat.verify|verify} messages.
             * @param message Rat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.IRat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rat message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.Rat.verify|verify} messages.
             * @param message Rat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.IRat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Rat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.Rat;

            /**
             * Decodes a Rat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Rat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.Rat;

            /**
             * Verifies a Rat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rat
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.Rat;

            /**
             * Creates a plain object from a Rat message. Also converts values to other types if specified.
             * @param message Rat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.Rat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Rat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Rat {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                GSM = 1,
                GPRS = 2,
                EDGE = 3,
                UMTS = 4,
                HSDPA = 5,
                HSUPA = 6,
                HSPA = 7,
                LTE = 13,
                LTE_CA = 19
            }
        }

        /** Properties of a DataState. */
        interface IDataState {
        }

        /** Represents a DataState. */
        class DataState implements IDataState {

            /**
             * Constructs a new DataState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.MobileNetworkState.IDataState);

            /**
             * Creates a new DataState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DataState instance
             */
            public static create(properties?: ax_proto_msgs.MobileNetworkState.IDataState): ax_proto_msgs.MobileNetworkState.DataState;

            /**
             * Encodes the specified DataState message. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.DataState.verify|verify} messages.
             * @param message DataState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.MobileNetworkState.IDataState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DataState message, length delimited. Does not implicitly {@link ax_proto_msgs.MobileNetworkState.DataState.verify|verify} messages.
             * @param message DataState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.MobileNetworkState.IDataState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DataState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DataState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MobileNetworkState.DataState;

            /**
             * Decodes a DataState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DataState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MobileNetworkState.DataState;

            /**
             * Verifies a DataState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DataState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DataState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MobileNetworkState.DataState;

            /**
             * Creates a plain object from a DataState message. Also converts values to other types if specified.
             * @param message DataState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.MobileNetworkState.DataState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DataState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DataState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DataState {

            /** Type enum. */
            enum Type {
                DISCONNECTED = 0,
                CONNECTING = 1,
                CONNECTED = 2,
                SUSPENDED = 3
            }
        }
    }

    /** Properties of a MoveFailReason. */
    interface IMoveFailReason {
    }

    /** Represents a MoveFailReason. */
    class MoveFailReason implements IMoveFailReason {

        /**
         * Constructs a new MoveFailReason.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IMoveFailReason);

        /**
         * Creates a new MoveFailReason instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveFailReason instance
         */
        public static create(properties?: ax_proto_msgs.IMoveFailReason): ax_proto_msgs.MoveFailReason;

        /**
         * Encodes the specified MoveFailReason message. Does not implicitly {@link ax_proto_msgs.MoveFailReason.verify|verify} messages.
         * @param message MoveFailReason message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IMoveFailReason, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoveFailReason message, length delimited. Does not implicitly {@link ax_proto_msgs.MoveFailReason.verify|verify} messages.
         * @param message MoveFailReason message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IMoveFailReason, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveFailReason message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveFailReason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MoveFailReason;

        /**
         * Decodes a MoveFailReason message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveFailReason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MoveFailReason;

        /**
         * Verifies a MoveFailReason message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoveFailReason message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveFailReason
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MoveFailReason;

        /**
         * Creates a plain object from a MoveFailReason message. Also converts values to other types if specified.
         * @param message MoveFailReason
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.MoveFailReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoveFailReason to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoveFailReason
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MoveFailReason {

        /** Type enum. */
        enum Type {
            NONE = 0,
            UNKNOWN = 1,
            GET_MAP_FAILED = 2,
            STARTING_POINT_OUT_OF_MAP = 3,
            ENDING_POINT_OUT_OF_MAP = 4,
            STARTING_POINT_NOT_IN_GROUND = 5,
            ENDING_POINT_NOT_IN_GROUND = 6,
            STARTING_EQUAL_ENDING = 7,
            CALCULATE_GLOBAL_PATH_EXTENDED_DATA_ERROR = 8,
            CALCULATION_FAILED = 9,
            CALCULATION_TIMEOUT = 10,
            NO_GLOBAL_PATH = 11,
            NOT_GRAB_START_INDEX_ON_GLOBAL_PATH = 12,
            NOT_GRAB_END_INDEX_ON_GLOBAL_PATH = 13,
            PLANNING_TIMEOUT = 14,
            MOVE_TIMEOUT = 15,
            CONTROL_COSTMAP_ERROR = 16,
            POWER_CABLE_CONNECTED = 17,
            ROTATE_TIMEOUT = 18,
            ENDING_POINT_NOT_SIGNIFICANTLY_CHANGED = 19,
            ENDING_POINT_APPROACHING = 20,
            ENDING_POINT_NOT_SPECIFIED = 21,
            CHARGE_RETRY_COUNT_EXCEEDED = 100,
            CHARGE_DOCK_DETECTION_ERROR = 101,
            CHARGE_DOCK_SIGNAL_ERROR = 102,
            INVALID_CHARGE_DOCK = 103,
            ALREADY_IN_CHARGING = 104,
            NO_CHARGE_CURRENT = 105,
            INVALID_CABINET_POS = 200,
            CABINET_DETECTION_ERROR = 201,
            NO_DOCK_WITH_CONVEYER = 202,
            NO_APPROACH_CONVEYER = 203,
            ELEVATOR_POINT_OCCUPIED = 300,
            ELEVATOR_CLOSED = 301,
            ELEVATOR_POINT_OBSCURED_TIMEOUT = 302,
            ELEVATOR_POINT_OCCUPANCY_DETECTION_TIMEOUT = 303,
            ELEVATOR_ENTER_PROGRESS_UPDATE_TIMEOUT = 304,
            INVALID_TRACK_POINTS = 400,
            TOO_FAR_FROM_START_OF_TRACK = 401,
            INVALID_RACK_DETECTION_POS = 500,
            RACK_DETECTION_ERROR = 501,
            RACK_RETRY_COUNT_EXCEEDED = 502,
            UNLOAD_POINT_OCCUPIED = 503,
            UNLOAD_POINT_UNREACHABLE = 504,
            RACK_MOVED = 505,
            JACK_IN_UP_STATE = 506,
            INVALID_RACK_AREA_ID = 507,
            INVALID_RACK_AREA = 508,
            UNKNOWN_RACK_SPACE_STATE = 509,
            NO_RACK_IN_RACK_AREA = 510,
            ALIGN_FAILED_IN_RACK_AREA = 511,
            NO_FREE_SPACE_IN_RACK_AREA = 512,
            FAILED_TO_UNLOAD_IN_RACK_AREA = 513,
            RACK_SUBTYPE_INCOMPATIBLE = 514,
            TOWING_HOOK_IN_LOCKED_STATE = 515,
            CARGO_READY_LIMIT_SWITCH_FAULT = 516,
            CARGO_READY_NOT_TRIGGERED = 517,
            FOLLOW_FAILED = 600,
            FOLLOW_PATH_TOO_CIRCUITOUS = 601,
            POI_DETECTION_ERROR = 700,
            POI_UNREACHABLE = 701,
            BARCODE_DETECTION_ERROR = 702,
            PLATFORM_ALERT_ERROR = 1000,
            SERVICE_CALL_ERROR = 1001,
            INTERNAL_ERROR = 1002,
            MAP_CHANGED = 1003,
            MOVE_ACTION_TYPE_DEPRECATED = 1004,
            CONFIGURATION_ERROR = 1005
        }
    }

    /** Properties of a MoveState. */
    interface IMoveState {
    }

    /** Represents a MoveState. */
    class MoveState implements IMoveState {

        /**
         * Constructs a new MoveState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IMoveState);

        /**
         * Creates a new MoveState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveState instance
         */
        public static create(properties?: ax_proto_msgs.IMoveState): ax_proto_msgs.MoveState;

        /**
         * Encodes the specified MoveState message. Does not implicitly {@link ax_proto_msgs.MoveState.verify|verify} messages.
         * @param message MoveState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoveState message, length delimited. Does not implicitly {@link ax_proto_msgs.MoveState.verify|verify} messages.
         * @param message MoveState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.MoveState;

        /**
         * Decodes a MoveState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.MoveState;

        /**
         * Verifies a MoveState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoveState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveState
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.MoveState;

        /**
         * Creates a plain object from a MoveState message. Also converts values to other types if specified.
         * @param message MoveState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.MoveState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoveState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoveState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MoveState {

        /** Type enum. */
        enum Type {
            NONE = 0,
            IDLE = 1,
            MOVING = 2,
            OSCILLATING = 3,
            SUCCEEDED = 4,
            FAILED = 5,
            CANCELLED = 6
        }
    }

    /** Properties of a PlanningState. */
    interface IPlanningState {

        /** PlanningState action_id */
        action_id?: (number|null);

        /** PlanningState action_type */
        action_type?: (number|null);

        /** PlanningState move_state */
        move_state?: (ax_proto_msgs.MoveState.Type|null);

        /** PlanningState fail_reason */
        fail_reason?: (ax_proto_msgs.MoveFailReason.Type|null);

        /** PlanningState fail_reasons */
        fail_reasons?: (ax_proto_msgs.MoveFailReason.Type[]|null);

        /** PlanningState remaining_distance */
        remaining_distance?: (number|null);

        /** PlanningState given_route_passed_point_count */
        given_route_passed_point_count?: (number|null);

        /** PlanningState target_poses */
        target_poses?: (ax_proto_msgs.IPose[]|null);

        /** PlanningState move_intent */
        move_intent?: (ax_proto_msgs.PlanningState.Intent.Type|null);

        /** PlanningState intent_target_pose */
        intent_target_pose?: (ax_proto_msgs.IPose|null);

        /** PlanningState charger_pose */
        charger_pose?: (ax_proto_msgs.IPose|null);

        /** PlanningState stuck_state */
        stuck_state?: (ax_proto_msgs.PlanningState.StuckState.Type|null);

        /** PlanningState progress_stuck_reason */
        progress_stuck_reason?: (ax_proto_msgs.PlanningState.StuckReason.Type|null);

        /** PlanningState map_uid */
        map_uid?: (string|null);

        /** PlanningState in_elevator */
        in_elevator?: (boolean|null);

        /** PlanningState in_slope_area */
        in_slope_area?: (boolean|null);

        /** PlanningState in_lidar_deceitful_area */
        in_lidar_deceitful_area?: (boolean|null);

        /** PlanningState in_gps_unreliable_zone */
        in_gps_unreliable_zone?: (boolean|null);

        /** PlanningState in_dynamic_area */
        in_dynamic_area?: (boolean|null);

        /** PlanningState viewport_blocked */
        viewport_blocked?: (boolean|null);

        /** PlanningState going_back_to_charger */
        going_back_to_charger?: (boolean|null);

        /** PlanningState aligning_with_rack */
        aligning_with_rack?: (boolean|null);

        /** PlanningState unloading_rack */
        unloading_rack?: (boolean|null);

        /** PlanningState docking_with_poi */
        docking_with_poi?: (boolean|null);

        /** PlanningState is_waiting_for_dest */
        is_waiting_for_dest?: (boolean|null);

        /** PlanningState undocking_charger_or_rack */
        undocking_charger_or_rack?: (boolean|null);

        /** PlanningState waiting_for_charge */
        waiting_for_charge?: (boolean|null);

        /** PlanningState expected_cargo_action */
        expected_cargo_action?: (ax_proto_msgs.PlanningState.CargoAction.Type|null);

        /** PlanningState obstacle_ignored */
        obstacle_ignored?: (boolean|null);
    }

    /** Represents a PlanningState. */
    class PlanningState implements IPlanningState {

        /**
         * Constructs a new PlanningState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IPlanningState);

        /** PlanningState action_id. */
        public action_id: number;

        /** PlanningState action_type. */
        public action_type: number;

        /** PlanningState move_state. */
        public move_state: ax_proto_msgs.MoveState.Type;

        /** PlanningState fail_reason. */
        public fail_reason: ax_proto_msgs.MoveFailReason.Type;

        /** PlanningState fail_reasons. */
        public fail_reasons: ax_proto_msgs.MoveFailReason.Type[];

        /** PlanningState remaining_distance. */
        public remaining_distance: number;

        /** PlanningState given_route_passed_point_count. */
        public given_route_passed_point_count: number;

        /** PlanningState target_poses. */
        public target_poses: ax_proto_msgs.IPose[];

        /** PlanningState move_intent. */
        public move_intent: ax_proto_msgs.PlanningState.Intent.Type;

        /** PlanningState intent_target_pose. */
        public intent_target_pose?: (ax_proto_msgs.IPose|null);

        /** PlanningState charger_pose. */
        public charger_pose?: (ax_proto_msgs.IPose|null);

        /** PlanningState stuck_state. */
        public stuck_state: ax_proto_msgs.PlanningState.StuckState.Type;

        /** PlanningState progress_stuck_reason. */
        public progress_stuck_reason: ax_proto_msgs.PlanningState.StuckReason.Type;

        /** PlanningState map_uid. */
        public map_uid: string;

        /** PlanningState in_elevator. */
        public in_elevator: boolean;

        /** PlanningState in_slope_area. */
        public in_slope_area: boolean;

        /** PlanningState in_lidar_deceitful_area. */
        public in_lidar_deceitful_area: boolean;

        /** PlanningState in_gps_unreliable_zone. */
        public in_gps_unreliable_zone: boolean;

        /** PlanningState in_dynamic_area. */
        public in_dynamic_area: boolean;

        /** PlanningState viewport_blocked. */
        public viewport_blocked: boolean;

        /** PlanningState going_back_to_charger. */
        public going_back_to_charger: boolean;

        /** PlanningState aligning_with_rack. */
        public aligning_with_rack: boolean;

        /** PlanningState unloading_rack. */
        public unloading_rack: boolean;

        /** PlanningState docking_with_poi. */
        public docking_with_poi: boolean;

        /** PlanningState is_waiting_for_dest. */
        public is_waiting_for_dest: boolean;

        /** PlanningState undocking_charger_or_rack. */
        public undocking_charger_or_rack: boolean;

        /** PlanningState waiting_for_charge. */
        public waiting_for_charge: boolean;

        /** PlanningState expected_cargo_action. */
        public expected_cargo_action: ax_proto_msgs.PlanningState.CargoAction.Type;

        /** PlanningState obstacle_ignored. */
        public obstacle_ignored: boolean;

        /**
         * Creates a new PlanningState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlanningState instance
         */
        public static create(properties?: ax_proto_msgs.IPlanningState): ax_proto_msgs.PlanningState;

        /**
         * Encodes the specified PlanningState message. Does not implicitly {@link ax_proto_msgs.PlanningState.verify|verify} messages.
         * @param message PlanningState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IPlanningState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlanningState message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.verify|verify} messages.
         * @param message PlanningState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IPlanningState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlanningState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlanningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState;

        /**
         * Decodes a PlanningState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlanningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState;

        /**
         * Verifies a PlanningState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlanningState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlanningState
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState;

        /**
         * Creates a plain object from a PlanningState message. Also converts values to other types if specified.
         * @param message PlanningState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.PlanningState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlanningState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlanningState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PlanningState {

        /** Properties of a FailReason. */
        interface IFailReason {
        }

        /** Represents a FailReason. */
        class FailReason implements IFailReason {

            /**
             * Constructs a new FailReason.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.PlanningState.IFailReason);

            /**
             * Creates a new FailReason instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FailReason instance
             */
            public static create(properties?: ax_proto_msgs.PlanningState.IFailReason): ax_proto_msgs.PlanningState.FailReason;

            /**
             * Encodes the specified FailReason message. Does not implicitly {@link ax_proto_msgs.PlanningState.FailReason.verify|verify} messages.
             * @param message FailReason message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.PlanningState.IFailReason, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FailReason message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.FailReason.verify|verify} messages.
             * @param message FailReason message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.PlanningState.IFailReason, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FailReason message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FailReason
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState.FailReason;

            /**
             * Decodes a FailReason message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FailReason
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState.FailReason;

            /**
             * Verifies a FailReason message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FailReason message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FailReason
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState.FailReason;

            /**
             * Creates a plain object from a FailReason message. Also converts values to other types if specified.
             * @param message FailReason
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.PlanningState.FailReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FailReason to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FailReason
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FailReason {

            /** Type enum. */
            enum Type {
                NONE = 0,
                CHARGE_RETRY_COUNT_EXCEEDED = 100,
                CHARGER_DECTECTION_ERROR = 101
            }
        }

        /** Properties of an Intent. */
        interface IIntent {
        }

        /** Represents an Intent. */
        class Intent implements IIntent {

            /**
             * Constructs a new Intent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.PlanningState.IIntent);

            /**
             * Creates a new Intent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Intent instance
             */
            public static create(properties?: ax_proto_msgs.PlanningState.IIntent): ax_proto_msgs.PlanningState.Intent;

            /**
             * Encodes the specified Intent message. Does not implicitly {@link ax_proto_msgs.PlanningState.Intent.verify|verify} messages.
             * @param message Intent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.PlanningState.IIntent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Intent message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.Intent.verify|verify} messages.
             * @param message Intent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.PlanningState.IIntent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Intent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Intent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState.Intent;

            /**
             * Decodes an Intent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Intent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState.Intent;

            /**
             * Verifies an Intent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Intent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Intent
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState.Intent;

            /**
             * Creates a plain object from an Intent message. Also converts values to other types if specified.
             * @param message Intent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.PlanningState.Intent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Intent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Intent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Intent {

            /** Type enum. */
            enum Type {
                NONE = 0,
                GOING_BACK_TO_CHARGER = 1,
                DOCK_WITH_CONVEYER = 2
            }
        }

        /** Properties of a StuckState. */
        interface IStuckState {
        }

        /** Represents a StuckState. */
        class StuckState implements IStuckState {

            /**
             * Constructs a new StuckState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.PlanningState.IStuckState);

            /**
             * Creates a new StuckState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StuckState instance
             */
            public static create(properties?: ax_proto_msgs.PlanningState.IStuckState): ax_proto_msgs.PlanningState.StuckState;

            /**
             * Encodes the specified StuckState message. Does not implicitly {@link ax_proto_msgs.PlanningState.StuckState.verify|verify} messages.
             * @param message StuckState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.PlanningState.IStuckState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StuckState message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.StuckState.verify|verify} messages.
             * @param message StuckState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.PlanningState.IStuckState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StuckState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StuckState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState.StuckState;

            /**
             * Decodes a StuckState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StuckState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState.StuckState;

            /**
             * Verifies a StuckState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StuckState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StuckState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState.StuckState;

            /**
             * Creates a plain object from a StuckState message. Also converts values to other types if specified.
             * @param message StuckState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.PlanningState.StuckState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StuckState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StuckState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StuckState {

            /** Type enum. */
            enum Type {
                NONE = 0,
                MOVE_STUCKED = 1,
                TARGET_SPIN_STUCKED = 2
            }
        }

        /** Properties of a StuckReason. */
        interface IStuckReason {
        }

        /** Represents a StuckReason. */
        class StuckReason implements IStuckReason {

            /**
             * Constructs a new StuckReason.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.PlanningState.IStuckReason);

            /**
             * Creates a new StuckReason instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StuckReason instance
             */
            public static create(properties?: ax_proto_msgs.PlanningState.IStuckReason): ax_proto_msgs.PlanningState.StuckReason;

            /**
             * Encodes the specified StuckReason message. Does not implicitly {@link ax_proto_msgs.PlanningState.StuckReason.verify|verify} messages.
             * @param message StuckReason message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.PlanningState.IStuckReason, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StuckReason message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.StuckReason.verify|verify} messages.
             * @param message StuckReason message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.PlanningState.IStuckReason, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StuckReason message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StuckReason
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState.StuckReason;

            /**
             * Decodes a StuckReason message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StuckReason
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState.StuckReason;

            /**
             * Verifies a StuckReason message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StuckReason message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StuckReason
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState.StuckReason;

            /**
             * Creates a plain object from a StuckReason message. Also converts values to other types if specified.
             * @param message StuckReason
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.PlanningState.StuckReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StuckReason to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StuckReason
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StuckReason {

            /** Type enum. */
            enum Type {
                NONE = 0,
                VIRTUAL_WALL = 1101,
                IMPASSABLE_AREA = 1102,
                EMERGENCY_BUTTON = 1103,
                NOT_IN_AUTO_MODE = 1104,
                POSITION_RELIABLE = 1105,
                FATAL_ALERT = 1106,
                OTHER = 1199
            }
        }

        /** Properties of a CargoAction. */
        interface ICargoAction {
        }

        /** Represents a CargoAction. */
        class CargoAction implements ICargoAction {

            /**
             * Constructs a new CargoAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.PlanningState.ICargoAction);

            /**
             * Creates a new CargoAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CargoAction instance
             */
            public static create(properties?: ax_proto_msgs.PlanningState.ICargoAction): ax_proto_msgs.PlanningState.CargoAction;

            /**
             * Encodes the specified CargoAction message. Does not implicitly {@link ax_proto_msgs.PlanningState.CargoAction.verify|verify} messages.
             * @param message CargoAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.PlanningState.ICargoAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CargoAction message, length delimited. Does not implicitly {@link ax_proto_msgs.PlanningState.CargoAction.verify|verify} messages.
             * @param message CargoAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.PlanningState.ICargoAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CargoAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CargoAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PlanningState.CargoAction;

            /**
             * Decodes a CargoAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CargoAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PlanningState.CargoAction;

            /**
             * Verifies a CargoAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CargoAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CargoAction
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PlanningState.CargoAction;

            /**
             * Creates a plain object from a CargoAction message. Also converts values to other types if specified.
             * @param message CargoAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.PlanningState.CargoAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CargoAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CargoAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CargoAction {

            /** Type enum. */
            enum Type {
                NONE = 0,
                LOAD = 1,
                UNLOAD = 2
            }
        }
    }

    /** Properties of a PointCloud. */
    interface IPointCloud {

        /** PointCloud header */
        header?: (ax_proto_msgs.IHeader|null);

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

        /** PointCloud probabilities */
        probabilities?: (Uint8Array|null);

        /** PointCloud oris */
        oris?: (Uint8Array|null);

        /** PointCloud speeds */
        speeds?: (Uint8Array|null);
    }

    /** Represents a PointCloud. */
    class PointCloud implements IPointCloud {

        /**
         * Constructs a new PointCloud.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IPointCloud);

        /** PointCloud header. */
        public header?: (ax_proto_msgs.IHeader|null);

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

        /** PointCloud probabilities. */
        public probabilities: Uint8Array;

        /** PointCloud oris. */
        public oris: Uint8Array;

        /** PointCloud speeds. */
        public speeds: Uint8Array;

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointCloud instance
         */
        public static create(properties?: ax_proto_msgs.IPointCloud): ax_proto_msgs.PointCloud;

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link ax_proto_msgs.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link ax_proto_msgs.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PointCloud;

        /**
         * Decodes a PointCloud message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PointCloud;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PointCloud;

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @param message PointCloud
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.PointCloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        racks?: (ax_proto_msgs.RackStates.IRackState[]|null);
    }

    /** Represents a RackStates. */
    class RackStates implements IRackStates {

        /**
         * Constructs a new RackStates.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IRackStates);

        /** RackStates map_uid. */
        public map_uid: string;

        /** RackStates racks. */
        public racks: ax_proto_msgs.RackStates.IRackState[];

        /**
         * Creates a new RackStates instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RackStates instance
         */
        public static create(properties?: ax_proto_msgs.IRackStates): ax_proto_msgs.RackStates;

        /**
         * Encodes the specified RackStates message. Does not implicitly {@link ax_proto_msgs.RackStates.verify|verify} messages.
         * @param message RackStates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IRackStates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RackStates message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.verify|verify} messages.
         * @param message RackStates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IRackStates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RackStates message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.RackStates;

        /**
         * Decodes a RackStates message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RackStates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.RackStates;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.RackStates;

        /**
         * Creates a plain object from a RackStates message. Also converts values to other types if specified.
         * @param message RackStates
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.RackStates, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            state?: (ax_proto_msgs.RackStates.RackLevelState.SpaceState|null);
        }

        /** Represents a RackLevelState. */
        class RackLevelState implements IRackLevelState {

            /**
             * Constructs a new RackLevelState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.RackStates.IRackLevelState);

            /** RackLevelState timestamp_ns. */
            public timestamp_ns: (number|Long);

            /** RackLevelState level. */
            public level: number;

            /** RackLevelState state. */
            public state: ax_proto_msgs.RackStates.RackLevelState.SpaceState;

            /**
             * Creates a new RackLevelState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RackLevelState instance
             */
            public static create(properties?: ax_proto_msgs.RackStates.IRackLevelState): ax_proto_msgs.RackStates.RackLevelState;

            /**
             * Encodes the specified RackLevelState message. Does not implicitly {@link ax_proto_msgs.RackStates.RackLevelState.verify|verify} messages.
             * @param message RackLevelState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.RackStates.IRackLevelState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RackLevelState message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.RackLevelState.verify|verify} messages.
             * @param message RackLevelState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.RackStates.IRackLevelState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RackLevelState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.RackStates.RackLevelState;

            /**
             * Decodes a RackLevelState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RackLevelState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.RackStates.RackLevelState;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.RackStates.RackLevelState;

            /**
             * Creates a plain object from a RackLevelState message. Also converts values to other types if specified.
             * @param message RackLevelState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.RackStates.RackLevelState, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            levels?: (ax_proto_msgs.RackStates.IRackLevelState[]|null);
        }

        /** Represents a RackState. */
        class RackState implements IRackState {

            /**
             * Constructs a new RackState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.RackStates.IRackState);

            /** RackState poi_id. */
            public poi_id: string;

            /** RackState levels. */
            public levels: ax_proto_msgs.RackStates.IRackLevelState[];

            /**
             * Creates a new RackState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RackState instance
             */
            public static create(properties?: ax_proto_msgs.RackStates.IRackState): ax_proto_msgs.RackStates.RackState;

            /**
             * Encodes the specified RackState message. Does not implicitly {@link ax_proto_msgs.RackStates.RackState.verify|verify} messages.
             * @param message RackState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.RackStates.IRackState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RackState message, length delimited. Does not implicitly {@link ax_proto_msgs.RackStates.RackState.verify|verify} messages.
             * @param message RackState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.RackStates.IRackState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RackState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.RackStates.RackState;

            /**
             * Decodes a RackState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RackState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.RackStates.RackState;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.RackStates.RackState;

            /**
             * Creates a plain object from a RackState message. Also converts values to other types if specified.
             * @param message RackState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.RackStates.RackState, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        type?: (ax_proto_msgs.RosMessageWrapper.MessageType|null);

        /** RosMessageWrapper point_cloud */
        point_cloud?: (ax_proto_msgs.IPointCloud|null);

        /** RosMessageWrapper mast_state */
        mast_state?: (ax_proto_msgs.IMastState|null);

        /** RosMessageWrapper submap_list */
        submap_list?: (ax_proto_msgs.slam.ISubmapList|null);

        /** RosMessageWrapper rack_states */
        rack_states?: (ax_proto_msgs.IRackStates|null);

        /** RosMessageWrapper towing_state */
        towing_state?: (ax_proto_msgs.ITowingState|null);

        /** RosMessageWrapper mobile_network_state */
        mobile_network_state?: (ax_proto_msgs.IMobileNetworkState|null);

        /** RosMessageWrapper video_data */
        video_data?: (ax_proto_msgs.IVideoData|null);

        /** RosMessageWrapper depth_image */
        depth_image?: (ax_proto_msgs.IDepthImage|null);

        /** RosMessageWrapper dwa_candidate_path_set */
        dwa_candidate_path_set?: (ax_proto_msgs.IDwaCandidatePathSet|null);

        /** RosMessageWrapper slam_state */
        slam_state?: (ax_proto_msgs.ISlamState|null);

        /** RosMessageWrapper planning_state */
        planning_state?: (ax_proto_msgs.IPlanningState|null);
    }

    /** Represents a RosMessageWrapper. */
    class RosMessageWrapper implements IRosMessageWrapper {

        /**
         * Constructs a new RosMessageWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IRosMessageWrapper);

        /** RosMessageWrapper type. */
        public type: ax_proto_msgs.RosMessageWrapper.MessageType;

        /** RosMessageWrapper point_cloud. */
        public point_cloud?: (ax_proto_msgs.IPointCloud|null);

        /** RosMessageWrapper mast_state. */
        public mast_state?: (ax_proto_msgs.IMastState|null);

        /** RosMessageWrapper submap_list. */
        public submap_list?: (ax_proto_msgs.slam.ISubmapList|null);

        /** RosMessageWrapper rack_states. */
        public rack_states?: (ax_proto_msgs.IRackStates|null);

        /** RosMessageWrapper towing_state. */
        public towing_state?: (ax_proto_msgs.ITowingState|null);

        /** RosMessageWrapper mobile_network_state. */
        public mobile_network_state?: (ax_proto_msgs.IMobileNetworkState|null);

        /** RosMessageWrapper video_data. */
        public video_data?: (ax_proto_msgs.IVideoData|null);

        /** RosMessageWrapper depth_image. */
        public depth_image?: (ax_proto_msgs.IDepthImage|null);

        /** RosMessageWrapper dwa_candidate_path_set. */
        public dwa_candidate_path_set?: (ax_proto_msgs.IDwaCandidatePathSet|null);

        /** RosMessageWrapper slam_state. */
        public slam_state?: (ax_proto_msgs.ISlamState|null);

        /** RosMessageWrapper planning_state. */
        public planning_state?: (ax_proto_msgs.IPlanningState|null);

        /** RosMessageWrapper payload. */
        public payload?: ("point_cloud"|"mast_state"|"submap_list"|"rack_states"|"towing_state"|"mobile_network_state"|"video_data"|"depth_image"|"dwa_candidate_path_set"|"slam_state"|"planning_state");

        /**
         * Creates a new RosMessageWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RosMessageWrapper instance
         */
        public static create(properties?: ax_proto_msgs.IRosMessageWrapper): ax_proto_msgs.RosMessageWrapper;

        /**
         * Encodes the specified RosMessageWrapper message. Does not implicitly {@link ax_proto_msgs.RosMessageWrapper.verify|verify} messages.
         * @param message RosMessageWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IRosMessageWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RosMessageWrapper message, length delimited. Does not implicitly {@link ax_proto_msgs.RosMessageWrapper.verify|verify} messages.
         * @param message RosMessageWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IRosMessageWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.RosMessageWrapper;

        /**
         * Decodes a RosMessageWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RosMessageWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.RosMessageWrapper;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.RosMessageWrapper;

        /**
         * Creates a plain object from a RosMessageWrapper message. Also converts values to other types if specified.
         * @param message RosMessageWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.RosMessageWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            TOWING_STATE = 5,
            MOBILE_NETWORK_STATE = 6,
            VIDEO_DATA = 7,
            DEPTH_IMAGE = 8,
            DWA_CANDIDATE_PATH_SET = 9,
            SLAM_STATE = 10,
            PLANNING_STATE = 11
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
            pose?: (ax_proto_msgs.IPose|null);

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
            constructor(properties?: ax_proto_msgs.slam.ISubmapEntry);

            /** SubmapEntry trajectory_id. */
            public trajectory_id: number;

            /** SubmapEntry submap_index. */
            public submap_index: number;

            /** SubmapEntry submap_version. */
            public submap_version: number;

            /** SubmapEntry pose. */
            public pose?: (ax_proto_msgs.IPose|null);

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
            public static create(properties?: ax_proto_msgs.slam.ISubmapEntry): ax_proto_msgs.slam.SubmapEntry;

            /**
             * Encodes the specified SubmapEntry message. Does not implicitly {@link ax_proto_msgs.slam.SubmapEntry.verify|verify} messages.
             * @param message SubmapEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapEntry message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapEntry.verify|verify} messages.
             * @param message SubmapEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.ISubmapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.SubmapEntry;

            /**
             * Decodes a SubmapEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.SubmapEntry;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.SubmapEntry;

            /**
             * Creates a plain object from a SubmapEntry message. Also converts values to other types if specified.
             * @param message SubmapEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.SubmapEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            slam_state?: (ax_proto_msgs.slam.SubmapList.SlamState|null);

            /** SubmapList uuid */
            uuid?: (string|null);

            /** SubmapList submaps */
            submaps?: (ax_proto_msgs.slam.ISubmapEntry[]|null);
        }

        /** Represents a SubmapList. */
        class SubmapList implements ISubmapList {

            /**
             * Constructs a new SubmapList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.slam.ISubmapList);

            /** SubmapList slam_state. */
            public slam_state: ax_proto_msgs.slam.SubmapList.SlamState;

            /** SubmapList uuid. */
            public uuid: string;

            /** SubmapList submaps. */
            public submaps: ax_proto_msgs.slam.ISubmapEntry[];

            /**
             * Creates a new SubmapList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapList instance
             */
            public static create(properties?: ax_proto_msgs.slam.ISubmapList): ax_proto_msgs.slam.SubmapList;

            /**
             * Encodes the specified SubmapList message. Does not implicitly {@link ax_proto_msgs.slam.SubmapList.verify|verify} messages.
             * @param message SubmapList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapList message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapList.verify|verify} messages.
             * @param message SubmapList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.ISubmapList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.SubmapList;

            /**
             * Decodes a SubmapList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.SubmapList;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.SubmapList;

            /**
             * Creates a plain object from a SubmapList message. Also converts values to other types if specified.
             * @param message SubmapList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.SubmapList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            status_code?: (ax_proto_msgs.slam.StatusCode|null);

            /** GetMapImageResponse status_message */
            status_message?: (string|null);
        }

        /** Represents a GetMapImageResponse. */
        class GetMapImageResponse implements IGetMapImageResponse {

            /**
             * Constructs a new GetMapImageResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.slam.IGetMapImageResponse);

            /** GetMapImageResponse origin_x. */
            public origin_x: number;

            /** GetMapImageResponse origin_y. */
            public origin_y: number;

            /** GetMapImageResponse resolution. */
            public resolution: number;

            /** GetMapImageResponse png_bytes. */
            public png_bytes: Uint8Array;

            /** GetMapImageResponse status_code. */
            public status_code: ax_proto_msgs.slam.StatusCode;

            /** GetMapImageResponse status_message. */
            public status_message: string;

            /**
             * Creates a new GetMapImageResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetMapImageResponse instance
             */
            public static create(properties?: ax_proto_msgs.slam.IGetMapImageResponse): ax_proto_msgs.slam.GetMapImageResponse;

            /**
             * Encodes the specified GetMapImageResponse message. Does not implicitly {@link ax_proto_msgs.slam.GetMapImageResponse.verify|verify} messages.
             * @param message GetMapImageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.IGetMapImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetMapImageResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.GetMapImageResponse.verify|verify} messages.
             * @param message GetMapImageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.IGetMapImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetMapImageResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.GetMapImageResponse;

            /**
             * Decodes a GetMapImageResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetMapImageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.GetMapImageResponse;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.GetMapImageResponse;

            /**
             * Creates a plain object from a GetMapImageResponse message. Also converts values to other types if specified.
             * @param message GetMapImageResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.GetMapImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            code?: (ax_proto_msgs.slam.StatusCode|null);

            /** StatusResponse message */
            message?: (string|null);
        }

        /** Represents a StatusResponse. */
        class StatusResponse implements IStatusResponse {

            /**
             * Constructs a new StatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.slam.IStatusResponse);

            /** StatusResponse code. */
            public code: ax_proto_msgs.slam.StatusCode;

            /** StatusResponse message. */
            public message: string;

            /**
             * Creates a new StatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusResponse instance
             */
            public static create(properties?: ax_proto_msgs.slam.IStatusResponse): ax_proto_msgs.slam.StatusResponse;

            /**
             * Encodes the specified StatusResponse message. Does not implicitly {@link ax_proto_msgs.slam.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.StatusResponse.verify|verify} messages.
             * @param message StatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.StatusResponse;

            /**
             * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.StatusResponse;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.StatusResponse;

            /**
             * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
             * @param message StatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            slice_pose?: (ax_proto_msgs.IPose|null);
        }

        /** Represents a SubmapTexture. */
        class SubmapTexture implements ISubmapTexture {

            /**
             * Constructs a new SubmapTexture.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.slam.ISubmapTexture);

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
            public slice_pose?: (ax_proto_msgs.IPose|null);

            /**
             * Creates a new SubmapTexture instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapTexture instance
             */
            public static create(properties?: ax_proto_msgs.slam.ISubmapTexture): ax_proto_msgs.slam.SubmapTexture;

            /**
             * Encodes the specified SubmapTexture message. Does not implicitly {@link ax_proto_msgs.slam.SubmapTexture.verify|verify} messages.
             * @param message SubmapTexture message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapTexture message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapTexture.verify|verify} messages.
             * @param message SubmapTexture message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.ISubmapTexture, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapTexture message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapTexture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.SubmapTexture;

            /**
             * Decodes a SubmapTexture message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapTexture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.SubmapTexture;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.SubmapTexture;

            /**
             * Creates a plain object from a SubmapTexture message. Also converts values to other types if specified.
             * @param message SubmapTexture
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.SubmapTexture, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            status?: (ax_proto_msgs.slam.IStatusResponse|null);

            /** SubmapQueryV2Response submap_version */
            submap_version?: (number|null);

            /** SubmapQueryV2Response textures */
            textures?: (ax_proto_msgs.slam.ISubmapTexture[]|null);
        }

        /** Represents a SubmapQueryV2Response. */
        class SubmapQueryV2Response implements ISubmapQueryV2Response {

            /**
             * Constructs a new SubmapQueryV2Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.slam.ISubmapQueryV2Response);

            /** SubmapQueryV2Response status. */
            public status?: (ax_proto_msgs.slam.IStatusResponse|null);

            /** SubmapQueryV2Response submap_version. */
            public submap_version: number;

            /** SubmapQueryV2Response textures. */
            public textures: ax_proto_msgs.slam.ISubmapTexture[];

            /**
             * Creates a new SubmapQueryV2Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmapQueryV2Response instance
             */
            public static create(properties?: ax_proto_msgs.slam.ISubmapQueryV2Response): ax_proto_msgs.slam.SubmapQueryV2Response;

            /**
             * Encodes the specified SubmapQueryV2Response message. Does not implicitly {@link ax_proto_msgs.slam.SubmapQueryV2Response.verify|verify} messages.
             * @param message SubmapQueryV2Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.slam.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmapQueryV2Response message, length delimited. Does not implicitly {@link ax_proto_msgs.slam.SubmapQueryV2Response.verify|verify} messages.
             * @param message SubmapQueryV2Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.slam.ISubmapQueryV2Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmapQueryV2Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmapQueryV2Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.slam.SubmapQueryV2Response;

            /**
             * Decodes a SubmapQueryV2Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmapQueryV2Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.slam.SubmapQueryV2Response;

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
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.slam.SubmapQueryV2Response;

            /**
             * Creates a plain object from a SubmapQueryV2Response message. Also converts values to other types if specified.
             * @param message SubmapQueryV2Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.slam.SubmapQueryV2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        hook_state?: (ax_proto_msgs.TowingState.HookState|null);

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
        constructor(properties?: ax_proto_msgs.ITowingState);

        /** TowingState action_progress. */
        public action_progress: number;

        /** TowingState hook_state. */
        public hook_state: ax_proto_msgs.TowingState.HookState;

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
        public static create(properties?: ax_proto_msgs.ITowingState): ax_proto_msgs.TowingState;

        /**
         * Encodes the specified TowingState message. Does not implicitly {@link ax_proto_msgs.TowingState.verify|verify} messages.
         * @param message TowingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.ITowingState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TowingState message, length delimited. Does not implicitly {@link ax_proto_msgs.TowingState.verify|verify} messages.
         * @param message TowingState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.ITowingState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TowingState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.TowingState;

        /**
         * Decodes a TowingState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TowingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.TowingState;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.TowingState;

        /**
         * Creates a plain object from a TowingState message. Also converts values to other types if specified.
         * @param message TowingState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.TowingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a VideoData. */
    interface IVideoData {

        /** VideoData width */
        width?: (number|null);

        /** VideoData height */
        height?: (number|null);

        /** VideoData video_format */
        video_format?: (ax_proto_msgs.VideoData.VideoFormat.Type|null);

        /** VideoData data */
        data?: (Uint8Array|null);
    }

    /** Represents a VideoData. */
    class VideoData implements IVideoData {

        /**
         * Constructs a new VideoData.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.IVideoData);

        /** VideoData width. */
        public width: number;

        /** VideoData height. */
        public height: number;

        /** VideoData video_format. */
        public video_format: ax_proto_msgs.VideoData.VideoFormat.Type;

        /** VideoData data. */
        public data: Uint8Array;

        /**
         * Creates a new VideoData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoData instance
         */
        public static create(properties?: ax_proto_msgs.IVideoData): ax_proto_msgs.VideoData;

        /**
         * Encodes the specified VideoData message. Does not implicitly {@link ax_proto_msgs.VideoData.verify|verify} messages.
         * @param message VideoData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IVideoData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoData message, length delimited. Does not implicitly {@link ax_proto_msgs.VideoData.verify|verify} messages.
         * @param message VideoData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IVideoData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.VideoData;

        /**
         * Decodes a VideoData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.VideoData;

        /**
         * Verifies a VideoData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoData
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.VideoData;

        /**
         * Creates a plain object from a VideoData message. Also converts values to other types if specified.
         * @param message VideoData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.VideoData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace VideoData {

        /** Properties of a VideoFormat. */
        interface IVideoFormat {
        }

        /** Represents a VideoFormat. */
        class VideoFormat implements IVideoFormat {

            /**
             * Constructs a new VideoFormat.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.VideoData.IVideoFormat);

            /**
             * Creates a new VideoFormat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VideoFormat instance
             */
            public static create(properties?: ax_proto_msgs.VideoData.IVideoFormat): ax_proto_msgs.VideoData.VideoFormat;

            /**
             * Encodes the specified VideoFormat message. Does not implicitly {@link ax_proto_msgs.VideoData.VideoFormat.verify|verify} messages.
             * @param message VideoFormat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.VideoData.IVideoFormat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VideoFormat message, length delimited. Does not implicitly {@link ax_proto_msgs.VideoData.VideoFormat.verify|verify} messages.
             * @param message VideoFormat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.VideoData.IVideoFormat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VideoFormat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VideoFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.VideoData.VideoFormat;

            /**
             * Decodes a VideoFormat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VideoFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.VideoData.VideoFormat;

            /**
             * Verifies a VideoFormat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VideoFormat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VideoFormat
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.VideoData.VideoFormat;

            /**
             * Creates a plain object from a VideoFormat message. Also converts values to other types if specified.
             * @param message VideoFormat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.VideoData.VideoFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VideoFormat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VideoFormat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace VideoFormat {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                H264 = 1
            }
        }
    }

    /** Properties of a SlamState. */
    interface ISlamState {

        /** SlamState state */
        state?: (ax_proto_msgs.SlamState.State.Type|null);

        /** SlamState nav_sat_state */
        nav_sat_state?: (ax_proto_msgs.SlamState.NavSatState.Type|null);

        /** SlamState reliable */
        reliable?: (boolean|null);

        /** SlamState position_quality */
        position_quality?: (ax_proto_msgs.SlamState.PositionQuality.Type|null);

        /** SlamState relocating */
        relocating?: (boolean|null);

        /** SlamState wheel_slipping */
        wheel_slipping?: (boolean|null);

        /** SlamState wheel_major_slipping */
        wheel_major_slipping?: (boolean|null);

        /** SlamState move_cautiously */
        move_cautiously?: (boolean|null);

        /** SlamState uncertainty_radius */
        uncertainty_radius?: (number|null);

        /** SlamState search_window_radius */
        search_window_radius?: (number|null);

        /** SlamState position_loss_progress */
        position_loss_progress?: (number|null);

        /** SlamState cov_major_axis_length */
        cov_major_axis_length?: (number|null);

        /** SlamState dynamic_translation_weight */
        dynamic_translation_weight?: (number|null);

        /** SlamState lidar_reliable */
        lidar_reliable?: (boolean|null);

        /** SlamState inter_constraint_count */
        inter_constraint_count?: (number|null);

        /** SlamState good_constraint_count */
        good_constraint_count?: (number|null);

        /** SlamState submap_count */
        submap_count?: (number|null);

        /** SlamState latest_trajectory_id */
        latest_trajectory_id?: (number|null);

        /** SlamState latest_submap_index */
        latest_submap_index?: (number|null);

        /** SlamState lidar_matched */
        lidar_matched?: (boolean|null);

        /** SlamState lidar_matching_score */
        lidar_matching_score?: (number|null);

        /** SlamState last_pose_update_time_nsec */
        last_pose_update_time_nsec?: (number|Long|null);
    }

    /** Represents a SlamState. */
    class SlamState implements ISlamState {

        /**
         * Constructs a new SlamState.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.ISlamState);

        /** SlamState state. */
        public state: ax_proto_msgs.SlamState.State.Type;

        /** SlamState nav_sat_state. */
        public nav_sat_state: ax_proto_msgs.SlamState.NavSatState.Type;

        /** SlamState reliable. */
        public reliable: boolean;

        /** SlamState position_quality. */
        public position_quality: ax_proto_msgs.SlamState.PositionQuality.Type;

        /** SlamState relocating. */
        public relocating: boolean;

        /** SlamState wheel_slipping. */
        public wheel_slipping: boolean;

        /** SlamState wheel_major_slipping. */
        public wheel_major_slipping: boolean;

        /** SlamState move_cautiously. */
        public move_cautiously: boolean;

        /** SlamState uncertainty_radius. */
        public uncertainty_radius: number;

        /** SlamState search_window_radius. */
        public search_window_radius: number;

        /** SlamState position_loss_progress. */
        public position_loss_progress: number;

        /** SlamState cov_major_axis_length. */
        public cov_major_axis_length: number;

        /** SlamState dynamic_translation_weight. */
        public dynamic_translation_weight: number;

        /** SlamState lidar_reliable. */
        public lidar_reliable: boolean;

        /** SlamState inter_constraint_count. */
        public inter_constraint_count: number;

        /** SlamState good_constraint_count. */
        public good_constraint_count: number;

        /** SlamState submap_count. */
        public submap_count: number;

        /** SlamState latest_trajectory_id. */
        public latest_trajectory_id: number;

        /** SlamState latest_submap_index. */
        public latest_submap_index: number;

        /** SlamState lidar_matched. */
        public lidar_matched: boolean;

        /** SlamState lidar_matching_score. */
        public lidar_matching_score: number;

        /** SlamState last_pose_update_time_nsec. */
        public last_pose_update_time_nsec: (number|Long);

        /**
         * Creates a new SlamState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlamState instance
         */
        public static create(properties?: ax_proto_msgs.ISlamState): ax_proto_msgs.SlamState;

        /**
         * Encodes the specified SlamState message. Does not implicitly {@link ax_proto_msgs.SlamState.verify|verify} messages.
         * @param message SlamState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.ISlamState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlamState message, length delimited. Does not implicitly {@link ax_proto_msgs.SlamState.verify|verify} messages.
         * @param message SlamState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.ISlamState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlamState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlamState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.SlamState;

        /**
         * Decodes a SlamState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlamState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.SlamState;

        /**
         * Verifies a SlamState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlamState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlamState
         */
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.SlamState;

        /**
         * Creates a plain object from a SlamState message. Also converts values to other types if specified.
         * @param message SlamState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.SlamState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlamState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SlamState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SlamState {

        /** Properties of a State. */
        interface IState {
        }

        /** Represents a State. */
        class State implements IState {

            /**
             * Constructs a new State.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.SlamState.IState);

            /**
             * Creates a new State instance using the specified properties.
             * @param [properties] Properties to set
             * @returns State instance
             */
            public static create(properties?: ax_proto_msgs.SlamState.IState): ax_proto_msgs.SlamState.State;

            /**
             * Encodes the specified State message. Does not implicitly {@link ax_proto_msgs.SlamState.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.SlamState.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link ax_proto_msgs.SlamState.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.SlamState.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a State message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.SlamState.State;

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.SlamState.State;

            /**
             * Verifies a State message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns State
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.SlamState.State;

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @param message State
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.SlamState.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this State to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for State
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace State {

            /** Type enum. */
            enum Type {
                INACTIVE = 0,
                SLAM = 1,
                POSITIONING = 2
            }
        }

        /** Properties of a NavSatState. */
        interface INavSatState {
        }

        /** Represents a NavSatState. */
        class NavSatState implements INavSatState {

            /**
             * Constructs a new NavSatState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.SlamState.INavSatState);

            /**
             * Creates a new NavSatState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NavSatState instance
             */
            public static create(properties?: ax_proto_msgs.SlamState.INavSatState): ax_proto_msgs.SlamState.NavSatState;

            /**
             * Encodes the specified NavSatState message. Does not implicitly {@link ax_proto_msgs.SlamState.NavSatState.verify|verify} messages.
             * @param message NavSatState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.SlamState.INavSatState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NavSatState message, length delimited. Does not implicitly {@link ax_proto_msgs.SlamState.NavSatState.verify|verify} messages.
             * @param message NavSatState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.SlamState.INavSatState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NavSatState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NavSatState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.SlamState.NavSatState;

            /**
             * Decodes a NavSatState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NavSatState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.SlamState.NavSatState;

            /**
             * Verifies a NavSatState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NavSatState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NavSatState
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.SlamState.NavSatState;

            /**
             * Creates a plain object from a NavSatState message. Also converts values to other types if specified.
             * @param message NavSatState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.SlamState.NavSatState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NavSatState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NavSatState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace NavSatState {

            /** Type enum. */
            enum Type {
                NO_FIX = 0,
                SAT_BASE = 1,
                RTK_FIXED = 2,
                RTK_FIXED_IN_GPS_UNRELIABLE_ZONE = 3,
                TIMEOUT = 4
            }
        }

        /** Properties of a PositionQuality. */
        interface IPositionQuality {
        }

        /** Represents a PositionQuality. */
        class PositionQuality implements IPositionQuality {

            /**
             * Constructs a new PositionQuality.
             * @param [properties] Properties to set
             */
            constructor(properties?: ax_proto_msgs.SlamState.IPositionQuality);

            /**
             * Creates a new PositionQuality instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PositionQuality instance
             */
            public static create(properties?: ax_proto_msgs.SlamState.IPositionQuality): ax_proto_msgs.SlamState.PositionQuality;

            /**
             * Encodes the specified PositionQuality message. Does not implicitly {@link ax_proto_msgs.SlamState.PositionQuality.verify|verify} messages.
             * @param message PositionQuality message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ax_proto_msgs.SlamState.IPositionQuality, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PositionQuality message, length delimited. Does not implicitly {@link ax_proto_msgs.SlamState.PositionQuality.verify|verify} messages.
             * @param message PositionQuality message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ax_proto_msgs.SlamState.IPositionQuality, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PositionQuality message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PositionQuality
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.SlamState.PositionQuality;

            /**
             * Decodes a PositionQuality message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PositionQuality
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.SlamState.PositionQuality;

            /**
             * Verifies a PositionQuality message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PositionQuality message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PositionQuality
             */
            public static fromObject(object: { [k: string]: any }): ax_proto_msgs.SlamState.PositionQuality;

            /**
             * Creates a plain object from a PositionQuality message. Also converts values to other types if specified.
             * @param message PositionQuality
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ax_proto_msgs.SlamState.PositionQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PositionQuality to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PositionQuality
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PositionQuality {

            /** Type enum. */
            enum Type {
                NONE = 0,
                LOST = 1,
                POOR = 3,
                GOOD = 8,
                EXCELLENT = 10
            }
        }
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
        constructor(properties?: ax_proto_msgs.ITopicInfo);

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
        public static create(properties?: ax_proto_msgs.ITopicInfo): ax_proto_msgs.TopicInfo;

        /**
         * Encodes the specified TopicInfo message. Does not implicitly {@link ax_proto_msgs.TopicInfo.verify|verify} messages.
         * @param message TopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.ITopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopicInfo message, length delimited. Does not implicitly {@link ax_proto_msgs.TopicInfo.verify|verify} messages.
         * @param message TopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.ITopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopicInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.TopicInfo;

        /**
         * Decodes a TopicInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.TopicInfo;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.TopicInfo;

        /**
         * Creates a plain object from a TopicInfo message. Also converts values to other types if specified.
         * @param message TopicInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.TopicInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        topics?: (ax_proto_msgs.ITopicInfo[]|null);
    }

    /** Represents a TopicListResponse. */
    class TopicListResponse implements ITopicListResponse {

        /**
         * Constructs a new TopicListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ax_proto_msgs.ITopicListResponse);

        /** TopicListResponse topics. */
        public topics: ax_proto_msgs.ITopicInfo[];

        /**
         * Creates a new TopicListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopicListResponse instance
         */
        public static create(properties?: ax_proto_msgs.ITopicListResponse): ax_proto_msgs.TopicListResponse;

        /**
         * Encodes the specified TopicListResponse message. Does not implicitly {@link ax_proto_msgs.TopicListResponse.verify|verify} messages.
         * @param message TopicListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.ITopicListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopicListResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.TopicListResponse.verify|verify} messages.
         * @param message TopicListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.ITopicListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopicListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.TopicListResponse;

        /**
         * Decodes a TopicListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopicListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.TopicListResponse;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.TopicListResponse;

        /**
         * Creates a plain object from a TopicListResponse message. Also converts values to other types if specified.
         * @param message TopicListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.TopicListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: ax_proto_msgs.IPublishedTopicNamesResponse);

        /** PublishedTopicNamesResponse names. */
        public names: string[];

        /**
         * Creates a new PublishedTopicNamesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishedTopicNamesResponse instance
         */
        public static create(properties?: ax_proto_msgs.IPublishedTopicNamesResponse): ax_proto_msgs.PublishedTopicNamesResponse;

        /**
         * Encodes the specified PublishedTopicNamesResponse message. Does not implicitly {@link ax_proto_msgs.PublishedTopicNamesResponse.verify|verify} messages.
         * @param message PublishedTopicNamesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ax_proto_msgs.IPublishedTopicNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishedTopicNamesResponse message, length delimited. Does not implicitly {@link ax_proto_msgs.PublishedTopicNamesResponse.verify|verify} messages.
         * @param message PublishedTopicNamesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ax_proto_msgs.IPublishedTopicNamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ax_proto_msgs.PublishedTopicNamesResponse;

        /**
         * Decodes a PublishedTopicNamesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishedTopicNamesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ax_proto_msgs.PublishedTopicNamesResponse;

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
        public static fromObject(object: { [k: string]: any }): ax_proto_msgs.PublishedTopicNamesResponse;

        /**
         * Creates a plain object from a PublishedTopicNamesResponse message. Also converts values to other types if specified.
         * @param message PublishedTopicNamesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ax_proto_msgs.PublishedTopicNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto option_dependency */
            option_dependency?: (string[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto option_dependency. */
            public option_dependency: string[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /** DescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration full_name */
                full_name?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration full_name. */
                public full_name: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional */
            proto3_optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional. */
            public proto3_optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range */
            reserved_range?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range. */
            public reserved_range: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reserved_name. */
            public reserved_name: string[];

            /** EnumDescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions swift_prefix */
            swift_prefix?: (string|null);

            /** FileOptions php_class_prefix */
            php_class_prefix?: (string|null);

            /** FileOptions php_namespace */
            php_namespace?: (string|null);

            /** FileOptions php_metadata_namespace */
            php_metadata_namespace?: (string|null);

            /** FileOptions ruby_package */
            ruby_package?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions swift_prefix. */
            public swift_prefix: string;

            /** FileOptions php_class_prefix. */
            public php_class_prefix: string;

            /** FileOptions php_namespace. */
            public php_namespace: string;

            /** FileOptions php_metadata_namespace. */
            public php_metadata_namespace: string;

            /** FileOptions ruby_package. */
            public ruby_package: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverified_lazy */
            unverified_lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debug_redact */
            debug_redact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions edition_defaults */
            edition_defaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverified_lazy. */
            public unverified_lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debug_redact. */
            public debug_redact: boolean;

            /** FieldOptions retention. */
            public retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions edition_defaults. */
            public edition_defaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport edition_introduced */
                edition_introduced?: (google.protobuf.Edition|null);

                /** FeatureSupport edition_deprecated */
                edition_deprecated?: (google.protobuf.Edition|null);

                /** FeatureSupport deprecation_warning */
                deprecation_warning?: (string|null);

                /** FeatureSupport edition_removed */
                edition_removed?: (google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport edition_introduced. */
                public edition_introduced: google.protobuf.Edition;

                /** FeatureSupport edition_deprecated. */
                public edition_deprecated: google.protobuf.Edition;

                /** FeatureSupport deprecation_warning. */
                public deprecation_warning: string;

                /** FeatureSupport edition_removed. */
                public edition_removed: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact */
            debug_redact?: (boolean|null);

            /** EnumValueOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .ax_proto_msgs.display_text */
            ".ax_proto_msgs.display_text"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact. */
            public debug_redact: boolean;

            /** EnumValueOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotency_level */
            idempotency_level?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotency_level. */
            public idempotency_level: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (number|Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (number|Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: (number|Long);

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: (number|Long);

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet field_presence */
            field_presence?: (google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enum_type */
            enum_type?: (google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeated_field_encoding */
            repeated_field_encoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8_validation */
            utf8_validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet message_encoding */
            message_encoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet json_format */
            json_format?: (google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforce_naming_style */
            enforce_naming_style?: (google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet default_symbol_visibility */
            default_symbol_visibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet field_presence. */
            public field_presence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enum_type. */
            public enum_type: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeated_field_encoding. */
            public repeated_field_encoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8_validation. */
            public utf8_validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet message_encoding. */
            public message_encoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet json_format. */
            public json_format: google.protobuf.FeatureSet.JsonFormat;

            /** FeatureSet enforce_naming_style. */
            public enforce_naming_style: google.protobuf.FeatureSet.EnforceNamingStyle;

            /** FeatureSet default_symbol_visibility. */
            public default_symbol_visibility: google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimum_edition */
            minimum_edition?: (google.protobuf.Edition|null);

            /** FeatureSetDefaults maximum_edition */
            maximum_edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimum_edition. */
            public minimum_edition: google.protobuf.Edition;

            /** FeatureSetDefaults maximum_edition. */
            public maximum_edition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridable_features */
                overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features */
                fixed_features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridable_features. */
                public overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features. */
                public fixed_features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
        }
    }
}

/** Namespace bagstream. */
export namespace bagstream {

    /** Properties of a BagIndex. */
    interface IBagIndex {

        /** BagIndex tracks */
        tracks?: (bagstream.ITrack[]|null);
    }

    /** Represents a BagIndex. */
    class BagIndex implements IBagIndex {

        /**
         * Constructs a new BagIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: bagstream.IBagIndex);

        /** BagIndex tracks. */
        public tracks: bagstream.ITrack[];

        /**
         * Creates a new BagIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BagIndex instance
         */
        public static create(properties?: bagstream.IBagIndex): bagstream.BagIndex;

        /**
         * Encodes the specified BagIndex message. Does not implicitly {@link bagstream.BagIndex.verify|verify} messages.
         * @param message BagIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bagstream.IBagIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BagIndex message, length delimited. Does not implicitly {@link bagstream.BagIndex.verify|verify} messages.
         * @param message BagIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bagstream.IBagIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BagIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BagIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bagstream.BagIndex;

        /**
         * Decodes a BagIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BagIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bagstream.BagIndex;

        /**
         * Verifies a BagIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BagIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BagIndex
         */
        public static fromObject(object: { [k: string]: any }): bagstream.BagIndex;

        /**
         * Creates a plain object from a BagIndex message. Also converts values to other types if specified.
         * @param message BagIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bagstream.BagIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BagIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BagIndex
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Track. */
    interface ITrack {

        /** Track conn */
        conn?: (number|null);

        /** Track index */
        index?: (number[]|null);

        /** Track stamp_us */
        stamp_us?: ((number|Long)[]|null);
    }

    /** Represents a Track. */
    class Track implements ITrack {

        /**
         * Constructs a new Track.
         * @param [properties] Properties to set
         */
        constructor(properties?: bagstream.ITrack);

        /** Track conn. */
        public conn: number;

        /** Track index. */
        public index: number[];

        /** Track stamp_us. */
        public stamp_us: (number|Long)[];

        /**
         * Creates a new Track instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Track instance
         */
        public static create(properties?: bagstream.ITrack): bagstream.Track;

        /**
         * Encodes the specified Track message. Does not implicitly {@link bagstream.Track.verify|verify} messages.
         * @param message Track message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bagstream.ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Track message, length delimited. Does not implicitly {@link bagstream.Track.verify|verify} messages.
         * @param message Track message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bagstream.ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Track message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Track
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bagstream.Track;

        /**
         * Decodes a Track message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Track
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bagstream.Track;

        /**
         * Verifies a Track message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Track message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Track
         */
        public static fromObject(object: { [k: string]: any }): bagstream.Track;

        /**
         * Creates a plain object from a Track message. Also converts values to other types if specified.
         * @param message Track
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bagstream.Track, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Track to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Track
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageBatch. */
    interface IMessageBatch {

        /** MessageBatch entries */
        entries?: (bagstream.IBagEntry[]|null);
    }

    /** Represents a MessageBatch. */
    class MessageBatch implements IMessageBatch {

        /**
         * Constructs a new MessageBatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: bagstream.IMessageBatch);

        /** MessageBatch entries. */
        public entries: bagstream.IBagEntry[];

        /**
         * Creates a new MessageBatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageBatch instance
         */
        public static create(properties?: bagstream.IMessageBatch): bagstream.MessageBatch;

        /**
         * Encodes the specified MessageBatch message. Does not implicitly {@link bagstream.MessageBatch.verify|verify} messages.
         * @param message MessageBatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bagstream.IMessageBatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageBatch message, length delimited. Does not implicitly {@link bagstream.MessageBatch.verify|verify} messages.
         * @param message MessageBatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bagstream.IMessageBatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageBatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bagstream.MessageBatch;

        /**
         * Decodes a MessageBatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bagstream.MessageBatch;

        /**
         * Verifies a MessageBatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageBatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageBatch
         */
        public static fromObject(object: { [k: string]: any }): bagstream.MessageBatch;

        /**
         * Creates a plain object from a MessageBatch message. Also converts values to other types if specified.
         * @param message MessageBatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bagstream.MessageBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageBatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageBatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BagEntry. */
    interface IBagEntry {

        /** BagEntry index */
        index?: (number|null);

        /** BagEntry data */
        data?: (Uint8Array|null);
    }

    /** Represents a BagEntry. */
    class BagEntry implements IBagEntry {

        /**
         * Constructs a new BagEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: bagstream.IBagEntry);

        /** BagEntry index. */
        public index: number;

        /** BagEntry data. */
        public data: Uint8Array;

        /**
         * Creates a new BagEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BagEntry instance
         */
        public static create(properties?: bagstream.IBagEntry): bagstream.BagEntry;

        /**
         * Encodes the specified BagEntry message. Does not implicitly {@link bagstream.BagEntry.verify|verify} messages.
         * @param message BagEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bagstream.IBagEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BagEntry message, length delimited. Does not implicitly {@link bagstream.BagEntry.verify|verify} messages.
         * @param message BagEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bagstream.IBagEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BagEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BagEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bagstream.BagEntry;

        /**
         * Decodes a BagEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BagEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bagstream.BagEntry;

        /**
         * Verifies a BagEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BagEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BagEntry
         */
        public static fromObject(object: { [k: string]: any }): bagstream.BagEntry;

        /**
         * Creates a plain object from a BagEntry message. Also converts values to other types if specified.
         * @param message BagEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bagstream.BagEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BagEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BagEntry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
