const router = require('express').Router()
const bcrypt = require('bcryptjs')
const {dataValidate} = require('../validations')
const {Auth} = require('../Authentication/Auth')


const Users = require('../models/Users')

//add user - register
router.post("/register", async (req, res) => {

   
    const dataValid = dataValidate(req.body)    
    if(dataValid) return res.status(401).json({
        message: dataValid
    })
   
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    
    //return 400 if emailid already exists
    const user = await Users.findOne({ emailId: req.body.emailId })
    
    if (user) return res.status(400).send({message:"mail already exists"})

    const newUser = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailId: req.body.emailId,
        password: hashPassword
    })
    try {
        const data = await newUser.save()
        res.status(200).send(data)       

    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/", Auth, (req, res) => {
    res.send("get user data")
})

module.exports = router