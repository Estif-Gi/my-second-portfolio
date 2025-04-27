import { useState } from 'react'
import Exp from './components/ThemeToggle'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>

      <Home/>
      </div>
      
      <Exp/>
     
      
      
      

    </>
  )
}

export default App
