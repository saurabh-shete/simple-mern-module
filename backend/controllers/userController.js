const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
  const { email, userName, password } = req.body
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400).json({
      error: 'User Already Exists!'
    })
  }

  const user = await User.create({ userName, email, password })
  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.name,
      email: user.email
    })
  } else {
    res.status(404).json({
      error: 'User Not Found'
    })
  }
})

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.name,
      email: user.email
    })
  } else {
    res.status(401).json({
      error: 'Invalid user and password'
    })
  }
})

module.exports = {
  authController,
  registerUser
}
