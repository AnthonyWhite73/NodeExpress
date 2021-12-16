const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error){
        console.log(error);
        res.status(500).send({message: "Unsuccessful, please try again"})
    }
};

exports.compare = async (req, res) => {
    try{
        console.log(req.body);
        const user  = await User.findOne({username:req.body.username});
        console.log(user);
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match){
            res.status(500).send({message: "Did not work"});
        }
        res.status(200).send({message: "success"});
    } catch (error){
        res.status(500).send({message: "Unsuccessful, please try again"});
    }
};

exports.checkEmail = async (req, res) => {
    try {
        const email = req.body.email;
        const regex = /.+\@.+\..+/;
        if (regex.test(email)){
            res.status(200).send({message: "Valid email, woohoo!"});
        } else{
            res.status(500).send({message: "Invalid email, please try again"});
        }
    } catch (error){
        res.status(500).send({message: "Unsuccessful, please try again"});
    }
}