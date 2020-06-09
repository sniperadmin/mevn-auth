const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User')

const key = require('../../config/keys').secret;
/** 
* @route POST api/users/register
* @desc Register
* @access Public
*/

router.post('/register', (req, res) => {
  let {
    name,
    username,
    email,
    password,
    confirmPassword
  } = req.body;

  if(password !== confirmPassword) {
    return res.status(400).json({
      message: 'password not matching!'
    })
  }

  // check username
  User.findOne({ username }).then( (user) => {
    if (user) {
      return res.status(400).json(
        { message: 'Username already taken' }
      )
    }
  })
  // check email
  User.findOne({ email }).then( (user) => {
    if (user) {
      return res.status(400).json(
        { message: 'email already taken' }
      )
    }
  })

  let newUser = new User({
    name,
    username,
    password,
    email,
  });

  // bycrypt
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) console.log(err);
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json(
          { success: true, message: 'Created User Successfully' }
        )
      })
    })
  })

  /** 
* @route POST api/users/register
* @desc Register
* @access Public
*/

})

/** 
* @route POST api/users/login
* @desc Login
* @access Public
*/

router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(404).json(
          { message: "Username not found", success: false }
        )
      }
      bcrypt.compare(req.body.password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              _id: user._id,
              name: user.name,
              email: user.email,
              username: user.username
            }
            jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
              res.status(200).json(
                {
                  success: true,
                  token: `Bearer ${token}`,
                  message: "logged in!",
                  user: user
                }
              )
            })
          } else {
            res.status(404).json(
              { success: false, message: "incorrect password!" }
            )
          }
        })
    })
})

/** 
* @route POST api/users/profile
* @desc get user data
* @access Private
*/

router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  return res.json({ user: req.user });
})

module.exports = router;