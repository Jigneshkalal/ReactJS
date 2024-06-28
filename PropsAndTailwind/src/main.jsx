import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Propsreact from './Propsreact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Propsreact Brand="BMW" Modal="2024" Topspeed={300}/>
  </React.StrictMode>,
)
