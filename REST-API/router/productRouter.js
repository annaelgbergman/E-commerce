const router = require('express').Router();
const productModel = require('../models/products/productModel');


// Get all products 
router.get('/', productModel.getAllProducts);

// Get one procut by id
router.get('/:id', productModel.getOneProduct);

// Create new product 
router.post('/', productModel.createProduct);

// Update product
router.put('/:id', productModel.updateProduct);

// Delete product 
router.delete('/:id', productModel.deleteProduct);






module.exports = router; 