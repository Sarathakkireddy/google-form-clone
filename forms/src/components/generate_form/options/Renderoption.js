import React from 'react'
import '../../../styles/renderoption.css'

function Renderoption(props) {
    return (
    <div className='option'>
        {props.optype==="radio"?
    <i class="fa-regular fa-circle"></i>:props.optype==="checkbox"?<i class="fa-regular fa-square"></i>:props.index+1}
    <input className='options-inp' type='text' onChange={(e)=>{props.ques.options[props.index]=e.currentTarget.value}}/>
    <i className="fa-solid fa-x"></i>
    </div>
  )
}

export default Renderoption