const router = require("express").Router()
const userController = require("../apis/user/userController")
// const studentController = require('../apis/student/studentController')
const axios = require('axios')



router.get("/",function(req,res){
    res.json({
        message:"welcome to admin Routes",
        success:true,status:200
    })
})
router.post("/addAdd",userController.addAddress)


router.get("/loginuser",function(req,res){

    let url = "https://student.gulati.ksesystem.com/public/api/login"

    let payload = {
        email:"gaurav@gmail.com",
        password:"9988776655"
    }
    axios.post(url,(payload))
    .then(chai=>{
        console.log(chai)
        res.json({
            status:200,
            success:true,
            message:"Login User API",
            data:chai.data
        })
    })
    .catch(err=>{
        console.log(err)
        res.json({
            status:200,
            success:false,
            message:"Login User API",
            err:err
        })
    })

   
})

router.get("/allusers",function(req,res){

    let url = "https://student.gulati.ksesystem.com/public/api/getStudent"

    let payload = {}
    let header = {
        "accept":"application/json",
        "authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDM1ZmZhZTIwYWY2YWQ2YzA2ZGRiOGU1MjlhNmU2MDE0N2ZiZjM1NGIxZDk1OTgyYjc0YjJlNDFlMWVmY2JiOTA2YzE1OTc2YTkxNTgzOTciLCJpYXQiOjE2NzM1MjE1NzYuMTYzNTMzOTI2MDEwMTMxODM1OTM3NSwibmJmIjoxNjczNTIxNTc2LjE2MzUzNjA3MTc3NzM0Mzc1LCJleHAiOjE3MDUwNTc1NzYuMTUzNjY3OTI2Nzg4MzMwMDc4MTI1LCJzdWIiOiIzNzYiLCJzY29wZXMiOltdfQ.Ls5Vgkb0M9fvIY4BcosbtnG7Gb76g4J5JJeFZuLNwrE13VlBdGsqeYOoDu_GxYEi6VWNsGf4VSbMZ1Lc8nRjpvf65MgXdUF7b-C6eg3WLLquvX4ugdPEVjIBnuFR3MuftYPUHqajQt2JItQHvoGpxRAKQJnGzghv6HWaUh3Yo9iCb0OgWD8SWGLtvGKbpW48cXmViIQQki6G9_cq0DNgpZuHkqPXLPz4vU9GPkXtcsEgMoOUPgpIkZvquVaO1_DrlbGsj6E6fgwRG9VmaLA3-P2svsbq0VHRRcHOQ8WCftWcjWNo8Pr9hZ34HiV7yChPUuWKeG-w2uiv2LZAQoUA--ihwW2rpYWOy2ZelmBtG5VhjK_ZoDp5JBtFgiePWvKMo52GFNQ0fBd8nyBX4m3lYcbSg5H1n0rxoek3ExU1-nysiyzEqDqumFkTgJHck6q-2HbjGnBNJ8V5c5aFJBlGuPecrVhVyLf-IjcnAmonEm0KIky_CgJCzeocApGMKEAXB517CZyD8mCerrzr8LXXqWCCsw8fnnOkJRWRmnbb7ND3kg3SdVtE7wfam4i6wRm6uZxn9xthWAKuBO473IH8QLdEQS28VbcsrmkaKtJaIMzLsr6LC_egfugGM87NzjrDEJVqYLql_XSn9VhntjcUz_VTDYq52Cr7h003FYZ7cDY"
    }
    axios.get(url,{
        headers:header
    })
    .then(chai=>{
        console.log(chai)
        res.json({
            status:200,
            success:true,
            message:"Login User API",
            data:chai.data
        })
    })
    .catch(err=>{
        console.log(err)
        res.json({
            status:200,
            success:false,
            message:"Login User API",
            err:err.response.data
        })
    })

   
})


module.exports= router;