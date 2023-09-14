import React from 'react'
import '../styles/dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
   const navigate=useNavigate();
  return (
    <div className='dashboard-container'>
        <div className='dashboard-header'>DASHBOARD</div>
        <div className='dashboard-forms-list'></div>
        <div className='add-new-form' onClick={()=>{navigate('/cf')}}><i class="fa-plus" id='add-icn'></i></div>
    </div>
  )
}

export default Dashboard