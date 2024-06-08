const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const {body,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const xss = require('xss');
const session = require('express-session');
require('dotenv').config({path:'../configs/.env'});
exports.signup =  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
   async (req,res)=>{
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const username = xss(req.body.username);
    const email = xss(req.body.email);
    const password = xss(req.body.password);
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        const newUser = new userModel({username,email,password:hashedPass});
        await newUser.save();
        res.status(201).json({message:'User created successfully'});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
   }
   
];
exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
           const token = jwt.sign({userID:user._id,username:user.username},process.env.secret,{expiresIn:"2h"});
            req.session.user = user;
            console.log(req.session);
            res.cookie('token',token,{httpOnly:true,secure:true,sameSite:'strict'});
            res.json({ message: 'Signed in successfully', token: token});
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.signout = (req, res) => {
    const token = req.cookies.token;
    req.session.destroy();
    res.clearCookie('token');
    res.json({ message: 'Signed out successfully' });
};
