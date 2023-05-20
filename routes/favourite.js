const router = require('express').Router()
const FavouriteController = require('../controllers/favourite')
const authentication = require("../middlewares/authentication")


router.post('/favourite/:id',authentication,FavouriteController.addFavourite)
router.delete('/favourite/:id',authentication,FavouriteController.deleteFavourite)
router.get('/favourite',authentication,FavouriteController.fetchFavourite)

module.exports = router