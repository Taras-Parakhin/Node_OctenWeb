const {Router} = require('express');
const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middlewares/isSignInValid');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);
signInRouter.post('/', signInMiddleware, signInController.findUser);

module.exports = signInRouter;