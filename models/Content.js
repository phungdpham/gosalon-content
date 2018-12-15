//Web Content model
//===================

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contentSchema = new Schema({
  salonName: {
    type: String
  },
  salonAddress: {
    type: String
  },
  busPhone: {
    type: String
  },
  OpenningHrs: {
    type: String
  },
  quote: {
    type: String
  },
  intro: {
    type: String
  },
  weOffer: {
    type: String
  },
  signature: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  template: {
    type: String
  }
});

var Content = mongoose.model("Content", contentSchema);

module.exports = Content;