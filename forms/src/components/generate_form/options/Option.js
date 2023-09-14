import React, { useState } from "react";
import Renderoption from "./Renderoption";
import '../../../styles/option.css'

function Option({ ques,optype }) {
  const [options, setoptions] = useState([...ques.options]);
  function addnewoption() {
    let arr = [...ques.options];
    arr.push("option");
    ques.options = [...arr];
    setoptions([...arr]);
  }
  return (
    <>
      {options.map((opt,index) => {
        return (<Renderoption index={index} opt={opt}  options={options} setoptions={setoptions} ques={ques} optype={optype}/>)
      })}
      <span className="addnewoption"
        onClick={() => {
          addnewoption();
        }}
      >
        add option
      </span>
    </>
  );
}

export default Option;
