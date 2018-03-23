const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userController');
// const models = require("../models");

//Grab Controller's

router.get('/:id', (req, res) => {
    userController.findbyId(req, res).then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get('/', (req, res) => {
    userController.findAll(req, res).then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/', (req, res) => {
    userController.create(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/:id', (req, res) => {
    userController.update(req, res).then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
    userController.remove(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;