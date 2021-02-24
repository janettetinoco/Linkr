const express = require("express");
const router = express.Router();
const User = require("../../models/User");//maybe
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");


router.get('/connected', (req, res) => {
  // req.query - id
  // User.find({id: req.query.id}).connection.connected
  //    .then((connectedUsers) => res.json(connectedUsers))
  // debugger
})
