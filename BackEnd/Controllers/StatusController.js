

async function StatusController(req , res){
    
    if (req.session && req.session.isAuth){
        res.json({status : true});
    }
    else {
        res.json({status : false});
    }

}



module.exports = StatusController;