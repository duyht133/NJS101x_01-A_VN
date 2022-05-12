//import require patch
const express = require("express");
const router = express.Router();
// tạo đường dẫn tới __dirname trỏ vào file path
const productsController = require("../controllers/products") 
// sử dụng require patch sendFile để dẫn đến link tang shop.html
router.get("/", productsController.getProducts);
module.exports = router;
