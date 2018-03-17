const express = require("express");
const router = express.Router();
const dealController = require('../../controllers/dealController');
// const models = require("../models");

//Grab Controller's

router.get('/:id', (req, res) => {
    dealController.findOne(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get('/', (req, res) => {
    dealController.findAll(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/', (req, res) => {
    dealController.create(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/:id', (req, res) => {
    dealController.update(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
    const deleteDeal = dealController.remove(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;