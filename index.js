var db = require('./modulos/dbs/database');
var dbs = new db();

function init() {
    dbs.db_crearTablas();
}