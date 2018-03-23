const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

var bcrypt   = require('bcrypt-nodejs');
// Using the schema constructor, create a new Userchema Object
// This is similar to a Sequelize model
const userSchema = new Schema ({
    // Make sure everything is required except Favorites that is optional

    //reys schema **needed for passport**
    local: {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        city: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String,
        city: String
    }
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// This creates our model from above schema, using mongoose's model method
const User = mongoose.model('User', userSchema);
// Export the User Model
module.exports = User;