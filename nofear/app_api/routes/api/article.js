const express = require("express");
const router = express.Router();
const articleController = require('../../controllers/articleController');
// const models = require("../models");

//Grab Controller's

router.get('/article/:id', (req, res) => {
    const uniqArticle = articleController.findOne(req, res);
    console.log("I am uniq: ", uniqArticle);
    res.send('samesamesamesamesame');
});

router.get('/article', (req, res) => {
    const allArticles = articleController.findAll(req, res);
    console.log("All of the articles are mine", allArticles);
    res.send('hey there');
});

router.post('/article', (req, res) => {
    const articlePost = articleController.create(req, res);
    console.log("Posted articles", articlePost);
});

router.put('/article/:id', (req, res) => {
    const updateArticle = articleController.update(req, res);
    console.log("Updated Article: ", updateArticle);
});

router.delete('/article/:id', (req, res) => {
    const deleteArticle = articleController.remove(req, res);
    console.log("Deleted Article: ", deleteArticle);
});

module.exports = router;