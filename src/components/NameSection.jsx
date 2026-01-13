import './NameSection.css'

function NameSection({ name, title }) {
  return (
    <div className="name-section">
      <h1 className="person-name">{name}</h1>
      <h2 className="person-title">{title}</h2>
      <div className="name-decoration">
        <span className="deco-line"></span>
        <span className="deco-diamond"></span>
        <span className="deco-line"></span>
      </div>
    </div>
  )
}

export default NameSection
