const CollectorData = require("../models/Collector")

exports.postCollectorData = async function(req, res) {
    
    const colldata=req.body.inputData
    const status="In Consideration"
    const active=true
    const user = req.body.user
    const date=new Date(Date.now())
    
    const data=new CollectorData({
        request:colldata,
        status:status,
        active:active,
        date:date,
        user: user
    })
    await data.save(function(err,result){
        if(err){
            console.error(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getCollectorData = async function(req, res) {

    const userId = req.params.userId
    const response = await CollectorData.find({user: userId})
    res.send(response)
}