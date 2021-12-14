const { request } = require("express");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await  newUser.save();
        res.status(200).send({message: "Successfully added user", newUser});
    } catch (error){
        console.log(error);
        res.status(500).send({ message: "Unsuccessful, please check again"})
    }
};

exports.listUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).send({message: "Successfully listed users"});
    } catch (error){
        console.log(error);
    }
};

exports.updateUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await  newUser.updateUser();
        res.status(200).send({message: "Successfully updated user", newUser});
    } catch (error){
        console.log(error);
    }
};

exports.deleteUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await  newUser.deleteUser();
        res.status(200).send({message: "Successfully deleted user", newUser});
    } catch (error){
        console.log(error);
    }
};