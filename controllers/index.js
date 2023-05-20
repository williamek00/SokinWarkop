const { User , Warkop , Favourite } = require("../models/index")
const { compareHash } = require('../helpers/bcrypt')
const { encodeToken } = require('../helpers/jwt')
const midtransClient = require('midtrans-client')
class Controller {
    static async login(req,res,next){
        const { email, password } = req.body

        try {
            if (!email) {
                throw { name: "InvalidEmail" }
            }
            if (!password) {
                throw { name: "InvalidPassword" }
            }

            const newUser = await User.findOne({ where: { email } })
            if (!newUser) {
                throw { name: "Email or password is wrong!" }
            }
            const isCorrect = compareHash(password, newUser.password)
            if (!isCorrect) {
                throw { name: "Email or password is wrong!" }
            }

            const token = encodeToken({ id: newUser.id })
            res.json({
                access_token: token,
                email: newUser.email,
            })
        } catch (error) {
            next(error)
        }
        
    }

    static async register(req, res, next) { //register admin
        const { email, password} = req.body
        try {
            if (!email) {
                throw { name: "InvalidEmail" }
            }
            if (!password) {
                throw { name: "InvalidPassword" }
            }

            const newRegister = await User.create({
                email,
                password
            })

            res.status(201).json({ message: `User with this ${newRegister.email} has been created` })

        } catch (error) {
            next(error)
        }
    }

    static async genMidtransToken(req, res, next) {
        try {
            const checkUser = await User.findByPk(req.user.id)

            // CHECK IF USER is PREMIUM
            if (checkUser.isSubscribe) {
                throw { name: 'ALREADY_PREMIUM' };
            }

            console.log(3, '<<<<<<<<');

            // Create Snap API instance - MIDTRANS
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });

            console.log(4, '<<<<<<<<');

            // SET PARAMETERS - MIDTRANS
            let parameter = {
                "transaction_details": {
                    "order_id": "TRANSACTION_" + Math.floor(Math.random() * (9999999999 - 100000000 + 1) + 100000000),
                    "gross_amount": 2000000 // 1juta
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "email": checkUser.email,
                }
            }

            console.log(5, '<<<<<<<<');

            // SNAP TOKEN - MIDTRANS
            const midtransToken = await snap.createTransaction(parameter)


            console.log(6, '<<<<<<<<');

            // console.log(midtransToken, '<<<<<<< midtransToken');

            res.status(200).json(midtransToken)
            // res.status(200).json(checkUser)

        } catch (err) {
            console.log(err , "<<")
            next(err)
        }
    }

   
}
 module.exports = Controller