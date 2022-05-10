//import require patch
const path = require("path");

const express = require("express");

// tạo đường dẫn tới __dirname trỏ vào file path
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

// /admin/them-sp => GET
router.get("/them-sp", (req, res, next) => {
  /* res.sendFile(path.join(rootDir, 'views', 'them-sp.html')); */
  // render using template engine PUG syntax.
  res.render("them-sp", {
    pageTitle: "Add Product",
    path: "/admin/them-sp",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/them-sp => POST
router.post("/them-sp", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
