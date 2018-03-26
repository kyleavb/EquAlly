require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router();
var passport = require('../config/passportConfig')
const Post = require('../models/post')
var user = require('../models/user')

router.get('/', (req, res) => {
  console.log('Get all Post Route')
  Post.find().then((data) => {
    console.log('returning', data.length)
    res.send(data)
  })
})

router.post('/create', (req, res) => {
  console.log('You hit the post route!', req)
  Post.create({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  }, (err, post) =>{
    console.log('created post', post)
    res.send(post)
  })
})

module.exports = router;
