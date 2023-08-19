const User = require("../Models/User.js");
const bcrypt = require("bcrypt");




async function LoginController(req , res){
    
    const searchUser = await User.findOne({email : req.body.email});
    if (! searchUser){
        return res.json({message : "email not found :( "});
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password , searchUser.password);
    console.log(isPasswordCorrect);
    if (isPasswordCorrect){
        req.session.isAuth = true;
        req.session.userId = searchUser._id; //=> adding  mongodb id so that we can fetch users name etc.. later on
        return res.json({message : "welcome"});
    }
    else 
        res.json({message : "invalid password :("});

}



module.exports = LoginController;