import React from 'react'
import '../../../styles/renderoption.css'

function Renderoption(props) {
    function remove(){
        let arr=[...props.forms[props.frmindex].questions[props.index].options];
        arr.splice(props.oindex,1);
        props.forms[props.frmindex].questions[props.index].options=[...arr];
        props.setoptions([...arr]);
        props.setsaved(false);
    }
    function namechange(e){
        let arr=[...props.options]
        arr[props.oindex]=e;
        props.forms[props.frmindex].questions[props.index].options=[...arr];
        props.setoptions([...arr]);
        props.ques.options[props.oindex]=e;
        props.setsaved(false);
    }
    return (
    <div className='option'>
        {props.ques.type==="radio"?
    <i className="fa-regular fa-circle"></i>:props.ques.type==="checkbox"?<i className="fa-regular fa-square"></i>:props.oindex+1}
    <input className='options-inp' type='text' value={props.ques.options[props.oindex]} onChange={(e)=>{namechange(e.currentTarget.value)}}/>
    <i className="fa-solid fa-x" onClick={()=>{remove()}}></i>
    </div>
  )
}

export default Renderoption