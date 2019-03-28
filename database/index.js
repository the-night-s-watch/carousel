const mongoose = require('mongoose');
mongoose.connect('localhost', 'ffpics')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'))
db.once('open', function () {
  console.log('Database connection established')
});

const Schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  url: [String]
})

const Pics = mongoose.model('Pics', Schema);

module.exports = Pics;