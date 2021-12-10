const Actor = require("./actorModel");

exports.addMovie = async (movieObj) =>{
    try {
        await Actor.sync();
        await Actor.create(movieObj);
        return `Successfully created ${movieObj.title}`;
    } catch (error) {
        console.log(error);
    }
    };

exports.listMovies = async () =>{
    try {
        console.log(await Actor.findAll({}));
    } catch (error){
        console.log(error);
    }
    };

    