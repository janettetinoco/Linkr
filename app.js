const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const connections = require("./routes/api/connections");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const image = require('./routes/api/image');

//socket 
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Message = require('./models/Message');

//implemet p2p socket
var p2pserver = require('socket.io-p2p-server').Server
io.use(p2pserver)



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => ("Connected to MongoDB successfully"))
    .catch(err => (err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'4MB'}));

app.get("/", (req, res) => res.send("This is the new Linkr"));
app.use("/api/users", users);
app.use("/api/connections", connections);
app.use('/api/image', image);



const port = process.env.PORT || 5000;
// app.listen(port, () => (`Server is running on port ${port}`));


//socket 
// io.on('connection', (socket) => {

//   // Get the last 10 messages from the database.
//   Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
//     if (err) return console.error(err);

//     // Send the last messages to the user.
//     socket.emit('init', messages);
//   });

//   // Listen to connected users for a new message.
//   socket.on('message', (msg) => {
//     // Create a message with the content and the name of the user.
//     const message = new Message({
//       content: msg.content,
//       name: msg.name,
//     });

//     // Save the message to the database.
//     message.save((err) => {
//       if (err) return console.error(err);
//     });

//     // Notify all other users about a new message.
//     socket.broadcast.emit('push', msg);
//   });
// });


//socket p2p
io.on('connection', function (socket) {
  socket.on('peer-msg', function (data) {
    console.log('Message from peer: %s', data)

    //create msg
    const message = new Message({
      content: msg.content,
      name: msg.name,
    });

    //save msg
    message.save((err) => {
      if (err) return console.error(err);
    });

    //broadcast
    socket.broadcast.emit('peer-msg', data)
  })

  // socket.on('peer-file', function (data) {
  //   console.log('File from peer: %s', data)
  //   socket.broadcast.emit('peer-file', data)
  // })

  // socket.on('go-private', function (data) {
  //   socket.broadcast.emit('go-private', data)
  // })
})


http.listen(port, () => {
  console.log('listening on *:' + port);
});