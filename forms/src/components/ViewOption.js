import React from "react";
import "../styles/viewoption.css"

function ViewOption({ ques, qindex, setresponses,responses}) {
  return (
    <>
      {ques.type === "text" ? (
        <input
          type="text"
          required={ques.required}
          className="form-text-inp"
          onChange={(e) => {
            let arr=[...responses];
            arr[qindex].answer=e.currentTarget.value;
            setresponses([...arr]);
          }}
        />
      ) : ques.type === "textarea" ? (
        <textarea
          required={ques.required}
          className="form-textarea-inp"
          onChange={(e) => {
            let arr=[...responses];
            arr[qindex].answer=e.currentTarget.value;
            setresponses([...arr]);
          }}
        ></textarea>
      ) : ques.type === "radio" ? (
        ques.options.map((opt, oindex) => {
          return (
            <span key={oindex}>
              <input
                type="radio"
                name={ques.question}
                key={oindex}
                className="inp-option"
                value={opt}
                id={opt}
                required={ques.required}
               
              />
              <label htmlFor={opt}>{opt}</label>
            </span>
          );
        })
      ) : ques.type === "checkbox" ? (
        ques.options.map((opt, oindex) => {
          return (
            <span key={oindex}>
              <input
                type="checkbox"
                name={ques.question}
                className="inp-option"
                key={oindex}
                value={opt}
                required={ques.required}
                id={opt}
                
              />
              <label htmlFor={opt}>{opt}</label>
            </span>
          );
        })
      ) : ques.type === "dropdown" ? (
        <select
          required={ques.required}
          name={ques.question}
          defaultValue={ques.options[0]}
          className="inp-dropdown"
          onChange={(e)=>{ let arr=[...responses];
            arr[qindex].answer=e.currentTarget.value;
            setresponses([...arr]);}}
        >
          {ques.options.map((opt, oindex) => {
            return <option key={oindex}>{opt}</option>;
          })}
        </select>
      ) : (
        ""
      )}
    </>
  );
}

export default ViewOption;
