var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 2
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  pronouns: {
    type: String,
    required: true
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

userSchema.set('toJson', {
  transform: function(doc, ret, options){
      let returnJson = {
          _id: ret._id,
          email: ret.email,
          name: ret.name
      }
      return returnJson
  }
})

userSchema.methods.authenticated = function(password, cb){
  bcrypt.compare(password, this.password, function(err, res){
      if(err){
          cb(err)
      }else{
          cb(null, res ? this : false)
      }
  })
}

userSchema.pre('save', function(next){
  console.log('pass', this.password)
  var hash = bcrypt.hashSync(this.password, 12)
  this.password = hash
  next()
})

var User = mongoose.model('User', userSchema)

module.exports = User;
