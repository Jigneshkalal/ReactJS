import React, { useState } from 'react'


export default function Hello(){

let [Count,setCount]=useState(0);
function changevalue() {
   setCount (Count+1);
}

  return (
     <>
      <div id="test">{Count}</div>
      <button onClick={changevalue}>counter</button>
     </>
  )};