var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
  _id : {
    type: ObjectId
  }
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  pronouns: {
    type: String,
    required: true
  },
  facebookId: {
    type: String,
    unique: true
  },
  googleId: {
    type: String,
    unique: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  ally: {
    type: Boolean,
    default: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  posts: [{
    type: ObjectId,
    ref: 'Post'
  }],
  journals: [{
    type: ObjectId,
    ref: 'Journal'
  }],
  chats: [{
    type: ObjectId,
    ref: 'Chat'
  }],
  comments: [{
    type: ObjectId,
    ref: 'Comment'
  }]
})


var User = mongoose.model('User', userSchema)

module.exports = User;
