
//import require patch
const path = require('path');

const express = require('express');

// tạo đường dẫn tới __dirname trỏ vào file path
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product => GET
router.get('/them-sp', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'them-sp.html'));
});

// /admin/add-product => POST
/* router.post('/them-sp', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
}); */

module.exports = router;
