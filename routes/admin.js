const {Router} = require("express");
const jwt = require ("jsonwebtoken");
const {adminmiddleware} = require ("../middleware/admin");
const {courseModel} = require ("../db");
const {adminModel} = require ("../db");

    const JWT_SECRET = process.env.JWT_ADMIN_SECRET_KEY;


const adminRoutes = Router();

adminRoutes.post("/signup", async function(req,res) {
    const {email,password,firstName,lastName} = req.body;

   await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    });
    res.json({
message : "your are signed up "
    });


});



adminRoutes.post("/signin",function(req,res) {
    const {email,password}=req.body;

    const admin= adminModel.findOne({
        email:email,
        password:password
    });

    if (admin){
const token = jwt.sign({id:admin._id
},JWT_SECRET);
    
    res.json({
        token :token
    });
}


});

adminRoutes.post("course/",adminmiddleware,async function(req,res) {
    const adminId = req.adminId;
    const {title,description,price,imageUrl} = req.body;

    const course = await  courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creatorId: adminId

    });
    res.json({
        message:"course is created",
        courseid :course._id
    })

    
});


adminRoutes.put("course/", async function(req,res) {
    const adminId = req.adminId;
        const {title,description,price,imageUrl,courseid} = req.body;
fgr
    const course =  await courseModel.updateOne(
        {
            _id:courseid,
            creatorId :adminId
        },{
         title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creatorId: adminId

    })
    res.json({
        message:"course is updated",
        courseid:course._id
    })
    

});
adminRoutes.get("course/bulk", async function(req,res) {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId:adminId
    })

    res.json({
        courses:courses
    })



});





module.exports ={
adminRoutes:adminRoutes
}