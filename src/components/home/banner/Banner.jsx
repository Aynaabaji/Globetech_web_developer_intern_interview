import React from 'react'
import Shuttle from '../shuttle/Shuttle'

// nav part start
import Logo from '../../../assets/globetech_logo.png'
import { NavLink } from 'react-router-dom'
import '../banner/banner.css'
//  nav part end

import './banner.css'


const Banner = () => {
  return (
    <div>
      <div className="container">
        <section className="hoverable">
          {/* nav */}
            <div className="navbar" id='navbar'>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="nav">
                    <div className='nav_section'>
                        <NavLink id='home_link' className='navlink' to='/'>Home</NavLink>
                        <NavLink id='service_link' className='navlink servo' to='/services'>Services</NavLink>
                        <NavLink id='login_link' className='navlink' to='/login'>Login</NavLink>
                    </div>
                </div>
            </div>
            {/* nav */}

            <div className="banner">
                <div className="banner_left">
                    <Shuttle/>
                    <div className="banner_head">
                        <h1>Welcome to <span id='banner_head_span'>Globetech</span></h1>
                        <p>We are committed to deliver <span>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                    </div>
                    <button className='btn banner_btn'>Support Us</button>
                    <button className='btn banner_btn btn_bnr_rt'>Our Mission</button>
                </div>
                <div className="banner_right">
                    <div className="circle1 circle">
                      <div className="circle2 circle">
                          <div className="circle3 circle">
                              <div className="circle4">
                                  <div className="planet planet1"></div>
                                  <div className="planet planet2"></div>
                                  <div className="planet planet3"></div>
                                  <div className="planet planet4"></div>
                                  <div className="planet planet5"></div>
                                  <div className="planet planet6"></div>
                              </div>
                      </div>
                      </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Banner
