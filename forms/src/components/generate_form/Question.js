import React, { useState, useEffect } from "react";
import "../../styles/question.css";
import Option from "./options/Option";
import Text from "./options/Text";

function Question({ ques, form, addquestion, index, Setaddquestion }) {
  const [optype, setoptype] = useState(form.questions[index].type);
  function changequestion(e) {
    let arr = [...addquestion];
    arr[index].question = e;
    form.questions[index].question = e;
    Setaddquestion([...arr]);
  }
  useEffect(() => {
    setoptype(form.questions[index].type);
  }, [form.questions, index]);
  function deleteques() {
    let arr = [...form.questions];
    arr.splice(index, 1);
    form.questions = [...arr];
    Setaddquestion([...arr]);
  }
  return (
    <div className="question-div">
      <input
        type="text"
        className="question-inp"
        value={addquestion[index].question}
        onChange={(e) => {
          changequestion(e.currentTarget.value);
        }}
      />
      <select
        className="select-type"
        value={ques.type}
        onChange={(e) => {
          form.questions[index].type = e.currentTarget.value;
          setoptype(e.currentTarget.value);
        }}
      >
        <option value={"text"}>Short answer</option>
        <option value={"textarea"}>Paragraph</option>
        <hr />
        <option value={"radio"} selected>
          Multiple Choice
        </option>
        <option value={"checkbox"}>Checkboxes</option>
        <option value={"dropdown"}>Dropdown</option>
        <hr />
        <option value={"fileupload"}>File upload</option>
        <hr />
        <option value={"date"}>Date</option>
        <option value={"time"}>Time</option>
      </select>
      <div className="optren">
        {optype === "text" || optype === "textarea" ? (
          <Text optype={optype} />
        ) : optype === "radio" ||
          optype === "checkbox" ||
          optype === "dropdown" ? (
          <Option ques={ques} optype={optype} />
        ) : (
          ""
        )}
      </div>
      <div className="quesopt">
        <div className="required">
          Required{" "}
          <label class="switch">
            <input
              type="checkbox"
              onChange={() => {
                form.questions[index].required =
                  !form.questions[index].required;
              }}
            />
            <span class="slider round"></span>
          </label>
        </div>
        <div
          className="deleteques"
          onClick={() => {
            deleteques();
          }}
        >
          <i class="fa-solid fa-trash-can" id="trashcan"></i>
        </div>
      </div>
    </div>
  );
}

export default Question;
