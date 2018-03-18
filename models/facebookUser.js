var mongoose = require('mongoose');

var facebookUserSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
  }
})


var FacebookUser = mongoose.model('FacebookUser', facebookUserSchema)

module.exports = FacebookUser;
