const express=require("express"); // required express
const router=express.Router();
//imports of all controller functions
const registerUser = require("../Controllers/RegisterCtrl");
const GetAllUsers = require("../Controllers/GetAllUsers");
const DeleteUser = require("../Controllers/DeleteUser");
// routes are here 
router.post("/register",registerUser)
router.get("/all",GetAllUsers)
router.delete("/delete",DeleteUser)

// finally exported  the route
module.exports=router