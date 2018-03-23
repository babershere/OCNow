const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/articleController');
// const models = require('../models');

//Grab Controller's
router.get('/', (req, res) => {
    articleController.findAll(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});
router.get('/:id', (req, res) => {
    articleController.findOne(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});



router.post('/', (req, res) => {
    articleController.create(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/:id', (req, res) => {
    articleController.update(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
    articleController.remove(req, res)
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;