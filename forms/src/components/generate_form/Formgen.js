import React, { useState } from "react";
import "../../styles/formgen.css";
import Question from "./Question";

function Formgen({ title, settitle,form , setdescription, description}) {
  
  
  
  const [addquestion,Setaddquestion]=useState([...form.questions]);
  function addnewquestion(){
    let arr=[...form.questions];
    arr.push({"question":"Question","type":"radio","options":["option"],"required":"false"});
    console.log(arr);
    form.questions=[...arr];
    Setaddquestion([...arr]);
  }
  return (
    <>
      <div className="form-title-div">
        <input type="text" value={title} className="form-title-inp" onChange={(e)=>{settitle(e.currentTarget.value)}} onBlur={(e)=>{settitle(e.currentTarget.value===""?"Undefined form":e.currentTarget.value)}}/>
        <input
          type="text"
          placeholder="Form description"
          className="form-desc-inp"
          onChange={(e)=>{setdescription(e.currentTarget.value)}}
        />
      </div>
      <div className="form-tools">
        <span
          className="add-content"
          onClick={()=>{addnewquestion()}}
        >
          <i className="fa-solid fa-circle-plus" id="add-form-content"></i>
        </span>
      </div>
      <div className="questions">
        {form.questions.map((ques,index)=>{return(<Question ques={ques} form={form} addquestion={addquestion} Setaddquestion={Setaddquestion} index={index}/>)})}
      </div>
    </>
  );
}

export default Formgen;
