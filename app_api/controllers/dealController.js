const db = require('../models');

//Define Methods for the Controller for the article

module.exports = {
    findAll: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Deal
                .find(req.query)
                .then(dbChat => {
                    resolve(dbChat)
                })
                .catch(err => reject(err));
        });
    },
    create: function (req, res) {
        return new Promise((resolve, reject) => {
            const deals = {
                title: req.body.headline.main,
                image: req.body.image,
                description: req.body.description
            };
            db.Deal
                .create(deal)
                .then(dbDeal => {
                    resolve(dbDeal)
                })
                .catch(err => reject(err));
        });
    },
    remove: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Deal
                .findById({
                    _id: req.params.id
                })
                .then(dbDeal => dbDeal.remove())
                .then(dbDeal => {
                    resolve(dbDeal)
                })
                .catch(err => reject(err));
        });
    }
};