import React, { useState } from 'react'
import Login from './home_components/Login';
import Register from './home_components/Register';
import '../styles/home.css';

function Home() {
  const [view,setview]=useState('login');
  return (
    <>
    <div className='home-container'>
      <div className='home-left-pane'>
        <h1>WELCOME TO GOOGLE FORMS CLONE</h1>
        <h3>Create your own customized forms</h3>
      </div>
      <div className='home-right-pane'>
        {view==="login"?<Login setview={setview}/>:<Register setview={setview}/>}
      </div>
    </div>
    </>
  )
}

export default Home