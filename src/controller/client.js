/**
 * @require ../model/inventory para poder ejecutar acciones
 * en la tabla PENDING de la base de datos
 */
const Pending = require("../model/pending_model")

/**
 * @require ../model/inventory para poder ejecutar acciones
 * en la tabla INVENTORY de la base de datos
 */
const Inventory = require("../model/inventory_model")

/**
 * @requires uuid que es la libreria que genera
 * identificadores únicos
 * @returns {v4: uuidv4} es metodo para generar uuid
 */
const { v4: uuidv4 } = require('uuid');

/**
 * @constant controller para almacenar todas
 * las funciones de retorno o callbacks
 */
const controller = {}


controller.create_delivery = (req, res, next) => {
    var total = 0;
    var name = "";
    const {client_name, description, table_code, lista} = req.body;
    if(lista){
        if(!lista.lenght){
            Inventory.getItemByCode(lista, async(err, data) => {
                if(err){
                    total = total;
                }
                else{
                    console.log(data);
                    if(data[0].PRICE){  
                        total = data[0].PRICE,
                        name = data[0].NAME

                        const pending = {
                            uuid: uuidv4(),
                            client_name: client_name,
                            description: description,
                            delivery: name,
                            table_code: table_code,
                            total: total
                        }
                        
                        Pending.create(pending, (err, data)=>{
                            if(err){
                                res.redirect("/")
                                return;
                            }
                            else{
                                res.redirect("/");
                                return;
                            }
                        });
                    }
                    return;    
                }
                return;
            });
            return
        }
        else if(lista.lenght > 0){
            console.log("entró")
            for (const item of lista) {
                Inventory.getItemByCode(item, async(err, data) => {
                    console.log(data)
                    if(err){
                        total = total;
                    }
                    else{
                        console.log(data)
                        if(data[0].PRICE){
                            
                            total = data[0].PRICE,
                            name = data[0].NAME
    
                            const pending = {
                                uuid: uuidv4(),
                                client_name: client_name,
                                description: description,
                                delivery: name,
                                table_code: table_code,
                                total: total
                            }
                            Pending.create(pending, (err, data)=>{
                                if(err){
                                    
                                    return;
                                }
                                else{
                                    return;
                                }
                            });
                        }
                        
                    }
                });
            
    }
    }
    res.redirect("/");
}}
    
    

module.exports = controller;