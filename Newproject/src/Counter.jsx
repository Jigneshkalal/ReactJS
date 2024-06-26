import React, { useState } from 'react'

const Increment = () => {
  const [Increment,setIncrement]=useState(12);
  return (
    <div>
      <div>
      <p>Hello i am a clickable Counter</p>
      <span style={{fontwidth:"bold"}}>{Increment}</span>
      </div>
      <div>

      <p>Hello i am a clickable Counter</p>
      <span style={{fontwidth:"bold"}}>{Increment}</span>
      </div>

      <div>
      <p>Hello i am a clickable Counter</p>
      <span style={{fontwidth:"bold"}}>{Increment}</span>
      </div>
      <button onClick={()=>setIncrement(Increment+1)}>plus</button>
    </div>
  )
}

export default Increment