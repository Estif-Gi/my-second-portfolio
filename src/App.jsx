import { useState } from 'react'
import Exp from './components/ThemeToggle'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Deployed from './components/Deployed 1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <div className=' flex justify-center sm:pb-14 pt-10'>
      <Home/>
      </div>
      
      <Exp/>
     <Deployed/>
      
      
      

    </>
  )
}

export default App
