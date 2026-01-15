import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './ShareModal.css'

function ShareModal({ isOpen, onClose, shareUrl }) {
  const [cardUrl, setCardUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Use the static share URL for QR code (better for social media)
    // Fall back to current URL if not provided
    setCardUrl(shareUrl || window.location.href)
  }, [shareUrl])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const shareWhatsApp = () => {
    const url = encodeURIComponent(cardUrl)
    const text = encodeURIComponent('הנה הכרטיס שלי:')
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank')
  }

  const shareSMS = () => {
    window.location.href = `sms:?body=הנה הכרטיס שלי: ${cardUrl}`
  }

  const shareEmail = () => {
    const subject = encodeURIComponent('הכרטיס שלי')
    const body = encodeURIComponent(`שלום, הנה הכרטיס שלי: ${cardUrl}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const shareFacebook = () => {
    const url = encodeURIComponent(cardUrl)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(cardUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input')
      input.value = cardUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="share-modal" onClick={handleBackdropClick}>
      <div className="share-modal-content">
        <button className="close-modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <h3>שתפו את הכרטיס</h3>
        
        <div className="qr-code-section">
          <div className="qr-code-wrapper">
            <QRCodeSVG 
              value={cardUrl}
              size={160}
              level="M"
              bgColor="transparent"
              fgColor="#1e293b"
            />
          </div>
          <p className="qr-hint">סרקו לשיתוף מהיר</p>
        </div>

        <div className="share-options">
          <button onClick={shareWhatsApp} className="share-option whatsapp">
            <div className="share-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <span>WhatsApp</span>
          </button>
          
          <button onClick={shareSMS} className="share-option sms">
            <div className="share-icon">
              <i className="fas fa-comment-sms"></i>
            </div>
            <span>SMS</span>
          </button>
          
          <button onClick={shareEmail} className="share-option email">
            <div className="share-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <span>מייל</span>
          </button>
          
          <button onClick={shareFacebook} className="share-option facebook">
            <div className="share-icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>פייסבוק</span>
          </button>
        </div>
        
        <div className="copy-link">
          <input 
            type="text" 
            value={cardUrl} 
            readOnly 
            onClick={(e) => e.target.select()}
          />
          <button 
            onClick={copyLink} 
            className={copied ? 'copied' : ''}
          >
            {copied ? (
              <>
                <i className="fas fa-check"></i>
                הועתק!
              </>
            ) : (
              <>
                <i className="fas fa-copy"></i>
                העתק
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
