const express = require("express");
const router = express.Router();
const User = require("../../models/User");//maybe
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Connection = require("../../models/Connection");


router.get('/connected', (req, res) => {
  // req.query - id
  // User.find({id: req.query.id}).connection.connected
  //    .then((connectedUsers) => res.json(connectedUsers))
  // debugger
})


router.post('/create', (req, res) => {
  let currUser_id = req.body.id1
  let nextUser_id = req.body.id2

  User.findOne({_id: currUser_id }).then(user => {
    let connection = new Connection({connected: [nextUser_id], pending: [], blocked: []})
    user.connection = connection;
    user.save()
    console.log(user)
  })
  debugger

  // User.find({id: req.query.id}).connection.connected
  //    .then((connectedUsers) => res.json(connectedUsers))
})

module.exports = router