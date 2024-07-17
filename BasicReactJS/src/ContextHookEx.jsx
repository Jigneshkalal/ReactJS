import React, { useContext } from 'react'
import { data,data1 } from './App'

const ContextHookEx = () => {
    const name=useContext(data);
    const gender=useContext(data1);
  return (
    <h1>My name Is {name} and my gender Is {gender}</h1>
  )
}

export default ContextHookEx