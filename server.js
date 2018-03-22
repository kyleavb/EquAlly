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

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/client/src/TestFiles/index.html')
})

app.post('/comment/create', function(req,res) {
	// route should add comment & add user 2 comment

	// should also find user, push new comment 2 comments

	// send back as res
})

io.on('connection', socket => {
  console.log(`User #${socket.id} connected`)
  socket.on('disconnect', () => {
    console.log(`User #${socket.id} disconnected`)
  })
})


//app.listen(port, () => console.log(`Listening on port ${port}`));
http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

module.exports = app;
