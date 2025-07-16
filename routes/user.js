const {Router} = require ("express");

const userRoutes = Router();


userRoutes.post("/signup",function (req,res){

});

userRoutes.post("/login",function (req,res){

});

userRoutes.get("/purchases",function (req,res){

    res.json({
        message : "purchase endpoints"
    })

});

module.exports={
    userRoutes :userRoutes
};