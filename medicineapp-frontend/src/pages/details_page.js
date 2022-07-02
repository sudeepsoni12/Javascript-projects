import React, { useEffect, useState} from "react";
import { useParams, useHistory  } from "react-router-dom";
import { getCollectionRequest, getUserData, setReject, setApprove } from "../services/UI_to_node";

// export default function DetailsPage(props){
export default function DetailsPage(){
    const history = useHistory()
    const {adminid,requestid,userid} = useParams()
    const [collectionRequest, setCollectionRequest] = useState([])
    const [userDetails, setUserDetails] = useState('')
    
    useEffect(() => {
        async function getUserCollection(){
            const user = await getUserData(userid)
            setUserDetails(user)
            
        }getUserCollection()
        async function getRequest(){
            const response = await getCollectionRequest(requestid)
            setCollectionRequest([...response.request])
            
        }getRequest()
        
    }, [])
    
    async function Approve(){
        const response = await setApprove(requestid)
        
    }
    async function Reject(){
        const response = await setReject(requestid)
    }
    
    return(
        <div className = "container">
        <hr/>
             <div className = "border border-dark p-4 bg-light">
                 <h4>User Information</h4>
                 <p><b>Name</b> - {userDetails.name}</p>
                 <p><b>Gender</b> - {userDetails.gender}</p>
                 <p><b>Age</b> - {userDetails.age}</p>
                 <p><b>Address</b> - {userDetails.address}</p>
                 <p><b>Contact</b> - {userDetails.contact}</p>
             </div>
             <hr/>
             <h4>Medicine Requests</h4>
            <table class="table border">
                <thead class="table-primary">
                    <tr>
                        
                        <th scope="col" className = "border">Medicine Name</th>
                        <th scope="col" className = "border">Weight</th>
                        <th scope="col" className = "border">Quantity</th>
                        <th scope='col'className = "border">Company Name</th>
                        
                    </tr>
            </thead>
            <tbody>
                {collectionRequest.map((item) => (
                        <tr key = {item.medicineName}>
                            <td className = "border">{item.medicineName}</td>
                            <td className = "border">{item.weight}</td>
                            <td className = "border">{item.quantity}</td>
                            <td className = "border">{item.companyName}</td>   
                        </tr>
                    ))}
                    
                 </tbody>

            </table>
           
            <div class="row"> 
                <div class="col-sm-12 text-center">
                    <button className = "btn btn-primary col-lg-1 mr-2"  onClick={() => {
                        Approve()
                        history.push(`/admin-page/${adminid}`)
                    }} >Approve</button>
                    <button class="btn btn-danger col-lg-1" onClick={() => {
                         Reject()
                         history.push(`/admin-page/${adminid}`)
                    }} >Reject</button>
                </div>
            </div>

        </div>
    )
}