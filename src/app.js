const express = require("express");

const Movie = require("./model/model");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {

    try {

        const {
            name,
            description,
            casts,
            trailerUrl,
            language,
            releaseDate,
            director,
            releaseStatus
        } = req.body;

        const input = await Movie.create({

            name,
            description,
            casts,
            trailerUrl,
            language,
            releaseDate,
            director,
            releaseStatus

        });

        res.status(201).json({
            success: true,
            data: input
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

module.exports = app;