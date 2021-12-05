/**
 * @requires ./database para poder hacer consultas a
 * la base de datos
 */

const pool = require("../database");

/**
 * @constructor Pending para inicializar variables
 * requeridas
 */
const Pending = function(item){
    this.uuid = item.uuid;
    this.client_name = item.client_name;
    this.description = item.description;
    this.delivery = item.deliver;
    this.table_code = item.table_code;
    this.total = item.total;
}
Pending.create = async(newItem, done)=>{
    const rest = await pool.query("INSERT INTO PENDING SET ?", [newItem], (err, res)=>{
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
Pending.update = async(newItem, done)=>{
    const rest = await pool.query("UPDATE PENDING SET ?", [newItem], (err, res)=>{
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
Pending.delete = async(id, done)=>{
    const rest = await pool.query("DELETE FROM PENDING WHERE ?", [{uuid: id}], (err, res)=>{
        if(err){
            console.log(err);
            done(null, err);
            return;
        }
        else{
            done(null, "Eliminado con éxito");
        }
    });
}
Pending.getAllDeliveries = async(any, done)=>{
    const rest = await pool.query("SELECT * FROM PENDING",(err, data)=>{
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

Pending.getDeliveriesByKey = async(key, done)=>{

    key = '%' + key + '%';
    const rest = await pool.query("SELECT * FROM PENDING WHERE CLIENT_NAME LIKE ? OR TABLE_CODE LIKE ?",[key, key], (err, data)=>{
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


module.exports = Pending;