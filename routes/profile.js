require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')

var user = require('../models/user')

router.get('/', function(req, res, next) {
	console.log('yeet we in the profile route ');
	res.send('YEET')
});

router.post('/create', function(req, res, next) {
	console.log('You hit the create a journal route!', req.body);
	  user.findByIdAndUpdate(req.body.userId,
	    {$push: {journals: req.body.journals}},
	    {safe: true, upsert: true},
	    function(err, doc) {
	        if(err){
	        console.log(err);
	        }else{
	        //do stuff
	        }
	    }
);
});

module.exports = router;