import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/formsrender.css";
import axios from "axios";

function Formsrender({ form, forms, id, frmindex, setmodified }) {
  const navigate = useNavigate();
  async function addques() {
    try {
      const res = await axios({
        method: "patch",
        url: "http://localhost:4000/google-form/v1/frm/form",
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
  async function deleteform() {
    forms.splice(frmindex, 1);
    addques();
  }
  return (
    <>
      <div className="formdisp-div">
        <div
          className="dets"
          onClick={() => {
            navigate("/cf", { state: { form, forms, id, frmindex } });
          }}
        >
          <div className="formdisp-title">{forms[frmindex].title}</div>
          <span className="formdisp-desc">{forms[frmindex].description}</span>
        </div>
        <div className="del">
          <span className="formdisp-del">
            <i
              className="fa-solid fa-trash-can"
              id="trashcan"
              onClick={() => {
                deleteform();
              }}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Formsrender;
