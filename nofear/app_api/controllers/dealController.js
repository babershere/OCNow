const db = require('../models');

//Define Methods for the Controller for the article

module.exports = {
    findAll: function(req, res) {
        db.Chat.find(req.query)
        .then(dbChat = > res.json(dbChat))
        .catch(err => res. status(422).json(err));
    }
    create: function(req, res) {
        const deals = {
            title: req.body,
            image: req.body,
            message: req.body
        };
        db.Chat
        .create(chat)
        .then(dbChat => res.json(dbChat))
        .catch(err => res.status(422).json(err));
    }
    remove: function(req, res) {
        db.Chat
        .findById({ _id: req.params.id})
        .then(dbChat => dbChat.remove())
        .then(dbChat => res.json(dbChat))
        .catch(err => res.status(422).json(err));
    }
}