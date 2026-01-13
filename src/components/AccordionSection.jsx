import { useState } from 'react'
import './AccordionSection.css'

function AccordionSection({ contact }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const accordionItems = [
    {
      title: 'פרטי התקשרות ושעות פעילות',
      icon: 'fas fa-phone-alt',
      content: (
        <div className="contact-details">
          <p className="contact-name"><strong>{contact.name}</strong> | פנסיוני ופיננסי</p>
          <div className="contact-info">
            <p><strong>נייד:</strong> <a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a></p>
            <p><strong>משרד:</strong> <a href={`tel:${contact.office.replace(/-/g, '')}`}>{contact.office}</a></p>
            <p><strong>אימייל:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
          <div className="working-hours">
            <div className="hours-icon"><i className="fas fa-clock"></i></div>
            <div>
              <p><strong>שעות פעילות</strong></p>
              <p>{contact.workingHours}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'ההתמחות שלי',
      icon: 'fas fa-briefcase',
      content: (
        <ul className="skills-list">
          {contact.skills.map((skill, index) => (
            <li key={index}>
              <span className="skill-bullet"></span>
              {skill}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: 'תשאלו את עצמכם...',
      icon: 'fas fa-lightbulb',
      content: (
        <ul className="questions-list">
          {contact.questions.map((question, index) => (
            <li key={index}>
              <span className="question-icon"><i className="fas fa-question-circle"></i></span>
              {question}
            </li>
          ))}
        </ul>
      )
    }
  ]

  return (
    <div className="accordion-section">
      {accordionItems.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
        >
          <button 
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="accordion-icon">
              <i className={item.icon}></i>
            </span>
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-arrow">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
          <div 
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? '500px' : '0'
            }}
          >
            <div className="accordion-inner">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccordionSection
