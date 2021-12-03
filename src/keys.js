/**
 * @requires dotenv para poder acceder a las variables
 * de entorno
 */
const dotenv = require("dotenv").config();

const database = {
    database:{
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DATABASE: process.env.DB_NAME
    }
}

module.exports = database;