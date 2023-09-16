import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAccountInfo } from "../contexts/accountContext";
import Formsrender from "./Formsrender";



function Dashboard() {
  const navigate = useNavigate();
  const context = useAccountInfo();
  const [forms,setForms]=useState([]);
  useEffect(()=>{
    async function fetchdata(){
    const res=await axios.get("http://localhost:4000/google-form/v1/frm/formdets",
     { headers: { Authorization: `Bearer ${localStorage.token}` },
    body:{id:context.userId},}
    );
    setForms([...res.data.data[0].forms]);
    
    }
    fetchdata();
  },[])

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">DASHBOARD</div>
      <div className="dashboard-forms-list">
      {forms.map((form,frmindex)=>{return <Formsrender form={form} frmindex={frmindex} key={frmindex}/>})}
      </div>
      <div
        className="add-new-form"
        onClick={() => {
          navigate("/cf");
        }}
      >
        <i className="fa-plus" id="add-icn"></i>
      </div>
    </div>
  );
}

export default Dashboard;
