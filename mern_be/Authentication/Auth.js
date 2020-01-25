const express = require('express')
require('dotenv/config')

const jwt = require('jsonwebtoken')

const Auth = (req, res, next) =>{
    const token = req.headers;
    console.log("in Auth")
    console.log(token['auth-token'])

    if(!token['auth-token']) return res.status(401).send("Access Denied")

    const authValid = jwt.verify(token["auth-token"], process.env.SECRET_KEY)
    console.log(authValid._id) 

    if(!authValid._id) return res.status(401).send("Access Denied")
    
    next()
}

module.exports.Auth = Auth
