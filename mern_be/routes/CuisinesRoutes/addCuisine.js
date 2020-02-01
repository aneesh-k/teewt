const router = require("express").Router();

const { Auth } = require("../../Authentication/Auth");

const Cuisine = require("../../models/Cuisines");

router.post("/", Auth, async (req, res) => {
  const data = req.body;

  const newCuisine = new Cuisine(req.body);

  try {
    const data = await newCuisine.save();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
