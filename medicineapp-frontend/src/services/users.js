import axios from 'axios'
const baseUrl = 'http://localhost:3003/login'

export const postUser = async (userObj) => {
    const newUrl = `${baseUrl}/newuser`
    const response = await axios.post(newUrl, userObj)
    return response.data
}

export const verifyUser = async (username, password) => {
    const userObj = {
        username,
        password
    }
    const response = await axios.post(baseUrl, userObj)
    return response.data
}

export const getUserDetails = async (userId) => {
    const newUrl = `${baseUrl}/user`

    const response = await axios.post(newUrl, {
            id: userId
        })
    return response.data
}

