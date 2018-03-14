const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    // date: {
    //     type: Date,
    //     required: true
    // }
})
// This creates our model from the above schema, using mongoose's model method
const Event = mongoose.model('Event', eventSchema);
// Export the Event Model
module.exports = Event;