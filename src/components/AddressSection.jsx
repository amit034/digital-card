import './AddressSection.css'

function AddressSection({ address, wazeLink, title = 'כתובתנו', buttonLabel = 'נווט עם Waze' }) {
  return (
    <aside className="dc-location">
      <div className="dc-location__card">
        <span className="dc-location__marker" aria-hidden="true">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <address className="dc-location__info">
          <h3 className="dc-location__heading">{title}</h3>
          <p className="dc-location__street">{address.street}, {address.city}</p>
          <p className="dc-location__extra">{address.details}</p>
          <a 
            href={wazeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dc-location__navigate"
          >
            <i className="fab fa-waze" aria-hidden="true"></i>
            <span>{buttonLabel}</span>
            <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
        </address>
      </div>
    </aside>
  )
}

export default AddressSection
