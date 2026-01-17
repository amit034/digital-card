import './ShareButton.css'

function ShareButton({ onClick, label = 'שיתוף הכרטיס' }) {
  return (
    <div className="dc-share">
      <button 
        type="button" 
        className="dc-share__trigger" 
        onClick={onClick}
        aria-label={label}
      >
        <i className="fas fa-share-alt" aria-hidden="true"></i>
        <span className="dc-share__text">{label}</span>
      </button>
    </div>
  )
}

export default ShareButton
