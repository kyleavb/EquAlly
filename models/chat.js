var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var chatSchema = new mongoose.Schema({
  _id: {
    type: ObjectId
  },
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  allyId: {
    type: ObjectId,
    ref: 'User'
  }
  chat: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.Now
  }
})


var Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat;
