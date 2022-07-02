require('dotenv').config()

const MONGODB = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
    MONGODB,
    PORT
}