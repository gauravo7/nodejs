let User = require("./userModel")

exports.addAddress = (req,res)=>{
    User.findOne({_id:req.body._id})
    .then(data=>{
        let add = {
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode,
        }
        if(data!=null){
            data.address.push(add);
            data.save()
            .then(data2=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Address Added",
                    data:data2
                })
            })
        }else{
            res.json({
                message:"No User Found",
                status:400,
                succes:false
            })
        }
    })
    
}