// Dependencies
const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const router = express.Router();
const axios = require('axios');

// Initialize Express
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
