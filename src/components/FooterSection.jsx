import './FooterSection.css'

function FooterSection({ gallery }) {
  return (
    <div className="footer-section">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-title">
          <span className="footer-badge">תיכנון פיננסי ופנסיוני</span>
          <h3>דלתא</h3>
        </div>

        <div className="gallery-section">
          <div className="gallery-container">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
                <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
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
