const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const doSeeds = require('../../seed/seed_users') //import seed file & run in browser`s console using axios


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

//Registering a user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          business: req.body.business,
          industry: req.body.industry,
          recruiterStatus: req.body.recruiterStatus,
          city: req.body.city
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
              .catch(err => console.log(err));

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
    business: req.body.business,
    industry: req.body.industry,
    recruiterStatus: req.body.reqruiterStatus,
    city: req.body.city
  });
})




router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
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
      res.status(404).json({ nousersfound: 'No users found in this city'})
    );
});

router.get('/self/:myId', (req, res) => {
  User.findOne({_id: req.params.myId})
    .then(self => {
      return res.json(self)
    })
    .catch( err => {
      res.status(404).json({ nousersfound: 'No users found in this city'})
    }
    );
});

//show all the users
router.get('/alluser', (req, res) => {
  User.find()
    .then(users => res.json(users))
})


//route to -> run seeds!
//user console`s browser & axios this route...
router.get('/seed', (req, res) => {
  doSeeds()
  res.json('Seeding successful!')
})

module.exports = router;