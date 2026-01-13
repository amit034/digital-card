import { getAssetUrl } from '../utils/assets'
import './HeroSection.css'

function HeroSection({ heroImage }) {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img src={getAssetUrl(heroImage)} alt="Background" className="hero-bg-img" />
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
      <div className="hero-decoration">
        <div className="deco-ring ring-1"></div>
        <div className="deco-ring ring-2"></div>
      </div>
    </div>
  )
}

export default HeroSection
