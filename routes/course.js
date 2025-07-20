
const {Router} = require ("express");
const {userMiddleware} = require ("../middleware/user")
const {courseModel, purchasesModel} = require ("../db")

const courseRoutes = Router();


courseRoutes.get("/course/prview",function (req,res){
    const courses = courseModel.find({})

    res.json ({
        courses:courses
    })

});

courseRoutes.post("/course/purchase",function (req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    const courses = purchasesModel.create({
        userId,
        courseId
    });

    res.json({
        courses:courses
    })

});

module.exports={
    courseRoutes:courseRoutes
}