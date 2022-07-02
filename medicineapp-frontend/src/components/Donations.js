import React from "react"

const Donations = ({allDonations}) => {
    return (
        <div>
        {       
        <div >
        <h4>Donation</h4>
        {
        allDonations.map((donation) => {
            return(
            <div>
             <div>
                 <p>Date : {donation.submissionDate.substring(0,10).split('-').reverse().join('-')} &nbsp; &nbsp; Time : {donation.submissionDate.substring(11,19)}</p>
                 {/* <p></p> */}
             </div>
            <table class="table table-bordered border-dark">
                    <thead class="table-primary">
                        <tr>
                            <th scope = 'col'> Medicine Name </th>
                            <th scope = 'col'> Weight </th>
                            <th scope = 'col'> Company Name </th>
                            <th scope = 'col'> Quantity </th>   
                        </tr>
                </thead>
                <tbody className = 'bg-light'>
                    {donation.submission.map((medicine) => {
                            return(
                                <tr>
                                    <td>{medicine.medicineName}</td>
                                    <td>{medicine.weight}</td>
                                    <td>{medicine.companyName}</td>
                                    <td>{medicine.quantity}</td>
                                </tr>
                            
                            )}
                        )}
                        
                    </tbody>

                </table>
            </div>
            )
        })
        }
        
            </div>
            }
        </div>
    )
}

export default Donations