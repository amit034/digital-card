import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import BannerSection from './components/BannerSection'
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
import ContactForm from './components/ContactForm'
import { getCard, defaultCard, getAllCards } from './cards'
import { getAssetUrl } from './utils/assets'
import './App.css'

// Card component that displays the card based on cardData
function CardView({ cardData }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  // Build the static share URL (for social media with meta tags)
  const baseUrl = ''
  const shareUrl = `${baseUrl}/cards/${cardData.slug}/`

  return (
    <div className="dc-app">
      <article className="dc-card">
        <BannerSection heroImage={cardData.heroImage} />
        <SaveContactButton contact={cardData} />
        <NameSection name={cardData.name} title={cardData.title} />
        <ProfileSection profileImage={cardData.profileImage} />
        
        <main className="dc-main">
          <ActionButtons 
            contact={cardData} 
            onScheduleClick={() => setIsContactFormOpen(true)}
          />
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
        </main>

        <FooterSection 
          gallery={cardData.gallery} 
          footer={cardData.footer}
        />
        <ShareButton 
          onClick={() => setIsShareModalOpen(true)} 
          label={cardData.buttons.share}
        />
      </article>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)}
        shareUrl={shareUrl}
      />

      {isContactFormOpen && (
        <ContactForm 
          onClose={() => setIsContactFormOpen(false)}
          recipientEmail={cardData.email}
        />
      )}
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
    <div className="dc-app">
      <section className="dc-home">
        <header className="dc-home__header">
          <div className="dc-home__logo">
            <span className="dc-home__icon">△</span>
            <h1>דלתא</h1>
            <p>בית לתכנון פיננסי</p>
          </div>
        </header>
        
        <nav className="dc-team" aria-label="Team members">
          <h2 className="dc-team__heading">הצוות שלנו</h2>
          <div className="dc-team__grid">
            {cards.map((card) => (
              <Link 
                key={card.slug} 
                to={`/${card.slug}`}
                className="dc-team__member"
              >
                <figure className="dc-team__photo">
                  <img src={getAssetUrl(card.profileImage)} alt={card.name} />
                </figure>
                <div className="dc-team__info">
                  <h3>{card.name}</h3>
                  <p>{card.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </section>
    </div>
  )
}

export { DynamicCard, HomePage, CardView }
export default DynamicCard
