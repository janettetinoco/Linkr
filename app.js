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
app.listen(port, () => (`Server is running on port ${port}`));


//messaging feature
io.on('connection', (socket) => {
  console.log("user connected"); 
    // Message.find().sort({createdAtt: -1}).limit(10).exec((err, messages) => {
    //     if (err) return console.error(err);

    //     socket.emit('init', messages)
    // });

    // socket.on('message', (msg) => {
    //     const message = new Message({
    //         content: msg.content,
    //         name: msg.name,
    //     });

    //     message.save((err) => {
    //         if (err) return console.error(err)
    //     });

    //     socket.broadcast.emit('push', msg);
    // });
});

http.listen(500, () => {
  console.log('listening on *:' + 500);
});