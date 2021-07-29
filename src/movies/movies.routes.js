const { Router } = require("express");
const movieRouter = Router();
const { createMovie, findMovie, deleteMovie, updateWatched} = require("./movie.controllers");
movieRouter.post("/movies", createMovie); //create
movieRouter.get("/movies/:title", findMovie); //read
movieRouter.put("/movies/:title", updateWatched)
movieRouter.delete("/movies/:title", deleteMovie); //delete
module.exports = movieRouter;
