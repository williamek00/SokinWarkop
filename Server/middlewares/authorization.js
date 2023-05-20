const { Favourite } = require("../models/index")

async function authorization (req,res,next){
    try {
        const { id } = req.user
        const author = await Favourite.findOne({where:{UserId:id}})

        if(!author) throw ({name:"Not Found"})

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = authorization