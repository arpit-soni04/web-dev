const express = require('express');
const { 
    testAdmin, 
    adminLogin 
} = require('../../controllers/admin-panel/adminController');

const adminRoutes = express.Router();

adminRoutes.get('/test-admin', testAdmin);
adminRoutes.post('/login', adminLogin);

module.exports = adminRoutes;