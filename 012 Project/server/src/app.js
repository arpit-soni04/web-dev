const express = require('express');
const adminRoutes = require('./routes/admin/adminRoute');
const { adimnPanelRoutes, websiteRoutes, appRoutes } = require('./routes/routes');

const allRoutes = express.Router();

allRoutes.use('/admin-panel', adimnPanelRoutes);
allRoutes.use('/website', websiteRoutes);
allRoutes.use('/app', appRoutes);

module.exports = allRoutes;