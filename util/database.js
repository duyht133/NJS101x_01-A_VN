// Using connection data Mysql

const mysql = require('mysql2');

// create pool (tạo pool để chứa các thông tin kết nối với Mysql)
const pool = mysql.createPool({
    host: 'localhost', // host website
    user: 'root', // use name Mysql
    database: 'node-complete', // name database
    password: 'concat1233' // password connection user
})
module.exports = pool.promise();