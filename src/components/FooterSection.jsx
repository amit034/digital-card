import { getAssetUrl } from '../utils/assets'
import './FooterSection.css'

function FooterSection({ gallery, footer }) {
  const brand = footer || { badge: 'תיכנון פיננסי ופנסיוני', title: 'דלתא' }
  
  return (
    <footer className="dc-footer" role="contentinfo">
      <div className="dc-footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="dc-footer__inner">
        <div className="dc-footer__brand">
          <span className="dc-footer__tag">{brand.badge}</span>
          <strong className="dc-footer__name">{brand.title}</strong>
        </div>

        <section className="dc-gallery" aria-label="Photo gallery">
          <div className="dc-gallery__grid">
            {gallery.map((image, index) => (
              <figure 
                key={index} 
                className="dc-gallery__figure" 
                style={{ '--gallery-delay': `${1.5 + index * 0.1}s` }}
              >
                <img 
                  src={getAssetUrl(image)} 
                  alt={`Gallery photo ${index + 1}`} 
                  className="dc-gallery__img"
                  loading="lazy" 
                />
                <figcaption className="dc-gallery__caption" aria-hidden="true">
                  <i className="fas fa-expand"></i>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}

export default FooterSection
