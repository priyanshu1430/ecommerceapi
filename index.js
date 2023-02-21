const express = require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const userRoute = require("./routes/user")
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();

try{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_Url);
    console.log("DB Connection Successful");
}
catch(err){
    console.log(err)
}

app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)


app.listen(process.env.PORT||5000, ()=>{
    console.log("Backend Server is running")
})