const Product = require('../models/product')
// Create Controller product
exports.getAddProduct = (req, res, next) => {
  res.render("them-sp", {
    pageTitle: "Add Product",
    path: "/admin/them-sp",
    //using css handlers
    /*formsCSS: true,
        productCSS: true,
    activeAddProduct: true, */
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',

    //using Css handlers
    /* hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true */
  });
};

