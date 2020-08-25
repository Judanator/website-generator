const express = require('express')
const router = express.Router()

const formController = require('../Controller/formController')

router.get('/getForm/:id', formController.getSingleForm)
router.get('/getAll', formController.getAllForm)

router.post('/addform', formController.postForm)

module.exports = router