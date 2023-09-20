import React, { useRef } from 'react'
import '../../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAccountInfo } from "../../contexts/accountContext";

function Login({setview}) {
  const context = useAccountInfo();
  const emailref=useRef(null);
  const pwdref=useRef(null);
  const navigate=useNavigate();
  let selector="";
  function validEmail(email) {
    var validRegex = /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (email.match(validRegex)) {
      selector="email";
    } else {
      selector="contact";
    }
  }
  const logintoaccount=async ()=>{
    try{
    const res=await axios.post("http://localhost:4000/google-form/v1/account/login",{
      userid:emailref.current.value,
      password:pwdref.current.value,
      selector:selector,
    });
    context.changeToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    context.changeUserId(res.data.id);
    navigate("/dash");
  }catch(error){ 
    console.log(error);
  }
  }
  return (
    <>
    <div className='login-container'>
        <h2 className='login-heading'>LOGIN TO YOUR ACCOUNT</h2>
        <input type='text' placeholder='EMAIL / PHONE' ref={emailref} className='email-login'/>
        <br/>
        <input type='password' placeholder='PASSWORD' ref={pwdref} className='pwd-login'/>
        <br/>
        <span className='forget-pwd'>Forgot password</span><br/>
        <button className='login-btn' onClick={()=>{
          validEmail(emailref.current.value);
          logintoaccount();
          }}>LOGIN</button><br/>
        <span className='register' onClick={()=>{setview("register")}}>Register</span>
    </div>
    </>
  )
}

export default Login