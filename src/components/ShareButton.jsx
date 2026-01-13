import './ShareButton.css'

function ShareButton({ onClick }) {
  return (
    <button className="share-btn" onClick={onClick}>
      <i className="fas fa-share-alt"></i>
      <span>שיתוף הכרטיס</span>
    </button>
  )
}

export default ShareButton
