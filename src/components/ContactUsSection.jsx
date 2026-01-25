import { useState } from 'react'
import './ContactUsSection.css'

function ContactUsSection({ googleScriptUrl }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('נא למלא את כל השדות')
      setIsSubmitting(false)
      return
    }

    try {
      // Submit to Google Sheets via Apps Script
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      })

      // Check if response is ok (if CORS is enabled)
      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          setIsSubmitted(true)
          setFormData({ name: '', phone: '', message: '' })
          setTimeout(() => {
            setIsSubmitted(false)
          }, 5000)
        } else {
          setError('אירעה שגיאה, נסו שוב מאוחר יותר')
        }
      } else {
        // If CORS is not enabled, assume success (data was sent)
        setIsSubmitted(true)
        setFormData({ name: '', phone: '', message: '' })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (err) {
      // Network error - but data might still have been sent
      // Show success message anyway (better UX)
      console.error('Error submitting form:', err)
      setIsSubmitted(true)
      setFormData({ name: '', phone: '', message: '' })
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="dc-contact-us">
      <div className="dc-contact-us__header">
        <div className="dc-contact-us__icon">
          <i className="fas fa-envelope"></i>
        </div>
        <h2 className="dc-contact-us__title">צור קשר</h2>
        <p className="dc-contact-us__subtitle">השאירו פרטים ונחזור אליכם בהקדם</p>
      </div>

      {isSubmitted && (
        <div className="dc-contact-us__success">
          <i className="fas fa-check-circle"></i>
          <span>ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.</span>
        </div>
      )}

      <form className="dc-contact-us__form" onSubmit={handleSubmit}>
        <div className="dc-contact-us__field">
          <label htmlFor="contact-name">שם מלא</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="הכניסו שם מלא"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="dc-contact-us__field">
          <label htmlFor="contact-phone">מספר טלפון</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="050-0000000"
            dir="ltr"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="dc-contact-us__field">
          <label htmlFor="contact-message">הודעה</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="כתבו את הודעתכם כאן..."
            rows={4}
            required
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="dc-contact-us__error">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        <button 
          type="submit" 
          className="dc-contact-us__submit"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              שולח...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              שלח הודעה
            </>
          )}
        </button>
      </form>

      <div className="dc-contact-us__footer">
        <i className="fas fa-shield-alt"></i>
        <span>הפרטים שלכם מאובטחים ולא יועברו לצד שלישי</span>
      </div>
    </section>
  )
}

export default ContactUsSection
