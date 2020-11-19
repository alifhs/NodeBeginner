
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'alif',
    database: 'node-sql',
    password: '12345'
});


module.exports = pool.promise(); ///returns a Promise wrapped object