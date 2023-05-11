// source: portfolio.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.PortfolioItem');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PortfolioItem = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PortfolioItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PortfolioItem.displayName = 'proto.PortfolioItem';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.PortfolioItem.prototype.toObject = function (opt_includeInstance) {
    return proto.PortfolioItem.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.PortfolioItem} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.PortfolioItem.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        ticker: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
        amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PortfolioItem}
 */
proto.PortfolioItem.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PortfolioItem();
  return proto.PortfolioItem.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PortfolioItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PortfolioItem}
 */
proto.PortfolioItem.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTicker(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readDouble());
        msg.setCost(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readDouble());
        msg.setAmount(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PortfolioItem.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.PortfolioItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PortfolioItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PortfolioItem.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(2, f);
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(3, f);
  }
};

/**
 * optional string ticker = 1;
 * @return {string}
 */
proto.PortfolioItem.prototype.getTicker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.PortfolioItem} returns this
 */
proto.PortfolioItem.prototype.setTicker = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional double cost = 2;
 * @return {number}
 */
proto.PortfolioItem.prototype.getCost = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.PortfolioItem} returns this
 */
proto.PortfolioItem.prototype.setCost = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional double amount = 3;
 * @return {number}
 */
proto.PortfolioItem.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.PortfolioItem} returns this
 */
proto.PortfolioItem.prototype.setAmount = function (value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};
