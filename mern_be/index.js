const express = require('express')


const app = express();




let PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("server started at "+PORT))