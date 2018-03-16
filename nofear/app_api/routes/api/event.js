const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/eventController');
// const models = require("../models");

//Grab Controller's

router.get('/event/:id', (req, res) => {
    const uniqueEvent = eventController.findOne(req, res);
    console.log("Unique Event: ", uniqueEvent);
});

router.get('/event', (req, res) => {
    const allEvents = eventController.findAll(req, res);
    console.log("All of the Events: ", allEvents);
});

router.post('/event', (req, res) => {
    const postEvent = eventController.create(req, res);
    console.log('Posted events: ', postEvent);
});

router.put('/event/:id', (req, res) => {
    const updateEvent = eventController.update(req, res);
    console.log('Updated Events: ', updateEvent);
});

router.delete('/event/:id', (req, res) => {
    const deleteEvent = eventController.remove(req, res);
    console.log('Deleted Event: ', deleteEvent);
});

module.exports = router;