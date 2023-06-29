import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../logoweb.svg'
// import SignUp from './SignUp'
// import Login from './Login'
import '../css/navbar.css'
import { auth } from '../config/config'
// import PropTypes from 'prop-types'


export default function Navbar(props) {

  const navigate = useNavigate();

  const logout = () => {
    auth.signOut().then(()=>{
      navigate('/login');
    })
  }
  
  return (
    <div className='navigation'>
        <Link to="/"><img src={logo} alt='LOGO' className='logo'/></Link>
        {!props.user && <ul className='navbar'>
        <li><Link to="/signup" className='nav-link'>SIGN UP</Link></li>
        <li><Link to="/login" className='nav-link'>LOGIN</Link></li>
        </ul>}
        {props.user && <ul className='navbar'>
        <li><Link to="/" className='nav-link'>{props.user}</Link></li> 
        <li><button className='nav-link' onClick={logout}>LOG OUT</button></li> 
        </ul>}
    </div>
  )
}
