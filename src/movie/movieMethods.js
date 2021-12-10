const Movie = require("./movieModel");

exports.addMovie = async (movieObj) =>{
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        return `Successfully created ${movieObj.title}`;
    } catch (error) {
        console.log(error);
    }
    };

exports.listMovies = async () =>{
    try {
        console.log(await Movie.findAll({}));
    } catch (error){
        console.log(error);
    }
    };

exports.updateMovie = async (movieId, movieObj) => {
    try {
        console.log(await Movie.update(movieObj));
    } catch (error){
        console.log(error);
    }
    };

//findOrCreate will create a new object if one does not already exist