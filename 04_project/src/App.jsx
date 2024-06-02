import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [color,setcolor]= useState("red")
  return (
    <div className="w-full h-screen  duration-200"
    style={{backgroundColor:color}} >
    <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 '>
      <div className='flex gap-3 flex-wrap bg-white shadow-lg justify-center px-2 py-2 rounded-2xl text-white'>
        <button onClick={()=>{setcolor("red")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"red"}}>red</button>

        <button onClick={()=>{setcolor("green")}} className=' shadow-xl px-2 py-2 rounded-2xl '
        style={{backgroundColor:"green"}}>green</button>
        
        <button onClick={()=>{setcolor("blue")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"blue"}}>blue</button>
        
        <button onClick={()=>{setcolor("pink")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"pink"}}>pink</button>
        
        <button onClick={()=>{setcolor("grey")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"grey"}}>grey</button>
        
        <button onClick={()=>{setcolor("black")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"black"}}>black</button>
        
        <button onClick={()=>{setcolor("yellow")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"yellow"}}>yellow</button>
        
        <button onClick={()=>{setcolor("violet")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"violet"}}>violet</button>
        
        <button onClick={()=>{setcolor("skyblue")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"skyblue"}}>skyblue</button>
        
        <button onClick={()=>{setcolor("orange")}} className='px-2 py-2 rounded-2xl '
        style={{backgroundColor:"orange"}}>orange</button>
      </div>
    </div>
    </div>
  )
}

export default App
