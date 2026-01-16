import { useState } from 'react'
import './ContactForm.css'

function ContactForm({ onClose, recipientEmail = 'yaela@delta-ins.co.il' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const topics = [
    'תכנון פנסיוני',
    'ביטוח חיים ובריאות',
    'בדיקת מצב קיים',
    'שינויים בתיק הקיים',
    'קרנות השתלמות וגמל',
    'ייעוץ כללי',
    'אחר'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate
    if (!formData.name || !formData.phone || !formData.topic) {
      setError('נא למלא את כל השדות')
      setIsSubmitting(false)
      return
    }

    try {
      // Create email content
      const subject = `בקשה לתיאום פגישה - ${formData.name}`
      const body = `
בקשה חדשה לתיאום פגישה:

שם: ${formData.name}
טלפון: ${formData.phone}
נושא: ${formData.topic}
${formData.notes ? `הערות: ${formData.notes}` : ''}

---
נשלח מהכרטיס הדיגיטלי
      `.trim()

      // Option 1: Open email client (works offline, simple)
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open in new window to avoid navigation issues
      window.open(mailtoLink, '_blank')
      
      setIsSubmitted(true)
    } catch (err) {
      setError('אירעה שגיאה, נסו שוב')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-modal" onClick={onClose}>
        <div className="contact-form-content" onClick={e => e.stopPropagation()}>
          <div className="form-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>הבקשה נשלחה!</h3>
            <p>אחזור אליכם בהקדם</p>
            <button className="close-btn" onClick={onClose}>סגור</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-modal" onClick={onClose}>
      <div className="contact-form-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="form-header">
          <div className="form-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <h3>תיאום פגישת ייעוץ</h3>
          <p>השאירו פרטים ואחזור אליכם תוך 24 שעות</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">שם מלא</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="הכניסו שם מלא"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="050-0000000"
              dir="ltr"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="topic">במה אוכל לעזור?</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="">בחרו נושא</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="notes">הערות נוספות (אופציונלי)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="ספרו לי קצת על עצמכם..."
              rows={3}
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                שולח...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i>
                שלחו בקשה
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <i className="fas fa-shield-alt"></i>
          <span>הפרטים שלכם מאובטחים ולא יועברו לצד שלישי</span>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
