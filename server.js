require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('./config/passportConfig.js')
var mongoose = require('mongoose');
var auth = require('./routes/auth');
var cors = require('cors')

mongoose.connect('mongodb://localhost/equAlly')

var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({origin: "http://localhost:3000"}))
app.use('/auth', auth);


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.get('/test', (req, res) => {
  console.log('hit /test')
  res.send('worked')
})

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/client/src/TestFiles/index.html')
})

io.on('connection', socket => {
  console.log(`User #${socket.id} connected`)
  socket.on('disconnect', () => {
    console.log(`User #${socket.id} disconnected`)
  })
})

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

// app.listen(PORT, () => {
//   console.log('EquAlly is running on: ', PORT)
// })



module.exports = app;
