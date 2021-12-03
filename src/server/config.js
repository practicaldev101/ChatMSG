/**
 * @requires ../routes/index para obtener 
 * las rutas que se definirán en el servidor
 */

const routes = require("../routes/index");

/**
 * @requires path para poder crear direcciones de
 * rutas y establecer compatibilidad en cualquier
 * entorno
 */

const path = require("path");

/**
 * @requires express para poder hacer uso del framework express
 * como configuración
 */

const express = require("express");


/**
 * @requires express-handlebars para poder hacer uso
 * y configuración del motor de plantilla handlebars
 * en nuestro servidor con express
 */

const exphbs = require("express-handlebars").engine;


/**
 * @constant config para almacenar toda la configuración
 * de nuestro servidor, o del framework express
 */

const config = app => {
    
    /**
     * @method set para establecer el directorio 
     * donde se encuentran las vistas
     */

    app.set("views", path.join(__dirname, "../views"));
    
    /**
     * @method set para establecer una variable que contiene
     * la extensión de los archivos de vista
     */
    
    app.set("view engine", ".hbs")

    /**
     * @method engine para establecer uso del motor de busqueda
     * handlebars
     */

    app.engine(".hbs", exphbs({
        extname: ".hbs",
        defaultLayout: "main",
        partialsDir: path.join(app.get("views"), "partials"),
        layoutsDir: path.join(app.get("views"), "layouts")
    }))

    /**
     * @method use para permitir el uso de JSON en el servidor
     */

    app.use(express.json());

    /**
     * @method use para permitir el uso de 
     * application/x-www-form-urlencoded
     */

    app.use("/public", express.static(path.join(app.get("views"), "../public")));

    routes(app);
}

module.exports = config;