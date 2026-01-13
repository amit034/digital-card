/**
 * Digital Card - יעל אמור
 * ===========================
 * Edit this file to customize the digital business card.
 * 
 * Personal images: public/cards/yael-amor/
 *   - profile.png (profile photo)
 * 
 * Shared images: public/cards/shared/
 *   - delta-hero.png (header background)
 *   - office-team.jpg, consultation.jpg, etc. (gallery)
 */

// Paths for assets
const PROFILE_PATH = 'cards/yael-amor'
const SHARED_PATH = 'cards/shared'

const cardData = {
  // ===== ROUTE SLUG =====
  slug: 'yael-amor',
  
  // ===== PERSONAL INFO =====
  name: 'יעל אמור',
  title: 'דלתא - בית לתכנון פיננסי',
  
  // ===== CONTACT DETAILS =====
  phone: '052-6407620',
  office: '03-6542333',
  email: 'yael@delta-ins.co.il',
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
    'נעים מאוד, אני <strong>יעל אמור</strong>, בעלת תואר ראשון בכלכלה וניהול ובעלת רישיון פנסיוני מטעם משרד האוצר. עם ניסיון של כ־10 שנים בעולם הביטוח, הפנסיה והתכנון הפיננסי.',
    'הגישה שלי מבוססת על תכנון נכון וקבלת החלטות מושכלות בזמן הנכון, מתוך אמונה שצעדים מדויקים בהווה מייצרים יציבות וביטחון כלכלי משמעותי בעתיד. אני מלווה את הלקוחות שלי באופן אישי וצמוד, עם זמינות גבוהה, הקשבה והתאמה מלאה לצרכים, למטרות ולשלב החיים שבו הם נמצאים.',
    'המטרה שלי היא לפשט עולם מורכב, להעניק המלצות אובייקטיביות וכלים ברורים, ולהיות עבור הלקוחות כתובת מקצועית אחת שמסתכלת על התמונה הרחבה ומעודכנת כל הזמן לשינויים בשוק.'
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
