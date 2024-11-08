const express = require('express');
const { testAdmin } = require('../../controllers/admin-panel/adminController');

const adminRoutes = express.Router();

adminRoutes.get('/test-admin', testAdmin)

module.exports = adminRoutes;