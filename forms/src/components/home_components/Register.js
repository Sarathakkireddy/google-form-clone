import React from 'react'
import "../../styles/register.css"

function Register({setview}) {
  return (
    <div className='register-container'>
        <h2>REGISTER YOUR ACCOUNT</h2>
        <input type='text' placeholder='Name' className='name'/>
        <input type='text' placeholder='EMAIL' className='register-email'/>
        <input type='tel' placeholder='PHONE NUMBER' maxLength={10} pattern='[7-9]-[0-9]{9}' className='phone'/>
        <input type='password' placeholder='PASSWORD' className='reg-pwd'/>
        <input type='password' placeholder='CONFIRM PASSWORD' className='reg-cnf-pwd'/><br/>
        <button className='register-btn'>REGISTER</button><br/>
        <span className='login' onClick={()=>{setview("login")}}>LOGIN</span>
    </div>
  )
}

export default Register