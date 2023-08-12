const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userRegister = async(req,res) => {
    const  {name,email,phone,profession} = req.body;
    try {
        const hashedPass = await bcrypt.hash(req.body.password,10);
        if(req.body.password !== req.body.confirmpassword){
            throw err;
        }

        const newUser = new User ({
            name: name,
            email:email,
            profession:profession,
            phone:phone,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(201).json({
            message:"user registered succesfully",
            data :user
        })
        
    }
    catch (err){
        res.status(500).json(err)
    }
}

const userLogin = async (req,res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(400).json("Wrong Credential!");


        const validate = await bcrypt.compare(req.body.password,user.password);
        !validate && res.status(400).json("Wrong Credential!");

        //Jwt token
        

    }
    catch (err){
        res.status(500).json(err)
    }
}

module.exports = {userRegister,userLogin}