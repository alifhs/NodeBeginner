const fs = require('fs');
const path = require('path');

const p = path.join(require.main.path,    // require.main.path provides the rood directory path
    'data',
    'cart.json'
)




module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {

            let cart = { products: [], totalPrice: 0 };

            if (!err && fileContent != "") {
                cart = JSON.parse(fileContent);

            }

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);  //both checks if the condition is true and returns the value
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
                

            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct]; // unpacking the elementts and adding new elements
            }
            cart.totalPrice = cart.totalPrice + parseInt (productPrice);
            
            fs.writeFile(p, JSON.stringify(cart), err=>{
                console.log(err);
            })

        })
    }
    static deleteProduct(id, productPrice)
    {
        fs.readFile(p, (err, fileContent)=>{
            if(err) {
                return;
            }
            const updatedCart = {...(JSON.parse(fileContent))};
            const product = updatedCart.products.find(prod=> prod.id === id);
            if(product){
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(
                prod => prod.id !== id
            );
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice*productQty;
            fs.writeFile(p, JSON.stringify(updatedCart), err =>{
                console.log(err);
            });} else 
            return;
        })
    }

    static getCartProducts(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err) {
                cb(null);
            } else
            cb(cart);
        })
    }
}