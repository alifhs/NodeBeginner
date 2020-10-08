// const products = [];
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {


  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

exports.postAddProduct = (req, res, next) => {

  console.log(req.url);
  console.log(req.body);

  // products.push({title: req.body.title})
  const product = new Product(req.body.title);
  product.save();


  res.redirect("/");
}

exports.getProduct = (req, res,) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log(__dirname);
  // res.render("shop", {
  //         kindOfDay: day

  // });
  // const products = Product.fetchAll();

  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })



  // console.log(adminRoute.products)
}