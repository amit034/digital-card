import './ShareButton.css'

function ShareButton({ onClick, label = 'שיתוף הכרטיס' }) {
  return (
    <button className="share-btn" onClick={onClick}>
      <i className="fas fa-share-alt"></i>
      <span>{label}</span>
    </button>
  )
}

export default ShareButton
