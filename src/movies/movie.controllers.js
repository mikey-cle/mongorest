const Movie = require('./movies.model');
exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(200).send({movie: savedMovie, message: "Movie created!"});
    } catch (error) {
        res.status(500).send(error);
    }
   };