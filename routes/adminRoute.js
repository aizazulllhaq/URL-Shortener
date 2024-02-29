const { Router } = require('express');
const adminRouter = Router();
const adminController = require('../controllers/adminController');

adminRouter
    .get('/urls', adminController.allUsersShortURLs);

module.exports = adminRouter;
