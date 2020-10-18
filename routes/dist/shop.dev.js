"use strict";

var express = require('express');

var path = require('path');

var router = express.Router(); // const rootDir = require('../util/path');
// const adminRoute = require("./admin");

var shopController = require('../controllers/shop');

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProduct); // router.get('/v')

router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout); // router.get("/checkout", productController.getProduct);

module.exports = router;