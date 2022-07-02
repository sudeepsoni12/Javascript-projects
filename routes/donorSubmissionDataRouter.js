const router = require('express').Router()
const donorSubmissionDataController = require('../controllers/donorSubmissionDataController')

router.get('/:userId', donorSubmissionDataController.getDonorSubmissionData)
router.post('/', donorSubmissionDataController.postDonorSubmissionData)

module.exports = router