
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const adminController = require('../controllers/admin')

// console.log(__dirname)

// console.log(require.main.filename)
// console.log(typeof express);
const router = express.Router();


// console.log(typeof(router));

router.get("/add-product", adminController.getAddProduct);



router.get('/products', adminController.getProducts);

     
    
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    // console.log(req.);
    // res.render("list", {kindOfDay: day});
    // console.log(req.url);
    // res.send("<form action='/admin/add-product' method='POST'> <input type='text' name='title' > <button type='submit'>Submit</button></form>");






router.post("/add-product", adminController.postAddProduct);

// router.use("/kkk", (req, res) =>{
//     console.log(req.url);

// })

// exports.products = products;
// exports.router = router;

module.exports = router;