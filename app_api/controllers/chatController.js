const db = require('../models');

//Define Methods for the Controller for the article
//Go back and make sure these will grab the information --> Scrape/API

module.exports = {
    findAll: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Chat
                .find(req.query)
                .then(dbChat => {
                    resolve(dbChat)
                })
                .catch(err => reject(err));
        });
    },
    create: function (req, res) {
        return new Promise((resolve, reject) => {
            const chat = {
                userName: req.body.username,
                message: req.body.message
            };
            db.Chat
                .create(chat)
                .then(dbChat => {
                    resolve(dbChat)
                })
                .catch(err => reject(err));
        });
    },
    remove: function (req, res) {
        return new Promise((resolve, reject) => {
            db.Chat
                .findById({
                    _id: req.params.id
                })
                .then(dbChat => dbChat.remove())
                .then(dbChat => {
                    resolve(dbChat)
                })
                .catch(err => reject(err));
        });
    }
};