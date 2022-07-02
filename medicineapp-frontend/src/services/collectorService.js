import axios from 'axios';
const url='http://localhost:3003/collector'

export const postCollectorData= async (collectorData)=>{
    
    const response = await axios.post(url,collectorData)
    return response.data
}

export const getCollectionsRequests = async (userId) => {
    const newurl = `${url}/${userId}`
    
    const response = await axios.get(newurl)
    return response.data
}