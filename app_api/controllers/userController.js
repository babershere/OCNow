const User = require('../models/users');

//Define Methods for the Controller for the article

module.exports = {
    findbyId: function (req, res) {
        return new Promise((resolve, reject) => {
            User
                .find({
                    _id: req.params.id
                })
                .then(dbUser => {
                    resolve(dbUser)
                })
                .catch(err => reject(err));
        });
    },
    create: function (req, res) {
        console.log(User);
        return new Promise((resolve, reject) => {
            const event = {
                email: req.body.email
            };
            User
                .create(event)
                .then(dbUser => {
                    resolve(dbUser)
                })
                .catch(err => reject(err));
        });
    },
    remove: function (req, res) {
        return new Promise((resolve, reject) => {
            User
                .findById({
                    _id: req.params.id
                })
                .then(dbUser => dbUser.remove())
                .then(dbUser => {
                    resolve(dbUser)
                })
                .catch(err => reject(err));
        });
    }
};