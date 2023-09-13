import React, { useState } from 'react'
import '../../styles/question.css'
import Option from './options/Option';
import Text from './options/Text';


function Question({ques}) {
    const [optype,setoptype]=useState(ques.type);
    
  return (
    <div className='question-div'>
    <input type='text' className='question-inp' value={ques.question}/>
    <select className='select-type' onChange={(e)=>{setoptype(e.currentTarget.value);ques.type=optype;}}>
        <option value={"text"}>Short answer</option>
        <option value={"text-area"}>Paragraph</option>
        <hr/>
        <option value={"radio"} selected>Multiple Choice</option>
        <option value={"checkbox"}>Checkboxes</option>
        <option value={"dropdown"}>Dropdown</option>
        <hr/>
        <option value={"file upload"}>File upload</option>
        <hr/>
        <option value={"linear scale"}>Linear scale</option>
        <option value={"multiple choice grid"}>Multiple Choice Grid</option>
        <option value={"checckbox grid"}>Checkbox Grid</option>
        <hr/>
        <option value={"date"}>Date</option>
        <option value={"time"}>Time</option>
    </select>
    <div className='optren'>
    {optype==="text"||optype==="text-area"?<Text/>:optype==="radio"||optype==="checkbox"||optype==="dropdown"?<Option ques={ques} optype={optype}/>:""}
    </div>
    </div>
  )
}

export default Question