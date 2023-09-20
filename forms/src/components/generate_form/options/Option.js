import React, { useState } from "react";
import Renderoption from "./Renderoption";
import "../../../styles/option.css";

function Option({ ques, optype, forms,index,frmindex,setsaved,rend }) {
  const [options, setoptions] = useState([...ques.options]);
  function addnewoption() {
    let arr = [...forms[frmindex].questions[index].options];
    arr.push("option");
    forms[frmindex].questions[index].options = [...arr];
    ques.options=[...arr];
    setoptions([...arr]);
    setsaved(false);
  }
  return (
    <>
      {ques.options.map((opt, oindex) => {
        return (
          <Renderoption
            opt={opt}
            oindex={oindex}
            forms={forms}
            index={index}
            frmindex={frmindex}
            options={options}
            setoptions={setoptions}
            ques={ques}
            optype={optype}
            key={oindex}
            setsaved={setsaved}
          />
        );
      })}
      <span
        className="addnewoption"
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
