const faker = require('faker')


let arr = []

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
  let occupation = ["CTO", "CEO", "HR", "Accountant", "Engineer", "SWE", "QA",
    "Assistant", "Agent", "Coordinator", "Developer"]
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
  let aboutMe = ["Hello, I am looking for new friends.", "Hello, how are you?"]

  arr.push(user)
}

console.log(arr)