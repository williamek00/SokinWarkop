require("dotenv").config()
const jwt = require("jsonwebtoken")
const secret_key = process.env.secret_key

const encodeToken = (payload)=>{
    return jwt.sign(payload,secret_key)
}
const decodeToken = (token)=>{
    return jwt.verify(token,secret_key)
}

module.exports={
    encodeToken,
    decodeToken
}

