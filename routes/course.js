
const {Router} = require ("express");

const courseRoutes = Router();


courseRoutes.get("/course/prview",function (req,res){

});

courseRoutes.post("/course/purchase",function (req,res){

});

module.exports={
    courseRoutes:courseRoutes
}