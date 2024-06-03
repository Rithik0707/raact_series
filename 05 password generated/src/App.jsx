import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [lengtth,setlength]=useState(8)
  const [numberAllowed,setNumberallowed]= useState(false)
  const [characterall,setcharacterall]=useState(false)
  const [password,setpassword]= useState(" ")
  // use useref

  const passwordref = useRef(null)

  const passwordgenerated = useCallback(()=>{
    let pass="";
    let str= "ABCDEFGHIJKLMNOPQRSTUYXZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="012345679899"
    if(characterall) str+="!@#$%^&*/?"
    for(let  i=0;i<=lengtth;i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)
  },[lengtth,numberAllowed,characterall,])

  const copypassword =useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[])

  useEffect(()=>{
    passwordgenerated()
  },[lengtth,numberAllowed,characterall])

  return (
 
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
       <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}

       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       onClick={copypassword}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={45}
          className='cursor-pointer'
          value={lengtth}
          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label >Length: {lengtth}</label>
        
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterall}
              id="characterInput"
              onChange={() => {
                  setcharacterall((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
   
    </div>
    </div>
   
    </div>
   
  )
}

export default App
