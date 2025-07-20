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

adminRoutes.post("course/",adminmiddleware,function(req,res) {
    const adminid = req.adminId;

    const course = courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creatorId: adminid

    });
    res.json({
        message:"course is created",
        courseid :course._id
    })

    
});


adminRoutes.put("course/",function(req,res) {
    

});
adminRoutes.get("course/bulk",function(req,res) {

});





module.exports ={
adminRoutes:adminRoutes
}