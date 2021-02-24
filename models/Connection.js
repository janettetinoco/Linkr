const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
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

// const connectionTable = mongoose.model('connections', connectionSchema);
// module.exports = connectionTable;

module.exports = connectionSchema


// the GOAL ->>
//connected: { 
//   alexeyId: [jonathanId, janetterId], 
//   michaelId: [], 
// }

// const ConnectionsSchema = new Schema({
//     userId: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     blocked: [{
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     }],
//     pending: [{
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     }],
//     confirmed: [{
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     }]
// , {
//     timestamps: true
// }); 