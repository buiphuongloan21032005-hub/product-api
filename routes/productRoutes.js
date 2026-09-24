const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/', productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:pid', productController.getProductByPid);

router.put('/:pid', productController.updateProduct);

router.delete('/:pid', productController.deleteProduct);

module.exports = router;