const express = require("express");
const bodyParser = require("body-parser");
const models = require("./app_api/models");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./app_api/routes/index.routes");
const articleRoutes = require("./app_api/routes/api/article");

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
require('./config/passport')(passport); // pass passport for configuration

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/auth/google', 
    function(req, res, next) {
        console.log('hello');
        next()
    },
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.use(express.static('app_client/build'));
app.use("/api", apiRoutes)
//Configuration for user authentication
mongoose.connect(configDB.url); // connect to our database


// required for passport
app.use(session({
  secret: 'assandtitties', // session secret
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app_api/routes/user.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use("/api", apiRoutes);
app.use('/', articleRoutes);

// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/citystream";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  //   useMongoClient: true
});

// Database configuration
let databaseUrl = "newsdb";
let collections = ["users", "articles", "chat", "events", "deals"];


// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


app.get("/scrape/:city", function(req, res) {
  console.log('The "/scrape" route was hit:', req.params.city)
  request(`https://www.ocregister.com/location/california/orange-county/${req.params.city}/`, function(error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    const $ = cheerio.load(html);
  
    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    let justScraped = [];
    
    $("article.archive-view").each(function(i, element) {
  
      let title = $(element).children('figure').children('a').attr("title");
      let link = $(element).children('figure').children('a').attr("href");
      let date = ($(element).children('div.article-info').children('header').children('div.entry-meta').children('time').text() || Date());
      
      
      if (title && link) {
        // function(error, saved) {
          if (error) {
            console.log(error);
          } else {            
            justScraped.push({
              title: title,
              link: link,
              date: date
            })            
            
          }
      }        
    });
    
    res.status(200).send({data: justScraped});         
    console.log('Number of Stories Scraped: ' + justScraped.length) 
  });
});

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));
app.use("/api", apiRoutes)


// //================= MONGO CHAT ((SERVER.JS )) ================//

// const mongo = require('mongodb').MongoClient;
// const client = require('socket.io').listen(4000).sockets;

// //connect to mongo
// mongo.connect('mongodb://127.0.0.1/', function (err, db) {
//     if (err) {
//         throw err;
//     }
//     console.log('MongoDB connected...');

//     //connect to socket.io

//     client.on('connection', function (socket) {
//         let chat = db.db('mongochat').collection('chat');

//         //create function to send status
//         sendStatus = function (s) {
//             socket.emit('status', s);
//         }

//         //get chats from mongo collection
//         chat.find().limit(100).sort({
//             _id: 1
//         }).toArray(function (err, res) {
//             if (err) {
//                 throw err;
//             }

//             //emit the messages
//             socket.emit('output', res);
//         });

//         //handle input events
//         socket.on('input', function (data) {
//             let name = data.name;
//             let message = data.message;

//             //check for name and message
//             if (name == '' || message == '') {
//                 //send error status
//                 sendStatus('please enter a name and message');

//             } else {
//                 //insert message
//                 chat.insert({
//                     name: name,
//                     message: message
//                 }, function () {
//                     client.emit('output', [data]);

//                     // send status object
//                     sendStatus({
//                         message: 'Message sent',
//                         clear: true
//                     });

//                 });
//             }

//         });

//         //Handle Clear
//         socket.on('clear', function (data) {
//             //remove all chats from collection
//             chat.remove({}, function () {
//                 //emit cleared
//                 socket.emit('cleared');
//             });
//         });

//     });

// });


// //================= END OF MONGO CHAT ((SERVER.JS )) ================//





// Listen on port
app.listen(PORT, function() {
  console.log("App running on:  "+ PORT);
});




