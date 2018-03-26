require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router();
var passport = require('../config/passportConfig')
const Post = require('../models/post')
var user = require('../models/user')

router.get('/', (req, res) => {
  Post.find().lean().then((data) => {
    res.send(data)
  })
})

router.get('/:id', (req, res) => {
  console.log('hitting get specific')
  Post.findOne({_id:req.params.id}).then(data =>{
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
