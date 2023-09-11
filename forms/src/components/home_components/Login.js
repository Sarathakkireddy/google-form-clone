import React from 'react'
import '../../styles/login.css'

function Login({setview}) {
  return (
    <>
    <div className='login-container'>
        <h2 className='login-heading'>LOGIN TO YOUR ACCOUNT</h2>
        <input type='text' placeholder='EMAIL / PHONE' className='email-login'/>
        <br/>
        <input type='password' placeholder='PASSWORD' className='pwd-login'/>
        <br/>
        <span className='forget-pwd'>Forgot password</span><br/>
        <button className='login-btn'>LOGIN</button><br/>
        <span className='register' onClick={()=>{setview("register")}}>Register</span>
    </div>
    </>
  )
}

export default Login