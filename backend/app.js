const express = require("express");
const app = express();
require("dotenv").config();
// Connect to MongoDB
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/Crud')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
  
// connection cell
// routes
app.get("/", function(req, res) {
  res.send("Hello, world!");
});

// port configuration
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});
