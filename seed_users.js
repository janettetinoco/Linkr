const bcrypt = require('bcryptjs');
const User = require('./models/User') // Link to User model 

function doSeeds() {
  let  users = [{ "name": "Jonathan Diazz33", "email": "Jonathan33@j.com", "password": "123456", "business": "KingApe", "industry": "Ape Industries", "recruiterStatus": false, "city": "New Jersey" },
  { "name": "Cindy Vegaa33", "email": "casindy33@c.com", "password": "123456", "business": "aA", "industry": "software engineering", "recruiterStatus": false, "city": "Sacramento" },]
  
  
  
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