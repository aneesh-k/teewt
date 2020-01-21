const router = require('express').Router()
const bcrypt = require('bcryptjs')


const users = require('../models/Users')

//add user - register
router.post("/register", async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)


    const newUser = new users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emaiId: req.body.emailId,
        password: hashPassword
    })
    
    const data = await newUser.save()
})

//validate user - login
router.get("/login", (req, res) => {

})

module.exports = router