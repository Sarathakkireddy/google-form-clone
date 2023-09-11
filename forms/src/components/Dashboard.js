import React from 'react'
import '../styles/dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <div className='dashboard-header'>DASHBOARD</div>
        <div className='dashboard-forms-list'></div>
        <div className='add-new-form'><i class="fa-plus" id='add-icn'></i></div>
    </div>
  )
}

export default Dashboard