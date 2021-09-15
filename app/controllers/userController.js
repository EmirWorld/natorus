const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {};

exports.getUser = (req, res) => {};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'new user created successfully',
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    res.status(401).json({
      status: 'fail',
      message: e.message,
    });
  }
};

exports.updateUser = (req, res) => {};

exports.deleteUser = (req, res) => {};
