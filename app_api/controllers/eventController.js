const db = require('../models');

//Define Methods for the Controller for the article


//Go back and make sure these will grab the information --> Scrape/API
module.exports = {
    findAll: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Event
                .find(req.query)
                .then(dbEvent => {
                    resolve(dbEvent)
                })
                .catch(err => reject(err));
        });
    },
    create: function (req, res) {
        return new Promise((resolve, reject) => {
            const event = {
                title: req.body.headline.main,
                url: req.body.web_url,
                description: req.body.description
            };
            db.Event
                .create(event)
                .then(dbEvent => {
                    resolve(dbEvent)
                })
                .catch(err => reject(err));

        });
    },
    update: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Event
                .findOneAndUpdate({
                    _id: req.params.id
                }, req.body)
                .then(function (dbEvent) {
                    resolve(dbEvent)
                })
                .catch(err => reject(err));
        });
    },
    remove: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Event
                .findById({
                    _id: req.params.id
                })
                .then(dbEvent => dbEvent.remove())
                .then(dbEvent => {
                    resolve(dbEvent)
                })
                .catch(err => reject(err));
        });
    }
};