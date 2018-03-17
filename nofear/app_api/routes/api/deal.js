const express = require("express");
const router = express.Router();
const dealController = require('../../controllers/dealController');
// const models = require("../models");

//Grab Controller's

router.get('/deal/:id', (req, res) => {
    const uniqDeal = dealController.findOne(req, res);
    console.log('Unique Deal: ', uniqDeal);
    res.send('Unique Deal: ');
});

router.get('/deal', (req, res) => {
    const allDeals = dealController.findAll(req, res);
    console.log('All of the Deals: ', allDeals);
    res.send('All of the Deals: ');
});

router.post('/deal', (req, res) => {
    const postDeal = dealController.create(req, res);
    console.log('Posted Deals: ', postDeal);
    res.send('Posted Deals: ');
});

router.put('/deal/:id', (req, res) => {
    const updateDeal = dealController.update(req, res);
    console.log('Updated Deals: ', updateDeal);
    res.send('Updated Deals: ');
});

router.delete('/deal/:id', (req, res) => {
    const deleteDeal = dealController.remove(req, res);
    console.log('Deleted Deal: ', deleteDeal);
    res.send('Deleted Deal: ');
});

module.exports = router;