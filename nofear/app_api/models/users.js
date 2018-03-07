const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the schema constructor, create a new Userchema Object
// This is similar to a Sequelize model
const userSchema = new Schema ({
    // Make sure everything is required except Favorites that is optional
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // Object array of favorite articles potentially saved
    favorites: [{
        title: String,
        url: String,
        date: Date,
    }],
    _id: false
});
// This creates our model from above schema, using mongoose's model method
const User = mongoose.model('User', userSchema);
// Export the User Model
modeule.exports = User;