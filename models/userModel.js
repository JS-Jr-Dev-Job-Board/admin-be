const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      require: true,
      maxlength: 24,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hashPassword: {
      type: String,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
