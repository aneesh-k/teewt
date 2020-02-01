const mongoose = require("mongoose");

const CuisineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisineType: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  details: {
    chefName: {
      type: String,
      required: true
    },
    preparedOn: {
      type: Date,
      default: Date.now,
      required: true
    },
    expirationDate: {
      type: Date,
      required: true
    }
  }
});

module.exports = mongoose.model("cuisines", CuisineSchema);
