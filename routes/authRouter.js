const router = require('express').Router()

const { signup } = require('../controllers/authControllers')

router.post('/signup', signup)

module.exports = router
