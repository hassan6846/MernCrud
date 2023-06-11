const express=require("express"); // required express
const router=express.Router();
//imports of all controller functions
const registerUser = require("../Controllers/RegisterCtrl");
const GetAllUsers = require("../Controllers/GetAllUsers");
const DeleteUser = require("../Controllers/DeleteUser");
const GetSingleUser = require("../Controllers/GetSingleUser");

// routes are here 
router.post("/register",registerUser)
router.get("/all",GetAllUsers)
router.get("/user/:id",GetSingleUser)

// finally exported  the route
module.exports=router