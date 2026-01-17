import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './ShareModal.css'

function ShareModal({ isOpen, onClose, shareUrl }) {
  const [linkValue, setLinkValue] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setLinkValue(shareUrl || window.location.href)
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

  const handleWhatsApp = () => {
    const url = encodeURIComponent(linkValue)
    const text = encodeURIComponent('הנה הכרטיס שלי:')
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank')
  }

  const handleSMS = () => {
    window.location.href = `sms:?body=הנה הכרטיס שלי: ${linkValue}`
  }

  const handleEmail = () => {
    const subject = encodeURIComponent('הכרטיס שלי')
    const body = encodeURIComponent(`שלום, הנה הכרטיס שלי: ${linkValue}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const handleFacebook = () => {
    const url = encodeURIComponent(linkValue)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkValue)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      const input = document.createElement('input')
      input.value = linkValue
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <dialog className="dc-dialog" open onClick={handleOverlayClick}>
      <div className="dc-dialog__box" role="document">
        <button 
          type="button" 
          className="dc-dialog__close" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
        
        <h2 className="dc-dialog__heading">שתפו את הכרטיס</h2>
        
        <div className="dc-dialog__qr">
          <div className="dc-dialog__qr-frame">
            <QRCodeSVG 
              value={linkValue}
              size={140}
              level="M"
              bgColor="transparent"
              fgColor="#1e293b"
            />
          </div>
          <p className="dc-dialog__qr-hint">סרקו לשיתוף מהיר</p>
        </div>

        <div className="dc-dialog__channels">
          <button type="button" onClick={handleWhatsApp} className="dc-dialog__channel dc-dialog__channel--whatsapp">
            <span className="dc-dialog__channel-icon" aria-hidden="true">
              <i className="fab fa-whatsapp"></i>
            </span>
            <span className="dc-dialog__channel-name">WhatsApp</span>
          </button>
          
          <button type="button" onClick={handleSMS} className="dc-dialog__channel dc-dialog__channel--sms">
            <span className="dc-dialog__channel-icon" aria-hidden="true">
              <i className="fas fa-comment-sms"></i>
            </span>
            <span className="dc-dialog__channel-name">SMS</span>
          </button>
          
          <button type="button" onClick={handleEmail} className="dc-dialog__channel dc-dialog__channel--email">
            <span className="dc-dialog__channel-icon" aria-hidden="true">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="dc-dialog__channel-name">מייל</span>
          </button>
          
          <button type="button" onClick={handleFacebook} className="dc-dialog__channel dc-dialog__channel--facebook">
            <span className="dc-dialog__channel-icon" aria-hidden="true">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="dc-dialog__channel-name">פייסבוק</span>
          </button>
        </div>
        
        <div className="dc-dialog__clipboard">
          <input 
            type="text" 
            className="dc-dialog__url"
            value={linkValue} 
            readOnly 
            onClick={(e) => e.target.select()}
            aria-label="Card URL"
          />
          <button 
            type="button"
            onClick={handleCopy} 
            className={`dc-dialog__copy ${isCopied ? 'dc-dialog__copy--success' : ''}`}
          >
            {isCopied ? (
              <>
                <i className="fas fa-check" aria-hidden="true"></i>
                הועתק!
              </>
            ) : (
              <>
                <i className="fas fa-copy" aria-hidden="true"></i>
                העתק
              </>
            )}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ShareModal
