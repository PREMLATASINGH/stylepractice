import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter,setCounter]=useState(10)
  const addCounter=()=>{
    console.log("clicked",counter);
    setCounter(counter+1)
  }
  const subCounter=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>chai aur code</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addCounter}>add{counter}</button>
    <button onClick={subCounter}>sub{counter}</button>
   
    </>
  )
}

export default App
