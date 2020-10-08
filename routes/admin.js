
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const productsController = require('../controllers/products')

// console.log(__dirname)

// console.log(require.main.filename)
// console.log(typeof express);
const router = express.Router();


// console.log(typeof(router));

router.get("/add-product", productsController.getAddProduct);
     
    
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    // console.log(req.);
    // res.render("list", {kindOfDay: day});
    // console.log(req.url);
    // res.send("<form action='/admin/add-product' method='POST'> <input type='text' name='title' > <button type='submit'>Submit</button></form>");






router.post("/add-product", productsController.postAddProduct);

// router.use("/kkk", (req, res) =>{
//     console.log(req.url);

// })

// exports.products = products;
// exports.router = router;

module.exports = router;