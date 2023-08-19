const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(()=>{
    console.log("connected to db");
})
.catch((e)=>{
    console.log(e);
})

