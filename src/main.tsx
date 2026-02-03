import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { ImpactPrototypes } from './pages/ImpactPrototypes.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prototype-impact" element={<ImpactPrototypes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
