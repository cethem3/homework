const express = require('express')
const router = express.Router()

const {
    uploadAvatar,
    uploadBanner,
    avatar,
    banner,
} = require('../controllers/file')

/* routes */

router.post('/file/avatar/upload', uploadAvatar)

router.post('/file/banner/upload', uploadBanner)

router.get('/file/avatar/:userId', avatar)

router.get('/file/banner/:userId', banner)

module.exports = router
