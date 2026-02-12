export default function AudioPlayer({ isPlaying, onToggle }) {
  return (
    <div className="audio-player">
      <button
        className={`audio-player__button ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '\u{1F50A}' : '\u{1F507}'}
      </button>
    </div>
  );
}
