const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const bodyparser = require("body-parser");
//Routes
const userRoutes = require("./routes/UserRoutes/userData");
const loginRoutes = require("./routes/UserRoutes/loginData");
const tokenRoute = require("./routes/UserRoutes/tokenDetails");
const getData = require("./routes/UserRoutes/getUsers");

const getCuisines = require("./routes/CuisinesRoutes/getCuisines");
const addCuisines = require("./routes/CuisinesRoutes/addCuisine");

//express application
const app = express();

//connect to mongoose db
mongoose.connect(
  process.env.CON_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    console.log(err);
  }
);

//-------------InBuilt middlewares---------------//
app.use(bodyparser.json()); // convert data to json
app.use(cors()); // for enabling cors

//custom middlewares-------------------//

//----------User Model---------------------------//
app.use("/api/user/", userRoutes); // for sign-Up of register

app.use("/api/login/", loginRoutes); // for log in register

app.use("/api/token", tokenRoute); // for token Authentication

app.use("/api", getData); // get user with name

//-----------Cuisines Model -------------------------//

app.use("/api/cuisines", getCuisines);

app.use("/api/cuisines", addCuisines);

//-----------PORT------------------//

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server started at " + PORT));
