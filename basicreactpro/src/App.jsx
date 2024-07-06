import { useState } from "react";

 
function App() {
  // METHOD first how to do a event call in ReactJs
  /* const helo=()=>{
    console.log("hello");     
  } */
    const [count,setCount]=useState(0);
    
   

  return (
    <> 
       <h1>helo{count}</h1>

       <button onClick={()=>setCount(5)}>Cng</button>
    </>
  )
}

export default App
