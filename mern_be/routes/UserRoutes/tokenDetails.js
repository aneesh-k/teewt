const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/Users");

const router = express.Router();

router.get("/:tokenId", async (req, res) => {
  const token = req.params.tokenId;

  const tokenData = jwt.decode(token, process.env.SECRET_KEY);
  console.log(tokenData);
  if (!tokenData) return res.send({ error: "Invalid data" });
  const user = await User.findById(tokenData._id);

  res.status(200).send({
    _id: user._id,
    firstName: user.firstname,
    lastname: user.lastname,
    emailId: user.emailId,
    roles: user.roles
  });
});

module.exports = router;
