const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/eventController');
// const models = require("../models");

//Grab Controller's

router.get('/:id', (req, res) => {
    eventController.findOne(req, res)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get('/', (req, res) => {
    eventController.findAll(req, res)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post('/', (req, res) => {
    eventController.create(req, res)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/:id', (req, res) => {
    const updateEvent = eventController.update(req, res)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.delete('/:id', (req, res) => {
    const deleteEvent = eventController.remove(req, res)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;