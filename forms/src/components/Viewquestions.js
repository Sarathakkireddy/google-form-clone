import React from "react";
import ViewOption from "./ViewOption";
import "../styles/viewquestions.css";

function Viewquestions({ ques, qindex,responses, setresponses}) {
  return (
    <>
      <div className="view-question-container">
        <h2>{ques.question}</h2>
        <div className="view-options-div">
        <ViewOption ques={ques} qindex={qindex} responses={responses}
                  setresponses={setresponses}/>
        </div>
        
      </div>
    </>
  );
}

export default Viewquestions;
