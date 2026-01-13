import './SaveContactButton.css'

function SaveContactButton({ contact }) {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.title}
TEL;TYPE=CELL:${contact.phone}
TEL;TYPE=WORK:${contact.office}
EMAIL:${contact.email}
URL:${contact.website}
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

  return (
    <button className="save-contact-btn" onClick={downloadVCard}>
      <span className="btn-glow"></span>
      <span className="btn-content">
        <i className="fas fa-address-card"></i>
        <span>שמירת איש קשר</span>
      </span>
    </button>
  )
}

export default SaveContactButton
