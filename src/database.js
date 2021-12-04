/**
 * @requires ./keys para obtener las credenciales de
 * conexión a la base de datos
 * @returns {database} que es el objeto que contiene
 * las credenciales
 */

const { database } = require("./keys");

/**
 * @requires util para ejecutar funcionalidades 
 * hacia objetos y entre otras cosas...
 * @returns {promisify} que es el objeto que sirve
 * para transformar un objeto a promesa
 */

const { promisify } = require("util");

/**
 * @requires mysql para poder ejecutar la conexión
 * a la base de datos
 * @returns {mysql} que es el objeto que tiene la estructura
 * para la conexión a la base de datos
 */

const mysql = require("mysql");


/**
 * @method createPool para crear un hilo de conexión a
 * la base de datos
 */

console.log(database);
const pool = mysql.createPool(database);

pool.getConnection((err, conn)=>{
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed');
        }

        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }

        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused');
        }
    }
    
    if (conn){
        conn.release();
    }
    console.log("Database is connected");
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;