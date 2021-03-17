const bcrypt = require('bcryptjs');
const User = require('../models/User') // Link to User model 

function doFilledSeeds() {

  //all the user` seeds
   let users = [
    { "name": "Alexey Sergeev", "email": "alexeys@as.com", "password": "123456", "industry": "Space Exploration", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/alexey_sergeev.jpg", "occupation": "SWE at SpaceX", "aboutMe": "Hello, I am looking for new friends.", "education": "SUSU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Jonathan Diaz", "email": "jonathand@jd.com", "password": "123456", "industry": "Ape Industries", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/jonathan-diazjpeg.jpg", "occupation": "CEO at Ape Industries", "aboutMe": "Hello, how are you?", "education": "ASU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Janette Tinoco", "email": "janettet@jt.com", "password": "123456", "industry": "Software Engineering", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/janette-tinoco.JPG", "occupation": "SWE at Google", "aboutMe": "Hello, tell me a joke.", "education": "SFSU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Michael Noble", "email": "michaeln@mn.com", "password": "123456", "industry": "Software Engineering", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/michael-noble.JPG", "occupation": "SWE at Facebook", "aboutMe": "Hello, I love running.", "education": "UCLA", "linkedIn": "https://www.linkedin.com/in/michaelclaytonnoble/" },
    { "name": "Cierra Vega", "email": "cierrav@cv.com", "password": "123456", "industry": "Software Engineering", 
      "city": "New York", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-2.jpg", "occupation": "QA", "aboutMe": "Hello, I am looking for new friends", "education": "Davis", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Alden Cantrell", "email": "aldenc@ac.com", "password": "123456", "industry": "Minerals", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/man-3.jpg", "occupation": "CTO at Mine Today Inc", "aboutMe": "Hello, I am cat person.", "education": "Cal Poly", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Kierra Gentry", "email": "kierrag@kg.com", "password": "123456","industry": "Political Science", 
      "city": "New York", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-1.jpg", "occupation": "CA Governer", "aboutMe": "Hello, I am dog person", "education": "CIA", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Pierre Cox", "email": "pierrec@pc.com", "password": "123456","industry": "Minerals", 
      "city": "Dallas", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/man-2.jpg", "occupation": "Big Vehicles Navigator", "aboutMe": "Hello, I am foody.", "education": "CSUS", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Thomas Crane", "email": "thomasc@tc.com", "password": "123456", "industry": "Food Industry", 
      "city": "Dallas", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/man-1.jpg", "occupation": "Chief", "aboutMe": "Hello, I am musician", "education": "FGCU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Miranda Shaffer", "email": "mirandas@ms.com", "password": "123456", "industry": "Pharma", 
      "city": "Dallas", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/katie-mack-spaceexploration.jpg", "occupation": "Pharmacist", "aboutMe": "Hello, I am optimist.", "education": "FSU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Bradyn Kramer", "email": "bradynk@bk.com", "password": "123456", "industry": "Space Exploration", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/jiang-jianqing-finance.jpg", "occupation": "Astronaut", "aboutMe": "Hello, lets go for a walk.", "education": "Georgia Tech", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Alvaro Mcgee", "email": "alvarom@am.com", "password": "123456", "industry": "Biotech", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/eric-drexler-nanotech.jpg", "occupation": "CTO at Plenty Inc", "aboutMe": "Hello, I love water.", "education": "Hopkins", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Jetta Forry", "email": "jettaf@jf.com", "password": "123456", "industry": "Minerals", 
      "city": "San Francisco", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/elon-musk-spaceexploration.jpg", "occupation": "HR at Iron & Steel", "aboutMe": "Hello, I here. Add me.", "education": "JSU", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Wyatt Devos", "email": "wyattd@jk.com", "password": "123456", "industry": "Political Science", 
      "city": "Dallas", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/elizabeth-holmes-biotech.jpg", "occupation": "Congresswoman", "aboutMe": "Hello, I am new to this.", "education": "LA Tech", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Nicki Gorrell", "email": "nickig@ng.com", "password": "123456", "industry": "Biotech", 
      "city": "New York", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/cori-barmann-biotech.jpg", "occupation": "Researcher", "aboutMe": "Hello, I am excited.", "education": "Georgia Tech ", "linkedIn": "http://linkedIn.com/some_random_id" },
    { "name": "Carylon Cisco", "email": "carylonc@cc.com", "password": "123456", "industry": "Software Engineering", 
      "city": "New York", "imageUrl": "https://linkr-dev.s3-us-west-1.amazonaws.com/abigail-johnson-finance.jpg", "occupation": "Backend Developer", "aboutMe": "Hello, I am not alone :D", "education": "Madison", "linkedIn": "http://linkedIn.com/some_random_id" },
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


module.exports = doFilledSeeds;

