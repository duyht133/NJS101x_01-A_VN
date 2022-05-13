const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products") 
// sử dụng require patch sendFile để dẫn đến link tang shop.html
router.get("/", productsController.getProducts);
module.exports = router;
