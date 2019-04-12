var dblite = require('dblite'), 
dbl = dblite('sistema.sw1');

class db {
    constructor(){}

    db_crearTablas(){
        dbl.query('.show');
        dbl.query('CREATE TABLE IF NOT EXISTS grupo (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT , estado text)');
        dbl.query('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT , user text , pass text , opcion text, idgrupo integer)');
     // dbl.query('CREATE TABLE IF NOT EXISTS privilegio(id INTEGER PRIMARY KEY AUTOINCREMENT,)');
        
    }
}

module.exports = db ;