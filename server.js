require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const comment = require('./routes/comment');
const post = require('./routes/post');
const profile = require('./routes/profile')
const http = require('http').Server(app)
const io = module.exports.io = require('socket.io').listen(http);
const SocketManager = require('./SocketManager')
const monOpt = {
  useNewUrlParser: true,
  dbName: 'equAlly'
}
//remove _FORTEST when deploying - process.env.MONGODB_URI_FORTEST
mongoose.connect('mongodb://localhost:27017/', monOpt).then(
  () =>{console.log('Connected to Mongoose!')},
  err => {console.log('ERROR:', err)}
);

const PORT = process.env.PORT || 5000;

io.on('connection', SocketManager)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use('/auth', auth);
app.use('/comment', comment)
app.use('/post', post)
app.use('/profile', profile)

app.get('*', (req,res, next) => {
  res.sendFile(__dirname, '/client', 'build', 'index.html');
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

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

module.exports = app;