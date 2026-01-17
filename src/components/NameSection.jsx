import './NameSection.css'

function NameSection({ name, title }) {
  return (
    <hgroup className="dc-identity">
      <h1 className="dc-identity__name">{name}</h1>
      <p className="dc-identity__role">{title}</p>
      <div className="dc-identity__separator" aria-hidden="true">
        <span className="dc-identity__line"></span>
        <span className="dc-identity__symbol"></span>
        <span className="dc-identity__line"></span>
      </div>
    </hgroup>
  )
}

export default NameSection
