import { useState } from 'react'
import Exp from './components/ThemeToggle'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Deployed from './components/Deployed 1'
import Contact from './page/Contact'
import AboutMe from './page/AboutMe'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./page/BlogList";
import BlogPost from "./page/BlogPost";
function App() {
  

  return (
    <>
      <Navbar/>
      <div className=' flex justify-center sm:pb-14 pt-10'>
      <Home/>
      </div>
      <Exp/>
      <AboutMe/>
      <Deployed/>
      <div className=" lg:flex items-center justify-between">

      <Contact/>
      <BlogList />
      </div>
      
      

    </>
  )
}

export default App
