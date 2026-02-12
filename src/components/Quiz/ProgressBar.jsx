export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__label">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
