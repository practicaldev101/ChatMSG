/**
 * @requires express para poder hacer uso del framework express
 * y aplicar las configuraciones
 */

const express = require("express");

/**
 * @requires ./server/config para aplicar la configuración 
 * al servidor
 */

const config = require("./server/config");

/**
 * @requires ./server/config para aplicar la configuración 
 * al servidor
 */

const database = require("./database");

const app = express();

config(app)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor funcionando!")
})