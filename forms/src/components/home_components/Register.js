import React, { useRef } from 'react'
import "../../styles/register.css"
import axios from 'axios';

function Register({setview}) {
  const rnameref=useRef(null);
  const remailref=useRef(null);
  const rpwdref=useRef(null);
  const rcontactref=useRef(null);
  const rcnfpwdref=useRef(null);

  function validEmail(email) {
    var validRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  function validate(){
    if((rnameref.current.value).length===0){
      alert("enter name");
      return false;
    }
    if(!validEmail(remailref.current.value)){
      alert("enter a valid email");
      return false;
    }
    if(!((rpwdref.current.value)===(rcnfpwdref.current.value))){
      alert("password not matched");
      return false;
    }
    return true;
  }
  const registeraccount=async()=>{
    try{
      const res=await axios.post("http://localhost:4000/google-form/v1/account/register",{
        name:rnameref.current.value,
        email:remailref.current.value,
        password:rpwdref.current.value,
        contact:rcontactref.current.value,
      });
      if(res.status===200){
        alert("successfully registered");
        setview("login");
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className='register-container'>
        <h2>REGISTER YOUR ACCOUNT</h2>
        <input type='text' required={true} ref={rnameref} placeholder='Name' className='name'/>
        <input type='email' required={true} ref={remailref} placeholder='EMAIL' className='register-email'/>
        <input type='tel' required={true} ref={rcontactref} placeholder='PHONE NUMBER' maxLength={10} pattern='[7-9]-[0-9]{9}' className='phone'/>
        <input type='password' required={true} ref={rpwdref} placeholder='PASSWORD' className='reg-pwd'/>
        <input type='password' required={true} ref={rcnfpwdref} placeholder='CONFIRM PASSWORD' className='reg-cnf-pwd'/><br/>
        <button className='register-btn' onClick={()=>{if(validate()){console.log(true);registeraccount();}else{console.log(false);}
        
        }}>REGISTER</button><br/>
        <span className='login' onClick={()=>{setview("login")}}>LOGIN</span>
    </div>
  )
}

export default Register