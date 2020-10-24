const express = require('express')
const router = express.Router()

const {
    signup,
    login,
    logout,
} = require('../controllers/auth')

const { userSignupValidator, userLoginValidator } = require('../validator')

/* routes */
router.post('/sign-up', userSignupValidator, signup)

router.post('/log-in', userLoginValidator, login)

module.exports = router
