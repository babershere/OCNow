const db = require('../models');

//Define Methods for the Controller for the article

module.exports = {
    findbyId: function(req, res) {
        return new Promise((resolve, reject) => {
        db.User
        .find(req.params.id)
        .then(dbUser => {
            resolve(dbUser)
        })
        .catch(err => reject(err));
        });
    },
    create: function(req, res) {
        return new Promise((resolve, reject) => {
        const event = {
            _id: req.body._id,
            userName: req.body.username
        };
        db.User
            .create(event)
            .then(dbUser => {
                resolve(dbUser)
            })
            .catch(err => reject(err));
        });
    },
    remove: function(req, res) {
        return new Promise((resolve, reject) => {
        db.User
        .findById({ _id: req.params.id})
        .then(dbUser => dbUser.remove())
        .then(dbUser => {
            resolve(dbUser)
        })
        .catch(err => reject(err));
    });
    }
};