const express = require('express')
const app = express()

const db = require("./config/db")
app.use(express.urlencoded({extended:true}))

const adminroutes = require("./routes/adminroutes")
app.use("/admin",adminroutes)

app.get("/",function(req,res){
    console.log("Welcome to API")
})
let seed= require('./common/seed')

app.listen(3000,function(){
    console.log("Server Running at 3000")
})