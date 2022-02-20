const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middlewares/isUserValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginMiddleware, loginController.addUsers);

module.exports = loginRouter;