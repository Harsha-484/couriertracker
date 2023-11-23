const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const trackingRoutes = require("./routes/trackingRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/package_tracking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", trackingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
