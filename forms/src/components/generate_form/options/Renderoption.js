import React from 'react'
import '../../../styles/renderoption.css'

function Renderoption(props) {
    function remove(){
        let arr=[...props.ques.options];
        arr.splice(props.index,1);
        props.ques.options=[...arr];
        console.log(arr);
        props.setoptions([...arr]);
    }
    function namechange(e){
        let arr=[...props.options]
        arr[props.index]=e;
        props.ques.options=[...arr];
        props.setoptions([...arr]);
    }
    return (
    <div className='option'>
        {props.optype==="radio"?
    <i class="fa-regular fa-circle"></i>:props.optype==="checkbox"?<i class="fa-regular fa-square"></i>:props.index+1}
    <input className='options-inp' type='text' value={props.ques.options[props.index]} onChange={(e)=>{namechange(e.currentTarget.value)}}/>
    <i className="fa-solid fa-x" onClick={()=>{remove()}}></i>
    </div>
  )
}

export default Renderoption