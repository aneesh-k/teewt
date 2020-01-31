const mongoose = require("mongoose");

const Users = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3
  },
  lastname: {
    type: String,
    required: true,
    min: 3
  },
  emailId: {
    type: String,
    required: true,
    min: 3
  },
  password: {
    type: String,
    required: true,
    min: 3
  },
  roles: {
    type: [String],
    required: false,
    default: ["read-only"]
  }
});

module.exports = mongoose.model("UserDetails", Users);
