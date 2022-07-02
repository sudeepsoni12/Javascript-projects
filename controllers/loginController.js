const User = require('../models/User')
const Admin = require('../models/Admin')
const Collection = require('../models/Collector')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

exports.postUser = async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const age = req.body.age
    const gender = req.body.gender
    const contact = req.body.contact
    const name = req.body.name
    const address = req.body.address
    
    const hash = await bcrypt.hash(password, 10)
    
    const user = new User({
        username: username,
        passwordHash: hash,
        age,
        gender,
        contact,
        name,
        address
    })
    await user.save(function(err, result) {
        if(err) {
            console.error(err)
            if(err.code === 11000) {
                res.json({
                    err: 'Username not unique'
                })
            }
        } else {
            res.send(result)
        }
    })
}

exports.verifyUser = async function (req, res) {
    const response = await User.findOne({username: req.body.username})
    if(response) {
        const passResponse = await bcrypt.compare(req.body.password, response.passwordHash)
        if(passResponse) {
            res.send(response._id)
        } else {
            res.send('invalid password')
        }
    } else {
        res.send("invalid username")
    }
    res.end()
}

exports.getUserDetails = async function(req, res) {
    const id = req.body.id
    const response = await User.findById(id)
    
    res.send(response)
}

exports.verifyAdmin = async function (req, res) {
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
 
    const response = await User.findOne({collection_requests : req.body.id}, (err,UserInfo) => {

        if (err){
            console.log(err)
        }}).clone()

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
