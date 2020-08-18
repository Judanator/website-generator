const express = require('express')
const router = express.Router()

const formController = require('../Controller/formController')

router.get('/getForm', formController.getSingleForm)
router.post('/addform', formController.postForm)

module.exports = router