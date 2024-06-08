const express = require('express');
const authController = require('../controller/authController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/signout', auth, authController.signout);

module.exports = router;
