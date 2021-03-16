const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Connection = require('./Connection').schema
const ChatSchema = new mongoose.Schema({
  users:{
    type: Array
  },
  messages: Messages,
  timestamps: true
})


const Chat = mongoose.model('chats', ChatSchema);
module.exports = Chat;