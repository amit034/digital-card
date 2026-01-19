import { useState } from 'react'
import './AccordionSection.css'

function AccordionSection({ contact }) {
  const [expandedId, setExpandedId] = useState(null)
  const labels = contact.accordionTitles || {}

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const panels = [
    {
      id: 'contact-info',
      heading: labels.contact || 'פרטי התקשרות ושעות פעילות',
      iconClass: 'fas fa-phone-alt',
      body: (
        <div className="dc-panel__contact">
          <p className="dc-panel__name"><strong>{contact.name}</strong> | פנסיוני ופיננסי</p>
          <dl className="dc-panel__details">
            <div className="dc-panel__row">
              <dt>נייד:</dt>
              <dd><a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a></dd>
            </div>
            <div className="dc-panel__row">
              <dt>משרד:</dt>
              <dd><a href={`tel:${contact.office.replace(/-/g, '')}`}>{contact.office}</a></dd>
            </div>
            <div className="dc-panel__row">
              <dt>אימייל:</dt>
              <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
            </div>
          </dl>
          <div className="dc-panel__hours">
            <span className="dc-panel__clock" aria-hidden="true"><i className="fas fa-clock"></i></span>
            <div>
              <strong>שעות פעילות</strong>
              <p>{contact.workingHours}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expertise',
      heading: labels.expertise || 'ההתמחות שלי',
      iconClass: 'fas fa-briefcase',
      body: (
        <ul className="dc-panel__skills" role="list">
          {contact.skills.map((skill, index) => (
            <li key={index} className="dc-panel__skill">
              <span className="dc-panel__bullet" aria-hidden="true"></span>
              {skill}
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'questions',
      heading: labels.questions || 'תשאלו את עצמכם...',
      iconClass: 'fas fa-lightbulb',
      body: (
        <ul className="dc-panel__questions" role="list">
          {contact.questions.map((question, index) => (
            <li key={index} className="dc-panel__question">
              <span className="dc-panel__qmark" aria-hidden="true"><i className="fas fa-question-circle"></i></span>
              {question}
            </li>
          ))}
        </ul>
      )
    }
  ]

  return (
    <section className="dc-panels" aria-label="Additional information">
      {panels.map((panel) => {
        const isOpen = expandedId === panel.id
        return (
          <article 
            key={panel.id} 
            className={`dc-panels__item ${isOpen ? 'dc-panels__item--expanded' : ''}`}
          >
            <button 
              type="button"
              className="dc-panels__toggle"
              onClick={() => handleToggle(panel.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${panel.id}`}
              id={`toggle-${panel.id}`}
            >
              <span className="dc-panels__icon" aria-hidden="true">
                <i className={panel.iconClass}></i>
              </span>
              <span className="dc-panels__heading">{panel.heading}</span>
              <span className="dc-panels__chevron" aria-hidden="true">
                <i className="fas fa-chevron-left"></i>
              </span>
            </button>
            <div 
              id={`panel-${panel.id}`}
              role="region"
              aria-labelledby={`toggle-${panel.id}`}
              className="dc-panels__content"
              style={{ maxHeight: isOpen ? '500px' : '0' }}
              hidden={!isOpen}
            >
              <div className="dc-panels__body">
                {panel.body}
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default AccordionSection
