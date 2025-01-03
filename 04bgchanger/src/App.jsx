import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid.jsx'
function App() {
  const [count, setCount] = useState(0)
  const tailwindColors = [
    "red-500",      // Crimson alternative
    "cyan-500",     // Turquoise alternative
    "purple-400",   // Lavender alternative
    "yellow-600",   // Goldenrod alternative
    "teal-500",     // Teal (exists in Tailwind)
    "orange-400",   // Coral alternative
    "indigo-500",   // Indigo (exists in Tailwind)
    "lime-500",     // Chartreuse alternative
    "amber-600",    // Sienna alternative
    "slate-600",    // Slate (exists in Tailwind)
    "red-400"       // Tomato alternative
  ];
  
  return (
    <>
      <Grid color={tailwindColors} />
    </>
  )
}

export default App
