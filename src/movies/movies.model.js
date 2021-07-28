const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,   
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
        type: Boolean,
        default: false,
    }
})
const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;