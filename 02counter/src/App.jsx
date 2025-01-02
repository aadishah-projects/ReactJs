import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5)
  
  const addValue = ()=>
  {
    console.log("Value Add")
    setcounter(counter + 1)
  }
  const reduceValue = () => 
  {
    console.log("Value reduced")
    setcounter(counter - 1)
  }
  return <>
    <h1>Aditya's Counter</h1>
    <h2>Counter's Value: { counter }</h2>
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={reduceValue}>Reduce</button>
  </>
}

export default App
