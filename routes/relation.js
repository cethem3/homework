const express = require('express')
const router = express.Router()

const {
    relations,
    create,
    remove,
} = require('../controllers/relation')

const { userById } = require('../controller/user')

/* routes */

router.get('/relation', relations)

router.post('/relation/create/:userRelationId', create)

router.delete('/relation/:userRelationId', remove);

router.param("userRelationId", userById)
module.exports = router
