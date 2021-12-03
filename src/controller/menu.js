/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}


controller.home = (req, res) => {
    res.send("!INICIO¡");
}

module.exports = controller;