const mongoose = require("mongoose")

mongoose.set('strictQuery', false)
mongoose.Promise = global.Promise

const dbConnect = (url) => {
  
  mongoose.connect(url)
    .then(() => {
      console.log("Conexion exitosa")
    }).catch(err => {
      console.error("Error de conexion")
    } )
}

module.exports = dbConnect