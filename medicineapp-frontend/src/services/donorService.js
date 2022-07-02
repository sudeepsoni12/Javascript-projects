import axios from 'axios'
const url = 'http://localhost:3003/donor'

export const postDonorSubmissionData = async (donorMedicineData) => {
    const response = await axios.post(url, donorMedicineData)
    return response.data
}

export const getDonationsRequests = async (userId) => {
    const newurl = `${url}/${userId}`
    
    const response = await axios.get(newurl)
    return response.data
}
