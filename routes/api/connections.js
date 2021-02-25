const express = require("express");
const router = express.Router();
const User = require("../../models/User");//maybe
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Connection = require("../../models/Connection");


router.get('/connected', (req, res) => {
  User.findOne({_id: req.query.id})
    .then((user) => {
      if (user.connection) {
        let arr = [];
        user = user.connection.connected;
        user.forEach(connection => {arr.push(connection)})
        return res.json(arr); 
      } else {
        return res.json(['No connections yet'])
      }
    })
})

router.get('/blocked', (req, res) => {
  User.findOne({ _id: req.query.id })
    .then((user) => {
      if (user.connection) {
        let arr = [];
        user = user.connection.blocked;
        user.forEach(connection => { arr.push(connection) })
        return res.json(arr);
      } else {
        return res.json(['No blocks yet'])
      }
    })
})

router.get('/pending', (req, res) => {
  User.findOne({ _id: req.query.id })
    .then((user) => {
      if (user.connection) {
        let arr = [];
        user = user.connection.pending;
        user.forEach(connection => { arr.push(connection) })
        return res.json(arr);
      } else {
        return res.json(['No pendings yet'])
      }
    })
})


router.post('/create', (req, res) => {
  debugger
  let currUser_id = req.body.id1
  let nextUser_id = req.body.id2
  let status = req.body.status
  if (status === "add") {
    User.findOne({ _id: currUser_id }).then(user => {
      if (user.connection) {
        let pending = user.connection.pending
        if (pending.includes(nextUser_id)) {
          let index = pending.indexOf(nextUser_id);
          pending.splice(index, 1);
          user.connection.connected.push(nextUser_id);
        } else {
          pending.push(nextUser_id);
        }
      } else {
        let connection = new Connection({ connected: [], pending: [nextUser_id], blocked: [] })
        user.connection = connection;
        user.save();
      }

    })
  } else if (status === "block") {
    User.findOne({ _id: currUser_id }).then(user => {
      if (user.connection) {
        user.connection.blocked.push(nextUser_id);
      } else {
        let connection = new Connection({ connected: [], pending: [], blocked: [nextUser_id] })
        user.connection = connection;
        user.save();
      }
    })
  }
})
module.exports = router