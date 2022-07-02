import React from 'react'
import { useHistory } from 'react-router-dom'

import { verifyAdmin } from '../services/UI_to_node'

export default function AdminLogin(){
    const history = useHistory()
    async function handleSubmit(event){
        event.preventDefault()
        const response = await verifyAdmin(event.target.login_username.value, event.target.login_password.value)

        if(response.includes('invalid')){
            alert(response)
        }
        else{
            history.push(`/admin-page/${response}`)
            window.localStorage.setItem('adminID',JSON.stringify(response))
        }

    }
    return(
            
        <form onSubmit={handleSubmit} className="bg-info">

        <section className="vh-100">

          <div className="container py-5 h-100">

            <div className="row d-flex justify-content-center align-items-center h-100">

              <div className="col-12 col-md-8 col-lg-6 col-xl-5">

                <div className="card shadow-2-strong">

                  <div className="card-body p-5 text-center bg-light">

                    <h3 class="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">

                      <input name='login_username' type='text' className="form-control form-control-lg" placeholder="Enter Username"/>

                    </div>                  

    < div   className = "form-outline mb-4" >
     <div className="form-outline mb-4">

                      <input id="pwd" name='login_password' type='password' className="form-control form-control-lg" placeholder="Enter Password"/>

                    </div>

                    <input type='submit' value='Login' className="btn btn-primary btn-lg btn-block"/>

                   
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
        </section>

      </form>


       
    )
}