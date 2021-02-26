const bcrypt = require('bcryptjs');
const User = require('../models/User') // Link to User model 

function doSeeds() {

  //all the user` seeds
   let users = [
    { "name": "Alexey Sergeev", "email": "alexeys@as.com", "password": "123456", "industry": "Space Exploration", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Jonathan Diaz", "email": "jonathand@jd.com", "password": "123456", "industry": "Ape Industries", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Janette Tinoco", "email": "janettet@jt.com", "password": "123456", "industry": "Software Engineering", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Micheal Noble", "email": "michaeln@mn.com", "password": "123456", "industry": "Software Engineering", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Cierra Vega", "email": "cierrav@cv.com", "password": "123456", "industry": "Software Engineering", 
      "recruiterStatus": false, "city": "New York", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Alden Cantrell", "email": "aldenc@ac.com", "password": "123456", "industry": "Minerals", 
      "recruiterStatus": true, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Kierra Gentry", "email": "kierrag@kg.com", "password": "123456","industry": "Political Science", 
      "recruiterStatus": false, "city": "New York", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Pierre Cox", "email": "pierrec@pc.com", "password": "123456","industry": "Minerals", 
      "recruiterStatus": false, "city": "Dallas", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Thomas Crane", "email": "thomasc@tc.com", "password": "123456", "industry": "Food Industry", 
      "recruiterStatus": false, "city": "Dallas", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Miranda Shaffer", "email": "mirandas@ms.com", "password": "123456", "industry": "Pharma", 
      "recruiterStatus": true, "city": "Dallas", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Bradyn Kramer", "email": "bradynk@bk.com", "password": "123456", "industry": "Space Exploration", 
      "recruiterStatus": true, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Alvaro Mcgee", "email": "alvarom@am.com", "password": "123456", "industry": "Biotech", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Jetta Forry", "email": "jettaf@jf.com", "password": "123456", "industry": "Minerals", 
      "recruiterStatus": false, "city": "San Francisco", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Wyatt Devos", "email": "wyattd@jk.com", "password": "123456", "industry": "Political Science", 
      "recruiterStatus": false, "city": "Dallas", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Nicki Gorrell", "email": "nickig@ng.com", "password": "123456", "industry": "Biotech", 
      "recruiterStatus": false, "city": "New York", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
    { "name": "Carylon Cisco", "email": "carylonc@cc.com", "password": "123456", "industry": "Software Engineering", 
      "recruiterStatus": true, "city": "New York", "imageUrl": "", "occupation": "", "aboutMe": "", "education": "", "linkedIn": "" },
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