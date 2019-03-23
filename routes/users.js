const router = require('express').Router();
const controller = require('../controllers/user.controller');
const validate = require('../middlewares/validations');
const tokenvalidation = require('../middlewares/tokenValidation');

router.post('/register', validate.register, controller.register);
router.post('/login', validate.login, controller.login);
router.get('/profile', tokenvalidation, controller.getUserProfile);
router.put('/profile', tokenvalidation, validate.update, controller.updateUserProfile);
router.delete('/profile', tokenvalidation, controller.deleteUserProfile);
router.post('/changepassword', tokenvalidation, validate.changePassword, controller.changePassword);
router.post('/:resetToken/resetpassword', controller.resetPassword);

module.exports = router;