import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import axios from "axios";
import { useAccountInfo } from "../contexts/accountContext";
import Formsrender from "./Formsrender";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const context = useAccountInfo();
  const [id, setid] = useState();
  const [forms, setforms] = useState([]);
  const [modified, setmodified] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      fetchdata();
    }
  }, [modified]);
  async function fetchdata() {
    try {
      const res = await axios({
        method: "get",
        url: "https://google-form-clone-ouy7.onrender.com/google-form/v1/frm/formdets",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: { id: context.userId },
      });
      setid(res.data.data[0]._id);
      setforms([...res.data.data[0].forms]);
    } catch (e) {
      alert("session expired please login again");
      if (e.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }
  async function addques() {
    try {
      const res = await axios({
        method: "patch",
        url: "https://google-form-clone-ouy7.onrender.com/google-form/v1/frm/form",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: { id: id, forms: forms },
      });
      setmodified(res);
    } catch (e) {
      alert("session expired please login again");
      if (e.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }
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
      <div className="dashboard-header">
        <div className="heading">DASHBOARD</div>
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="dashboard-forms-list">
        {forms.map((form, frmindex) => {
          return (
            <Formsrender
              form={form}
              forms={forms}
              id={id}
              frmindex={frmindex}
              key={frmindex}
              setmodified={setmodified}
            />
          );
        })}
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
