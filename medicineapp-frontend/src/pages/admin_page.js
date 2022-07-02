import React, { useEffect, useState } from "react";
import { getActiveCollectionRequest, getCompleteCollectionRequest, getUserData, setReject } from "../services/UI_to_node";

import { useParams , useHistory} from "react-router-dom";

export default function AdminPage(props){
    const history = useHistory()
    const {id} = useParams()
    props.setAdmin(true)
    
    const [activeContent, setActiveContent] = useState([]) 
    const [content, setContent] = useState([])
    const [UserDetails, setUserDetails] = useState([])
    

    async function getData(Date, userid, id)
    {
        const userdata = await getUserData(userid)
        if(userdata){
                    const temp = {
                        SrNo : id,
                        userid : userid,
                        name : userdata.name,
                        address : userdata.address,
                        date : Date
                    }
                    // console.log(temp)
                    return temp
                }
    }

    
    useEffect(() => {
        async function getRequests(){
            // console.log('before calling a function in getrequests')
            const activeData = await getActiveCollectionRequest()
            const data = await getCompleteCollectionRequest()
            
            setActiveContent(activeData) 
            setContent(data)
            
            
            const TableData = []
            for(let i = 0; i<activeContent.length; i++){
                TableData.push(await getData(activeContent[i].date,activeContent[i].user,activeContent[i]._id))

            }

            setUserDetails([...TableData])

        }getRequests()
    },[UserDetails])



    
    let approved_req = 0
    let rejected_req = 0
    for(let i = 0; i<content.length;i++)
    {
        if(content[i].status === 'Approved')
        {
            approved_req += 1
        }
        if(content[i].status === 'Rejected')
        {
            rejected_req += 1 
        }
    }
   

    async function updateCollectionRequest(requestID){
        const response = await setReject(requestID)
        console.log(response)
        }
    
    function updateUserDetails(requestID){
        const tempArr = []
        for(let i = 0; i < activeContent.length; i++){
            if(activeContent[i]._id === requestID){
                continue
            }
            tempArr.push(activeContent[i])
        }
        setActiveContent([...tempArr])
    }
    
    const styles = {border: '2px solid black', margin : '10px',padding : '5px'}
    return (
        <div className = "container">
            <br/>
            <div class = "container-fluid">
                <div class = "row row-relative">
                    <div class = "col-sm-4 border pt-2">
                        <h4>Total Requests</h4>
                        <p>Number of requests : {content.length+activeContent.length}</p>
                    </div>
                    <div class = "col-sm-4 border pt-2">
                        <div class = "col-border-padding">
                            <h4>Approved</h4>
                            <p>Number of approved requests : {approved_req}</p>
                        </div>
                    </div>
                    <div class = "col-sm-4 border pt-2">
                        <div class = "col-border-padding">
                            <h4>Rejected</h4>
                            <p>Number of rejected requests : {rejected_req}</p>
                        </div>
                    </div>
                </div>

            </div>

            <hr/>
             
            <table class="table border">
                <thead class="table-primary">
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col" className = "border">Name</th>
                        <th scope="col"className = "border">Date</th>
                        <th scope="col"className = "border">Address</th>
                        <th scope='col'className = "border">Details</th>
                        <th scope='col'className = "border">Action</th>
                    </tr>
            </thead>
            <tbody>
                
                {UserDetails.map((item) => (
                        
                        <tr key = {item.SrNo}>

                            <td className = "border">{item.name}</td>
                            <td className = "border">{item.date}</td>
                            <td className = "border">{item.address}</td>
                            <td className = "border"><button type = 'button' className = 'btn btn-primary ' onClick = {(event) =>{
                                event.preventDefault()
                                // console.log(id)
                                history.push(`/requestDetails/${id}/${item.SrNo}/${item.userid}`)
                            }}>Details</button></td>
                            <td className = "border"><button type = 'button' className = 'btn btn-danger' onClick = {()=>{
                                
                                console.log(item.SrNo)
                                updateCollectionRequest(item.SrNo)
                                console.log("length of content",content.length, "length of active content",activeContent.length)
                                updateUserDetails(item.SrNo)
                            }}>Reject</button></td>
                        </tr>
                    ))}
            </tbody>

            </table>
        </div>
    )
}