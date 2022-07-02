import React from 'react'
import { useHistory } from 'react-router-dom'
import { verifyUser } from '../services/users'

function Login() {
  const history = useHistory()

  async function handleSignUpClick(e){
    e.preventDefault()
    history.push('/signup')
  }

  async function handleLoginSubmit(e) {
    e.preventDefault()

    const response = await verifyUser(e.target.login_username.value, e.target.login_password.value)
    if(response.includes('invalid')) {
      alert(response)
    } else {
      history.push(`/profile`)
      window.localStorage.setItem('userId',JSON.stringify(response))
    }

  } 
  return (
    
    <form onSubmit={handleLoginSubmit} className="bg-info">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center bg-light">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input name='login_username' type='text' className="form-control form-control-lg" placeholder="Enter Username"/>
                  </div>
                  <div className="form-outline mb-4">
                    <input id="pwd" name='login_password' type='password' className="form-control form-control-lg" placeholder="Enter Password"/>
                  </div>
                  <input type='submit' value='Login' className="btn btn-primary btn-lg btn-block"/>
                  <div>
                    <p className="mb-0">Don't have an account? <button type="button" onClick={handleSignUpClick} className="btn btn-link p-0">SIGN UP</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>

  );
}

export default Login;
