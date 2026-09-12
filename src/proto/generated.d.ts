import * as $protobuf from "protobufjs";
import Long = require("long");
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

        /** RosMessageWrapper payload. */
        public payload?: ("point_cloud"|"mast_state"|"submap_list"|"rack_states"|"towing_state"|"mobile_network_state"|"video_data"|"depth_image"|"dwa_candidate_path_set");

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
            DWA_CANDIDATE_PATH_SET = 9
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
