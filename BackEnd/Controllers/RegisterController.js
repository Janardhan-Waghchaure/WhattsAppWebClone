const User = require("../Models/User.js");
const bcrypt = require("bcrypt");

async function RegisterController(req , res){
    

    const searchUser = await User.findOne({email : req.body.email});
    if (searchUser){
        return res.json({message : "user already exists with same email"});
    }



    const hashedPassword = await bcrypt.hash(req.body.password , 10);

    const user = new User({
        name : req.body.name , 
        email : req.body.email , 
        password : hashedPassword,
    });

    

    try{
        const save = await user.save();
        res.json({message : "user saved successfully :)"});
    }
    catch(e){
        res.json({message : "failed to save the user"});
    }

}



module.exports = RegisterController;