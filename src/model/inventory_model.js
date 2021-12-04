/**
 * @requires ./database para poder hacer consultas a
 * la base de datos
 */

const pool = require("../database");

/**
 * @constructor Inventory para inicializar variables
 * requeridas
 */
const Inventory = (item)=>{
    this.name = item.name
}