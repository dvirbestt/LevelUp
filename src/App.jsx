import { useState } from 'react'

import './App.css'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import UpperBar from './Components/UpperBar'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'

function App() {
  

  return (
    <>
      <UpperBar/>
      <HomePage/>
    </>
  )
}

export default App
