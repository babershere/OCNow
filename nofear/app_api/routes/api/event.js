const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/eventController');
// const models = require("../models");

//Grab Controller's

router.get('/event/:id', (req, res) => {
    const uniqueEvent = eventController.findOne(req, res);
    console.log("Unique Event: ", uniqueEvent);
    res.send('Unique Event: ');
});

router.get('/event', (req, res) => {
    const allEvents = eventController.findAll(req, res);
    console.log("All of the Events: ", allEvents);
    res.send('All of the Events: ');
});

router.post('/event', (req, res) => {
    const postEvent = eventController.create(req, res);
    console.log('Posted events: ', postEvent);
    res.send('Posted events: ');
});

router.put('/event/:id', (req, res) => {
    const updateEvent = eventController.update(req, res);
    console.log('Updated Events: ', updateEvent);
    res.send('Updated Events: ');
});

router.delete('/event/:id', (req, res) => {
    const deleteEvent = eventController.remove(req, res);
    console.log('Deleted Event: ', deleteEvent);
    res.send('Deleted Event: ');
});

module.exports = router;