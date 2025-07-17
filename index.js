const express = require('express');
const app = express();
const  {userRoutes}= require ("./routes/user");
const  {courseRoutes}= require ("./routes/course");
const {adminRoutes} = require ("./routes/admin");

app.use("/user",userRoutes);
app.use("/course",courseRoutes);
app.use("/admin",adminRoutes);


app.listen(3000);





