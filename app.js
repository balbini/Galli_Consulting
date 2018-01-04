const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
  console.log("connected to database " +config.database)
})
// On error
mongoose.connection.on('error', () => {
  console.log("error to database " +config.database)
})

const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

//Cors Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log('server started on port '+port);
});
