const bcrypt = require('bcryptjs');
const User = require('../models/User') // Link to User model 

function doSeeds() {

  //all the user` seeds
   let users = [
    { "name": "Alexey Sergeev", "email": "alexeys@as.com", "password": "123456", "industry": "Space Exploration", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Jonathan Diaz", "email": "jonathand@jd.com", "password": "123456", "industry": "Ape Industries", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Janette Tinoco", "email": "janettet@jt.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Micheal Noble", "email": "michaeln@mn.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Cierra Vega", "email": "cierrav@cv.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": false, "city": "New York" },
    { "name": "Alden Cantrell", "email": "aldenc@ac.com", "password": "123456", "industry": "Minerals", "recruiterStatus": true, "city": "San Francisco" },
    { "name": "Kierra Gentry", "email": "kierrag@kg.com", "password": "123456","industry": "Political Science", "recruiterStatus": false, "city": "New York" },
    { "name": "Pierre Cox", "email": "pierrec@pc.com", "password": "123456","industry": "Minerals", "recruiterStatus": false, "city": "Dallas" },
    { "name": "Thomas Crane", "email": "thomasc@tc.com", "password": "123456", "industry": "Food Industry", "recruiterStatus": false, "city": "Dallas" },
    { "name": "Miranda Shaffer", "email": "mirandas@ms.com", "password": "123456", "industry": "Pharma", "recruiterStatus": true, "city": "Dallas" },
    { "name": "Bradyn Kramer", "email": "bradynk@bk.com", "password": "123456", "industry": "Space Exploration", "recruiterStatus": true, "city": "San Francisco" },
    { "name": "Alvaro Mcgee", "email": "alvarom@am.com", "password": "123456", "industry": "Biotech", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Jetta Forry", "email": "jettaf@jf.com", "password": "123456", "industry": "Minerals", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Wyatt Devos", "email": "wyattd@jk.com", "password": "123456", "industry": "Political Science", "recruiterStatus": false, "city": "Dallas" },
    { "name": "Nicki Gorrell", "email": "nickig@ng.com", "password": "123456", "industry": "Biotech", "recruiterStatus": false, "city": "New York" },
    { "name": "Carylon Cisco", "email": "carylonc@cc.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": true, "city": "New York" },
  ]
  
  
  //bcrypt the password & save to DB
  let newUser;
  users.forEach(user => {  
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          newUser = new User(user);
          newUser.password = hash;
          newUser.save()
        })
      })
  })
}


module.exports = doSeeds;