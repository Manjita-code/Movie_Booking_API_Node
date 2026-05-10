const mongoose = require("mongoose");


const movieSchema =  new mongoose.Schema({
    
    name :{
        type :String,
        required :true,
        minlength : 10
    },

    description :{
        type : String,
        required : true,
        minlength:5
    },

    casts :{
        type :[String],
        required : true
    },

    trailerUrl:{
        type :String,
        required : true

    },

    language : {
        type :String,
        required :true,
        default : "English"
    },

    releaseDate :{
        type : Date,  
        required : true
    },

    director: {
        type : String,
        required : true
    },

    releaseStatus:{
    type : String,
    enum : ['RELEASED','UPCOMING'],
    default : 'RELEASED'
},

},{timestamps : true});

const Movie = mongoose.model('Movie',movieSchema);

module.exports =Movie;