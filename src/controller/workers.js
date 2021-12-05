/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}

controller.pending_view = async(req, res)=>{
    res.render("layouts/sites/workers/data_deliveries");
}
module.exports = controller;