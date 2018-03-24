var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var postSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Date.Now
  },
  comments: [{
    type: ObjectId,
    ref: 'Comment'
  }]
})


var Post = mongoose.model('Post', postSchema)

module.exports = Post;
