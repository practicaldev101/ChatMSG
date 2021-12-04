/**
 * @requires bcryptjs que es el modulo que se encarga de
 * encriptar y desencriptar textos
 * @returns {bcrypt} que es el objeto que contiene el modulo
 * de encriptacion y desencriptacion
 */
const bcrypt = require('bcryptjs');

/** 
 * @constant security que es el objeto donde se almacenaran
 * los metodos
 */
const security = {};

/**
 * @function (encryptPassword) convierte la cadena password
 * en una contraseña encriptada
 * @returns {hash} que es la contraseña encriptada
 */
security.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

/**
 * @function (matchPasswords) compara la contraseña digitada
 * con la contraseña almacenada en la base de datos
 * @returns {isValid} que es el resultado de la comparacion.
 * (true) si la comparacion es valida o las contraseñas coinciden
 * exactamente y (false) en caso contrario.
 */
security.matchPasswords = async(password1, password2) => {
    try {
        const isValid = await bcrypt.compare(password1, password2);
        return isValid;
    } catch (err) {
        console.error(err);
    }
}

/**
 * @function (isLoggedIn) que valida si hay una sesion iniciada
 * @returns {session} que es el resultado verificar si hay una
 * sesion iniciada. (true) si hay una sesion inciada y (false) 
 * en caso contrario.
 */
security.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
};

/**
 * @function (isInPortal) que valida si hay una sesion iniciada
 * @returns {session} que es el resultado verificar si hay una
 * sesion iniciada. (true) si hay una sesion inciada y (false) 
 * en caso contrario.
 */
security.isInPortal = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/portal');
    }
    return res.render('signin');
};

/**
 * @description se exporta el objeto de la clase
 */
module.exports = security;