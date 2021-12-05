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

controller.create_delivery = (req, res) => {
    const {client_name, description, table_code, lista} = req.body;
    var total = 0;
    var name = "";
    if(!lista.lenght){
        Inventory.getItemByCode(lista, (err, data) => {
            if(data.lenght > 0){
                data = data;
            }
            if(err){
                total = total;
            }
            else{
                if(data[0].PRICE){
                    total = data[0].PRICE;
                    name = data[0].CLIENT_NAME;
                    console.log(total)
                }
                
            }
        });
        const pending = {
            uuid: uuidv4(),
            client_name: client_name,
            description: description,
            delivery: lista,
            table_code: table_code,
            total: total
        }
        Pending(pending)
        Pending.create(pending, (err, data)=>{
            if(err){
                res.redirect("/")
            }
            else{
                res.redirect("/")
            }
        });
    }
    else{}/*
        for (const item of lista) {
            Inventory.getItemByCode(item, (err, data) => {
                if(data.lenght > 0){
                    data = data;
                }
                if(err){
                    total = total;
                }
                else{
                    console.log(data)
                    if(data.PRICE){
                        total = total + data.PRICE;
                    }
                    
                }
            });
            
            const pending = Pending({
                uuid: uuidv4(),
                client_name: client_name,
                description: description,
                inventory_code: item,
                table_code: table_code,
                total = total
            })
            Pending.create(pending, (err, data)=>{
                if(err){
                    res.redirect("/")
                }
                else{
                    console.log(data)
                    res.redirect("/",{alerta: data})
                }
            })
            */
    }
    

module.exports = controller;