/**
 * Digital Card - עו"ד אייל פלשן
 * ===========================
 * Edit this file to customize the digital business card.
 * 
 * Personal images: public/cards/eyal-flashen/
 *   - profile.png (profile photo)
 *   - hero.jpg (header background)
 *   - gallery-1.jpg through gallery-3.jpg (gallery images)
 */

// Paths for assets
const PROFILE_PATH = 'cards/eyal-flashen'

const cardData = {
  // ===== ROUTE SLUG =====
  slug: 'eyal-flashen',
  
  // ===== PERSONAL INFO =====
  name: 'עו"ד אייל פלשן',
  jobTitle: 'עורך דין',
  company: 'אייל פלשן ושות\' - משרד עורכי דין',
  title: 'אייל פלשן ושות\' - משרד עורכי דין',
  
  // ===== CONTACT DETAILS =====
  phone: '052-222-3922',
  office: '03-5652088',
  email: 'eyal@flashenlaw.com',
  website: 'https://flashenlaw.com',
  whatsapp: '052-222-3922',
  
  // ===== GOOGLE SHEETS INTEGRATION =====
  // Uncomment and add your Google Apps Script URL after setting up (see GOOGLE_SHEETS_SETUP.md)
  // googleScriptUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  
  // ===== IMAGES =====
  profileImage: `${PROFILE_PATH}/profile.png`,
  heroImage: `https://flashenlaw.com/wp-content/uploads/2023/05/home-g63b8c2524_1280.jpg`,
  
  // ===== ADDRESS =====
  address: {
    street: 'רח\' מצדה 9',
    city: 'בני ברק',
    details: 'מגדל בסר 3, קומה 6'
  },
  wazeLink: 'https://waze.com/ul?place=place.w.22806849.228199561.324689&navigate=yes',
  
  // ===== WORKING HOURS =====
  workingHours: 'ראשון - חמישי: 09:00 - 18:00',
  
  // ===== ABOUT SECTION =====
  about: [
    'עו"ד <strong>אייל פלשן</strong>, יליד מדינת ישראל שנת 1973, הינו חבר בלשכת עורכי הדין בישראל החל משנת 2003.',
    'עו"ד אייל פלשן הינו בוגר תואר ראשון במשפטים (LL.B.) בהצטיינות מאוניברסיטת תל אביב, ובוגר תואר שני "מגיסטר במקרקעין" (Master Of Real-Estate) מהטכניון. תואר ייחודי זה מקנה טווח רחב של מיומנויות בתחום הנדל"ן, באשר הנו מבוסס על לימוד משולב של דיסציפלינות מתחומים שונים בנדל"ן ובמנהל עסקים.',
    'עו"ד אייל פלשן הינו בעל ניסיון של למעלה מ-20 שנה בתחום המקרקעין על כל רבדיו, לרבות בעסקאות מכר נדל"ן, כולל עסקאות קומבינציה, ליווי פרויקטים למגורים ומסחריים, קבוצות רכישה, עסקאות יד שניה והסכמי שיתוף.',
    'המשרד מספק תחת קורת גג אחת מענה מקצועי ואיכותי, במגוון תחומים משפטיים תוך הקפדה ושמירה על יחס אישי, מהיר ודיסקרטי.'
  ],
  
  // ===== EXPERTISE/SKILLS =====
  skills: [
    'מקרקעין ונדל"ן',
    'מיסוי מקרקעין והיטלים',
    'דיני תכנון ובניה',
    'התחדשות עירונית ותמ"א 38',
    'ביטוח ונזיקין',
    'ליטיגציה אזרחית',
    'דיני עבודה',
    'דיני עיזבונות',
    'גני ילדים פרטיים'
  ],
  
  // ===== QUESTIONS SECTION =====
  questions: [
    'האם יש לכם עסקת נדל"ן שדורשת ליווי משפטי מקצועי?',
    'האם אתם זקוקים לייצוג משפטי בתביעות נזיקין או ביטוח?',
    'האם אתם מעוניינים בתכנון עזבון או עריכת צוואה?'
  ],
  
  // ===== GALLERY IMAGES =====
  gallery: [
    'https://flashenlaw.com/wp-content/uploads/2024/01/Depositphotos_30240485_XL-scaled.jpg',
    'https://flashenlaw.com/wp-content/uploads/2024/01/Depositphotos_32038481_XL-scaled.jpg',
    'https://flashenlaw.com/wp-content/uploads/2023/05/pexels-kampus-production-8428076.jpg',
    'https://flashenlaw.com/wp-content/uploads/2024/01/Depositphotos_650407634_XL-scaled.jpg'
  ],
  
  // ===== FOOTER SECTION =====
  footer: {
    badge: 'משרד עורכי דין',
    title: 'אייל פלשן ושות\''
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
