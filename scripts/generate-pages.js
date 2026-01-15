/**
 * Generate static HTML pages for each card with unique meta tags
 * Run after build: node scripts/generate-pages.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

// Card data for meta tags
const cards = [
  {
    slug: 'yael-amor',
    name: 'יעל אמור',
    title: 'מתכננת פיננסית ופנסיונית',
    company: 'דלתא - בית לתכנון פיננסי',
    description: 'יעל אמור, בעלת תואר ראשון בכלכלה וניהול ובעלת רישיון פנסיוני מטעם משרד האוצר. עם ניסיון של כ־10 שנים בעולם הביטוח, הפנסיה והתכנון הפיננסי.',
    image: 'cards/yael-amor/profile.png'
  },
  {
    slug: 'bat-el-sne',
    name: 'בת אל סנה',
    title: 'מתכננת פיננסית ופנסיונית',
    company: 'דלתא - בית לתכנון פיננסי',
    description: 'בת אל סנה, בעלת תואר BA במנהל עסקים וביטוח, בעלת רישיון פנסיוני מטעם משרד האוצר. עם ניסיון של למעלה מ-7 שנות ניהול תיקי לקוחות בבתי השקעות המובילים בישראל.',
    image: 'cards/bat-el-sne/profile.png'
  }
]

const BASE_URL = 'https://amit034.github.io/digital-card'

function generateMetaTags(card) {
  const fullTitle = `${card.name} | ${card.title} • ${card.company}`
  const imageUrl = `${BASE_URL}/${card.image}`
  const pageUrl = `${BASE_URL}/cards/${card.slug}/`
  
  return `
    <!-- Dynamic Meta Tags for ${card.name} -->
    <title>${fullTitle}</title>
    <meta name="description" content="${card.description}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="profile" />
    <meta property="og:site_name" content="Digital Cards" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${card.description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="400" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:locale" content="he_IL" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${card.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
`
}

function generateHtml(card, templateHtml) {
  // Remove existing meta tags and their comment labels
  let html = templateHtml
    .replace(/<title>.*?<\/title>\s*/s, '')
    .replace(/<!-- Basic Meta -->\s*/g, '')
    .replace(/<meta name="description".*?\/>\s*/g, '')
    .replace(/<!-- Open Graph \/ Facebook -->\s*/g, '')
    .replace(/<meta property="og:.*?\/>\s*/g, '')
    .replace(/<!-- Twitter Card -->\s*/g, '')
    .replace(/<meta name="twitter:.*?\/>\s*/g, '')
    .replace(/<meta name="author".*?\/>\s*/g, '')
  
  // Insert new meta tags after theme-color
  const metaTags = generateMetaTags(card)
  html = html.replace(
    '<meta name="theme-color" content="#0f172a" />',
    `<meta name="theme-color" content="#0f172a" />${metaTags}`
  )
  
  // Add script to redirect to hash route
  const redirectScript = `
    <script>
      // Redirect to hash route for this person
      if (!window.location.hash) {
        window.location.hash = '/${card.slug}';
      }
    </script>
  `
  html = html.replace('</head>', `${redirectScript}</head>`)
  
  return html
}

async function main() {
  console.log('📄 Generating static pages for each card...\n')
  
  // Read the built index.html
  const indexPath = path.join(distDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html not found. Run npm run build first.')
    process.exit(1)
  }
  
  const templateHtml = fs.readFileSync(indexPath, 'utf-8')
  
  // Generate page for each card inside cards/ folder
  for (const card of cards) {
    const cardDir = path.join(distDir, 'cards', card.slug)
    fs.mkdirSync(cardDir, { recursive: true })
    
    const html = generateHtml(card, templateHtml)
    const outputPath = path.join(cardDir, 'index.html')
    fs.writeFileSync(outputPath, html)
    
    console.log(`✅ Created: cards/${card.slug}/index.html - ${card.name}`)
  }
  
  console.log('\n🎉 Done! Each card now has its own page with unique meta tags.')
}

main()

