// imports and modules
const express = require("express");
const ConnectDB = require("./utils/ConnectDb");
const cors=require("cors");
const router = require("./Routes/router");
const app = express();
require("dotenv").config();
// Connect to MongoDB
ConnectDB();
// configs and middlewars
app.use(express.json())
app.use(cors())
app.use(router)
// routes
app.get("/", function(req, res) {
  res.send("Hello, world!");
});

// listening on server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});