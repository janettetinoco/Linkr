const faker = require('faker')


let arr = []

for (i = 0; i < 20; i++){
  let user = {}

  let firstName = faker.name.firstName(); // Rowan Nikolaus
  let lastName = faker.name.lastName(); // Rowan Nikolaus
  let fullName = firstName + " " + lastName
  user.name = fullName;

  let email = "";
  user.name.split(" ").forEach((ele, i) => {
      if (i === 0){
        email += ele.toLowerCase()
      } else if (i === 1){
        email += ele[0].toLowerCase() + '@' + firstName[0].toLowerCase() + ele[0].toLowerCase() + '.com'
        user.email = email
      } 
    })
    arr.push(user)
}

console.log(arr)