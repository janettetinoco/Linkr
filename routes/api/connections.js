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

//req: id1, id2, status:(add/block)
router.post('/create', (req, res) => {
  let currUser_id = req.body.id1
  let nextUser_id = req.body.id2
  if(status === "add"){
    User.findOne({ _id: currUser_id }).then(user => {
      if(user.connection){

      }else{
        let connection = new Connection({ connected: [nextUser_id], pending: [], blocked: [] })
        user.connection = connection;
        user.save()
      }
      
      console.log(user)
    })

  }else if(status === "block"){

  }
})

module.exports = router