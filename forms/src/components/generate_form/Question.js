import React, { useState, useEffect } from "react";
import "../../styles/question.css";
import Option from "./options/Option";
import Text from "./options/Text";
import DateTime from "./options/DateTime";

function Question({
  ques,
  form,
  forms,
  frmindex,
  addquestion,
  index,
  Setaddquestion,
  setsaved,
}) {
  const [optype, setoptype] = useState(ques.type);
  function changequestion(e) {
    let arr = [...addquestion];
    arr[index].question = e;
    forms[frmindex].questions[index].question = e;
    Setaddquestion([...arr]);
    setsaved(false);
  }
  useEffect(() => {
    setoptype(forms[frmindex].questions[index].type);
  }, [forms, frmindex, index]);

  function deleteques() {
    let arr = [...forms[frmindex].questions];
    arr.splice(index, 1);
    forms[frmindex].questions = [...arr];
    Setaddquestion([...arr]);
    setsaved(false);
  }
  return (
    <div className="question-div">
      <input
        type="text"
        className="question-inp"
        value={addquestion[index].question}
        onChange={(e) => {
          changequestion(e.currentTarget.value);
          setsaved(false);
        }}
      />
      <select
        className="select-type"
        defaultValue={optype}
        onChange={(e) => {
          forms[frmindex].questions[index].type = e.currentTarget.value;
          setoptype(e.currentTarget.value);
          setsaved(false);
        }}
      >
        <option value={"text"}>Short answer</option>
        <option value={"textarea"}>Paragraph</option>
        <option value={"radio"}>Multiple Choice</option>
        <option value={"checkbox"}>Checkboxes</option>
        <option value={"dropdown"}>Dropdown</option>
        <option value={"date"}>Date</option>
        <option value={"time"}>Time</option>
      </select>
      <div className="optren">
        {optype === "text" || optype === "textarea" ? (
          <Text optype={optype} />
        ) : optype === "radio" ||
          optype === "checkbox" ||
          optype === "dropdown" ? (
          <Option
            ques={ques}
            optype={optype}
            forms={forms}
            frmindex={frmindex}
            index={index}
            setsaved={setsaved}
          />
        ) : (
          <DateTime
            optype={optype}
          />
        )}
      </div>
      <div className="quesopt">
        <div className="required">
          Required{" "}
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={forms[frmindex].questions[index].required}
              onChange={() => {
                forms[frmindex].questions[index].required =
                  !forms[frmindex].questions[index].required;
                setsaved(false);
              }}
            />

            <span className="slider round"></span>
          </label>
        </div>
        <div
          className="deleteques"
          onClick={() => {
            deleteques();
          }}
        >
          <i className="fa-solid fa-trash-can" id="trashcan"></i>
        </div>
      </div>
    </div>
  );
}

export default Question;
