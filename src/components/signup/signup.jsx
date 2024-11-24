import React from 'react'
import './signup.css'
import usericon from '../assets/user-solid.svg'
import passwordicon from '../assets/lock-solid.svg'
import emailicon from '../assets/envelope-solid.svg'

const signup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                <p>signup</p>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={usericon} alt="" />
                <input type="text" placeholder='Username' />
            </div>

            <div className="input">
                <img src={emailicon} alt="" />
                <input type="text" placeholder='Email Address' />
            </div>

            <div className="input">
                <img src={passwordicon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>

        <div className="forgot_password">
            Already have an account? 
            <span>Sign In</span>
        </div>

        <div className="signup-container">
            <div className="signup">
                Sign Up
            </div>
        </div>
      
    </div>
  )
}

export default signup
