const mongoose = require('mongoose')
// const { stringify } = require('querystring')

const AdminSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const Admin = mongoose.model('admins',AdminSchema)

module.exports = Admin