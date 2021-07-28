const { Router } = require('express');
const movieRouter = Router();
const {createMovie} = require('./movie.controllers');
movieRouter.post('/movies', createMovie);
module.exports = movieRouter;