// const products = [];
const Product = require('../models/product');
const Cart = require('../models/cart');




exports.getProducts = (req, res,) => {
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

exports.getProduct = (req, res, next)=>{
  const prodId = req.params.productId;
    Product.findById(prodId, product=>{
        res.render('shop/product-details', {
            product: product, pageTitle: product.title , path:'/'
        });
    });
  
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