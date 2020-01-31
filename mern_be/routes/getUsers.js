const router = require("express").Router();

const User = require("../models/Users");
const { Auth } = require("../Authentication/Auth");

router.get("/search", Auth, async (req, res) => {
  // { firstname: { $regex: ".*" + like + ".*" } },

  query = req.query;
  const email = query.email;

  const users = await User.find(
    { emailId: { $regex: ".*" + email + ".*" } },
    "firstname lastname emailId roles"
  );
  res.status(200).send(users);
});

module.exports = router;
