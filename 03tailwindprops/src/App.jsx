import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Grid from './components/Grid.jsx'
import Text from './components/Text.jsx'
function App() {

  return (
    <>
      <h1 className='bg-green-300 text-black text-6xl p-4 rounded-xl font-mono mb-5'
      >Tailwind Test</h1>
      <Card cloth ='Sweeter' button_1 = "Sellnow" button_2 = "Hello" button_3 = "Nope" />
      <br />
      <Card cloth ='Jacket' button_1 = "Whysellnow" button_2 = "How" button_3 = "NopeYep"/>
      <br />
      <Card cloth ='Pants' button_1 = "howsellnow" button_2 = "Are You" button_3 = "YEPNOPE"/>
      {/* <Grid />
      <Text /> */}

     
    </>
  )
}

export default App
