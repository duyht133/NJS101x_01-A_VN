
const router = require('express').Router();
const AdminController = require('../controllers/admin');

////
router.get('/add-product', AdminController.getAddProduct);


module.exports = router;
