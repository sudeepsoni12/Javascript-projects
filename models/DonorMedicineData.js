const mongoose = require('mongoose')

const DonorSubmissionDataSchema = mongoose.Schema({
    submission:[{
    medicineName:{
        type: String
    },
    weight:{
        type: Number
    },
    companyName:{
        type: String
    },
    quantity:{
        type: Number
    }}],
    submissionDate:{
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
})

const DonorSubmissionData = mongoose.model("DonorSubmissionData",DonorSubmissionDataSchema)

module.exports = DonorSubmissionData