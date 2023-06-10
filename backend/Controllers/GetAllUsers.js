const users = require("../Models/UserModels");
const GetAllUsers= async (req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
}
module.exports=GetAllUsers;