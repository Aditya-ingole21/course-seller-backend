const {Router} = require ("express");
require ('dotenv').config();

const {usersModel}= require ("../db");
const {purchasesModel}= require ("../db")

const userRoutes = Router();
const jwt = require ("jsonwebtoken");
const JWT_SECRET = process.env.JWT_USER_SECRET_KEY; 


userRoutes.post("/signup",async function (req,res){
    const {email,password,firstName,lastName} = req.body;

   await usersModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    });
    res.json({
message : "your are signed up "
    });


});

userRoutes.post("/login",function (req,res){
    const {email,password}=req.body;

    const users= usersModel.findOne({
        email:email,
        password:password
    })

    if (users){
const token = jwt.sign({id:users._id
},JWT_SECRET);
    
    res.json({
        token :token
    });
}

});

userRoutes.get("/purchases",function (req,res){
    

    res.json({
        message : "purchase endpoints"
    })

});

module.exports={
    userRoutes :userRoutes
};