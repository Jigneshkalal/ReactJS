import React, { useState } from 'react'
import { useEffect } from 'react'

const Useeffect = () => {
  
  const [Count,setCount]=useState(0)

  useEffect(()=>{
     let T= setTimeout(()=>{
        setCount(Count=>Count+1)
     },1000)
     return ()=>clearTimeout(T);
  })
  
  return (
    <div><h1>Hello it a number {Count}</h1></div>
  )
}

export default Useeffect