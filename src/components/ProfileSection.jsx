import { getAssetUrl } from '../utils/assets'
import './ProfileSection.css'

function ProfileSection({ profileImage }) {
  return (
    <figure className="dc-avatar" role="img" aria-label="Profile photo">
      <div className="dc-avatar__frame">
        <span className="dc-avatar__glow" aria-hidden="true"></span>
        <span className="dc-avatar__orbit dc-avatar__orbit--primary" aria-hidden="true"></span>
        <span className="dc-avatar__orbit dc-avatar__orbit--secondary" aria-hidden="true"></span>
        <div className="dc-avatar__photo">
          <img src={getAssetUrl(profileImage)} alt="Profile" />
        </div>
        <span className="dc-avatar__verified" aria-label="Verified">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </figure>
  )
}

export default ProfileSection
