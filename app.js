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
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("This is the new Linkr"));
app.use("/api/users", users);
app.use("/api/connections", connections);
app.use('/api/image', image);



const port = process.env.PORT || 5000;
app.listen(port, () => (`Server is running on port ${port}`));
