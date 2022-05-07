
//import require patch
const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/them-sp', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'them-sp.html'));
});

// /admin/add-product => POST
router.post('/san-pham', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
