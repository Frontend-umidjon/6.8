import { Route, Routes, BrowserRouter, Link    } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     <App />
  </BrowserRouter>
  
)
