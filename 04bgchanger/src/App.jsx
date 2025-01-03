import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid.jsx'
function App() {
  const [color, setColor] = useState("olive") // To update the color use the function setcolor()
  // color = [
  //   "red",      // Crimson alternative
  //   "green",     // Turquoise alternative
  //   "white",   // Lavender alternative
  //   "black",   // Goldenrod alternative
  //   "purple",     // Teal (exists in Tailwind)
  //   "blue",   // Coral alternative
  //   "pink",   // Indigo (exists in Tailwind)
  //   "lime",     // Chartreuse alternative
  //   "teal",    // Sienna alternative
  //   "violet",       // Tomato alternative
  //   "blue",    // Slate (exists in Tailwind)
  // ];
  
  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='fixed flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "red" }}>RED</button> 
            <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "green" }}>green</button> 
            <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "blue" }}>blue</button> 
            <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-black' style={{ backgroundColor: "yellow" }}>yellow</button>
          </div >
        </div>
      </div>
    </>
  )
}

export default App
