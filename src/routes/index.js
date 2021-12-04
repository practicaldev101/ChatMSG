/**
 * @requires ../controller/users para obtener 
 * los callbacks o funciones de retorno y definirlas
 * en cada ruta del servidor
 */
const users = require("../controller/users");

/**
 * @requires ../controller/users para obtener 
 * los callbacks o funciones de retorno y definirlas
 * en cada ruta del servidor
 */
const menu = require("../controller/menu");


const routes = app => {
    /**
     * @method get para cargar en la vista del cliente
     * la página principal
     */
    app.get("/", menu.home);
    
    /**
     * @method get para cargar en la vista del cliente
     * la página de inicio de sesión
     */

    app.get("/portal", users.users_login);
    
}

module.exports = routes;