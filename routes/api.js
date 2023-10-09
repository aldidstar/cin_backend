var express = require('express')
var router = express.Router()

const apiUser = require('../controllers/apiUser')

// API User

router.post('/login', apiUser.userLogin)
router.post('/register', apiUser.userRegister)
router.get('/me', apiUser.userRead)

module.exports = router
