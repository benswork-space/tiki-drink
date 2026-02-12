import { useState, useEffect } from 'react';

export default function AxisSlider({ leftLabel, rightLabel, leftEmoji, rightEmoji, value, color, delay }) {
  const [animate, setAnimate] = useState(false);
  const percentage = ((value + 10) / 20) * 100;

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay + 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="axis-slider">
      <div className="axis-slider__labels">
        <span className="axis-slider__label">
          <span className="axis-slider__label-emoji">{leftEmoji}</span>
          {leftLabel}
        </span>
        <span className="axis-slider__label">
          {rightLabel}
          <span className="axis-slider__label-emoji">{rightEmoji}</span>
        </span>
      </div>
      <div className="axis-slider__track">
        <div
          className="axis-slider__gradient"
          style={{
            background: `linear-gradient(90deg, ${color}44 0%, transparent 50%, ${color}44 100%)`,
          }}
        />
        <div className="axis-slider__center" />
        <div
          className={`axis-slider__indicator ${animate ? 'animated' : ''}`}
          style={{
            '--target-position': `${percentage}%`,
            backgroundColor: color,
            animationDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
