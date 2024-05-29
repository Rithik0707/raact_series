import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setcounter]=useState(0)
const increasecounter=()=>{
  if(counter>=0 && counter<20){
  counter=counter+1
  setcounter(counter)
  }
  else{
    alert("exceed limit")
  }

}
const decreasecounter=()=>{
  if(counter>0 ){
  counter=counter-1
  setcounter(counter)
  }
  else{
    alert("cannot decrease the 0 value pls add some value ")
  }
}

/*  my practice of the asyn code of time interval
let [counter,setcounter]=useState(0)
var rithik;
const increasecounter=()=>{
  rithik=setInterval(() => {
    counter=counter+1;
    setcounter(counter)
  }, 1000);
}
const decreasecounter=()=>{
  clearInterval(rithik);
  setcounter(0);
}


**/
  return (
    <>
     <h1> rithik number counter</h1>
     <h2>here are the two buttons </h2>
     <br/>
     <h1>counter:{counter}</h1>
     <button onClick={increasecounter}>ADD: {counter}</button>
     <br/>
     <button onClick={decreasecounter}>Remove:{counter}</button>
    </>
  )
}

export default App
