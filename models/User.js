const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import connectionTable from './Connection.js'
const Connection = require('./Connection').schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
    industry: {
        type: String,
        required: true
    },
    education: {
        type: Array
    },
    aboutMe: {
        type:  String
    },
    linkedIn: {
        type: String
    },
    image_url: {
        type: String
    },
    recruiterStatus: {
        type: Boolean,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    connection: Connection
})

const User = mongoose.model('users', UserSchema);
module.exports = User;