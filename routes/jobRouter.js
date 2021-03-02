const router = require('express').Router()

const {
  createNewJobPosting,
  deleteJobPosting,
  getAllJobs,
  getJobById,
  updateJobPosting,
} = require('../controllers/jobController')

router.get('/', getAllJobs)
router.get('/:jobId', getJobById)
router.post('/', createNewJobPosting)
router.put('/:jobId', updateJobPosting)
router.delete('/:jobId', deleteJobPosting)

module.exports = router
