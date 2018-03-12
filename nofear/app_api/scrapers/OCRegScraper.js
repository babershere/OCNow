// Dependencies
const express = require("express");
// const mongojs = require("mongojs");
// const mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
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

// app.get("/mvscrape", function(req, res) {
//   console.log('The "/mvscrape" route was hit')
//   request("https://www.ocregister.com/location/california/orange-county/mission-viejo/", function(error, response, html) {

//     // Load the HTML into cheerio and save it to a variable
//     // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//     const $ = cheerio.load(html);
  
//     // Select each element in the HTML body from which you want information.
//     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//     // but be sure to visit the package's npm page to see how it works
//     let justScraped = [];
    
//     $("article.archive-view").each(function(i, element) {
  
//       let title = $(element).children('figure').children('a').attr("title");
//       let link = $(element).children('figure').children('a').attr("href");
//       let date = ($(element).children('div.article-info').children('header').children('div.entry-meta').children('time').text() || Date());
      
      
//       if (title && link) {
//         // function(error, saved) {
//           if (error) {
//             console.log(error);
//           } else {            
//             justScraped.push({
//               title: title,
//               link: link,
//               date: date
//             })            
            
//           }
//       }        
//     });
    
//     res.status(200).send({data: justScraped});         
//     console.log('Number of Stories Scraped: ' + justScraped.length) 
//   });
// });




