import React, { useEffect, useState } from "react";
import Formgen from "./Formgen";
import Responses from "./Responses";
import "../../styles/createform.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import copy from "copy-to-clipboard";


function Createform() {
  
  const location = useLocation();;
  const form = location.state.form;
  const forms = location.state.forms;
  const frmindex = location.state.frmindex;
  const id = location.state.id;
  const [title, settitle] = useState(forms[frmindex].title);
  const [tab, settab] = useState("ques");
  const [description, setdescription] = useState(forms[frmindex].description);
  const [saved, setsaved] = useState(true);
  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/");
    }
  },[]);

  async function addques() {
    try{const res = await axios({
      method: "patch",
      url: "https://google-form-clone-ouy7.onrender.com/google-form/v1/frm/form",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: { id: id, forms: forms },
    });
    setsaved(true);
  }catch(e){
    alert("session expired please login again");
    if(e.response.status===401){
      localStorage.removeItem("token");
      navigate("/");
    }
  }
    
  }

  return (
    <div className="crform-container">
      <div className="crform-header">
        <div className="head">
          <span className="form-title-head">{title}</span>
          {saved === false ? (
            <button
              className="form-send"
              onClick={() => {
                addques();
              }}
            >
              Save
            </button>
          ) : (
            <>
              <button
                className="form-send"
                onClick={() => {
                  copy("http://localhost:3000/view/"+id+"/"+form._id);
                  alert("Link Copied to ClipBoard");
                }}
              >
                Copy Link
              </button>
              <button className="form-send" onClick={() => {navigate("/view/"+id+"/"+form._id)}}>
                Preview
              </button>
            </>
          )}
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
          <Responses form={form} id={id}/>
        )}
      </div>
    </div>
  );
}

export default Createform;
