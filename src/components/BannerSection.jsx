import { getAssetUrl } from '../utils/assets'
import './BannerSection.css'

function BannerSection({ heroImage }) {
  return (
    <header className="dc-cover" role="banner">
      <figure className="dc-cover__visual">
        <img 
          src={getAssetUrl(heroImage)} 
          alt="" 
          className="dc-cover__image" 
          aria-hidden="true"
        />
        <div className="dc-cover__gradient" aria-hidden="true"></div>
        <div className="dc-cover__effects" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <span 
              key={i} 
              className="dc-cover__dot" 
              style={{
                '--dot-delay': `${Math.random() * 5}s`,
                '--dot-x': `${Math.random() * 100}%`,
                '--dot-speed': `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </figure>
      <div className="dc-cover__decor" aria-hidden="true">
        <span className="dc-cover__circle dc-cover__circle--outer"></span>
        <span className="dc-cover__circle dc-cover__circle--inner"></span>
      </div>
    </header>
  )
}

export default BannerSection
