const router = require('express').Router()
const AdminController = require('../controllers/adminController')


router.post('/', AdminController.verifyAdmin)
router.post('/activeRequest',AdminController.getActiveCollectionData)
router.post('/completeRequest',AdminController.getCompleteCollectionData)
router.post('/getData',AdminController.getData)
router.post('/rejectRequest',AdminController.setRejectRequest)
router.post('/getCollectionRequest',AdminController.getCollectionRequest)
router.post('/approveRequest',AdminController.setApproveRequest)


module.exports = router