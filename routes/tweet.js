const express = require('express')
const router = express.Router()

const {
    tweeets,
    tweetsFollowers,
    create,
    remove,
    tweetId,
} = require('../controllers/tweet')

const { tweetValidator } = require('../validation/index')

/* routes */

router.get('/tweets', tweeets)

router.get('/tweets/followers', tweetsFollowers)

router.post('/tweet/create', tweetValidator, create)

router.delete('/tweet/:tweetId', remove);

router.param("tweetId", tweetId)
module.exports = router
