require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passportConfig.js')
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const http = require('http').Server(app)
const io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/equAlly')

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', auth);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

//app.listen(port, () => console.log(`Listening on port ${port}`));
http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

module.exports = app;
