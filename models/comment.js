var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var commentSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  postId: {
    type: ObjectId,
    ref: 'Post'
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.Now
  }
})


var Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;
