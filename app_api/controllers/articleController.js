const db = require('../models');

//Define Methods for the Controller for the article

//Go back and make sure these will grab the information --> Scrape/API
module.exports = {
    findAll: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Article
                .find(req.query)
                .sort({
                    date: -1
                })
                .then(dbArticle => {
                    resolve(dbArticle)
                })
                .catch(err => reject(err));
        });
    },
    create: function (req, res) {
        return new Promise((resolve, reject) => {
            const article = {
                title: req.body.headline.main,
                url: req.body.web_url
            };
            db.Article
                .create(article)
                .then(dbArticle => {
                    resolve(dbArticle)
                })
                .catch(err =>
                    reject(err));
        });
    },
    update: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Article
                .findOneAndUpdate({
                    _id: req.params.id
                }, req.body)
                .then(dbArticle => {
                    resolve(dbArticle);
                })
                .catch(err =>
                    reject(err));
        });
    },

    remove: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Article
                .findById({
                    _id: req.params.id
                })
                .then(dbArticle => dbArticle.remove())
                .then(dbArticle => {
                    resolve(dbArticle)
                })
                .catch(err =>
                    reject(err));
        });
    }
};