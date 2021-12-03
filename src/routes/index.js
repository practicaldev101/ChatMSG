/**
 * @requires ../controller/users para obtener 
 * los callbacks o funciones de retorno y definirlas
 * en cada ruta del servidor
 */
const users = require("../controller/users");

const routes = app => {

    app.get("/portal", users.users_login);
}

module.exports = routes;