const products = [];
// Create Controller product
exports.getAddProduct = (req, res, next) => {
  /* res.sendFile(path.join(rootDir, 'views', 'them-sp.html')); */
  // render using template engine PUG syntax.
  res.render("them-sp", {
    pageTitle: "Add Product",
    path: "/admin/them-sp",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  /* res.sendFile(path.join(rootDir, 'views', 'shop.html')); */
  res.render("shop", {
    prods: products,
    pageTitle: "SHOP",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
