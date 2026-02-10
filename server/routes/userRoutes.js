const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
router.post('/register', registerUser);

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
router.post('/login', loginUser);

module.exports = router;
