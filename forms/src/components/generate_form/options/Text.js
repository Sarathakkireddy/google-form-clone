import React from 'react'
import '../../../styles/text.css'

function Text({optype}) {
  return (
    <>
    {optype==="textarea"?<textarea className='para'></textarea>:<input type='text' className='shortanswer' placeholder='Short answer text'/>}
    </>
  )
}

export default Text