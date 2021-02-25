const express = require("express");
const router = express.Router();
const User = require("../../models/User");//maybe
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Connection = require("../../models/Connection");


router.get('/connected', (req, res) => {
  User.find({_id: req.query.id})
    .then((user) => {
      if (user[0]._doc.connection) {
        let arr = [];
        user = user[0]._doc.connection.connected;
        user.forEach(connection => {arr.push(connection)})
        return res.json(arr); 
      } else {
        return res.json(['No connections yet'])
      }
    })
})

router.get('/blocked', (req, res) => {
  User.find({ _id: req.query.id })
    .then((user) => {
      if (user[0]._doc.connection) {
        let arr = [];
        user = user[0]._doc.connection.blocked;
        user.forEach(connection => { arr.push(connection) })
        return res.json(arr);
      } else {
        return res.json(['No blocks yet'])
      }
    })
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