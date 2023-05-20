require("dotenv").config()
const { User } = require("./models/index")
const express = require('express')
const app = express()
const port =  process.env.PORT || 3000
const user = require("./routes/user")
const warkop = require("./routes/warkop")
const favourite = require("./routes/favourite")
const errHandling = require("./middlewares/errHandling")
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(user)
app.use(warkop)
app.use(favourite)
app.use(errHandling)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})