const express = require('express')
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router();


router.post("/", async (req, res) => {

    let userEmail = req.body.emailId
    let user = await User.findOne({emailId: userEmail})

    if (!user) {
       return res.status(400).send({message:"Invalid Email id"})
    }

    

    let valid = await bcrypt.compare(req.body.password, user.password)

    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY)

    if(valid){
        return res.status(200).header("auth-token", token).send({token: token})
    }else{
        return res.status(400).send({message: "Invalid password"})
    }

})


module.exports = router