const express = require('express')
const app = express()

const db = require("./config/db")
app.use(express.urlencoded({extended:true}))

const adminroutes = require("./routes/adminroutes")
app.use("/admin",adminroutes)

app.get("/",function(req,res){
    res.send("<h2>Welcome to APP JS Page to Show Data</h2>");
})
// let seed= require('./common/seed')

app.listen(8080,function(){
    console.log("Server Running at 8080")
})