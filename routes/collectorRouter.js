const router = require('express').Router()
const collectorSubmissionController = require('../controllers/collectorSubmissionController')

router.get('/:userId', collectorSubmissionController.getCollectorData)
router.post('/', collectorSubmissionController.postCollectorData)

module.exports = router