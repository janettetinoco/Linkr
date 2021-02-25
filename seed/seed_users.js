const bcrypt = require('bcryptjs');
const User = require('../models/User') // Link to User model 

function doSeeds() {

  //all the user` seeds
  let users = [
    { "name": "Jonathan Diaz", "email": "jonathand@j.com", "password": "123456", "industry": "Ape Industries", "recruiterStatus": false, "city": "New Jersey" },
    { "name": "Cindy Vega", "email": "cindyv@c.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": false, "city": "Sacramento" },
    { "name": "George Washington", "email": "georgew@g.com", "password": "123456", "industry": "Wood Chopping", "recruiterStatus": true, "city": "San Francisco" },
    { "name": "Michelle Obama", "email": "michelleo@m.com", "password": "123456","industry": "Political Science", "recruiterStatus": false, "city": "New York" },
    { "name": "Thomas Jefferson", "email": "thomasj@t.com", "password": "123456","industry": "Iron", "recruiterStatus": false, "city": "Los Angeles" },
    { "name": "Martha Stewart", "email": "marthas@m.com", "password": "123456", "industry": "Food Industry", "recruiterStatus": false, "city": "Los Angeles" },
    { "name": "Erick Guzi", "email": "erickg@e.com", "password": "123456", "industry": "Pharma", "recruiterStatus": true, "city": "Chicago" },
    { "name": "Charlie Smith", "email": "charlies@c.com", "password": "123456", "industry": "Space Exploration", "recruiterStatus": true, "city": "San Francisco" },
    { "name": "Janette Tinoco", "email": "janettet@j.com", "password": "123456", "industry": "Dev", "recruiterStatus": false, "city": "Los Angeles" },
    { "name": "George Clooni", "email": "georgec@g.com", "password": "123456", "industry": "Biotech", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "Peter Parker", "email": "peterp@p.com", "password": "123456", "industry": "Charcoal Mining", "recruiterStatus": false, "city": "San Francisco" },
    { "name": "James Kerry", "email": "jamesk@j.com", "password": "123456", "industry": "Political Science", "recruiterStatus": false, "city": "'New York" },
    { "name": "Mark Verizen", "email": "markv@m.com", "password": "123456", "industry": "Software Development", "recruiterStatus": false, "city": "New York" },
    { "name": "Ashley Smith", "email": "ashleys@a.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": true, "city": "New Jersey" },
    { "name": "Alexey Sergeev", "email": "alexeys@a.com", "password": "123456", "industry": "Software Engineering", "recruiterStatus": false, "city": "San Francisco" },
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