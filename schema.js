var mongoose = require("mongoose")
var authorSchema = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model("author", authorSchema)