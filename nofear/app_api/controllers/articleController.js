const db = require('../models');

//Define Methods for the Controller for the article

//Go back and make sure these will grab the information --> Scrape/API
module.exports = {
    findAll: function(req, res) {
        db.Article
        .find(req.query)
        .sort({ date: -1})
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422). json(err));
    },
    create: function(req, res) {
        const article = {
            _id: req.body._id,
            title: req.body.headline.main,
            url: req.body.web_url
        };
        db.Article
            .create(article)
            .then(dbArticle => {
                return res.json(dbArticle)
            })
            .catch(err => {
                return res.status(422).json(err);
            });
    },
    update: function(req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(function(dbArticle) {
                return res.json(dbArticle);
            })
            .catch(function(err) {
                return res.status(422).json(err);
            });
    },
    remove: function(req, res) {
        db.Article
        .findById({ _id: req.params.id})
        .then(dbArticle => dbArticle.remove())
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err))
    }

};