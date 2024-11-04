const express = require('express');
const { 
    insertProduct, 
    readProduct, 
    updateProduct 
} = require('../controllers/productController');
const uploads = require('../middleware/multer');

const productRouter = express.Router();

productRouter.post('/insert-data', uploads('products'), insertProduct);

productRouter.get('/read-data', readProduct);

productRouter.put('/update-product/:_id', uploads('products'), updateProduct);

module.exports = productRouter;
