const mongoose = require("mongoose")

const StarageScheme = new mongoose.Schema(
  {
    url:{
      type:String
    },
    file:{
      type:Number
    }
  },
  {
    timestamps:true, //CreatedAt, updatedAt
    versionKey: false
  }
)

module.exports = mongoose.model("storages", StarageScheme)