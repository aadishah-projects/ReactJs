import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  

  return <>
    
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>

    </>
}

export default App
