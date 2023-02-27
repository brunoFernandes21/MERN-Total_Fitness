const express = require('express')
const router = express.Router()

//controller funcitons

const {loginUser, registerUser } = require('../controllers/userController')
//login route
router.post('/login', loginUser)

//register route
router.post('/register', registerUser)


module.exports = router