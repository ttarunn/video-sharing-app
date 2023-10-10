const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userRegister = async(req,res) => {
    const  {name,email,phone,profession,image} = req.body;
    try {
        const hashedPass = await bcrypt.hash(req.body.password,10);
        if(req.body.password !== req.body.confirmpassword){
            res.status(400).json({
                message:"Password and Confirm Password is not matching"
            });
        }

        const newUser = new User ({
            image:image,
            name: name,
            email:email,
            profession:profession,
            phone:phone,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(201).json({
            message:"User Registered succesfully!"
        })
        
    }
    catch (err){
        res.status(500).json({
            err:err
        })
    }
}

const userLogin = async (req,res) => {
    
    try{
        const user = await User.findOne({email:req.body.email});
        const validate = await bcrypt.compare(req.body.password,user.password);
        
        //Jwt token should be send in as token
        if(validate){
            const jwkToken = jwt.sign({
                name:user.name,
                email:user.email,
                phone:user.phone,
                profession:user.profession,
                userImg:user.image
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"1hr"
            });
            
            res.status(200).json({
                message:"Success",
                token: jwkToken
            })
        }else{
            res.status(400).json({
                message:"Wrong Credential!"
            })
        }
    }
    catch (err){
        res.status(500).json({
            message:"Wrong Credential!",
            err:err
        })
    }
}

module.exports = {userRegister,userLogin}