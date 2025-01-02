import React from 'react'
import { Aditya, CustomTag1, MyApp } from './components/Aditya'
import './App.css'

const App = () => {

  const username  = "adityacodes"
  return (
    <>
      <Aditya />
      <CustomTag1 />
      <MyApp />
      <h1>Hi Bro : {username} </h1>
    </>
  )
}

export default App