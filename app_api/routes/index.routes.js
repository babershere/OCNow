// //API ROUTES WILL BE PUSHED TO THIS MAKE IT SO ITS CLEAN AND GOOD AND WORKING LATER
// const path = require("path");
// const router = require("express").Router();
// // const apiRoutes = require("./api");
// const user = require('./api/user');
// const event = require('./api/event');
// const chat = require('./api/chat');
// const deal = require('./api/deal');
// const article = require('./api/article');


// router.use('/user', user);
// router.use('/event', event);
// router.use('/chat', chat);
// router.use('/deal', deal);
// router.use('/article', article);

// // If no API routes are hit, send the React app
// router.use((req, res) =>a
// res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

// module.exports = router;

const express = require("express");
const router = express.Router();
const models = require("../models");
const helpers = require("../helpers/ctrl.helpers");

// /* 
//     USER ROUTES 
// */
// //Get a User 
router.get("/user/:id", (req, res) => {
  if (!req.params.id) {
    helpers.sendJsonError(res, "Must provide valid username", 400)
  } else {
    models.users.findById(req.params.id)
      .then(resp => {
        res.json(resp)
      })
      .catch(err => {
        helpers.sendJsonError(res, err.toString(), 404)
        console.error(err);
      })
  }
})

// //Get all users
router.get("/users", (req, res) => {
  models.users.findAll()
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      helpers.sendJsonError(res, err.toString(), 400)
      console.error(err);
    })
})

//Create a User
router.post("/user", (req, res) => {
  const use = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }
  if (use.firstName && use.lastName && use.email && use.password) {
    models.users.create(emp)
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        helpers.sendJsonError(res, err.toString(), 400)
        console.error(err);
      })
  } else {
    helpers.sendJsonError(res, "Please provide a first name, last name, age, and job title property to create an employee", 400);
  }
})

//User Update
router.put("/user/:id", (req, res) => {
  if (!req.params.id) {
    helpers.sendJsonError(res, "Must Provide a Valid ID", 400)
    return;
  }
  const use = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }
  if (req.body.firstName && req.body.lastName && req.body.email && req.body.password) {
    models.users.update(emp, {
        where: {
          id: req.params.id
        }
      })
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        helpers.sendJsonError(res, err.toString(), 400)
        console.error(err);
      })
  } else {
    helpers.sendJsonError(res, "Please provide a first name, last name, email, and password to create an employee", 400);
  }
});

module.exports = router;