import { getAssetUrl } from '../utils/assets'
import './FooterSection.css'

function FooterSection({ gallery, footer }) {
  const footerData = footer || { badge: 'תיכנון פיננסי ופנסיוני', title: 'דלתא' }
  
  return (
    <div className="footer-section">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-title">
          <span className="footer-badge">{footerData.badge}</span>
          <h3>{footerData.title}</h3>
        </div>

        <div className="gallery-section">
          <div className="gallery-container">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
                <img src={getAssetUrl(image)} alt={`Gallery ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
