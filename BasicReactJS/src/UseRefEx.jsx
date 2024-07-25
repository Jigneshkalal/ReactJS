import React, { useRef, useState } from 'react'
 


const UseRefEx = () => {
    const [Name,setName]=useState('Jignesh')
    let refelemnt= useRef("");
    console.log(refelemnt);

    function reset(){
         refelemnt.current.style.color="red"
    }
  return (
    <>
    <button onClick={reset}>chang</button>
    <input type="text"  ref={refelemnt} onChange={(e)=>setName(e.target)}></input>
  </>
  )

}

export default UseRefEx