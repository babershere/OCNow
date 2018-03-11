const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

var bcrypt   = require('bcrypt-nodejs');
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
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    local: {
        email: String,
        password: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    _id: false
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
modeule.exports = User;