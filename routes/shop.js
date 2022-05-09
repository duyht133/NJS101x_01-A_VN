
//import require patch
const path = require('path');
const express = require('express');
// tạo đường dẫn tới __dirname trỏ vào file path
const rootDir = require('../util/path')
const adminData = require("./admin");
const router = express.Router();
// sử dụng require patch sendFile để dẫn đến link tang shop.html
router.get('/', (req, res, next) => {
  /* console.log(adminData.products)
  res.sendFile(path.join(rootDir, 'views', 'shop.html')); */
  res.render("shop");
});

module.exports = router;
