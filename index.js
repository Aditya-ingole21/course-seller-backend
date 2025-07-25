const express = require('express');
require('dotenv').config();

const app = express();
const  {userRoutes}= require ("./routes/user");
const  {courseRoutes}= require ("./routes/course");
const {adminRoutes} = require ("./routes/admin");
const { default: mongoose } = require('mongoose');
app.use(express.json());

const MONGO_URL= process.env.MONGO_URL;

app.use("/user",userRoutes);
app.use("/course",courseRoutes);
app.use("/admin",adminRoutes);


 async function main(){
   await mongoose.connect(MONGO_URL);
   app.listen(3000);
   console.log("connected");
}

main();






