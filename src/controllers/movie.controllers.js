const Movie =require('../model/model');


/**
 * controller function to create a new movie
 * @param {*} req {name,description,....}
 * @param {*} res 
 * @returns movie created
 */
const createMovie = async(req,res)=>{

    try{
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success :true,
            error:{},
            data :movie,
            message:'Succesfully created a new movie',
        })  
    }catch(error){
        console.log(error);
        return res.status(500).json({

              success :false,
              error : error,
              data : {},
              message:'Something went wrong'
        }) ;
    }
};


module.exports = 
{
    createMovie
}