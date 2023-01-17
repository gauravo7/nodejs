let User = require('../apis/user/userModel')

let userObj = {
    email:"admin@gmail.com",
    name:"Gaurav",
    phone:"12345123",
    address:[]    
}   
User.findOne({email:userObj.email})
.then(data=>{
    if(data==null){
        let userObj2 = new User(userObj)
        userObj2.save() 
        .then(data=>{
            console.log("Admin Registered")
        })
    }
})
