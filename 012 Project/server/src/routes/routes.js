const express = require('express');
const adminRoutes = require('./admin/adminRoute');
const parentCategoryRouter = require('./admin/parentCategoryRoutes');

const adimnPanelRoutes = express.Router();
const websiteRoutes = express.Router();
const appRoutes = express.Router();

adimnPanelRoutes.use('/admin', adminRoutes);
adimnPanelRoutes.use('/parent-category', parentCategoryRouter);

module.exports = {
    adimnPanelRoutes,
    websiteRoutes,
    appRoutes
}