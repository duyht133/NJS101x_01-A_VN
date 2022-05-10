
//import require patch
const path = require('path');
const express = require('express');
// tạo đường dẫn tới __dirname trỏ vào file path
const rootDir = require('../util/path')
const adminData = require("./admin");
const router = express.Router();
// sử dụng require patch sendFile để dẫn đến link tang shop.html
router.get('/', (req, res, next) => {
  /* res.sendFile(path.join(rootDir, 'views', 'shop.html')); */
  console.log(adminData.products)

  // render using template engine PUG syntax.
  const products = adminData.products;
  res.render("shop",{prods: products,docTitle:"shop"});
});

module.exports = router;
