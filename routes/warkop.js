const router = require('express').Router()
const WarkopController = require('../controllers/warkop')

router.get('/warkop',WarkopController.showAllWarkops)   
router.get('/warkop/:id',WarkopController.showWarkopDetail)   

module.exports = router