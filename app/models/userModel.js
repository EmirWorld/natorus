const mongoose = require('mongoose');

const User = new mongoose.Model(
  'User',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  })
);

module.exports = User;
