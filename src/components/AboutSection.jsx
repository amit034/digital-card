import './AboutSection.css'

function AboutSection({ about }) {
  return (
    <div className="about-section">
      <h3 className="section-title">
        <span className="title-icon">
          <i className="fas fa-user"></i>
        </span>
        קצת עלי
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
