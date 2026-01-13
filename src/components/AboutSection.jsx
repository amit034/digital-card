import './AboutSection.css'

function AboutSection({ about, title = 'קצת עלי' }) {
  return (
    <div className="about-section">
      <h3 className="section-title">
        <span className="title-icon">
          <i className="fas fa-user"></i>
        </span>
        {title}
      </h3>
      <div className="about-content">
        {about.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
  )
}

export default AboutSection
