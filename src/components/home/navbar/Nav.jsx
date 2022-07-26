import React from 'react'
import './navbar.css'
import Logo from '../../../assets/globetech_logo.png'
import { NavLink } from 'react-router-dom'
import '../banner/banner.css'


const Nav = () => {
  return (
    <div id='navbar'>
        <div className="container">
        <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="nav">
                    <nav>
                        <NavLink id='home_link' className='navlink' to='/'>Home</NavLink>
                        <NavLink id='service_link' className='navlink servo' to='/services'>Services</NavLink>
                        <NavLink id='login_link' className='navlink' to='/login'>Login</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav