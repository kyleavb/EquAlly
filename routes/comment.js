require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var user = require('../models/user')
var User = require('../models/user.js')
var Comment = require('../models/comment.js');

router.get('/comment', (req, res) => {
	console.log('THIS IS IT')
})

router.post('/create', (req, res) => {
	console.log(req.body.comment);
	console.log('we are in the comment/create route!');
	// route should add comment & add user 2 comment
	Comment.create({comment: req.body.comment}, function(err, comment) {
	    console.log('this is what was added maybe: ' + comment);
  	})
})


module.exports = router;