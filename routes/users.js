const router = require('express').Router();
const controller = require('../controllers/user.controller');
const validate = require('../middlewares/validations');

router.post('/register', validate.register, controller.register);
router.post('/login', controller.login);
router.get('/:userId/profile', controller.getUserProfile);
router.put('/:userId/profile', controller.updateUserProfile);
router.delete('/:userId/profile', controller.deleteUserProfile);
router.post('/:userId/changepassword', controller.changePassword);
router.post('/:resetToken/resetpassword', controller.resetPassword);

module.exports = router;