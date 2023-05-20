const { User , Warkop , Favourite } = require("../models/index")
 
class FavouriteController {
   static async addFavourite(req,res,next) {
    const { id } = req.params
        try {
            const existingFavourite = await Favourite.findOne({ where: { UserId: req.user.id, WarkopId: id } });
            if (existingFavourite) {
                throw { name: 'Favourite already exists' };
            }
            const favourites = await Favourite.create({ UserId: req.user.id, WarkopId: id });
            res.status(201).json({favourites,UserId: req.user.id});
        } catch (error) {
            next(error)
        }
   }

   static async fetchFavourite(req,res,next){
    try {
        const data = await Favourite.findAll({where:{UserId:req.user.id},include:[{model : Warkop}]})
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
    }

    static async deleteFavourite(req,res,next){
        const { id } = req.params
        try {
            const existingFavourite = await Favourite.findOne({ where: { UserId: req.user.id, WarkopId: id } });
            if (!existingFavourite) {
                throw { name: 'Favourite has been removed' };
            }
            const favourites = await Favourite.destroy({ where: { UserId: req.user.id, WarkopId: id } });
            res.status(201).json({name:`Success delete id ${id}`});
        } catch (error) {
            next(error)
        }
    }



}

module.exports =  FavouriteController 
