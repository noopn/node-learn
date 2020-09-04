const mysql = require('mysql');
const sql_config = require('../config/sql.config');
const connection = mysql.createConnection(sql_config);
connection.connect();

function exec(sql) {
    return new Promise((resolve) => {
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            resolve(results, fields)
        });
    })
}

module.exports = exec