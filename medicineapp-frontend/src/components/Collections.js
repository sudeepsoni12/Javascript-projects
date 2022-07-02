import React from "react"

const Collections = ({allCollections}) => {
    
    return (
        
        <div >
        <h4>Collection</h4>
        <table class="table table-bordered border-dark">
                <thead class="table-primary">
                    <tr>
                        
                        <th scope = 'col'> SrNo. </th>
                        <th scope = 'col'> Date </th>
                        <th scope = 'col'> Time </th>
                        <th scope = 'col'> Status </th>

                        
                    </tr>
            </thead>
            <tbody className = "bg-light">
                {allCollections.map((request,index) => {
                        return(
                            <tr key = {request._id}>
                                <td>{index+1}</td>
                                <td>{request.date.substring(0,10).split('-').reverse().join('-')}</td>
                                <td>{request.date.substring(11,19)}</td>
                                <td>{request.status}</td> 

                            </tr>
                        
                        
                        )}
                    )}
                    
                 </tbody>

            </table>
            </div>

    )
}

export default Collections