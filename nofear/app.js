const express = require("express");
const bodyParser = require("body-parser");
const models = require("./app_api/models");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./app_api/routes/index.routes");

const mongojs = require("mongojs");
const mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
const request = require("request");
const cheerio = require("cheerio");
const router = express.Router();
const axios = require('axios');
const passport = require ("passport");
const flash = require ('connect-flash');
const session = require('express-session');
const configDB = require('./config/database.js');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));
app.use("/api", apiRoutes)
app.use(flash());
//Configuration for user authentication
require('./config/passport')(passport); // pass passport for configuration
mongoose.connect(configDB.url); // connect to our database


// required for passport
app.use(session({
  secret: 'assandtitties', // session secret
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./app_api/routes/user.js')(app, passport); // load our routes and pass in our app and fully configured passport


router.get('/scrape', (req, res) => {
  console.log('Love the server');
  res.send('I love you.');
});

app.get('/hello', (req, res) => {
  console.log('hello worked')
  res.status(200).send({message: 'worked too'})
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   //   useMongoClient: true
// });

// Database configuration
// let databaseUrl = "newsdb";
// let collections = ["users", "articles", "blog", "replies"];


// Hook mongojs configuration to the db variable
// const db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// Listen on port
app.listen(PORT, function() {
  console.log("App running on:  "+ PORT);
});