const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

router.get('/products', productController.getProduct);

router.post('/products', productController.createProduct);

router.get('/products/:id', productController.getProductById);

module.exports = router;