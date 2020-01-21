const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')


//express application
const app = express();


//connect to mongoose db
mongoose.connect(process.env.CON_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => { console.log("connected to DB") })


//InBuilt middlewares
app.use(express.json())

//custom middlewares



let PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("server started at " + PORT))