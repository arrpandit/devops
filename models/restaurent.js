const mongoose = require('mongoose');

// Define the schema for the address
const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipcode: String,
  country: String
});

// Define the schema for the user review
const UserReviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String
});

// Define the schema for the restaurant details
const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: AddressSchema,
  features: [String],
  pricing: {
    average_cost: Number,
    currency: String
  },
  user_reviews: [UserReviewSchema],
  book_table: Boolean
});

// Create models based on the schemas
const Address = mongoose.model('Address', AddressSchema);
const UserReview = mongoose.model('UserReview', UserReviewSchema);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = { Address, UserReview, Restaurant };
