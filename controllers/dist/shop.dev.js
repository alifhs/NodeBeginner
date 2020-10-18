"use strict";

// const products = [];
var Product = require('../models/product');

exports.getProduct = function (req, res) {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log(__dirname);
  // res.render("shop", {
  //         kindOfDay: day
  // });
  // const products = Product.fetchAll();
  Product.fetchAll(function (products) {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }); // console.log(adminRoute.products)
};

exports.getIndex = function (req, res, next) {
  Product.fetchAll(function (products) {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Index',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

exports.getCart = function (req, res, next) {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getCheckout = function (req, res, next) {
  res.render('shop/cart', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};