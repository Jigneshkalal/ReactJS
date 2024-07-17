import { useState, useCallback , useEffect } from 'react';

function App() {
  const [Length, setLength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Char, setChar] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (Char) str += "!@#$%&*";

    for (let i = 0; i < Length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [Length, Number, Char, setPassword]);
  useEffect(()=>{PasswordGenerator()}, [Length, Number, Char, setPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
      />
      <button className='outline-none bg-blue-700 text-white px-3 py.05 shrink-0'>COPY</button>    
  </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={Length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {Length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={Number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={Char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  
 
  );
}

export default App;