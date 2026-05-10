const Movie =require('../model/model');
const movieService = require('../services/movie.service');
const {errorResponseBody, successResponseBody} = require('../utils/responseBody');

/**
 * controller function to create a new movie
 * @param {*} req {name,description,....}
 * @param {*} res 
 * @returns movie created
 */

const createMovie = async(req,res)=>{

    try{
        const response = await movieService.createMovie(req.body);
        if(response.err)
        {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Validation failed on few parameters of the request body"
            return res.status(response.code).json(errorResponseBody)

        }
        successResponseBody.data = movie;
        successResponseBody.message = "Successfully created the movie";

        return res.status(201).json(successResponseBody);
    }catch(error){
        console.log(error.errors);
        return res.status(500).json(errorResponseBody);
    }
};

const deleteMovie = async(req,res)=>{

    try{

        const response = await movieService.deleteMovie(req.params.id);

        if(response.err)
        {
            errorResponseBody.err = response.err;

            return res
            .status(response.code)
            .json(errorResponseBody);
        }

        successResponseBody.data = response;

        successResponseBody.message =
        "Successfully deleted the movie";

        return res.status(200).json(successResponseBody);

    }catch(error){

        console.log(error);

        return res.status(500).json(errorResponseBody);
    }
};



const getMovie = async(req,res)=>{

    try{
        const response = await movieService.getMovieById(req.params.id);
        if(response.err)
        {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody); 
    }catch(error){
        console.log(error);
        return res.status(500).json(errorResponseBody);
    }
};


module.exports = 
{
    createMovie,
    deleteMovie,
    getMovie
}