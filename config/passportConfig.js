var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook')
var GoogleUser = require('../models/googleUser')

passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  GoogleUser.findById(id, function(err, user){
    done(err, user);
  })
})

//GOOGLE SETTINGS
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //Update when deployed
    callbackURL: '/auth/google/callback'
  },
  function(acessToken, refreshToken, profile, done){
    console.log(profile)
    GoogleUser.findOne({
      'googleId': profile.id
    },
    function(err,user){
      if(err){
        return done(err)
      }
      if(user){
        return done(null, user)
      }else{
        //creating new user for mongo db
        var newUser = new GoogleUser();
        newUser.googleId = profile.id;
        newUser.displayName = profile.displayName;
        newUser.save(function(err){
          if(err){
            throw err;
          }else{
            return done(null, newUser)
          }
        })
      }
    })
  }
));

//FACEBOOK SETTINGS
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    //Update when deployed
    callbackURL: '/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    FacebookUser.findOne({
      'facebookId': profile.id
    },
    function(err, user){
      if(err){
        return cb(err)
      }
      if(user){
        return cb(null, user)
      }else{
        var newUser = new FacebookUser();
        newUser.facebookId = profile.id
        newUser.save(function(err){
          if(err){
            throw err;
          }else{
            return cb(null, newUser)
          }
        })
      }
    })
  }
))

module.exports = passport;
