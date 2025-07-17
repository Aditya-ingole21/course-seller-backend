const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema({
    _Id : ObjectId,
    email : String ,
    password : String,
    firstName : String,
    lastName : String

});

const admins = new Schema ({
    _Id : ObjectId,
    email : String ,
    password : String,
    firstName : String,
    lastName : String
});

const course = new Schema ({
    _Id :ObjectId,
    title : String ,
    description : String,
    price : number,
    imageUrl:String ,
    creatorId :ObjectId,

});

const purchases = new Schema({
_Id :ObjectId,
courseId :ObjectId,
userId: ObjectId
});


const usersModel = mongoose.model('users',users);
const adminModel = mongoose.model('admins',admins);
const courseModel = mongoose.model('course',course);
const purchasesModel = mongoose.model('purchases',purchases);

module.exports={
    usersModel:usersModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchasesModel:purchasesModel
}




