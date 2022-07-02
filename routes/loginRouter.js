const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.post('/', loginController.verifyUser)
router.post('/user', loginController.getUserDetails)
router.post('/newuser', loginController.postUser)

module.exports = router