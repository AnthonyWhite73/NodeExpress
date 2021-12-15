const { request } = require("express");
const User = require("./userModel");

// req = request
// res = result
exports.addUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await  newUser.save();
        res.status(200).send({message: "Successfully added user", newUser});
    } catch (error){
        console.log(error);
        res.status(500).send({ message: "Unsuccessful adding, please check again"})
    }
};

exports.listUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).send({message: "Successfully listed users", users});
    } catch (error){
        console.log(error);
        res.status(500).send({ message: "Unsuccessful listing, please check again"})
    }
};

exports.updateUser = async (req, res) => {
    try{        
        const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body);
        const user = await User.findById(req.body._id);
        res.status(200).send({message: "Successfully updated user", user, updatedUser});
    } catch (error){
        console.log(error);
        res.status(500).send({ message: "Unsuccessful updating, please check again"})
    }
};

exports.deleteUser = async (req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.body._id);        
        res.status(200).send({message: "Successfully deleted user", deleteUser});
    } catch (error){
        console.log(error);
        res.status(500).send({ message: "Unsuccessful deleting, please check again"})
    }
};