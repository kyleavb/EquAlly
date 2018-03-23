require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router();
var passport = require('../config/passportConfig')
const Post = require('../models/post')
var user = require('../models/user')

router.get('/', (req, res) => {
  console.log('root posts route')
})

router.post('/create', (req, res) => {
  Post.create({ userId: '', title: '', content: ''}, (err, post) =>{
    console.log('created post', post)
  }).then(()=>{
    console.log('callback test')
    res.send(post)
  })
})

module.exports = router;
