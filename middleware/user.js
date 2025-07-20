const JWT_SECRET = process.env.JWT_USER_SECRET_KEY;
const jwt = require ("jsonwebtoken");

const userMiddleware= function (req,res,next){
    const token = req.headers.token;
    const decodedData= jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId=decodedData.id;
        next();
    }
    else {
        res.json({
            message:"you are not signed in"
        })
    }

}

module.exports={
   userMiddleware:userMiddleware
}