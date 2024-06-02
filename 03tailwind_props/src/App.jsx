import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-3 mb-5'> tailwind css</h1>
    <Card  username="rithik" btn="chalo chaltheha"/>
    <Card username="prithviraman" btn="bas kar yaar "/>


    </>
  )
}

export default App
