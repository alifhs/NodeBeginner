
const express = require('express');

const path = require('path');

const router = express.Router();

// const rootDir = require('../util/path');
// const adminRoute = require("./admin");

const shopController = require('../controllers/shop')


router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
// router.get('/v')
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);
// router.get("/checkout", productController.getProduct);


module.exports = router;