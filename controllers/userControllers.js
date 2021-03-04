const User = require('../models/userModel')

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log(err))
}
