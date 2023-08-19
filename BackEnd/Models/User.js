const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true , 
        minLength : 1 
    } , 
    email : {
        type : String , 
        required : true , 
        minLength : 1
    }, 
    password : {
        type : String
    }
});

module.exports =  mongoose.model("users" , userSchema);