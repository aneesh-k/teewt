const mongoose = require('mongoose')

const Users = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        min:6
    },
    lastname:{
        type: String,
        required: true,
        min:6
    },
    emailId:{
        type:String,
        required: true,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6
    }
})

module.exports = mongoose.model("UserDetails", Users)