var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').OAuth2Strategy;
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
    callbackURL: 'http://localhost:3000/auth/google/callback'
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

module.exports = passport;
