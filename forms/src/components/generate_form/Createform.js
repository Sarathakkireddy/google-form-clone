import React, { useState } from "react";
import Formgen from "./Formgen";
import Responses from "./Responses";
import "../../styles/createform.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Createform( ) {
  const location=useLocation();
  const form=location.state.form;
  const forms=location.state.forms;
  const frmindex=location.state.frmindex;
  const id=location.state.id;
  const [title, settitle] = useState(forms[frmindex].title);
  const [tab, settab] = useState("ques");
  const [description, setdescription] = useState(forms[frmindex].description);
  const [saved,setsaved]=useState(true);

  async function addques() {
    const res = await axios({
      method: "patch",
      url: "http://localhost:4000/google-form/v1/frm/form",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: { id: id,forms:forms },
    });
    setsaved(true);
  };
  
  return (
    <div className="crform-container">
      <div className="crform-header">
        <div className="head">
          <span className="form-title-head">{title}</span>
          {saved===false?
          <button className="form-send" onClick={()=>{addques();}}>Save</button>:
          <button className="form-send" onClick={()=>{}}>Send</button>}
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
        {tab === "ques" ? (
          <Formgen
            title={title}
            settitle={settitle}
            setsaved={setsaved}
            form={form}
            forms={forms}
            frmindex={frmindex}
            description={description}
            setdescription={setdescription}
          />
         
        ) : (
          <Responses />
        )}
      </div>
    </div>
  );
}

export default Createform;
