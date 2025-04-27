import { useState } from 'react'
import Exp from './components/ThemeToggle'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <br/>
      <Exp/>
      

    </>
  )
}

export default App
