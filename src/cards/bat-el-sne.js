/**
 * Digital Card - בת אל סנה
 * ===========================
 * Edit this file to customize the digital business card.
 * 
 * Personal images: public/cards/bat-el-sne/
 *   - profile.png (profile photo)
 * 
 * Shared images: public/cards/shared/
 *   - delta-hero.png (header background)
 *   - office-team.jpg, consultation.jpg, etc. (gallery)
 */

// Paths for assets
const PROFILE_PATH = 'cards/bat-el-sne'
const SHARED_PATH = 'cards/shared'

const cardData = {
  // ===== ROUTE SLUG =====
  slug: 'bat-el-sne',
  
  // ===== PERSONAL INFO =====
  name: 'בת אל סנה',
  title: 'דלתא - בית לתכנון פיננסי',
  
  // ===== CONTACT DETAILS =====
  phone: '052-6407620',
  office: '03-6542333',
  email: 'batel@delta-ins.co.il',
  website: 'https://delta-ins.co.il',
  whatsapp: '9720526407620',
  
  // ===== IMAGES =====
  profileImage: `${PROFILE_PATH}/profile.png`,
  heroImage: `${SHARED_PATH}/delta-hero.png`,
  
  // ===== ADDRESS =====
  address: {
    street: 'תוצרת הארץ 3',
    city: 'פתח תקווה',
    details: 'מתחם בסר סיטי, בניין C קומה 25'
  },
  wazeLink: 'https://waze.com/ul?ll=32.0919,34.8692&navigate=yes',
  
  // ===== WORKING HOURS =====
  workingHours: 'ראשון - חמישי: 09:00 - 18:00',
  
  // ===== ABOUT SECTION =====
  about: [
    'נעים מאוד אני <strong>בת אל סנה</strong>, בעלת תואר BA במנהל עסקים וביטוח, בעלת רישיון פנסיוני מטעם משרד האוצר. עם ניסיון של למעלה מ-7 שנות ניהול תיקי לקוחות בבתי השקעות המובילים בישראל. אני מאמינה שתכנון נכון והשקעה בהווה תמיד מביאים לתוצאות משמעותיות בעתיד.',
    'אני מלווה את הלקוחות שלי יד ביד, עם תמיכה ומענה מותאם עבור כל אחד ואחת. כל זאת על מנת לייצר עבורם תוכנית פיננסית מותאמת לצרכים שלהם עם קבלת המלצות וכלים.',
    'אני כאן עבורכם על מנת ללוות ולתת מענה מקצועי המסתמך על הידע והניסיון שלי ומותאם לרוח השינויים בשוק.'
  ],
  
  // ===== EXPERTISE/SKILLS =====
  skills: [
    'תכנון פנסיוני מקיף',
    'ייעוץ השקעות',
    'ביטוחי חיים ובריאות',
    'ניהול סיכונים פיננסיים',
    'קרנות השתלמות וגמל',
    'תכניות חיסכון',
    'ניתוח ואופטימיזציה של תיק פיננסי'
  ],
  
  // ===== QUESTIONS SECTION =====
  questions: [
    'מה התוכנית שלכם לפרישה?',
    'האם בדקתם לאחרונה את מצב החסכונות הפנסיוניים שלכם?',
    'האם התיק הפיננסי שלכם מתאים לשלב החיים הנוכחי?'
  ],
  
  // ===== GALLERY IMAGES (shared) =====
  gallery: [
    `${SHARED_PATH}/office-team.jpg`,
    `${SHARED_PATH}/consultation.jpg`,
    `${SHARED_PATH}/meeting-room.jpg`,
    `${SHARED_PATH}/workspace.jpg`
  ],
  
  // ===== FOOTER SECTION =====
  footer: {
    badge: 'תיכנון פיננסי ופנסיוני',
    title: 'דלתא'
  },
  
  // ===== ACCORDION SECTION TITLES =====
  accordionTitles: {
    contact: 'יצירת קשר ושעות פעילות',
    expertise: 'תחומי התמחות',
    questions: 'שאלות לחשיבה'
  },
  
  // ===== SECTION TITLES =====
  sectionTitles: {
    about: 'אז מי אני',
    address: 'המשרד שלנו'
  },
  
  // ===== BUTTON LABELS =====
  buttons: {
    call: 'התקשרו',
    email: 'אימייל',
    whatsapp: 'WhatsApp',
    office: 'טלפון משרד',
    website: 'לאתר',
    navigate: 'מפה',
    saveContact: 'הוספה לאנשי קשר',
    share: 'שתפו',
    wazeNavigate: 'פתח ב-Waze'
  }
}

export default cardData
