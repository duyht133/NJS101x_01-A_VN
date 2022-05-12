//import require patch
const path = require("path");
const express = require("express"); 
const router = express.Router();
const productsController = require("../controllers/products") 
// /admin/them-sp => GET
router.get("/them-sp", productsController.getAddProduct);
// /admin/them-sp => POST
router.post("/them-sp", productsController.postAddProduct);

module.exports = router;

