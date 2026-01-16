import './ActionButtons.css'

function ActionButtons({ contact, onScheduleClick }) {
  const buttons = contact.buttons || {}
  
  const actions = [
    {
      icon: 'fas fa-phone',
      label: buttons.call || 'שיחה',
      onClick: () => window.location.href = `tel:${contact.phone.replace(/-/g, '')}`,
      delay: 0.4
    },
    {
      icon: 'fas fa-envelope',
      label: buttons.email || 'מייל',
      onClick: () => window.location.href = `mailto:${contact.email}`,
      delay: 0.5
    },
    {
      icon: 'fab fa-whatsapp',
      label: buttons.whatsapp || 'וואטסאפ',
      onClick: () => window.open(`https://wa.me/${contact.whatsapp}`, '_blank'),
      delay: 0.6
    },
    {
      icon: 'fas fa-calendar-check',
      label: buttons.schedule || 'פגישה',
      onClick: onScheduleClick,
      delay: 0.65
    },
    {
      icon: 'fas fa-globe',
      label: buttons.website || 'אתר',
      onClick: () => window.open(contact.website, '_blank'),
      delay: 0.7
    },
    {
      icon: 'fas fa-building',
      label: buttons.office || 'משרד',
      onClick: () => window.location.href = `tel:${contact.office.replace(/-/g, '')}`,
      delay: 0.75
    },
    {
      icon: 'fas fa-location-dot',
      label: buttons.navigate || 'ניווט',
      onClick: () => window.open(contact.wazeLink, '_blank'),
      delay: 0.8
    }
  ]

  return (
    <div className="action-buttons">
      {actions.map((action, index) => (
        <button
          key={index}
          className="action-btn"
          onClick={action.onClick}
          style={{ animationDelay: `${action.delay}s` }}
        >
          <div className="action-icon">
            <i className={action.icon}></i>
          </div>
          <span className="action-label">{action.label}</span>
        </button>
      ))}
    </div>
  )
}

export default ActionButtons
