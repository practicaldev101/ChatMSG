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
 * @requires ./database para aplicar la configuración 
 * al servidor de la base de datos
 */

const database = require("./database");


require("./libs/passport");

const app = express();

config(app)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor funcionando!")
})