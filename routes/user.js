const {Router} = require ("express");
require ('dotenv').config();

const {usersModel, purchasesModel}= require ("../db");
// const {purchasesModel}= require ("../db")
const {userMiddleware} = require ("../middleware/user");

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

userRoutes.get("/purchases", userMiddleware,  async  function (req,res){

    const userId = req.userId;

    const courses = await purchasesModel.find({
        userId:userId
    })
    

    res.json({
        courses:courses
    })

});

module.exports={
    userRoutes :userRoutes
};