const express = require("express");
const router = express.Router();
const chatController = require('../../controllers/chatController');
// const models = require("../models");

//Grab Controller's

router.get('/chat', (req, res) => {
    const getChat = chatController.findAll(req, res);
    console.log('Get the Chat: ', getChat);
});

router.post('/chat', (req, res) => {
    const postChat = chatController.create(req, res);
    console.log('Post the Chat: ', postChat);
});

router.put('/chat', (req, res) => {
    const updateChat = chatController.update(req, res);
    console.log('Update the Chat: ', updateChat)
});

router.delete('/chat', (req, res) => {
    const deleteChat = chatController.remove(req, res);
    console.log('Delete the Chat: ', deleteChat);
});

module.exports = router;