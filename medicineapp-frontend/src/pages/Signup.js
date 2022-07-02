import { useState } from "react"
import { useHistory } from "react-router"
import { postUser } from "../services/users"
import '../navStyle.css'

const SignUp = () => {
    const history = useHistory()
    const [message, setMessage] = useState('')

    async function handleSignUpSubmit(e) {
        e.preventDefault()
        
        const userObj = {
            username: e.target.username.value,
            password: e.target.password_input.value,
            age: e.target.age_input.value,
            gender: e.target.gender_input.value,
            contact: e.target.contact_input.value,
            name: e.target.name_input.value,
            address: `${e.target.houseaddress_input.value}, ${e.target.streetaddress_input.value}, ${e.target.cityaddress_input.value}, ${e.target.stateaddress_input.value}, ${e.target.pinaddress_input.value}` 
        }
        
        const userValuesArray = Object.values(userObj)
        const userKeysArray = Object.keys(userObj)
        const emptyValueIndex = userValuesArray.indexOf('')

        if(emptyValueIndex === -1) {
          
          let valid = true
          let invalidField = ''

            for (let i = 0; i < userObj.age.length; i++) {
              if((userObj.age.charCodeAt(i) >= 65 && userObj.age.charCodeAt(i) <= 90) || (userObj.age.charCodeAt(i) >= 97 && userObj.age.charCodeAt(i) <= 122)) {
                if(valid) {
                  valid = false
                  invalidField='Age'
                  break
                }
              }
            }
            if(valid) {
              for (let i = 0; i < userObj.contact.length; i++) {
                if((userObj.contact.charCodeAt(i) >= 65 && userObj.contact.charCodeAt(i) <= 90) || (userObj.contact.charCodeAt(i) >= 97 && userObj.contact.charCodeAt(i) <= 122)) {
                    valid = false
                    invalidField='Contact'
                    break
                }
              }
            }
            if(valid) {
              for (let i = 0; i < userObj.name.length; i++) {
                if((userObj.name.charCodeAt(i) >= 65 && userObj.name.charCodeAt(i) <= 90) || (userObj.name.charCodeAt(i) >= 97 && userObj.name.charCodeAt(i) <= 122) || (userObj.name.charCodeAt(i) == 32)) {
                    continue
                }
                valid = false
                invalidField='Name'
                break
              }
            }
            if(valid) {
              for (let i = 0; i < e.target.cityaddress_input.value.length; i++) {
                if((e.target.cityaddress_input.value.charCodeAt(i) >= 65 && e.target.cityaddress_input.value.charCodeAt(i) <= 90) 
                  || (e.target.cityaddress_input.value.charCodeAt(i) >= 97 && e.target.cityaddress_input.value.charCodeAt(i) <= 122)) {
                    continue
                }
                valid = false
                invalidField='City'
                break
              }
            }
            if(valid) {
              for (let i = 0; i < e.target.stateaddress_input.value.length; i++) {
                if((e.target.stateaddress_input.value.charCodeAt(i) >= 65 && e.target.stateaddress_input.value.charCodeAt(i) <= 90) 
                  || (e.target.stateaddress_input.value.charCodeAt(i) >= 97 && e.target.stateaddress_input.value.charCodeAt(i) <= 122)) {
                    continue
                }
                valid = false
                invalidField='State'
                break
              }
            }
            if(valid) {
              for (let i = 0; i < e.target.pinaddress_input.value.length; i++) {
                if((e.target.pinaddress_input.value.charCodeAt(i) >= 65 && e.target.pinaddress_input.value.charCodeAt(i) <= 90) 
                  || (e.target.pinaddress_input.value.charCodeAt(i) >= 97 && e.target.pinaddress_input.value.charCodeAt(i) <= 122)) {
                    valid = false
                    invalidField='PinCode'
                    break
                }
              }
            }
            
            if(valid) {
              console.log('sab changa si')
              const response = await postUser(userObj)
              e.target.username.value = ''
              e.target.password_input.value = ''
              e.target.age_input.value = ''
              e.target.contact_input.value = ''
              e.target.name_input.value = ''
              e.target.houseaddress_input.value = ''
              e.target.streetaddress_input.value = ''
              e.target.cityaddress_input.value = ''
              e.target.stateaddress_input.value = ''
              e.target.pinaddress_input.value = ''
              
              if(response.err) {
                alert('Your username is not unique.')  
              } else {
                alert('Account has been created.')
                history.push('/login')
              }

            } else {
              console.log('something is invalid')
              setMessage(`${invalidField} entered is not valid`)
              setTimeout(() => {
                setMessage('')
              }, 3000)
            }
           
        } else { 
          setMessage(`You forgot to enter ${userKeysArray[emptyValueIndex].toUpperCase()}`)
          setTimeout(() => {
            setMessage('')
          }, 3000)
        }
    }
    return (
    
      
      <form onSubmit={handleSignUpSubmit} className="bg-info rounded">
        <section className="vh-100 ">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                  <div className="card-body p-3 text-center bg-light">
                    <span style={{color: 'red'}}>{message}</span>
                    <h3 className="mb-4 ">Sign Up</h3>
                    <div className="form-floating mb-4">
                        <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username<span style={{color: 'red'}}>*</span> : </label>
                        <input id="username" type='text' placeholder="Enter username" autoComplete = 'none'/>

                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password<span style={{color: 'red'}}>*</span> : </label>
                        <input name='password_input' id="password" type='password' placeholder="Enter password" minLength='5'/>

                        <label htmlFor="age" className="col-md-4 col-form-label text-md-right">Age<span style={{color: 'red'}}>*</span> : </label>
                        <input type="text" maxLength="2" name='age_input' id="age" placeholder="Enter age"/>

                        <label htmlFor="gender" className="col-md-4 col-form-label text-md-right element">Gender<span style={{color: 'red'}}>*</span> : </label>
                        <select className='select_input' name='gender_input'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select><br/>

                        <label htmlFor="contact" className="col-md-4 col-form-label text-md-right">Contact<span style={{color: 'red'}}>*</span> : </label>
                        <input name='contact_input' id="contact" type='text' minLength="10" maxLength="10" placeholder="Enter Contact"/>

                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Enter Name<span style={{color: 'red'}}>*</span> : </label>
                        <input name='name_input' id="name" type='text' placeholder="Enter Name" autoComplete = 'none' />

                        <label htmlFor="houseaddress" className="col-md-4 col-form-label text-md-right">House<span style={{color: 'red'}}>*</span> : </label>
                        <input name='houseaddress_input' id="houseaddress" type='text' placeholder="Enter House Number" autoComplete = 'none'/>

                        <label htmlFor="streetaddress" className="col-md-4 col-form-label text-md-right">Street<span style={{color: 'red'}}>*</span> : </label>
                        <input name='streetaddress_input' id="streetaddress" type='text' placeholder="Enter Street Address" autoComplete = 'none'/>

                        <label htmlFor="cityaddress" className="col-md-4 col-form-label text-md-right">City<span style={{color: 'red'}}>*</span> : </label>
                        <input name='cityaddress_input' id="cityaddress" type='text' placeholder="Enter City" autoComplete = 'none'/>
                        
                        <label htmlFor="stateaddress" className="col-md-4 col-form-label text-md-right">State<span style={{color: 'red'}}>*</span> : </label>
                        <input name='stateaddress_input' id="stateaddress" type='text' placeholder="Enter State" autoComplete = 'none'/>

                        <label htmlFor="pinaddress" className="col-md-4 col-form-label text-md-right">PIN<span style={{color: 'red'}}>*</span> : </label>
                        <input name='pinaddress_input' id="pinaddress" type='text' minLength='6' maxLength='6' placeholder="Enter Pincode" autoComplete = 'none'/>
                    </div>
                    <input type='submit' value='signup' className="btn btn-primary btn-lg btn-block"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </form>
   
    )
}

export default SignUp