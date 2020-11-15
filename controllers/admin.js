const Product = require('../models/product');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');
const fs = require('fs');
const errorController = require('./error');

exports.getAddProduct = (req, res, next) => {
      

    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: null
    })
  }

  
exports.getEditProduct = (req, res, next) => {

  const editMode = req.query.edit;
  const prodId = req.params.productId;

  if(!editMode){
     return res.redirect('/');
  }
  Product.findById(prodId, product =>{
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });

}

exports.postDeleteProduct = (req, res, next) =>{
  const productId = req.body.prodId;
  Product.fetchAll((products) => {
      const produtIndex = products.findIndex(prodId => prodId.id === productId);
      
      if(produtIndex !== -1){
        const productPrice = products[produtIndex].price;
        products.splice(produtIndex, 1);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          if (err)
              console.log(err+" Could not delete the " + productId);
          else{
            Product.deleteById(productId, productPrice);
            res.redirect('/admin/products');
          }
          
      });
      } else{
        res.status(404);
        // res.sendFile(path.join(rootDir, "views", "404.html"));
        res.render('404', {path: '', pageTitle:"404 Error"});
      }


  });

}
  
  exports.postAddProduct = (req, res, next) => {
  
    console.log(req.url);
    console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    console.log(price);
    const description = req.body.description;
  
    // products.push({title: req.body.title})
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
  
  
    res.redirect("/");
  }

  exports.postEditProduct = (req, res, next)=>{
    const prodId = req.body.productId;  
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedImageUrl = req.body.imageUrl;
    const upadatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
    upadatedProduct.save();
    res.redirect('/');
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