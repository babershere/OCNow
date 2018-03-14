const db = require('../models');

//Define Methods for the Controller for the article


//Go back and make sure these will grab the information --> Scrape/API
module.exports = {
    findAll: function(req, res) {
        db.Event
        .find(req.query)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422). json(err));
    },
    create: function(req, res) {
        const event = {
            _id: req.body._id,
            title: req.body.headline.main,
            url: req.body.web_url
            description: req.body.description
        };
        db.Event
            .create(event)
            .then(dbEvent => {
                return res.json(dbEvent)
            })
            .catch(err => {
                return res.status(422).json(err);
            });
    },
    update: function(req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(function(dbEvent) {
                return res.json(dbEvent);
            })
            .catch(function(err) {
                return res.status(422).json(err);
            });
    },
    remove: function(req, res) {
        db.Event
        .findById({ _id: req.params.id})
        .then(dbEvent => dbEvent.remove())
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err))
    }
};