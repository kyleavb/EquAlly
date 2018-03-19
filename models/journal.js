var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var journalSchema = new mongoose.Schema({
  _id: {
    type: ObjectId
  },
  user: {
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
  date: {
    type: Date,
    default: Date.Now
  }
})


var Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal;
