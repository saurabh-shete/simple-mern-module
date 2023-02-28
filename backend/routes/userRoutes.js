const express = require('express')
const {
  authController,
  registerUser
} = require('../controllers/userController')

const router = express.Router()

//user registration
router.route('/register').post(registerUser)

//post email and password
router.route('/login').post(authController)

module.exports = router
