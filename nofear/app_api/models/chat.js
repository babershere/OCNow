const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const chatSchema = new Schema ({
    userName: {
        title: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
// This creates our model from the above schema, using mongoose's model method
const Chat = mongoose.model('Chat', chatSchema);
// Export the Chat model
module.exports = Chat;