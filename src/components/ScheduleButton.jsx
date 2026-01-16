import './ScheduleButton.css'

function ScheduleButton({ onClick, label = 'תיאום פגישה' }) {
  return (
    <button className="schedule-btn" onClick={onClick}>
      <span className="btn-glow"></span>
      <span className="btn-content">
        <i className="fas fa-calendar-check"></i>
        <span>{label}</span>
      </span>
    </button>
  )
}

export default ScheduleButton
