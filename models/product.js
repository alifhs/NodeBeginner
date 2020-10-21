const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');
const getProductsFromFile = (cb) => {
    
            // return products;
            fs.readFile(p,"utf-8", (err, fileContent)=>{
                if(err){
                        cb ([]);
                } else{
                    if(fileContent == "")
                        cb([]);
                    else
                    cb(JSON.parse(fileContent));
                }
                
            })
}

module.exports = class Product{
        constructor(title, imageUrl, description, price){
            this.title = title;
            this.imageUrl = imageUrl;
            this.description = description;
            this.price = price;

        }

        save(){

            getProductsFromFile((products) => {
                    products.push(this);
                    fs.writeFile(p, JSON.stringify(products), (err)=>{
                        if(err)
                        console.log(err);
                    });
            })
        }

        static fetchAll(cb){
            getProductsFromFile(cb);
        }
}