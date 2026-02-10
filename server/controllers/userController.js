const User = require('../models/userModel');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  res.status(200).json({ message: 'Register User Placeholder' });
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  res.status(200).json({ message: 'Login User Placeholder' });
};

module.exports = {
  registerUser,
  loginUser,
};
