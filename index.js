const express = require('express');
const app = express();
const  {userRoutes}= require ("/routes/user");

app.use("/user",userRoutes);
app.use("/course",courseRoutes);


app.listen(3000);





