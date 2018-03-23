const express = require("express");
const router = express.Router();
const chatController = require('../../controllers/chatController');
// const models = require("../models");

//Grab Controller's

router.get('/', (req, res) => {
    chatController.findAll(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/', (req, res) => {
    chatController.create(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/:id', (req, res) => {
    chatController.update(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.delete('/chat/:id', (req, res) => {
    chatController.remove(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;