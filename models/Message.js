const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  content: String,
  name: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', MessageSchema);