const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const articleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  },
  publication: {
    type: Date,
    required: true
  },
  // Object array of favorite articles potentially saved
  favorites: [{
    title: String,
    url: String,
    date: Date,
  }],
});
// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model('Article', articleSchema);
// Export the Article Model
module.exports = Article;