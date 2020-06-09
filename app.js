const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const app = express();

//middlewares

// form data
app.use(bodyParser.urlencoded({
  extended: false
}));

// json body
app.use(bodyParser.json());

// cors
app.use(cors());

// setting up static dir
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
// strategy
require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('connected to database') })
  .catch(err => console.log('Could not connect to database', err));


const users = require('./routes/api/users');

app.use('/api/users', users);

// get build version of the client side
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log('server listening on ' + port); })