/**
 * Digital Card - בת אל סנה
 * ===========================
 * Edit this file to customize the digital business card.
 * 
 * Images are stored in: public/cards/bat-el-sne/
 *   - profile.png  (profile photo)
 *   - hero.png     (header background)
 *   - gallery/     (gallery images)
 */

// Base path for this card's assets
const BASE_PATH = 'cards/bat-el-sne'

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
  
  // ===== IMAGES (relative to public folder) =====
  profileImage: `${BASE_PATH}/profile.png`,
  heroImage: `${BASE_PATH}/hero.png`,
  
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
    'תיכנון פיננסי',
    'התמחות השקעות',
    'ביטוח חיים',
    'שירותים פיננסים',
    'חסכון פנסיוני',
    'חסכונות',
    'ניתוח תיק לקוח על כל רבדיו'
  ],
  
  // ===== QUESTIONS SECTION =====
  questions: [
    'האם אתם חוסכים לעתיד?',
    'האם אתם יודעים כמה כסף נצבר לזכותכם לגיל פרישה בביטוח מנהלים / קופות גמל / קרנות השתלמות?',
    'האם הכסף המנוהל שלכם מותאם לצרכים הפנסיוניים שלכם?'
  ],
  
  // ===== GALLERY IMAGES =====
  gallery: [
    `${BASE_PATH}/gallery/gallery-1.jpg`,
    `${BASE_PATH}/gallery/gallery-2.jpg`,
    `${BASE_PATH}/gallery/gallery-3.jpg`,
    `${BASE_PATH}/gallery/gallery-4.jpg`
  ],
  
  // ===== FOOTER SECTION =====
  footer: {
    badge: 'תיכנון פיננסי ופנסיוני',
    title: 'דלתא'
  },
  
  // ===== ACCORDION SECTION TITLES =====
  accordionTitles: {
    contact: 'פרטי התקשרות ושעות פעילות',
    expertise: 'ההתמחות שלי',
    questions: 'תשאלו את עצמכם...'
  },
  
  // ===== SECTION TITLES =====
  sectionTitles: {
    about: 'קצת עלי',
    address: 'כתובתנו'
  },
  
  // ===== BUTTON LABELS =====
  buttons: {
    call: 'שיחה',
    email: 'מייל',
    whatsapp: 'וואטסאפ',
    office: 'משרד',
    website: 'אתר',
    navigate: 'ניווט',
    saveContact: 'שמירת איש קשר',
    share: 'שיתוף הכרטיס',
    wazeNavigate: 'נווט עם Waze'
  }
}

export default cardData
