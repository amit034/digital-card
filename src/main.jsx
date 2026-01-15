import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DynamicCard, CardView } from './App.jsx'
import { getCard, defaultCard } from './cards'
import './index.css'

// Smart home component - detects if we're on /cards/{slug}/ path
function SmartHome() {
  // Check if URL path contains /cards/{slug}/
  const pathMatch = window.location.pathname.match(/\/cards\/([^/]+)\/?/)
  
  if (pathMatch) {
    const slug = pathMatch[1]
    const cardData = getCard(slug)
    if (cardData) {
      // Render the card directly without redirect
      return <CardView cardData={cardData} />
    }
  }
  
  // Default: redirect to yael-amor
  return <Navigate to={`/${defaultCard.slug}`} replace />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SmartHome />} />
        <Route path="/:slug" element={<DynamicCard />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
