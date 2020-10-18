const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {


    res.render('admin/add-product', {
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

  exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: 'admin/products',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });
      })
  }