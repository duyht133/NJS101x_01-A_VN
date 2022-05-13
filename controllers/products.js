const Product = require("../models/product");
// Create Controller product
exports.getAddProduct = (req, res, next) => {
  res.render("them-sp", {
    pageTitle: "Add Product",
    path: "/admin/them-sp",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
