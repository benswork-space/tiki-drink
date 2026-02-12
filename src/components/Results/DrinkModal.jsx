import { useEffect } from 'react';
import { CocktailIllustration } from './DrinkCard';

export default function DrinkModal({ drink, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="drink-modal-overlay" onClick={onClose}>
      <div className="drink-modal" onClick={(e) => e.stopPropagation()}>
        <button className="drink-modal__close" onClick={onClose}>
          {'\u2715'}
        </button>

        <div className="drink-modal__illustration">
          <CocktailIllustration drink={drink} />
        </div>

        <div className="drink-modal__body">
          <div className="drink-modal__era">{drink.era}</div>
          <h2 className="drink-modal__name">{drink.name}</h2>
          <p className="drink-modal__tagline">{drink.tagline}</p>
          <p className="drink-modal__description">{drink.description}</p>

          {drink.matchPct != null && (
            <div className="drink-modal__match">
              {drink.matchPct}% Match
            </div>
          )}

          <div className="drink-modal__recipe">
            <div className="drink-modal__recipe-title">{'\u{2728}'} Key Ingredients</div>
            <ul className="drink-modal__recipe-list">
              {drink.recipeHighlights.map((item, i) => (
                <li key={i} className="drink-modal__recipe-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
