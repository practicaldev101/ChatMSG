/**
 * @require ../model/inventory para poder ejecutar acciones
 * en la tabla INVENTORY de la base de datos
 */
const Inventory = require("../model/inventory_model")

/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}


controller.home = (req, res) => {
    Inventory.getAvailableItems(null, (err, data)=>{
        if(err){
            res.render("layouts/sites/home")
        }
        else{
            res.render("layouts/sites/home", {inventory: data});
        }
    })
    
}

module.exports = controller;