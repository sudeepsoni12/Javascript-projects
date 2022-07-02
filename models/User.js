const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    passwordHash: {
        type: String 
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    contact: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User