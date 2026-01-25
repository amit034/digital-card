import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { DynamicCard, CardView } from './App.jsx'
import { getCard, defaultCard } from './cards'
import './index.css'

// Register Service Worker for PWA (required for "Add to Home Screen" menu option)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// Prevent automatic install prompt (user will use 3-dots menu instead)
let deferredPrompt
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the automatic prompt
  e.preventDefault()
  // Store the event for manual triggering if needed later
  deferredPrompt = e
  console.log('Install prompt prevented - use browser menu instead')
})

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
