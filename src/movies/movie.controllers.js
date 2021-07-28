const Movie = require("./movies.model");
exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(200).send({ movie: savedMovie, message: `${req.body.title} has been successfully been added to the database.` });
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.findMovie = async (req, res) => {
    try {
        const title = req.params.title;
        const targetTitle = await Movie.findOne({ title: title });
        res.status(200).send({ title: targetTitle });
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.deleteMovie = async (req, res) => {
    try {
        const title = req.params.title;
        const deleteMovie = await Movie.findOneAndDelete({ title: title });
        res.status(200).send(`Message: You have successfully deleted ${title}`);
    } catch (error) {
        res.status(200).send({deleteMovie});
    }

}
exports.updateWatched = async (req, res) => {
        try {
             const titleToUpdate = req.params.title;
             const updateWatched = await Movie.updateOne(titleToUpdate, {watched: "true"});
             res.status(200).send({Movie: updateWatched})
        } catch (error) {
            res.status(500).send(error);
        }
     



}

