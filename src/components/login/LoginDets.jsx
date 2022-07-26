import React from 'react'
import './logindetails.css'

const LoginDets = () => {
  return (
    <div id='ldets'>
        <div className="ldets_left">
            <h1>Globetech Company Limited</h1>
            <p>Make yourself digitalized & more effecient</p>
        </div>
        <div className="ldets_right">
            <div className="login_form">
                <h1>Welcome</h1>
                <small>Sign in to your account</small>
                <input type="email" name="email" id="login_email" placeholder='Email'/>
                <input type="password" name="password" id="login_password" placeholder='Password'/>
                <button type="submit" id='login_button'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginDets