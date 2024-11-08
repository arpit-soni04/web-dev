const express = require('express');
const adminRoutes = require('./admin/adminRoute');

const adimnPanelRoutes = express.Router();
const websiteRoutes = express.Router();
const appRoutes = express.Router();

adimnPanelRoutes.use('/admin', adminRoutes);

module.exports = {
    adimnPanelRoutes,
    websiteRoutes,
    appRoutes
}