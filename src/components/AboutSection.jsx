import './AboutSection.css'

function AboutSection({ about, title = 'קצת עלי' }) {
  return (
    <article className="dc-bio">
      <header className="dc-bio__header">
        <span className="dc-bio__icon" aria-hidden="true">
          <i className="fas fa-user"></i>
        </span>
        <h2 className="dc-bio__title">{title}</h2>
      </header>
      <div className="dc-bio__body">
        {about.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </article>
  )
}

export default AboutSection
