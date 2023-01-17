let mongoose  = require("mongoose")

let userSchema = new mongoose.Schema({
    email:{type:String,default:""},
    name:{type:String,default:""},
    phone:{type:String,default:""},

    address:[],

    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})

module.exports = mongoose.model("User",userSchema)