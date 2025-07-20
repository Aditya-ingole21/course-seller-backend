const JWT_SECRET = process.env.JWT_ADMIN_SECRET_KEY;
const jwt = require("jsonwebtoken");

const  adminmiddleware = function (req,res,next){
    const token = req.headers.token;
    const decodedData= jwt.verify(token,JWT_SECRET);

    if(decodedData){
       req.adminId=decodedData.id;
        next();
    }
    else {
        res.json({
            message:"you are not signed in"
        })
    }

}

module.exports={
   adminmiddleware:adminmiddleware
}