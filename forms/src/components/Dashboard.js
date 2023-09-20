import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import axios from "axios";
import { useAccountInfo } from "../contexts/accountContext";
import Formsrender from "./Formsrender";

function Dashboard() {
  const context = useAccountInfo();
  const [id, setid] = useState();
  const [forms,setforms]=useState([]);
  useEffect(() => {
    async function fetchdata() {
      const res = await axios({
        method: "get",
        url: "http://localhost:4000/google-form/v1/frm/formdets",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: { id: context.userId },
      });
      setid(res.data.data[0]._id);
      setforms([...res.data.data[0].forms]);
    }
    fetchdata();
  }, []);
  async function fetchdata() {
    const res = await axios({
      method: "get",
      url: "http://localhost:4000/google-form/v1/frm/formdets",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: { id: context.userId },
    });
    console.log(res.data);
    setid(res.data.data[0]._id);
    setforms([...res.data.data[0].forms]);
  }
  async function addques() {
    const res = await axios({
      method: "patch",
      url: "http://localhost:4000/google-form/v1/frm/form",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: { id: id,forms:forms },
    });
      
  };
  function addnewquestion() {
    forms.push({
      title: "Undefined title",
      description: "",
      questions: [{ question: "question", type: "radio", options: ["option"] }],
    });

    
    addques();
    fetchdata();
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">DASHBOARD</div>
      <div className="dashboard-forms-list">
        {forms.map((form, frmindex) => {
          return <Formsrender form={form} forms={forms} id={id} frmindex={frmindex} key={frmindex} />;
        })}
        {console.log(forms)}
      </div>
      <div
        className="add-new-form"
        onClick={() => {
          addnewquestion();
        }}
      >
        <i className="fa-plus" id="add-icn"></i>
      </div>
    </div>
  );
}

export default Dashboard;
