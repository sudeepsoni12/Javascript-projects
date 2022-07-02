const mongoose = require('mongoose')

const collectorSchema = mongoose.Schema({
    request:[{
    medicineName: {
        type: String
    },
    weight: {
        type: Number 
    },
    companyName: {
        type: String
    },
    quantity: {
        type: Number
    }}],
    status:{
        type:String
    },
    active:{
        type:Boolean
    },
    date:{
        type:Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
})

const Collector = mongoose.model('Collector', collectorSchema)

module.exports = Collector 