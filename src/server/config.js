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
 * @requires express-session para poder crear sesiones
 * en el servidor
 */

const session = require("express-session");

/**
 * @requires express-mysql-session permite almacenar las
 * sesiones en la base de datos
 */

const mysql_session = require("express-mysql-session");

/**
 * @requires express-handlebars para poder hacer uso
 * y configuración del motor de plantilla handlebars
 * en nuestro servidor con express
 */

const exphbs = require("express-handlebars").engine;

/**
 * @requires ./keys para obtener las credenciales de
 * conexión a la base de datos
 * @returns {database} que es el objeto que contiene
 * las credenciales
 */

const { database } = require("../keys");

/**
 * @requires passport es el modulo que permite autenticaciones
 * @returns {passport} que es el metodo para las autenticaciones
 */
const passport = require('passport');

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

    /**
     * @method use para establecer uso de sesión
     */

    app.use(session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        store: new mysql_session(database)
    }))

    /**
     * @method use para inicializar el sistema se sesiones
     */

    app.use(passport.initialize());

    /**
     * @method use para comenzar el uso de sesiones
     * con passport
     */

    app.use(passport.session());

    /**
     * @method use para definir variables globales
     */
    
    app.use((req, res, next)=>{
        app.locals.user = req.user;
        next();
    })

    routes(app);
}

module.exports = config;