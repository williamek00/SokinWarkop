const { User , Warkop , Favourite } = require("../models/index")
const { Op } = require("sequelize")

const axios = require('axios')
class WarkopController {
    static async showAllWarkops(req, res, next) {
        try {
            const { filter } = req.query
            const queryPage = parseInt(req.query.page)
            const querySize = parseInt(req.query.size)
            let page = 0 
            let size = 6
            
            let search
            if(queryPage||querySize||filter){
                //store default number for page and size
                if(filter){
                    // console.log(filter)
                    search = await Warkop.findAndCountAll({
                        where:{
                            name: {
                                [Op.iLike]: `%${filter}%`
                            }
                        },
                    })
                    
                }

                if(!Number.isNaN(queryPage) && queryPage > 0){
                    page = queryPage
                }

                if(!Number.isNaN(querySize) && querySize > 0 && querySize < 3){
                    size = querySize
                }

                const warkop = await Warkop.findAndCountAll({
                    limit : size,
                    offset : page * size 
                })

                if(filter){
                    res.status(200).json(search.rows)
                }

                res.status(200).json({
                    warkop:warkop.rows,
                    totalPages: Math.ceil(warkop.count / size)
                })

            } else {
                const warkop = await Warkop.findAll()
                            res.status(200).json(warkop)
            }
        } catch (error) {
            next(error)
           
        }
    }

    static async showWarkopDetail(req,res,next) {
        try {
            let { id } = req.params

            const warkopDetail = await Warkop.findByPk(id)

            if (!warkopDetail)  throw { name: "notFound" }
            // console.log(warkopDetail.dataValues.city);
            let tempLat 
            let tempLon 
            if(warkopDetail.dataValues.city === "Jakarta Utara") {
                tempLat =  "6.1339S"
                tempLon = "106.8823E"
            }
            if(warkopDetail.dataValues.city === "Jakarta Pusat") {
                tempLat =  "6.1777S"
                tempLon = "106.8403E"
            }
            if(warkopDetail.dataValues.city === "Jakarta Selatan") {
                tempLat =  "6.266S"
                tempLon = "106.8135E"
            }
            
            const { data } = await axios({
                method: 'GET',
                url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
                params: {
                lat: tempLat,
                lon: tempLon,
                  timezone: 'auto',
                  language: 'en',
                  units: 'auto'
                },
                headers: {
                  'X-RapidAPI-Key': '0ce746b701mshde51457c46f9b4cp11ee3ajsnd8bebbc4dac4',
                  'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
                }
            })

            warkopDetail.dataValues.weather = data
            console.log(warkopDetail)
            res.json(warkopDetail)
        } catch (error) {
            next(error)
        }
    }

    

}

module.exports =  WarkopController 
