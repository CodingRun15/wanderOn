const jwt = require('jsonwebtoken');
require('dotenv').config({path:'../configs/.env'});
const auth = (req,res,next)=>{
   const token = req.cookies.token;
   console.log(token);
    if(!token){
        return res.status(401).json({
            message:'Please signin first'
        })
    }
   jwt.verify(token,process.env.secret,(err,decoded)=>{
    if(err){
        return res.status(401).json({
            message:'Not authorized'
        })
    }
    console.log(decoded);
     req.userID = decoded.userID;
     req.username = decoded.username;
    next();
   })  
}

module.exports = auth;