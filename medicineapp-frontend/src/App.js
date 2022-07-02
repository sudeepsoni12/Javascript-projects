import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'
import Header from './components/Header'
import Collector from './pages/Collect'
import Donate from './pages/Donate'
import AdminLogin from './pages/admin_login'
import AdminPage from './pages/admin_page'
import DetailsPage from './pages/details_page'

const App = () => {
  const [user, setUser] = useState('')
  const [admin, setAdmin ] = useState('')

  return (
    <div>
      <Router>
        <Header user={user} setUser={setUser} admin = {admin} setAdmin = {setAdmin} />
        <Switch>
          <Route path='/testimonials'>
            <Testimonials />
          </Route>
          <Route path='/donate'>
            <Donate />
          </Route>
          <Route path='/collect'>
            <Collector />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/profile'>
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route path = '/login-as-admin'>
            <AdminLogin />  
          </Route>
          <Route path = '/admin-page/:id'>
            <AdminPage admin = {admin} setAdmin ={setAdmin}/>
          </Route>
          <Route path = '/requestDetails/:adminid/:requestid/:userid'>
            <DetailsPage/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
