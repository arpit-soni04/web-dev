const express = require('express');
const {
    createParentCategrory
} = require('../../controllers/admin-panel/parentCategeorycontroller');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/create-category', createParentCategrory);

module.exports = parentCategoryRouter;