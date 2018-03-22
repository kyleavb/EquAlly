var mongoose = require('mongoose')
var user = require('./models/user')
mongoose.connect('mongodb://localhost/equAlly')

user.create([
  {
  firstName: 'Emily',
  lastName: 'Garrett',
  username: 'LemonButter',
  pronouns: 'she/her',
  facebookId: '123',
  googleId: '456',
  zipcode: 98117,
  ally: true,
  admin:true
},{
  firstName: 'Daniel',
  lastName: 'Heyward',
  username: "lilshit",
  pronouns: 'he/him',
  facebookId: '321',
  googleId: '654',
  zipcode: 98117,
  ally: true,
  admin:true
},{
  firstName: 'Kyle',
  lastName: 'Van Bergen',
  username: 'Chewy',
  pronouns: 'he/him',
  facebookId: '1',
  googleId: '2',
  zipcode: 98117,
  ally: true,
  admin: true
},{
  firstName: 'Bob',
  lastName: 'McGee',
  username: 'BM',
  pronouns: 'they/them',
  facebookId: '2',
  googleId: '1',
  zipcode: 98117,
  ally: false,
  admin: false
},{
  firstName: 'Jessica',
  lastName: 'Smith',
  username: 'JS',
  pronouns: 'they/them',
  facebookId: '3',
  googleId: '3',
  zipcode: 98117,
  ally: false,
  admin: false
}])
