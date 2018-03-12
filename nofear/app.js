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


// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));
app.use("/api", apiRoutes)

app.get('/test', (req, res) => {
  console.log('I am just a test');
  const data = {
      id: 1,
      data: "I am a test string"
  }  
  res.send(data);
})

// Listen on port
app.listen(PORT, function() {
    console.log("App running on:  "+ PORT);
  });