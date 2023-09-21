import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Viewquestions from "./Viewquestions";
import "../styles/viewform.css";

function ViewForm() {
  const params = useParams();
  const [form, setform] = useState("");
  const [responses, setresponses] = useState([]);
  const navigate=useNavigate();
  let finshed=false;
  useEffect(() => {
    async function fetchForm() {
      const res = await axios({
        method: "post",
        url: "https://google-form-clone-ouy7.onrender.com/google-form/v1/frm/viewform",
        data: { id: params.userid },
      });
      let arr = [...res.data.data];
      arr=arr.filter(checkid);
      arr=arr[0];
      arr = arr.forms.filter(checkformid);
      let arr2 = [];
      arr[0].questions.forEach((ques, qindex) => {
        arr2.push({
          quesid: ques._id,
          answer: ques.type === "checkbox" ? [] :ques.type === "dropdown"? ques.options[0]: "",
        });
      });
      setresponses([...arr2]);
      setform(...arr);
       function checkid(frm){
        return frm._id===params.userid;
      }
      function checkformid(frm) {
        return frm._id === params.formid;
      }
    }
    fetchForm();
  }, [params]);

  function updateresponses() {
    form.questions.forEach((question, indx) => {
      if (question.type === "radio") {
        let options = document.getElementsByName(question.question);
        for (let i = 0; i < options.length; i++) {
          if (options[i].checked) {
            responses[indx].answer=options[i].value;
          }
        }
      }
      else if (question.type === "checkbox") {
        let options = document.getElementsByName(question.question);
        for (let i = 0; i < options.length; i++) {
          if (options[i].checked) {
            responses[indx].answer.push(options[i].value);
          }
        }
      }
      
    });
    
  }
  function validate(){
    let len=form.questions.length;
    let count=0;
    form.questions.forEach((question, indx) => {
      if(question.required){
        if(responses[indx].answer===""){
          alert(`Answer this question ${question.question}`);
        }else{
          count++;
        }
      }else{
        count++;
      }
      if(len===count){
        finshed=true;
      }
    })
  }
  async function postdata(){
       await axios({
        method: "post",
        url: "https://google-form-clone-ouy7.onrender.com/google-form/v1/resp/uploadresp",
        data: { userid:params.userid,formid:params.formid, responses:[...responses] },
      });
  }

  return (
    <>
      {form === "" ? (
        <></>
      ) : (
        <div className="viewform-container">
          <div className="viewform-head">
            <h1 className="viewformtitle">{form.title}</h1>
            <p className="viewformdesc">{form.description}</p>
          </div>
          <form>
            {form.questions.map((ques, qindex) => {
              return (
                <Viewquestions
                  ques={ques}
                  qindex={qindex}
                  responses={responses}
                  setresponses={setresponses}
                  form={form}
                  key={qindex}
                />
              );
            })}
            <button
              type="submit"
              className="form-submit"
              onClick={(e) => {
                e.preventDefault();
                updateresponses();
                validate();
                if(finshed){
                  postdata();
                  navigate("/finish" ,{new:true});
                }
              }}
              formTarget="new"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ViewForm;
