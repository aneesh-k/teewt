const express = require("express");
require("dotenv/config");

const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers;

  if (!token["auth-token"]) return res.status(401).send("Access Denied");

  const authValid = jwt.verify(token["auth-token"], process.env.SECRET_KEY);
  if (!authValid._id) return res.status(401).send("Access Denied");

  next();
};

module.exports.Auth = Auth;
