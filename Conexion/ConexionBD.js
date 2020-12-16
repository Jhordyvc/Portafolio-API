
var mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'bd_portafolio',
};
var pool = mysql.createPool(config);
module.exports = pool;