const express = require('express')
const router = express.Router()

const {
    list,
    profile,
    update,
} = require('../controllers/auth')

/* routes */

router.get('/user/list', list)

router.post('/user/profile/', profile)

router.put('/user', update);


module.exports = router
