/* // import module sequelize để tương tác với mysql
const Sequelize = require('sequelize');
// import thông tin kết nối pool database
const sequelize = require('../util/database');

// tạo model để sử dụng cho logic trong controller
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
 */

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,// bắc buộc phải có.
    unique:true,// không được trùng lặp
  },
  title: String,
  price: {
    type: Number,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  }
})
module.exports = productSchema;