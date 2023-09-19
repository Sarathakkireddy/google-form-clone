import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewForm() {
    const params=useParams();
    const [form,setform]=useState();
    useEffect(()=>{
        async function fetchForm(){
        const res=await axios({
            method: "get",
            url: "http://localhost:4000/google-form/v1/frm/formdets",
            data: { id: params.userid,formid:params.formid },
          });
          console.log(res);
    }},[]);
    
  return (
    <>
    
    </>
  )
}

export default ViewForm