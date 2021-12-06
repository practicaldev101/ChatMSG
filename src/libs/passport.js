/**
 * 
 *//**
 * @requires ../database que es el archivo donde se
 * configuro la base de datos
 * @returns {pool} que es el objeto donde se encuentra
 * la conexion a la base de datos
 */
const pool = require('../database');

/**
 * @requires ./security que es el archivo donde se
 * configuró los sistemas de encriptacion
 * @returns {security} que es el objeto donde se encuentra
 * los metodos de encriptacion
 */
const security = require('./security');

/**
 * @requires uuid que es la libreria que genera
 * identificadores únicos
 * @returns {v4: uuidv4} es metodo para generar uuid
 */
const { v4: uuidv4 } = require('uuid');

/**
 * @requires passport que es la libreria que se encarga
 * de administrar las autenticaciones en general
 * @returns {passport} que es el objeto de la libreria
 */
const passport = require('passport');

/**
 * @requires passport-local que es la libreria que se encarga
 * de administrar las autenticaciones de forma local
 * @returns {strategy} que es el objeto para realizar autenticaciones
 * locales
 */
const strategy = require('passport-local').Strategy;

/**
 * @method use para definir el inicio de sesion de un
 * usuario usando passport
 */
passport.use('local.signin', new strategy({
    usernameField: 'worker_username',
    passwordField: 'worker_password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    const result = await pool.query('SELECT * FROM USER WHERE ?', [{ username: username }],async(err, user)=>{
        if(err){
            done(null, err);
        }
        else{
            if(user.length > 0){
                user = user[0]
                const isValid = await security.matchPasswords(password, user.PASSWORD);
                if (isValid) {
                    return done(null, user);
                } 
            }
            else{
                done(null, null);
            }
        }
    });
    
}));

/**
 * @method serializeUser permite almacenar el usuario creado
 * en la sesion
 */
passport.serializeUser((user, done) => {
    if (user.uuid) {
        done(null, user.uuid);
    } else if (user.UUID) {
        done(null, user.UUID);
    }
});

/**
 * @method deserializeUser permiter corroborar que el 
 * usuario exista dentro de la base de datos
 */
passport.deserializeUser(async(id, done) => {
    var user = await pool.query('SELECT * FROM USER WHERE ?', [{ uuid: id }], (err, user)=>{
        if (err){
            done(null, err);
        }
        else{
            if(user.length > 0){
                return done(null, user[0]);
            }
            else{
                done(null, null);
            }  
        }
    });
});