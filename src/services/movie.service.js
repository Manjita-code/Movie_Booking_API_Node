
const Movie = require('../model/model');

const createMovie = async(data) =>{
    try{
          const movie = await  Movie.create(data);
          return movie;
    }catch(error)
    {
        if(error.name =='ValidationError')
        {
            let err = {};
            Object.keys(error.errors).forEach((key) =>  {
                console.log(error.errors);
                err[key] = error.errors[key].message;
            });
            console.log(err);
            return {err: err,
                    code : 422};
        }
        else{
            throw error;
        }
    }
  
}

const deleteMovie = async(id)=>{
     const  movie = await Movie.findByIdAndDelete(id);

    console.log("movie found", movie);

    if(!movie)
    {
        return {
            err: "No movie found for the corresponsding id is provided",
            code: 404,

        }

    };
    return movie;
}


const getMovieById= async(id) => {

    const  movie = await Movie.findById(id);

    console.log("movie found", movie);

    if(!movie)
    {
        return {
            err: "No movie found for the corresponsding id is provided",
            code: 404,

        }

    };
    return movie;
}

module.exports ={
    getMovieById,
    createMovie,
    deleteMovie
}