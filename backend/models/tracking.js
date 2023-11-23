const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema({
  trackingNumber: String,
  status: String,
  location: String,
});

const Tracking = mongoose.model("Tracking", trackingSchema);

module.exports = Tracking;
