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
    this.uuid = item.uuid;
    this.name = item.name;
    this.description = item.description;
    this.price = item.price;
    this.ref_code = item.ref_code;
    this.available = item.available;
    this.image_path = item.image_path;
}
Inventory.create = async(newItem, done)=>{
    const rest = await pool.query("INSERT INTO INVENTOY SET ?", [newItem], (err, res)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, newItem);
        }
    });
}
Inventory.update = async(newItem, done)=>{
    const rest = await pool.query("UPDATE INVENTORY SET ?", [newItem], (err, res)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, newItem);
        }
    });
}
Inventory.delete = async(id, done)=>{
    const rest = await pool.query("DELETE FROM INVENTORY WHERE ?", [{uuid: id}], (err, res)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, newItem);
        }
    });
}
Inventory.getAvailableItems = async(any, done)=>{
    const rest = await pool.query("SELECT * FROM INVENTORY WHERE AVAILABLE != 0",(err, data)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, data);
        }
    });
}

Inventory.getItemByCode = async(code, done)=>{
    const rest = await pool.query("SELECT * FROM INVENTORY WHERE ?",[{ref_code: code}],(err, data)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, data);
        }
    });
}
module.exports = Inventory;