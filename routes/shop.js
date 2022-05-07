
//import require patch
const path = require('path');

const express = require('express');

const router = express.Router();

// sử dụng require patch sendFile để dẫn đến link tang shop.html
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,"../","views","shop.html"));
});

module.exports = router;
