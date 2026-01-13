import './ActionButtons.css'

function ActionButtons({ contact }) {
  const actions = [
    {
      icon: 'fas fa-phone',
      label: 'שיחה',
      onClick: () => window.location.href = `tel:${contact.phone.replace(/-/g, '')}`,
      delay: 0.4
    },
    {
      icon: 'fas fa-envelope',
      label: 'מייל',
      onClick: () => window.location.href = `mailto:${contact.email}`,
      delay: 0.5
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'וואטסאפ',
      onClick: () => window.open(`https://wa.me/${contact.whatsapp}`, '_blank'),
      filled: true,
      highlight: true,
      delay: 0.6
    },
    {
      icon: 'fas fa-building',
      label: 'משרד',
      onClick: () => window.location.href = `tel:${contact.office.replace(/-/g, '')}`,
      delay: 0.7
    },
    {
      icon: 'fas fa-globe',
      label: 'אתר',
      onClick: () => window.open(contact.website, '_blank'),
      delay: 0.8
    },
    {
      icon: 'fas fa-location-dot',
      label: 'ניווט',
      onClick: () => window.open(contact.wazeLink, '_blank'),
      delay: 0.9
    }
  ]

  return (
    <div className="action-buttons">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`action-btn ${action.highlight ? 'highlight' : ''}`}
          onClick={action.onClick}
          style={{ animationDelay: `${action.delay}s` }}
        >
          <div className={`action-icon ${action.filled ? 'filled' : ''}`}>
            <i className={action.icon}></i>
          </div>
          <span className="action-label">{action.label}</span>
        </button>
      ))}
    </div>
  )
}

export default ActionButtons
