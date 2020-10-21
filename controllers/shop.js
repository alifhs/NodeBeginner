// const products = [];
const Product = require('../models/product');




exports.getProduct = (req, res,) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log(__dirname);
  // res.render("shop", {
  //         kindOfDay: day

  // });
  // const products = Product.fetchAll();

  Product.fetchAll((products) => {
    res.render('shop/product-list', {
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

exports.getIndex = (req, res, next) => {

  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Index',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })

}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
      path : '/cart',
      pageTitle : 'Your Cart',
      
  })  
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
      path : '/orders',
      pageTitle : 'Your Orders',
      
  })  
}
exports.getCheckout = (req, res, next) => {
  res.render('shop/cart', {
      path : '/checkout',
      pageTitle : 'Checkout',
      
  })  
}