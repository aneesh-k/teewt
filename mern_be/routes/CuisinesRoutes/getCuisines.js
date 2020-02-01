const router = require("express").Router();

const { Auth } = require("../../Authentication/Auth");

const Cuisine = require("../../models/Cuisines");

router.get("/", Auth, async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.status(200).send(cuisines);
  } catch {
    res.send({ message: "Unable to get data" });
  }
});

module.exports = router;
