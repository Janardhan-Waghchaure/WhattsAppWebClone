
async function LogoutController(req , res){
    
    req.session.destroy(function(err) {
        if (err)
            res.json({message : "logged out failed :("});
        else{ 
            res.clearCookie("connect.sid"); //=> deleting client side cookies
            res.json({message : "logged out"});
        }
    })

}



module.exports = LogoutController;