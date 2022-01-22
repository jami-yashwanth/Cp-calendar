const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

router.post('/register', async (req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = {
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        }
        await User.create(newUser)
        res.json({status : 'ok'})
    }
    catch(err){
        res.json({status : err})
    }
})

router.post('/login', async(req,res) => {
    try{
        console.log(req);
        const user = await User.findOne({email : req.body.email})
        const isValidPassword = await bcrypt.compare(req.body.password,user.password)
        if(isValidPassword){
            const token = jwt.sign({
                name : user.name,
                email : user.email
            },process.env.payloadString)
            res.json({status : "ok",message : "Login succesfull !",token : token})
        }
    }
    catch(err){
        res.json({status : "err",message : "Wrong credentials !",token : false})
    }
})

module.exports = router;