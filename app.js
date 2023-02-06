require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const app = express()
const DB_URI = process.env.DB_URI;
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App corriendo el puerto ${port}`)
})

dbConnect(DB_URI);