// const products = [];
const Product = require('../models/product');
const Cart = require('../models/cart');




exports.getProducts = (req, res) => {
 
  const promise = Product.fetchAll();
  promise.then(([rows, fieldData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'products',
      path: '/',
      hasProducts: rows.length > 0,
      activeShop: true,
      productCSS: true
    });
  }).catch(err=>{
    console.log(err)
  });

}

exports.getProduct = (req, res, next)=>{
  const prodId = req.params.productId;
    Product.findById(prodId).then(([result])=>{   //destructuring
      res.render('shop/product-details', {
        product: result[0],
         pageTitle: result[0].title ,
          path:'/'
    });
    }).catch(err=>{
      console.log(err);
    });
  
}

exports.getIndex = (req, res, next) => {

  const promise = Product.fetchAll();
  promise.then(([rows, fieldData])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Index',
      path: '/',
      hasProducts: rows.length > 0,
      activeShop: true,
      productCSS: true
    });
  }).catch(err=>{
    console.log(err)
  });


}

exports.getCart = (req, res, next) => {
  Cart.getCartProducts(cart => {
    const cartProducts = [];
    Product.fetchAll(products=>{  //when there will be callback and our resposne depend on the call back we have to put the response code block to async function
      
      for(product of products){
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if(cartProductData){
          console.log(product.price);
          console.log(cartProductData.qty)
          cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }
      res.render('shop/cart', {
        path : '/cart',
        pageTitle : 'Your Cart',
        products: cartProducts
        
    }) 
    })
    // console.log(cartProducts.length);
    
  })
 
}

exports.postCartDeleteProduct = (req, res, next) => {
   const prodId = req.body.productId;
   const prodPrice = req.body.productPrice;
   Cart.deleteProduct(prodId, prodPrice);
   res.redirect('/cart');
}

exports.postCart = (req, res, next) =>{
    const prodId = req.body.productId;
    // console.log(prodId);
    Product.findById(prodId, product=>{
        Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart');
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