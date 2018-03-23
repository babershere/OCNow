const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the schema constructor, create a new Userchema Object
// This is similar to a Sequelize model
const dealsSchema = new Schema({
    // Make sure everything is required except Favorites that is optional
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
});
// This creates our model from above schema, using mongoose's model method
const Deal = mongoose.model("Deal", dealsSchema);
// Export the Deal Model
module.exports = Deal;