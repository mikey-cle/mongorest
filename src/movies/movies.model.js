const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  actor: {
    type: String,
    unique: false,
  },
  certified: {
    type: String,
    unique: false,
  },
  rating: {
    type: String,
    unique: false,
  },
  watched: {
    type: String,
    unique: false,
    
  },
})
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
