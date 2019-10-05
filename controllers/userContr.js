let User = require("../models/userModel")

exports.list = function(req, res) {
    User.find((err,u)=>{
        return res.json(u);
    });
}

exports.create = function(req, res){
    let user = new User({
        name: req.body.name,
        budget: 0,
        expenses:[],
        debits:[]
    })
    user.save().then(savedUser =>{
        console.log(savedUser)
    })
}

exports.update = function(req,res){
    console.log("hello")
    User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
        return res.json(user);
    })
} 