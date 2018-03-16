const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userController');
// const models = require("../models");

//Grab Controller's

router.get('/user/:id', (req, res) => {
    const uniqUser = userController.findOne(req, res);
    console.log('Unique User: ', uniqUser);
    res.send('Unique User: ');
});

router.get('/user', (req, res) => {
    const allUsers = userController.findAll(req, res);
    console.log('All of the Users: ', allUsers);
    res.send('All of the Users: ');
});

router.post('/user', (req, res) => {
    const postUser = userController.create(req, res);
    console.log('Posted User: ', postUser);
    res.send('Posted User: ');
});

router.put('/user/:id', (req, res) => {
    const updateUser = userController.update(req, res);
    console.log('Updated Chat: ', updateUser);
    res.send('Updated Chat: ');
});

router.delete('/article/:id', (req, res) => {
    const deleteUser = userController.remove(req, res);
    console.log('Deleted User: ', deleteUser);
    res.send('Deleted User: ');
});

module.exports = router;