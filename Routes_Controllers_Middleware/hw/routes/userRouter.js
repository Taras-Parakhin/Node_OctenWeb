const {Router} = require('express');
const userController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/', userController.renderUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/:id', userController.deleteUser);
// userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;