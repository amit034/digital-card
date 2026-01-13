import './AddressSection.css'

function AddressSection({ address, wazeLink, title = 'כתובתנו', buttonLabel = 'נווט עם Waze' }) {
  return (
    <div className="address-section">
      <div className="address-card">
        <div className="address-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="address-content">
          <h4>{title}</h4>
          <p>{address.street}, {address.city}</p>
          <p className="address-details">{address.details}</p>
          <a href={wazeLink} target="_blank" rel="noopener noreferrer" className="waze-link">
            <img src="https://www.waze.com/favicon.ico" alt="Waze" className="waze-icon" />
            <span>{buttonLabel}</span>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AddressSection
