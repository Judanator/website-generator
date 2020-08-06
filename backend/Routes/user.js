const express = require('express')
const router = express.Router()

const userController = require('../Controller/userController')

router.get('/getSession', userController.getSession)

router.post('/signup', userController.postNewUser)
router.post('/login', userController.postLogin)

module.exports = router