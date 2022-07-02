const User = require('../models/User')
const Admin = require('../models/Admin')
const Collection = require('../models/Collector')




exports.getUserDetails = async function(req, res) {
    const id = req.body.id
    const response = await User.findById(id)
    
    res.send(response)
}

exports.verifyAdmin = async function (req, res) {
    // console.log(req.body.username)
    const response = await Admin.findOne({Username : req.body.username})
    if(response) {
        if(req.body.password === response.Password) {
            res.send(response._id)
        } else {
            res.send('invalid password')
        }
    } else {
        res.send("invalid username")
    }
    res.end
}


exports.getCompleteCollectionData = async function(req,res){
    const stat = {active : false}
    const response = await Collection.find(stat)
    if(response){
        res.send(response)
    }else{
        console.log('could not find completed request')
    }
}

exports.getActiveCollectionData = async function(req,res){
    const stat = {active : true}
    const response = await Collection.find(stat)
    if(response){
        res.send(response)
    }
    else{
        console.log("Could not find active request")
    }
}

exports.getData = async function(req, res){
 
    // const response = await User.findOne({collection_requests : req.body.id}, (err,UserInfo) => {

    //     if (err){
    //         console.log(err)
    //     }}).clone()
    const response = await User.findById(req.body.id)
    if(response){
        res.send(response)
    }else{
        console.log('could not find id of the user')
    }
    res.end
}

exports.setApproveRequest = async function(req, res){
    const response = await Collection.updateOne({_id : req.body.id}, {active : false, status : "Approved"}, (err) => {
        if(err){
            console.log(err)
        }
    }).clone()
    if(response){
        res.send(response)
    }
    res.end
}
exports.setRejectRequest = async function(req,res){
    const response = await Collection.updateOne({_id : req.body.requestID}, {active : false, status : "Rejected"}, (err)=> {
        if(err){
            console.log(err)
        }
    }).clone()
    if(response){
        res.send(response)
    }
    res.end
}

exports.getCollectionRequest = async function(req,res){
    
    const response = await Collection.findById(req.body.requestID).clone()
    if(response){
        console.log('in login controller', response)
        res.send(response)
    }
    else{
        console.log('user request id not found in collection schema')
    }
    res.end
}
