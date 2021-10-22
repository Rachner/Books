const express = require('express')
const router = express.Router()
const books = require('./Books')

router.use('/Books', books)

module.exports = router
