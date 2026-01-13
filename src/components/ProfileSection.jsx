import './ProfileSection.css'

function ProfileSection({ profileImage }) {
  return (
    <div className="profile-section">
      <div className="profile-image-container">
        <div className="profile-glow"></div>
        <div className="profile-ring profile-ring-1"></div>
        <div className="profile-ring profile-ring-2"></div>
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-badge">
          <i className="fas fa-check"></i>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
