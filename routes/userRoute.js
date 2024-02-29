const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');
const { restrictTo } = require('../middlewares/Auth');

userRouter
    .post('/signup', userController.signUp)
    .post('/login', userController.login)
    .get("/logout", restrictTo(["NORMAL","ADMIN"]), userController.logout);

module.exports = userRouter;