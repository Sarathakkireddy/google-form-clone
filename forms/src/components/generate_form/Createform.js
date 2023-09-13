import React, { useState } from "react";
import Formgen from "./Formgen";
import Responses from "./Responses";
import "../../styles/createform.css";

function Createform() {
  const [title, settitle] = useState("Untitled form");
  const [tab, settab] = useState("ques");

  return (
    <div className="crform-container">
      <div className="crform-header">
        <div className="head">
        <span className="form-title-head">{title}</span>
        <button className="form-send">Send</button>
        </div>
        <div className="ques-resp-div"> 
        <span
          className="form-ques-tab"
          onClick={() => {
            settab("ques");
          }}
          id={tab === "ques" ? "form-container-selected" : "not-selected"}
        >
          Questions
        </span>
        <span
          className="form-resp-tab"
          onClick={() => {
            settab("resp");
          }}
          id={tab === "resp" ? "form-container-selected" : "not-selected"}
        >
          Responses
        </span>
        </div>
      </div>
      <div className="form-container">
        {tab === "ques" ? <Formgen title={title} settitle={settitle} /> : <Responses />}
      </div>
    </div>
  );
}

export default Createform;
