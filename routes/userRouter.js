const router = require('express').Router()

const { getAllUsers } = require('../controllers/userControllers')

router.get('/', getAllUsers)

module.exports = router
