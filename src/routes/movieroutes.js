const movieController = require('../controllers/movie.controllers');
const movieMiddlewares = require('../middleware/movie.middlewares');



const routes = (app)=> {
    
    //routes fucntion takes express app object as parameter
    app.post('/mba/api/v1/movies', movieController.createMovie);


    app.delete('/mba/api/v1/movies/:id',movieController.deleteMovie);

    app.get('/mba/api/v1/movies/:id',movieController.getMovie)

}

module.exports = routes;