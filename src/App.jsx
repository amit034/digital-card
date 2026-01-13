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
import './App.css'

// Contact data - easily editable
const contactData = {
  name: 'בת אל סנה',
  title: 'דלתא - בית לתכנון פיננסי',
  phone: '052-6407620',
  office: '03-6542333',
  email: 'batel@delta-ins.co.il',
  website: 'https://delta-ins.co.il',
  whatsapp: '9720526407620',
  wazeLink: 'https://waze.com/ul?ll=32.0919,34.8692&navigate=yes',
  profileImage: 'https://www.licard.co.il/upload/imgupload/656dc4c4e064a.png',
  heroImage: 'https://www.licard.co.il/upload/imgupload/655f238a8e32c.png',
  address: {
    street: 'תוצרת הארץ 3',
    city: 'פתח תקווה',
    details: 'מתחם בסר סיטי, בניין C קומה 25'
  },
  workingHours: 'ראשון - חמישי: 09:00 - 18:00',
  about: [
    'נעים מאוד אני <strong>בת אל סנה</strong>, בעלת תואר BA במנהל עסקים וביטוח, בעלת רישיון פנסיוני מטעם משרד האוצר. עם ניסיון של למעלה מ-7 שנות ניהול תיקי לקוחות בבתי השקעות המובילים בישראל. אני מאמינה שתכנון נכון והשקעה בהווה תמיד מביאים לתוצאות משמעותיות בעתיד.',
    'אני מלווה את הלקוחות שלי יד ביד, עם תמיכה ומענה מותאם עבור כל אחד ואחת. כל זאת על מנת לייצר עבורם תוכנית פיננסית מותאמת לצרכים שלהם עם קבלת המלצות וכלים.',
    'אני כאן עבורכם על מנת ללוות ולתת מענה מקצועי המסתמך על הידע והניסיון שלי ומותאם לרוח השינויים בשוק.'
  ],
  skills: [
    'תיכנון פיננסי',
    'התמחות השקעות',
    'ביטוח חיים',
    'שירותים פיננסים',
    'חסכון פנסיוני',
    'חסכונות',
    'ניתוח תיק לקוח על כל רבדיו'
  ],
  questions: [
    'האם אתם חוסכים לעתיד?',
    'האם אתם יודעים כמה כסף נצבר לזכותכם לגיל פרישה בביטוח מנהלים / קופות גמל / קרנות השתלמות?',
    'האם הכסף המנוהל שלכם מותאם לצרכים הפנסיוניים שלכם?'
  ],
  gallery: [
    'https://www.licard.co.il/upload/imgupload2/656747ab8653e.jpg',
    'https://www.licard.co.il/upload/imgupload2/656747ab86694.jpg',
    'https://www.licard.co.il/upload/imgupload2/656726ec6a3d0.jpg',
    'https://www.licard.co.il/upload/imgupload2/656726ec6a4c1.jpg'
  ]
}

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  return (
    <div className="app">
      <div className="card-container">
        <HeroSection heroImage={contactData.heroImage} />
        <ProfileSection profileImage={contactData.profileImage} />
        
        <div className="content-section">
          <NameSection name={contactData.name} title={contactData.title} />
          <ActionButtons contact={contactData} />
          <SaveContactButton contact={contactData} />
          <AboutSection about={contactData.about} />
          <AccordionSection contact={contactData} />
          <AddressSection address={contactData.address} wazeLink={contactData.wazeLink} />
        </div>

        <FooterSection gallery={contactData.gallery} />
        <ShareButton onClick={() => setIsShareModalOpen(true)} />
      </div>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </div>
  )
}

export default App
