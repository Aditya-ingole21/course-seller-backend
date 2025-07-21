
const {Router} = require ("express");
const {userMiddleware} = require ("../middleware/user")
const {courseModel, purchasesModel} = require ("../db")

const courseRoutes = Router();


courseRoutes.get("/course/prview", async function (req,res){
     
    const courses =  await  courseModel.find({})

    res.json ({
        courses:courses
    })

});

courseRoutes.post("/course/purchase", userMiddleware, async   function (req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    const courses =  await purchasesModel.create({
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