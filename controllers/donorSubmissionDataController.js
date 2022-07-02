const DonorData = require("../models/DonorMedicineData")

exports.postDonorSubmissionData = async function(req,res){

    const donorData = req.body.inputData
    const submissionDate = new Date(Date.now())

    const data = new DonorData({
        submission:donorData,
        submissionDate,
        user: req.body.user
    })
    await data.save(function(err, result) {
        if(err) {
            console.error(err)
        } else {
            res.send(result)
        }
    })
    
}

exports.getDonorSubmissionData = async (req, res) => {
    const userId = req.params.userId
    const response = await DonorData.find({user: userId})
    res.send(response)
}