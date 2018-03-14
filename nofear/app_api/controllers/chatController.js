const db = require('../models');

//Define Methods for the Controller for the article
//Go back and make sure these will grab the information --> Scrape/API

module.exports = {
    findAll: function(req, res) {
        db.Chat.find(req.query)
        .then(dbChat => {
            res.json(dbChat)
        })
        .catch(err => res. status(422).json(err));
    },
    create: function(req, res) {
        const chat = {
            _id: req.body._id,
            userName: req.body.username,
            message: req.body.message
        };
        db.Chat
        .create(chat)
        .then(dbChat => {
            return res.json(dbChat))
        })
        .catch(err => {
            return res.status(422).json(err));
        });
    },
    remove: function(req, res) {
        db.Chat
        .findById({ _id: req.params.id})
        .then(dbChat => dbChat.remove())
        .then(dbChat => res.json(dbChat))
        .catch(err => res.status(422).json(err));
    }
};