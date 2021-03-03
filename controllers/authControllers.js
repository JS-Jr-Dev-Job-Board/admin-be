const User = require('../models/userModel')

exports.signup = (req, res) => {
  const user = new User(req.body)

  user.save((err, user) => {
    if (err)
      return res
        .status(400)
        .json({ message: 'TODO: Error handler and this is broken' })

    res.status(201).json(user)
  })
}
