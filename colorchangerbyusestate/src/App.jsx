import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black"  )
     
  return (

    <div className='container' style={{backgroundColor:color}}>

      <button onClick={()=>setColor('red')} style={{backgroundColor:'red'}}>Red</button>
      <button onClick={()=>setColor('blue')} style={{backgroundColor:'blue'}}>blue</button>
      <button onClick={()=>setColor('green')} style={{backgroundColor:'green'}}>green~</button>

    </div>

  
  )
}

export default App
