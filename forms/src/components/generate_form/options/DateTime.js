import React from 'react'
import "../../../styles/datetime.css"

function DateTime({optype}) {
  return (
    <>
    <input type={optype} className="datetime" disabled/>
    </>
  )
}

export default DateTime