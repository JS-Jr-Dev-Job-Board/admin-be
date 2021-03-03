const router = require('express').Router()

const {
  getServerStatus,
  allRoutesError,
} = require('../controllers/statusControllers')

router.get('/status', getServerStatus)
router.get('*', allRoutesError) // must be the very last route

module.exports = router
