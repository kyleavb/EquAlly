require('dotenv').config()
var express = require('express')
var router = express.Router();
var User = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

router.post('/login', (req, res, next) => {
  let hashedPass = ''
  let passwordMatch = false

  User.findOne({email: req.body.email}, function(err, user){
      console.log(user)
      hashedPass = user.password 
      passwordMatch = bcrypt.compareSync(req.body.password, hashedPass)
      if(passwordMatch){
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 24
          })
          res.json({user, token})
      }else{
          console.log("Passwords do not match")
          res.status(401).json({
              error:true,
              message: "Email/Password is incorrect"
          })
      }
  })
});

router.post('/signup', (req, res, next) => {
  console.log('hit')
  User.findOne({ email: req.body.email}).then((err, user) =>{
    console.log('first', user);
      if(user){
          res.redirect('/auth/signup')
      }else{
          User.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              pronouns: req.body.pronouns, 
              email: req.body.email,
              password: req.body.password
          }).then( (err, user) => {
              console.log('After Create', user)
              if(err){
                  console.log('Rec Error')
                  res.send(err)
              }else{
                console.log('IN ELSE SO NO ERROR')
                  var token = jwt.sign(user, process.env.JWT_SECRET, {
                      expiresIn: 60 * 60 * 24
                  })
                  console.log(token)
                  res.json({user, token})
              }
          })
      }
  })
})

//Testing purpose only
router.post('/fakelogin', (req, res) => {
  user.find().then( data => {
    res.send(data[req.body.num]);
  });
});

router.get('/user', function(req, res, next){
  if(req.user){
    return res.json({user: req.user})
  }else{
    return res.json({user:null})
  }
})

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/')
})

module.exports = router;
