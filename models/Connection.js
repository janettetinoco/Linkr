const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  connected: { 
    type: Array
   },
  pending: {
    type: Array
  },
  blocked: {
    type: Array
  }
});

const Connection = mongoose.model('connections', ConnectionSchema);
module.exports = Connection

