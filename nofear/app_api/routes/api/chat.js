const express = require("express");
const router = express.Router();
const articleController = require('../../controllers/articleController');
// const models = require("../models");

//Grab Controller's

router.get('/chat', (req, res) => {
    const getChat = chatController.findAll(req, res);
    console.log('Get the Chat: ', getChat);
});

router.post('/chat', (req, res) => {
    const chatPost = chatController.create(req, res);
    console.log('Post the Chat: ', chatPost);
});

router.put('/chat', (req, res) => {
    const chatUpdate = chatController.update(req, res);
    console.log('Update the Chat: ', chatUpdate)
});

router.delete('/chat', (req, res) => {
    const chatDelete = chatController.remove(req, res);
    console.log('Delete the Chat: ', chatDelete);
});