const db = require('../models');

//Define Methods for the Controller for the article

module.exports = {
    findAll: function(req, res) {
        db.Deal
        .find(req.query)
        .then(dbChat => res.json(dbChat))
        .catch(err => res. status(422).json(err));
    },
    create: function(req, res) {
        const deals = {
            _id: req.body._id,
            title: req.body.headline.main,
            image: req.body.image,
            description: req.body.description
        };
        db.Deal
        .create(deal)
        .then(dbDeal => res.json(dbDeal))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Deal
        .findById({ _id: req.params.id})
        .then(dbDeal => dbDeal.remove())
        .then(dbDeal => res.json(dbDeal))
        .catch(err => res.status(422).json(err));
    }
};