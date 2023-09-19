import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/formsrender.css"

function Formsrender({form,forms,id, frmindex}) {
  const navigate=useNavigate();
  console.log(forms);
  return (
    <>
    <div className='formdisp-div' onClick={()=>{navigate("/cf",{state:{form,forms,id,frmindex}})}}>
    <div className='formdisp-title'>{forms[frmindex].title}</div>
    <span className='formdisp-desc'>{forms[frmindex].description}</span>
    </div>
    
    </>
  )
}

export default Formsrender