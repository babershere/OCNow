const express = require("express");
const router = express.Router();
const dealController = require('../../controllers/dealController');
// const models = require("../models");

//Grab Controller's

router.get('/deal/:id', (req, res) => {
    const uniqDeal = dealController.findOne(req, res);
    console.log('Unique Deal', uniqDeal);
});

router.get('/deal', (req, res) => {
    const allDeals = dealController.findAll(req, res);
    console.log('All of the Deals: ', allDeals);
});

router.post('/deal', (req, res) => {
    const postDeal = dealController.create(req, res);
    console.log('Posted Deals: ', postDeal);
});

router.put('/deal/:id', (req, res) => {
    const updateDeal = dealController.update(req, res);
    console.log('Updated Deals: ', updateDeal);
});

router.delete('/deal/:id', (req, res) => {
    const deleteDeal = dealController.remove(req, res);
    console.log('Deleted Deal: ', deleteDeal);
});

module.exports = router;