import { axisLabels } from '../../data/axisLabels';
import DrinkCard from './DrinkCard';
import AxisSlider from './AxisSlider';

export default function ResultsPage({ results, onRetake }) {
  const { topDrink, runnerUps, userScores } = results;

  const shareText = `I'm a ${topDrink.name}! \u{1F379} Take "Find Your Spiritual Tiki Drink" to discover yours!`;
  const shareUrl = window.location.href;

  const handleCopyResult = () => {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
      alert('Copied to clipboard! \u{1F379}');
    });
  };

  return (
    <div className="results-page">
      <div className="results-confetti">
        <span className="confetti-item decor-sway">{'\u{1F334}'}</span>
        <span className="confetti-item decor-flicker">{'\u{1F525}'}</span>
        <span className="confetti-item confetti-main">{'\u{1F5FF}'}</span>
        <span className="confetti-item decor-flicker">{'\u{1F525}'}</span>
        <span className="confetti-item decor-sway">{'\u{1F334}'}</span>
      </div>
      <div className="results-header">
        <div className="results-header__label">The spirits have spoken...</div>
        <h1 className="results-header__title">You Are The {topDrink.name}</h1>
      </div>

      <DrinkCard drink={topDrink} />

      <div className="personality-section">
        <h3 className="personality-section__title">{'\u{1F5FF}'} Your Tiki Spirit Profile {'\u{1F5FF}'}</h3>
        {axisLabels.map((axis, i) => (
          <AxisSlider
            key={axis.key}
            leftLabel={axis.left}
            rightLabel={axis.right}
            leftEmoji={axis.emoji.left}
            rightEmoji={axis.emoji.right}
            value={userScores[axis.key]}
            color={axis.color}
            delay={i * 150}
          />
        ))}
      </div>

      {runnerUps.length > 0 && (
        <div className="runner-ups">
          <h3 className="runner-ups__title">{'\u{2728}'} Your Spirit Also Channels... {'\u{2728}'}</h3>
          <div className="runner-ups__list">
            {runnerUps.map((drink) => (
              <div key={drink.id} className="runner-up-card">
                <div className="runner-up-card__name">{drink.name}</div>
                <div className="runner-up-card__tagline">{drink.tagline}</div>
                <div className="runner-up-card__match">{drink.matchPct}% Match</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="share-section">
        <h3 className="share-section__title">Spread the Aloha Spirit</h3>
        <div className="share-section__buttons">
          <button className="share-button" onClick={handleCopyResult}>
            {'\u{1F4CB}'} Copy Result
          </button>
          <a
            className="share-button"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            {'\u{1F426}'} Share on X
          </a>
        </div>
      </div>

      <div className="buy-coffee-section">
        <a
          className="buy-coffee-link"
          href="https://buymeacoffee.com/player_piano"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'\u2615'} Buy Me a Coffee
        </a>
      </div>

      <div className="retake-section">
        <button className="tiki-button tiki-button--secondary" onClick={onRetake}>
          {'\u{1F504}'} Retake the Quiz
        </button>
      </div>

      <div className="results-footer">
        <p>{'\u{1F334}'} Made with aloha by <a href="https://benswork.space" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>benswork.space</a> {'\u{1F334}'}</p>
      </div>
    </div>
  );
}
