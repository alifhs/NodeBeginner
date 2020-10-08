
const express = require('express');

const path = require('path');

const router = express.Router();

// const rootDir = require('../util/path');
// const adminRoute = require("./admin");

const productController = require('../controllers/products')


router.get("/", productController.getProduct);

module.exports = router;