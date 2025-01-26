import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
import About from './pages/about/About'
import WhatDo from './pages/whatDo/WhatDo'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/whatwedo" element={<WhatDo />} />
    </Routes>


    </>
  )
}

export default App
