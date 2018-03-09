const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ChatSchema = new Schema ({
    userName: {
        title: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;