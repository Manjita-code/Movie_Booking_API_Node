const mongoose = require("mongoose")


async function connectDB() {

    try{
           await mongoose.connect(process.env.DB_URL);
           console.log("DB is connect Now");
    }
    catch(error)
    {
        console.log("Database is not connecting");
    }    
}

module.exports =  connectDB