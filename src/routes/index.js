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

/**
 * @requires ./libs/security para aplicar métodos
 * de seguridad
 */

const security = require("../libs/security");

/**
 * @requires ../controller/worker para obtener 
 * los callbacks o funciones de retorno y definirlas
 * en cada ruta del servidor
 */
const workers = require("../controller/workers");

/**
 * @requires ../controller/worker para obtener 
 * los callbacks o funciones de retorno y definirlas
 * en cada ruta del servidor
 */
const client = require("../controller/client");


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

    app.get("/portal", security.isInPortal,users.users_login_view);

    /**
     * @method get para cerrar sesión
     */

    app.get("/portal/salir", security.isLoggedIn,users.logout);

    /**
     * @method get que recibe los datos del usuario
     * e inicia sesión si las credenciales son
     * validas
     */

    app.post("/portal/ingresar", users.users_login)

    /**
     * @method get que recibe los datos del usuario
     * e inicia sesión si las credenciales son
     * validas
     */
    app.get("/portal/trabajador/pedidos", security.isLoggedIn,workers.pending_view);
    
    /**
     * @method get que elimina un pedido de la base de datos
     * mediante el uuid
     */
    app.get("/portal/trabajador/pedidos/buscar/", security.isLoggedIn,workers.pending_search)

    /**
     * @method get que elimina un pedido de la base de datos
     * mediante el uuid
     */
    app.get("/portal/trabajador/pedidos/eliminar/:uuid", security.isLoggedIn,workers.pending_done)
    
    /**
     * @method get que recibe los datos del usuario
     * e inicia sesión si las credenciales son
     * validas
     */
    //app.get("/portal/trabajador/pedidos/:uuid",workers.pending_done)

    
    /**
     * @method post que recibe los datos del usuario
     * y hace los pedidos
     */
    app.post("/cliente/pedido/",client.create_delivery)
}

module.exports = routes;