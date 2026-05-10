const express = require("express");
const MovieRoutes = require('./routes/movieroutes')

const app = express();


app.use(express.json());

MovieRoutes(app); //invoking movie routes

module.exports = app;

