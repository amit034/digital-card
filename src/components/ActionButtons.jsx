import './ActionButtons.css'

function ActionButtons({ contact, onScheduleClick }) {
  const labels = contact.buttons || {}
  
  const quickActions = [
    {
      id: 'call',
      icon: 'fas fa-phone',
      text: labels.call || 'שיחה',
      action: () => window.location.href = `tel:${contact.phone.replace(/-/g, '')}`,
      order: 1
    },
    {
      id: 'whatsapp',
      icon: 'fab fa-whatsapp',
      text: labels.whatsapp || 'וואטסאפ',
      action: () => window.open(`https://wa.me/${contact.whatsapp}`, '_blank'),
      order: 2
    },
    // {
    //   id: 'meeting',
    //   icon: 'fas fa-calendar-check',
    //   text: labels.schedule || 'פגישה',
    //   action: onScheduleClick,
    //   order: 3
    // },
    {
      id: 'email',
      icon: 'fas fa-envelope',
      text: labels.email || 'מייל',
      action: () => window.location.href = `mailto:${contact.email}`,
      order: 4
    },
    {
      id: 'website',
      icon: 'fas fa-globe',
      text: labels.website || 'אתר',
      action: () => window.open(contact.website, '_blank'),
      order: 5
    }
  ]

  return (
    <nav className="dc-quicklinks" aria-label="Quick actions">
      <ul className="dc-quicklinks__grid" role="list">
        {quickActions.map((item) => (
          <li key={item.id} className="dc-quicklinks__item" style={{ '--item-order': item.order }}>
            <button
              type="button"
              className={`dc-quicklinks__trigger dc-quicklinks__trigger--${item.id}`}
              onClick={item.action}
              aria-label={item.text}
            >
              <span className="dc-quicklinks__icon" aria-hidden="true">
                <i className={item.icon}></i>
              </span>
              <span className="dc-quicklinks__text">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ActionButtons
