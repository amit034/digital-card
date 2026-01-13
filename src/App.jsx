import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/ProfileSection'
import NameSection from './components/NameSection'
import ActionButtons from './components/ActionButtons'
import SaveContactButton from './components/SaveContactButton'
import AboutSection from './components/AboutSection'
import AccordionSection from './components/AccordionSection'
import AddressSection from './components/AddressSection'
import FooterSection from './components/FooterSection'
import ShareButton from './components/ShareButton'
import ShareModal from './components/ShareModal'
import { getCard, defaultCard, getAllCards } from './cards'
import { getAssetUrl } from './utils/assets'
import './App.css'

// Card component that displays the card based on cardData
function CardView({ cardData }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  return (
    <div className="app">
      <div className="card-container">
        <HeroSection heroImage={cardData.heroImage} />
        <ProfileSection profileImage={cardData.profileImage} />
        
        <div className="content-section">
          <NameSection name={cardData.name} title={cardData.title} />
          <ActionButtons contact={cardData} />
          <SaveContactButton contact={cardData} />
          <AboutSection 
            about={cardData.about} 
            title={cardData.sectionTitles.about} 
          />
          <AccordionSection contact={cardData} />
          <AddressSection 
            address={cardData.address} 
            wazeLink={cardData.wazeLink}
            title={cardData.sectionTitles.address}
            buttonLabel={cardData.buttons.wazeNavigate}
          />
        </div>

        <FooterSection 
          gallery={cardData.gallery} 
          footer={cardData.footer}
        />
        <ShareButton 
          onClick={() => setIsShareModalOpen(true)} 
          label={cardData.buttons.share}
        />
      </div>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </div>
  )
}

// Dynamic card loader based on URL slug
function DynamicCard() {
  const { slug } = useParams()
  const cardData = getCard(slug)

  if (!cardData) {
    return <Navigate to={`/${defaultCard.slug}`} replace />
  }

  return <CardView cardData={cardData} />
}

// Home page - shows card directory or redirects to default
function HomePage() {
  const cards = getAllCards()
  
  return (
    <div className="app">
      <div className="home-container">
        <div className="home-header">
          <div className="home-logo">
            <span className="logo-icon">△</span>
            <h1>דלתא</h1>
            <p>בית לתכנון פיננסי</p>
          </div>
        </div>
        
        <div className="cards-grid">
          <h2>הצוות שלנו</h2>
          <div className="team-cards">
            {cards.map((card) => (
              <Link 
                key={card.slug} 
                to={`/${card.slug}`}
                className="team-card"
              >
                <div className="team-card-image">
                  <img src={getAssetUrl(card.profileImage)} alt={card.name} />
                </div>
                <div className="team-card-info">
                  <h3>{card.name}</h3>
                  <p>{card.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { DynamicCard, HomePage, CardView }
export default DynamicCard
