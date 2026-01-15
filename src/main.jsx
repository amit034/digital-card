import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { DynamicCard, CardView } from './App.jsx'
import { getCard, defaultCard } from './cards'
import './index.css'

// Check if we're on a /cards/{slug}/ path
const getSlugFromPath = () => {
  const pathMatch = window.location.pathname.match(/\/cards\/([^/]+)\/?/)
  return pathMatch ? pathMatch[1] : null
}

// Component to clean up redundant hash on /cards/ paths
function HashCleanup({ children }) {
  const location = useLocation()
  
  useEffect(() => {
    const slugFromPath = getSlugFromPath()
    // If we're on /cards/{slug}/ and there's a hash, remove it
    if (slugFromPath && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [location])
  
  return children
}

// Smart home component - detects if we're on /cards/{slug}/ path
function SmartHome() {
  const slugFromPath = getSlugFromPath()
  
  if (slugFromPath) {
    const cardData = getCard(slugFromPath)
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
      <HashCleanup>
        <Routes>
          <Route path="/" element={<SmartHome />} />
          <Route path="/:slug" element={<DynamicCard />} />
        </Routes>
      </HashCleanup>
    </HashRouter>
  </StrictMode>,
)
