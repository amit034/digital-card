import './SaveContactButton.css'

function SaveContactButton({ contact }) {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TITLE:${contact.jobTitle || ''}
TEL;TYPE=CELL:${contact.phone}
TEL;TYPE=WORK:${contact.office}
EMAIL:${contact.email}
ADR;TYPE=WORK:;;${contact.address.street};${contact.address.city};;;ישראל
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${contact.name.replace(/ /g, '-')}.vcf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const text = contact.buttons?.saveContact || 'שמירת איש קשר'

  return (
    <div className="dc-cta">
      <button 
        type="button" 
        className="dc-cta__button" 
        onClick={downloadVCard}
        aria-label={text}
      >
        <span className="dc-cta__shine" aria-hidden="true"></span>
        <span className="dc-cta__inner">
          <i className="fas fa-address-book" aria-hidden="true"></i>
          <span className="dc-cta__label">{text}</span>
        </span>
      </button>
    </div>
  )
}

export default SaveContactButton
