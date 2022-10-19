require('dotenv').config()
require('./config/db');
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const router = require("./routes/index")
const session = require("express-session")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,'public')))
const flash = require('connect-flash')

app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );

app.set('view engine','ejs')
app.use(flash())
app.use(router)

app.listen(port, () => {
    console.log(`server successfully started at port ${port}`)
    console.log(`http://localhost:${port}`)
})





