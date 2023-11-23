const express = require("express");
const router = express.Router();
const Tracking = require("../models/tracking");

router.post("/tracking", async (req, res) => {
  try {
    const { trackingNumber, status, location } = req.body;
    const tracking = new Tracking({ trackingNumber, status, location });
    await tracking.save();
    res.status(201).json(tracking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/tracking/:trackingNumber", async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber;
    const tracking = await Tracking.findOne({ trackingNumber });
    res.json(tracking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/tracking/:trackingNumber", async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber;
    const newData = req.body;
    const tracking = await Tracking.findOneAndUpdate(
      { trackingNumber },
      newData,
      { new: true }
    );
    res.json(tracking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/tracking/:trackingNumber", async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber;
    await Tracking.deleteOne({ trackingNumber });
    res.json({ message: "Tracking information deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
