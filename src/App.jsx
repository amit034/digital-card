import { useState } from 'react'
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
import cardData from './cardData'
import './App.css'

function App() {
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

export default App
