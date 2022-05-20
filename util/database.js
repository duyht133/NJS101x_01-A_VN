/* // Create pool connection data Mysql
const mysql = require('mysql2');
// create pool (tạo pool để chứa các thông tin kết nối với Mysql)
const pool = mysql.createPool({
    host: 'localhost', // host website
    user: 'root', // use name Mysql
    database: 'node-complete', // name database
    password: 'concat1233' // password connection user
})
module.exports = pool.promise(); */


// Create pool Sequelize connection data Mysql
const Sequelize = require('sequelize');
// create pool (tạo pool để chứa các thông tin kết nối với Mysql)
const sequelize = new Sequelize('node-complete','root','concat1233',{
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize;