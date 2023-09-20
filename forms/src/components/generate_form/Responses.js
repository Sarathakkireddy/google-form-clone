import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/responses.css";

function Responses({ form }) {
  const [resp, setresp] = useState([]);
  useEffect(() => {
    async function fetchrespdata() {
      const res = await axios({
        method: "get",
        url: "http://localhost:4000/google-form/v1/resp/allrespon/" + form._id,
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      setresp([...res.data.data]);
    }
    fetchrespdata();
  });
  return (
    <>
      <div className="resp-container">
        <table className="responses-table">
          <thead>
            <th>S.no</th>
            {form.questions.map((ques, qindex) => {
              return (
                <th className="theading" key={qindex}>
                  {ques.question}
                </th>
              );
            })}
          </thead>
          <tbody>
            {resp.map((respon, rindex) => {
              return (
                <tr key={rindex}>
                  <td>{rindex + 1}</td>
                  {respon.responses.map((eachresp, erindex) => {
                    return <td key={erindex}>{eachresp.answer}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Responses;
