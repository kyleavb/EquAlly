require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var passport = require('../config/passportConfig.js')
var router = express.Router();

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res){
    console.log('test')
    res.redirect('/');
  }
);

router.get('/facebook', (req, res) => {
  res.send('Hit route')
  console.log('Facebook route hit')
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
