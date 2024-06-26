import { useState } from 'react'
 import React from 'react'

 
 const App = () => {
  const [counter,setCounter]=useState(0);
  const add = () => {
    if(counter<10)
    setCounter(counter+1)
  }
  const remove = () => {
    if(counter>=1)
    setCounter(counter-1)
  }

   return (
     <div>
      <h3>it is a Counter {counter}</h3>  

      <button onClick={add}>Add</button> 
    
      <button onClick={remove}>Remove</button>
     </div>

      

   )
     
 }
 
 export default App