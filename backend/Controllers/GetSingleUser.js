const users = require("../Models/UserModels");

const GetSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userIndividual = await users.findById(id); // Pass the ID as a string

    console.log(userIndividual);
    res.status(201).json(userIndividual);
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = GetSingleUser;
