const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    
    email :{type:String,unique:true}  ,
    password : String,
    firstName : String,
    lastName : String

});

const admin = new Schema ({
    
    email : {type:String,unique:true},
    password : String,
    firstName : String,
    lastName : String
});

const course = new Schema ({
    title : String ,
    description : String,
    price : Number,
    imageUrl:String ,
    creatorId :ObjectId,

});

const purchases = new Schema({
courseId :ObjectId,
userId: ObjectId
});


const usersModel = mongoose.model('users',user);
const adminModel = mongoose.model('admins',admin);
const courseModel = mongoose.model('course',course);
const purchasesModel = mongoose.model('purchases',purchases);

module.exports={
    usersModel,
    adminModel,
    courseModel,
    purchasesModel
}




