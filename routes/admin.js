const express = require('express');

const router = express.Router();

router.get('/them-sp', (req, res, next) => {
  res.send(
    '<form action="/san-pham" method="POST"><input type="text" name="title"><button type="submit">Them SP</button></form>'
  );
});

router.post('/san-pham', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
