import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>It's Aditya Shah</h1>
    </UserContextProvider>
  )
}

export default App
