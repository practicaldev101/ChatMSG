/**
 * @requires passport para poder hacer uso de autenticaciones
 * @returns {passport} que es el objeto que contiene
 * los metodos necesarios
 */
const passport = require("passport");

/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}

/**
 * @method users_login para cargar la vista de inicio de 
 * sesión
 * 
 * @param {*} req 
 * @param {*} res 
 */
controller.users_login_view = (req, res) => {
    res.render("layouts/sites/login");
}

controller.users_login = (req, res, next) => {
    passport.authenticate("local.signin", {
        successRedirect: "/portal/trabajador/pedidos",
        failureRedirect: "/login.error"
    })(req, res, next);
};

controller.logout = (req, res) =>{
    req.logOut();
    res.redirect('/');
}

module.exports = controller;