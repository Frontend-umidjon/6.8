import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
import About from './pages/about/About'
import WhatDo from './pages/whatDo/WhatDo'
import Media from './pages/media/Media'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/whatwedo" element={<WhatDo />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>


    </>
  )
}

export default App
