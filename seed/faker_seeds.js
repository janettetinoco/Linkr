const faker = require('faker')
const detect = require('detect-gender');
const getGenderInfo =  require('@nelsonomuto/gender-info');
const bcrypt = require('bcryptjs');
const User = require('../models/User') // Link to User model 


function doSeeding() {

  let arr = []
  let usedPics = [];

  for (i = 0; i < 20; i++){
    let user = {}

    let firstName = faker.name.firstName(); // Rowan Nikolaus
    let lastName = faker.name.lastName(); // Rowan Nikolaus
    let fullName = firstName + " " + lastName
    user.name = fullName;
    
    //create email
    let email = "";
    user.name.split(" ").forEach((ele, i) => {
      if (i === 0){
        email += ele.toLowerCase()
      } else if (i === 1){
        email += ele[0].toLowerCase() + '@' + firstName[0].toLowerCase() + ele[0].toLowerCase() + '.com'
        user.email = email
      } 
    
    })
    //create password
    user.password = '123456'

    //create industry
    let industry = ["Space Exploration", "Biotech", "Software Engineering", 
      "Political Science", "Minerals"]
    user.industry = industry[Math.floor(Math.random() * industry.length)]

    //create occupation
    // user.jobtitle = faker.name.jobTitle()
    let occupation = ["CTO", "CEO", "HR", "Accountant", "Engineer", "SWE", "QA",
      "Assistant", "Agent", "Coordinator", "Developer","Backend Developer", "Full Stack",
      "Frontend Developer"]
    user.occupation = occupation[Math.floor(Math.random() * occupation.length)]

    //create city
    let city = ["New York", "San Francisco", "Dallas"]
    user.city = city[Math.floor(Math.random() * city.length)]

    //create education
    let education = ["Davis", "SUSU", "FSU", "ASU", "SFSU", "UCLA", "Cal Poly", 
      "CSUS", "FGCU", "Georgia Tech", "Hopkins", "JSU", "LA Tech", "Madison"]
    user.education = education[Math.floor(Math.random() * education.length)]

    //linkedIN
    user.linkedIn = 'http://linkedIn.com/some_random_id';

    //aboutMe
    let aboutMe = ["Hello, I am looking for new friends.", "Hello, how are you?", 
      "Hello, how are you?", "Hello, tell me a joke.", "Hello, I love running.", 
      "Hello, I am cat person.", "Hello, I am dog person",  "Hello, I am foody.", 
      "Hello, I am musician", "Hello, I am optimist.", "Hello, lets go for a walk.", 
      "Hello, I love water.", "Hello, I here. Add me.",  "Hello, I am new to this.",
      "Hello, I am excited.", "Hello, I am not alone :D", "I am feeling good today"]
    user.aboutMe = aboutMe[Math.floor(Math.random() * aboutMe.length)]

    //recruiterStatus
    let recruiterStatus = [true, false]
    user.recruiterStatus = recruiterStatus[Math.floor(Math.random() * recruiterStatus.length)]

    //imageUrl
    let femaleArr = ["https://linkr-dev.s3-us-west-1.amazonaws.com/michelle-obama.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-10.gif",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-11.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-12.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-13.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-14.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-15.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-4.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-5.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-6.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-7.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-8.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/woman-9.jpg"
    ]

    let maleArr = ["https://linkr-dev.s3-us-west-1.amazonaws.com/batrrack%3Dobama.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-10.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-11.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-12.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-13.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-14.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-4.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-5.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-6.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man-7.jpg",
      "https://linkr-dev.s3-us-west-1.amazonaws.com/man8.jpg]",
    ]


    //gender check and insert photo url

    // detect(user.name.split(" ")[0]).then(function (gender) {
    //   console.log(gender)
    // });
    

    if (getGenderInfo(user.name.split(" ")[0]).male === true ) {
      if (maleArr.length) {
        let image = maleArr[Math.floor(Math.random() * maleArr.length)]
        if (!usedPics.includes(image)){
          usedPics.push(image);
          let idx = maleArr.indexOf(image)
          maleArr.splice(idx, 1)
          user.imageUrl = image
          arr.push(user)
        }
      } 
    } else {
      if (femaleArr.length) {
        let image = femaleArr[Math.floor(Math.random() * femaleArr.length)]
        if (!usedPics.includes(image)){
          let idx = femaleArr.indexOf(image)
          femaleArr.splice(idx, 1)
          user.imageUrl = image
          arr.push(user)
        }
      }
    }
  }


  
  //bcrypt the password & save to DB
  let newUser;
  arr.forEach(user => {  
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


module.exports = doSeeding;



