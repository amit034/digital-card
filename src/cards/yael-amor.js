/**
 * Digital Card - יעל אמור
 * ===========================
 * Edit this file to customize the digital business card.
 * 
 * Personal images: public/cards/yael-amor/
 *   - profile.png (profile photo)
 *   - hero.png (header background)
 *   - gallery-1.jpg through gallery-4.jpg (gallery images)
 */

// Paths for assets
const PROFILE_PATH = 'cards/yael-amor'

const cardData = {
  // ===== ROUTE SLUG =====
  slug: 'yael-amor',
  
  // ===== PERSONAL INFO =====
  name: 'יעל אמור',
  jobTitle: 'מתכננת פנסיונית',
  company: 'דלתא - בית לתכנון פיננסי',
  title: 'דלתא - בית לתכנון פיננסי',
  
  // ===== CONTACT DETAILS =====
  phone: '052-8238675',
  office: '03-6542333',
  email: 'yaela@delta-ins.co.il',
  website: 'https://delta-ins.co.il',
  whatsapp: '9720528238675',
  
  // ===== IMAGES =====
  profileImage: `${PROFILE_PATH}/profile.png`,
  heroImage: `${PROFILE_PATH}/hero.png`,
  
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
    'תכנון פנסיוני מקיף',
    'ביטוחי חיים',
    'שירותים פיננסיים',
    'חסכונות',
    'ניתוח ואופטימיזציה של תיק פיננסי ופנסיוני'
  ],
  
  // ===== QUESTIONS SECTION =====
  questions: [
    'מה התוכנית שלכם לפרישה?',
    'האם בדקתם לאחרונה את מצב החסכונות הפנסיוניים שלכם?',
    'האם התיק הפיננסי שלכם מתאים לשלב החיים הנוכחי?'
  ],
  
  // ===== GALLERY IMAGES =====
  gallery: [
    `${PROFILE_PATH}/gallery-1.jpg`,
    `${PROFILE_PATH}/gallery-2.jpg`,
    `${PROFILE_PATH}/gallery-3.jpg`,
    `${PROFILE_PATH}/gallery-4.jpg`
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
    schedule: 'פגישה',
    office: 'טלפון משרד',
    website: 'לאתר',
    navigate: 'מפה',
    saveContact: 'הוספה לאנשי קשר',
    share: 'שתפו',
    wazeNavigate: 'פתח ב-Waze'
  }
}

export default cardData
