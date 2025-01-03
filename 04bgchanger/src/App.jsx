import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid.jsx'

function App() {
  const color = [
    "red",      
    "green",     
    "white",   
    "black",   
    "purple",     
    "blue",  
    "pink",   
    "lime",     
    "teal",    
    "violet",       
    "skyBlue",   
  ];
  
  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          < Grid color={color} />
        </div>
      </div>
    </>
  )
}

export default App
