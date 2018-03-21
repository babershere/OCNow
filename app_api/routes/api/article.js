const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/articleController');
// const models = require('../models');

//Grab Controller's

router.get('/article/:id', (req, res) => {
    const uniqArticle = articleController.findOne(req, res);
    console.log('Unique Articles: ', uniqArticle);
    res.send('Unique Articles: ');
});

router.get('/article', (req, res) => {
    const allArticles = articleController.findAll(req, res);
    console.log('All of the articles are mine', allArticles);
    res.send('Get the Articles: ');
});

router.post('/article', (req, res) => {
    const postArticle = articleController.create(req, res);
    console.log('Posted articles: ', postArticle);
    res.send('Posted articles: ');
});

router.put('/article/:id', (req, res) => {
    const updateArticle = articleController.update(req, res);
    console.log('Updated Article: ', updateArticle);
    res.send('Updated Article: ');
});

router.delete('/article/:id', (req, res) => {
    const deleteArticle = articleController.remove(req, res);
    console.log('Deleted Article: ', deleteArticle);
    res.send('Deleted Article: ');
});

module.exports = router;