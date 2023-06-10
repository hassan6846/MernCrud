const mongoose = require("mongoose");
const ConnectDB=()=>mongoose.connect('mongodb://127.0.0.1:27017/Crud')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
module.exports=ConnectDB;