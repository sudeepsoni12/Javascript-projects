import React, { useEffect, useState } from 'react'
import { getCollectionsRequests } from '../services/collectorService'
import {getDonationsRequests} from '../services/donorService'
import { getUserDetails } from '../services/users'
import Collections from '../components/Collections'
import Donations from '../components/Donations'

function Profile(props) {
  const [allCollections, setAllCollections] = useState([])
  const [allDonations, setAllDonations] = useState([])
  
  useEffect(() => {
    async function getUser() {
      const user = await getUserDetails(JSON.parse(window.localStorage.getItem('userId')))
      props.setUser(user)
    }
    async function getCollections() {
      const response = await getCollectionsRequests(JSON.parse(window.localStorage.getItem('userId')))
      setAllCollections(response)
    }
    async function getDonations() {
      const response = await getDonationsRequests(JSON.parse(window.localStorage.getItem('userId')))
      setAllDonations(response)
    }
    getUser()
    getCollections()
    getDonations()
    
  },[])
  
  return (
    <div className = "container">
      <h2>About Me</h2>
      <br/>
      <div className = "border border-dark p-4 bg-light">
      <p><b>Username</b> : {props.user.username}</p>
      <p><b>Name</b> : {props.user.name}</p>
      <p><b>Gender</b> : {props.user.gender}</p>
      <p><b>Age</b> : {props.user.age}</p>
      <p><b>Address</b> : {props.user.address}</p>
      </div>
      <hr/>
      <Collections allCollections={allCollections} />
      <hr/>
      <Donations allDonations={allDonations}/>
    </div>
  );
}

export default Profile;
