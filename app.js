const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginRouter = require('./routes/loginRouter')
const collectorRouter=require('./routes/collectorRouter')
const donorRouter = require('./routes/donorSubmissionDataRouter')
const adminRouter = require('./routes/adminRouter')
const config = require('./config')
const app = express()

mongoose.connect(config.MONGODB
, {useNewUrlParser: true, useUnifiedTopology: true}).then(response => {
    console.log('connected to db')
}).catch(err => {
    console.error(err)
})

app.use(cors())
app.use(express.json())
app.use('/login', loginRouter)
app.use('/collector',collectorRouter)
app.use('/donor', donorRouter)
app.use('/login-as-admin',adminRouter)

module.exports = app