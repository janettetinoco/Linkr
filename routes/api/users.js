const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const doFilledSeeds = require('../../seed/seed_complete_users');
const doSeeding = require('../../seed/faker_seeds');
const Connection = require("../../models/Connection");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

//Registering a user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email.toLowerCase() })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        // debugger
        let name = req.body.name.split(' ')[0][0].toUpperCase() + 
          req.body.name.split(' ')[0].slice(1).toLowerCase() + ' ' + 
          req.body.name.split(' ')[1][0].toUpperCase() + 
          req.body.name.split(' ')[1].slice(1).toLowerCase()

        const newUser = new User({
          name: name,
          email: req.body.email.toLowerCase(),
          password: req.body.password,
          industry: req.body.industry,
          city: req.body.city,
          imageUrl: req.body.imageUrl
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, name: user.name };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => (err));

          })
        })
      }
    })
})

//AuthRoute
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    industry: req.body.industry,
    city: req.body.city
  });
})




router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {id: user.id, name: user.name};

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              {expiresIn: 3600},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({password: 'Incorrect password'});
          }
        })
    })
})


router.get('/query/:filter/:value', (req, res) => {
  User.find({[req.params.filter]: req.params.value})
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch( err => 
      res.status(404).json({ nousersfound: 'No users found'})
    );
});

router.get('/self/:myId', (req, res) => {
  User.findOne({_id: req.params.myId})
    .then(self => {
      return res.json(self)
    })
    .catch( err => {
      res.status(404).json({ nousersfound: 'No users found'})
    }
    );
});

//show all the users
router.get('/allUsers', (req, res) => {
  User.find()
    .then(users => res.json(users))
})

router.get('/connections', (req, res) => {
  let connectedUsers, c = []; 
  User.findOne({_id: req.query.id})
    .then((user) => {
      if (user.connection) {
        let arr = [];
        let con = [];
        user = user.connection.connected;
        user.forEach(connection => {arr.push(connection)})
        User.find({_id: {$in: arr}}).then( (users)=> res.json(users));
      } 
    })
})

//async Function  === to router above
// router.get('/connections', async (req, res) => {
//   let ListConnectedUsers = [];

//   let user = await User.findOne({_id: req.query.id})
//   if (user.connection) {
//     for (let i = 0; i < user.connection.connected.length; i++) {
//       let connectedUser = await User.findOne({_id: user.connection.connected[i]})
//       ListConnectedUsers.push(connectedUser);
//     }
//   }
//   res.json(ListConnectedUsers)
// })


//route to -> run seeds!
//use console`s browser on localhost:3000 & axios this route...

router.get('/seed', (req, res) => {
  doFilledSeeds()
  
  let allUsers = User.find()
    .then(users => res.json(users))
  let connection = new Connection({ connected: [], pending: [], blocked: [] })
  User.findOne({ name: "Michael Noble" }).then(demoUser => {
    demoUser.connection = connection
    let demoPending = demoUser.connection.pending
    let demoConnected = demoUser.connection.connected
    //adding 5 pending 3 connected
    for(let i = 0; i < 9; i++){
      if(allUsers[i].name !== "Michael Noble"){
        if(i % 2 === 0){
          demoPending.push(allUsers[i]._id)
        }else{
          demoConnected.push(allUsers[i]._id)
        }
      }
    }
    demoUser.save()
  })
  doSeeding()
  res.json('Seeding Successful');
})

//filled seeds
router.get('/filledSeed', (req, res) => {
  doFilledSeeds()
  res.json('Mode: Complete-Profile Seeding... Success!');
})



router.patch('/completeProfile', (req, res) => {
  let id = req.body.id
  let occupation = req.body.occupation
  let education = req.body.education
  let aboutMe = req.body.aboutMe
  let linkedIn = req.body.linkedIn
  let image_url = req.body.image_url
  
  User.findByIdAndUpdate(id, 
    {
      occupation: occupation,
      education: education,
      aboutMe: aboutMe,
      linkedIn: linkedIn,
      image_url: image_url,
    },
    { 
      new: true 
    },
    function(err, response) {
      if (err) {
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
})


router.patch('/updateProfile', (req, res) => {
  let id = req.body.id
  let occupation = req.body.occupation
  let education = req.body.education
  let aboutMe = req.body.aboutMe
  let linkedIn = req.body.linkedIn
  let city = req.body.city
  let industry = req.body.industry
  let imageUrl = req.body.imageUrl
  // let name = req.body.name

  //upcase the Name (allow middle name)
  let name = req.body.name.split(' ')
  let modName = []
  name.forEach(part => {
    modName.push(part[0].toUpperCase() + part.slice(1).toLowerCase())
  })
  name = modName.join(" ")
  
  // 
  
  User.findByIdAndUpdate(id, 
    {
      occupation: occupation,
      education: education,
      aboutMe: aboutMe,
      linkedIn: linkedIn,
      name: name,
      industry: industry,
      city: city,
      imageUrl: imageUrl,
    },
    { 
      new: true 
    },
    function(err, response) {
      if (err) {
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
})


 

module.exports = router;