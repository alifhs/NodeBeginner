const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');
const getProductsFromFile = (cb) => {

    // return products;
    fs.readFile(p, 'utf-8', (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            if (fileContent == "" || fileContent == undefined) //if file is empty || file doesn't exist
                cb([]);
            else
                cb(JSON.parse(fileContent));
        }

    });
}

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save() {

        getProductsFromFile((products) => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products]; //spread opearator to unpack( copies the elements)
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    if (err)
                        console.log(err);
                });

            } else {
                this.id = Math.floor(Math.random() * 1000000).toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    if (err)
                        console.log(err);
                });
            }
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        
        getProductsFromFile(products => {   // sending a callback with parameter products(array of objects) , when you are inside a scope u can use any 
            const product = products.find(p => p.id === id);                             //value that is available in the scope even if its a callback function....because the we actually don't send
            cb(product);                                                       // anything ,,, we only ask the machine to get the variable from this address...sending function physically doesn't happen

        });
    }

    static deleteById(id, price) {
        
        
            // console.log(product.price);
           
         
                    Cart.deleteProduct(id, price);
         
    }
}