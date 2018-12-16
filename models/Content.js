//Web Content model
//===================

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contentSchema = new Schema({
  salonName: {
    type: String,
    require: true
  },
  salonAddress: {
    type: String,
    require: true
  },
  busPhone: {
    type: String,
    require: true
  },
  OpenningHrs: {
    type: String,
    require: true
  },
  quote: {
    type: String,
    require: true
  },
  intro: {
    type: String,
    require: true
  },
  weOffer: {
    type: String,
  },
  signature: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  template: {
    type: String,
    require: true
  }
});

var Content = mongoose.model("Content", contentSchema);

module.exports = Content;