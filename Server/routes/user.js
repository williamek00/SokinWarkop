const router = require('express').Router()
const authentication = require("../middlewares/authentication")
const Controller = require('../controllers/index')

router.post('/login',Controller.login)
router.post('/register',Controller.register)
router.post('/generate-midtrans',authentication,Controller.genMidtransToken)

module.exports = router
