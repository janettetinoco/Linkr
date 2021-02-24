const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({


    connected: {
      alexeyId: [michaelid, janetteId],
      jonathanId: [janetteId],
      janetteId: [jonathanId, alexeyId],
      michaelId: [alexeyId]
    },
    pending: {
      alexeyId: [jonathanId],
      jonathanId: [alexeyId]
    },
    blocked: {
      alexeyId: []
    }
  })

const Connection = mongoose.model('connections', UserSchema);
module.exports = Connection;