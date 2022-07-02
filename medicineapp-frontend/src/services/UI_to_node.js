import axios from 'axios'
const baseURL = 'http://localhost:3003/login-as-admin'

export const verifyAdmin = async(username, password) => {
    const userObj = {
        username,
        password
    }
    // console.log('In service before post')
    const response = await axios.post(baseURL, userObj)
    // console.log('in service after post, respose = ', response)
    return response.data
}


export const getActiveCollectionRequest = async() => {
    // console.log("in getCollectionrequest method in services")
    const newUrl = `${baseURL}/activeRequest`

    const response = await axios.post(newUrl)
    // console.log("in services active", response.data)
    return response.data
    // return response
}

export const getCompleteCollectionRequest = async() =>{
    const newUrl = `${baseURL}/completeRequest`
    const response = await axios.post(newUrl)
    // console.log("in services completed", response.data)
    return response.data
}


// export const getUserData = async(userID) =>{
//     const newUrl = `${baseURL}/getData`
//     const response = await axios.post(newUrl,{userID})
//     // console.log(response.data)
//     return response.data
// }

export const getUserData = async(id) => {
    const newUrl = `${baseURL}/getData`
    const response = await axios.post(newUrl,{id})
    // console.log(response.data)
    return response.data
}

export const setApprove = async(id) =>{
    const newUrl = `${baseURL}/approveRequest`
    const response = await axios.post(newUrl,{id})
    return response.data
}
export const setReject = async(requestID) => {
    const newUrl = `${baseURL}/rejectRequest`
    // console.log("enter setReject services")
    const response = await axios.post(newUrl,{requestID})
    // console.log("exit setReject services")
    return response.data
}

export const getCollectionRequest = async(requestID) =>{
    const newUrl = `${baseURL}/getCollectionRequest`
    // console.log('in services ',requestID)
    const response = await axios.post(newUrl,{requestID})
    // console.log('in services ',response.data)
    return response.data
}