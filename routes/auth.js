require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router();
var passport = require('../config/passportConfig')
var user = require('../models/user')


router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res){
    res.location('http://localhost:5000/');
  }
);

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res){
    res.redirect('/')
  }
)

router.post('/fakelogin', (req, res) => {
  user.find().then( data => {
    res.send(data[req.body.num])
  })

})

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
