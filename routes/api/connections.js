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
  let currUser_id = req.body.id1
  let nextUser_id = req.body.id2
  
  let status = req.body.status

  if (status === "add") {
    //check if nextU has me in pending
    User.findOne({ _id: nextUser_id }).then(user => {
      //check if nextU has connections instantiated
      if (user.connection) {
        //if yes -> check their pending list if I am there
        let pending = user.connection.pending
        if (pending.includes(currUser_id)) {
          let index = pending.indexOf(currUser_id);
          pending.splice(index, 1); //remove me from pending
          user.connection.connected.push(currUser_id);
          user.save()
          //then find me and add nextU to my connected list
          User.findOne({ _id: currUser_id }).then(user => {
            //if my connections are instantiated
            if (user.connection) { 
              user.connection.connected.push(nextUser_id)
              user.save()
              return res.json('connect')
              //if not -> create new connection & add nextU to my connected list
            } else {
              let connection = new Connection({ connected: [nextUser_id], pending: [], blocked: [] })
              user.connection = connection;
              user.save();
              return res.json('connect')
            }
          })
          //if im not in their pending list, find me & add nextU to my pending
        } else {
          User.findOne({ _id: currUser_id }).then(user => { 
            //check if i have connection instantiated
            if (user.connection){
              let pending = user.connection.pending
              pending.push(nextUser_id);
              user.save()
              return res.json('pending')
              //if not 
            } else {
              let connection = new Connection({ connected: [], pending: [nextUser_id], blocked: [] })
              user.connection = connection;
              user.save();
              return res.json('pending')
            }
          })
        }
        // if nextU has no connections instantiated find me
      } else {
        User.findOne({ _id: currUser_id }).then(user => { 
            //check if i have connection instantiated
            if (user.connection){
              let pending = user.connection.pending
              pending.push(nextUser_id);
              user.save()
              return res.json('pending')
              //if not 
            } else {
              let connection = new Connection({ connected: [], pending: [nextUser_id], blocked: [] })
              user.connection = connection;
              user.save();
              return res.json('pending')
            }
          })
      }
    })
  } else if (status === "block") {
    User.findOne({ _id: currUser_id }).then(user => {
      if (user.connection) {
        user.connection.blocked.push(nextUser_id);
        user.save()
        return res.json('block')
      } else {
        let connection = new Connection({ connected: [], pending: [], blocked: [nextUser_id] })
        user.connection = connection;
        user.save();
        return res.json('block')
      }
    })
  } else if (status === 'unblock'){
    User.findOne({ _id: currUser_id }).then(user => {
      let idx = user.connection.blocked.indexOf(nextUser_id);
      user.connection.blocked.splice(idx, 1);
      user.save();
      return res.json('unblock')
    })
  }
})
module.exports = router