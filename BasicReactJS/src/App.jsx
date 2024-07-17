import { createContext } from 'react'
import ContextHookEx from './ContextHookEx';

const data= createContext();
const data1= createContext();
function App() {
  const name="jignesh"
  const gender="male"
  return (
    <>
       <data.Provider value={name}>
       <data1.Provider value={gender}>
        <ContextHookEx/>
       </data1.Provider>
       </data.Provider>
    </>
  )
}
export {data,data1};
export default App
