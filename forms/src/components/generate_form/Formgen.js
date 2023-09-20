import React, { useState } from "react";
import "../../styles/formgen.css";
import Question from "./Question";

function Formgen({ title, settitle, form,forms,frmindex, setdescription, description,setsaved }) {
  const [addquestion, Setaddquestion] = useState([...forms[frmindex].questions]);
  function addnewquestion() {
    let arr = [...forms[frmindex].questions];
    arr.push({
      question: "Question",
      type: "radio",
      options: ["option"],
      required: false,
    });
    
    forms[frmindex].questions = [...arr];
    Setaddquestion([...arr]);
    setsaved(false);
  }
  return (
    <>
      <div className="form-title-div">
        <input
          type="text"
          value={title}
          className="form-title-inp"
          onChange={(e) => {
            settitle(e.currentTarget.value);
            forms[frmindex].title=e.currentTarget.value;
            setsaved(false);
          }}
          onBlur={(e) => {
            settitle(
              e.currentTarget.value === ""
                ? "Undefined form"
                : e.currentTarget.value
            );
            forms[frmindex].title= ( e.currentTarget.value === ""
            ? "Undefined form"
            : e.currentTarget.value)
          }}
        />
        <input
          type="text"
          placeholder="Form description"
          className="form-desc-inp"
          value={forms[frmindex].description}
          onChange={(e) => {
            setdescription(e.currentTarget.value);
            forms[frmindex].description=e.currentTarget.value;
            setsaved(false);
          }}
        />
      </div>
      <div className="form-tools">
        <span
          className="add-content"
          onClick={() => {
            addnewquestion();
            setsaved(false);
          }}
        >
          <i className="fa-solid fa-circle-plus" id="add-form-content"></i>
        </span>
      </div>
      <div className="questions">
        {addquestion.map((ques, index) => {
          return (
            <Question
              ques={ques}
              form={form}
              forms={forms}
              frmindex={frmindex}
              addquestion={addquestion}
              Setaddquestion={Setaddquestion}
              setsaved={setsaved}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Formgen;
