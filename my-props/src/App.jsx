import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <h1>My contact</h1>
       <h2>{props.name}</h2>
       <img src={props.img} alt='Beyonce'/>
       <p>{props.Phone}</p>
       <p>{props.Email}</p>
       <p>{props.Address}</p>
    </>
  )
}

export default App
