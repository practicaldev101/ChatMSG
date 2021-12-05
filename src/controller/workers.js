/**
 * @require ../model/inventory para poder ejecutar acciones
 * en la tabla PENDING de la base de datos
 */
const Pending = require("../model/pending_model")


/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}

controller.pending_view = async(req, res)=>{
    Pending.getAllDeliveries(null, (err, data)=>{
        if(err){
            res.render("layouts/sites/workers/data_deliveries");
        }
        else{
            res.render("layouts/sites/workers/data_deliveries", {deliveries: data});
        }
    });
}
controller.pending_done = async(req, res)=>{
    const uuid = req.params.uuid;
    Pending.delete(uuid, (err, data)=>{
        if(err){
            res.redirect("/portal/trabajador/pedidos");
        }
        else{
            res.redirect("/portal/trabajador/pedidos");
        }
    });
}

controller.pending_search = async(req, res)=>{
    const key = req.query.key;
    Pending.getDeliveriesByKey(key, (err, data)=>{
        if(err){
            res.render("layouts/sites/workers/data_deliveries");
        }
        else{
            res.render("layouts/sites/workers/data_deliveries", {deliveries: data});
        }
    });
}
module.exports = controller;