import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DynamicCard } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/yael-amor" replace />} />
        <Route path="/:slug" element={<DynamicCard />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
