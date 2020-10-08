"use strict";

var express = require('express');

var path = require('path');

var router = express.Router(); // const rootDir = require('../util/path');
// const adminRoute = require("./admin");

var productController = require('../controllers/products');

router.get("/", productController.getProduct);
module.exports = router;