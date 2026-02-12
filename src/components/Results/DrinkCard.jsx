import { useState } from 'react';

// ========================================
// Glass shape SVG renderers
// ========================================

function TikiMug({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Tiki mug face */}
      <path d="M60,50 L55,200 Q55,225 75,225 L125,225 Q145,225 140,200 L145,50 Q145,40 130,38 L70,38 Q55,40 60,50 Z"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2.5" />
      {/* Mug handle */}
      <path d="M145,80 Q175,80 175,120 Q175,160 145,160" fill="none" stroke={colors[2]} strokeWidth="4" />
      {/* Face carved lines - eyes */}
      <ellipse cx="82" cy="110" rx="8" ry="10" fill={colors[2]} opacity="0.6" />
      <ellipse cx="118" cy="110" rx="8" ry="10" fill={colors[2]} opacity="0.6" />
      {/* Eyebrows */}
      <path d="M72,95 Q82,85 92,95" fill="none" stroke={colors[2]} strokeWidth="2.5" opacity="0.5" />
      <path d="M108,95 Q118,85 128,95" fill="none" stroke={colors[2]} strokeWidth="2.5" opacity="0.5" />
      {/* Mouth */}
      <path d="M80,145 Q100,170 120,145" fill="none" stroke={colors[2]} strokeWidth="3" opacity="0.5" />
      {/* Liquid at top */}
      <ellipse cx="100" cy="50" rx="40" ry="8" fill={colors[0]} opacity="0.7">
        <animate attributeName="ry" values="8;6;8" dur="2s" repeatCount="indefinite" />
      </ellipse>
    </>
  );
}

function HurricaneGlass({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Hurricane glass - curvy shape */}
      <path d="M75,40 Q55,90 60,140 Q65,185 75,195 L80,215 L120,215 L125,195 Q135,185 140,140 Q145,90 125,40 Z"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2" opacity="0.85" />
      {/* Stem */}
      <rect x="92" y="215" width="16" height="15" rx="2" fill={colors[2]} opacity="0.6" />
      {/* Base */}
      <ellipse cx="100" cy="232" rx="28" ry="6" fill={colors[2]} opacity="0.5" />
      {/* Liquid sheen */}
      <path d="M80,50 Q65,95 68,135 Q72,170 80,185 L85,195" fill="none" stroke="white" strokeWidth="2" opacity="0.2" />
      {/* Umbrella */}
      <line x1="110" y1="20" x2="110" y2="80" stroke={colors[2]} strokeWidth="2" />
      <path d="M85,24 Q110,5 135,24" fill={colors[1]} stroke={colors[2]} strokeWidth="1.5" />
      {/* Fruit on rim */}
      <circle cx="78" cy="42" r="10" fill={colors[0]} stroke={colors[2]} strokeWidth="1.5" opacity="0.9" />
      <path d="M73,42 L83,42" stroke={colors[2]} strokeWidth="1" opacity="0.5" />
    </>
  );
}

function CoupeGlass({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.7" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Wide coupe bowl */}
      <path d="M45,70 Q50,130 100,140 Q150,130 155,70 Z"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2" opacity="0.85" />
      {/* Liquid surface */}
      <ellipse cx="100" cy="72" rx="53" ry="10" fill={colors[0]} opacity="0.5">
        <animate attributeName="ry" values="10;8;10" dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      {/* Stem */}
      <rect x="96" y="140" width="8" height="55" rx="3" fill={colors[2]} opacity="0.4" />
      {/* Base */}
      <ellipse cx="100" cy="198" rx="30" ry="7" fill={colors[2]} opacity="0.4" />
      {/* Cherry garnish */}
      <circle cx="100" cy="80" r="7" fill={colors[1]} opacity="0.8" />
      <line x1="100" y1="73" x2="100" y2="65" stroke={colors[2]} strokeWidth="1.5" />
    </>
  );
}

function CollinsGlass({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.7" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Tall Collins glass */}
      <rect x="70" y="40" width="60" height="180" rx="5"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2" opacity="0.8" />
      {/* Ice cubes */}
      <rect x="78" y="55" width="18" height="16" rx="3" fill="white" opacity="0.2" transform="rotate(-5 87 63)" />
      <rect x="100" y="65" width="18" height="16" rx="3" fill="white" opacity="0.15" transform="rotate(8 109 73)" />
      <rect x="82" y="85" width="18" height="16" rx="3" fill="white" opacity="0.18" transform="rotate(-3 91 93)" />
      {/* Straw */}
      <rect x="108" y="15" width="5" height="110" rx="2" fill={colors[2]} opacity="0.6" />
      {/* Lime wedge on rim */}
      <path d="M65,40 Q58,30 70,25 Q78,35 72,42" fill="#32CD32" stroke="#228B22" strokeWidth="1.5" />
      {/* Bubbles */}
      <circle cx="90" cy="170" r="2" fill="white" opacity="0.3">
        <animate attributeName="cy" from="170" to="100" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="190" r="1.5" fill="white" opacity="0.2">
        <animate attributeName="cy" from="190" to="120" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.2" to="0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </>
  );
}

function ScorpionBowl({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.85" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Large bowl shape */}
      <path d="M35,100 Q35,180 100,190 Q165,180 165,100 Q165,70 100,65 Q35,70 35,100 Z"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2.5" />
      {/* Bowl base */}
      <rect x="85" y="190" width="30" height="12" rx="4" fill={colors[2]} opacity="0.5" />
      <ellipse cx="100" cy="206" rx="35" ry="7" fill={colors[2]} opacity="0.4" />
      {/* Center flame */}
      <ellipse cx="100" cy="75" rx="6" ry="10" fill="#FF6600" opacity="0.8">
        <animate attributeName="ry" values="10;14;10" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="0.8s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="72" rx="3" ry="6" fill="#FFCC00" opacity="0.9">
        <animate attributeName="ry" values="6;9;6" dur="0.6s" repeatCount="indefinite" />
      </ellipse>
      {/* Multiple straws */}
      <rect x="60" y="40" width="4" height="70" rx="2" fill="#FF69B4" opacity="0.7" transform="rotate(-15 62 75)" />
      <rect x="130" y="40" width="4" height="70" rx="2" fill="#00CED1" opacity="0.7" transform="rotate(15 132 75)" />
      <rect x="78" y="35" width="4" height="65" rx="2" fill="#FFD700" opacity="0.7" transform="rotate(-5 80 67)" />
      <rect x="115" y="35" width="4" height="65" rx="2" fill="#90EE90" opacity="0.7" transform="rotate(8 117 67)" />
    </>
  );
}

function SnifterGlass({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.75" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Snifter/rocks glass - short and wide */}
      <path d="M55,65 Q50,80 52,160 Q52,190 75,195 L125,195 Q148,190 148,160 Q150,80 145,65 Z"
        fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2" opacity="0.8" />
      {/* Liquid line */}
      <path d="M58,95 Q100,90 142,95" fill="none" stroke={colors[0]} strokeWidth="2" opacity="0.5" />
      {/* Large ice sphere */}
      <circle cx="100" cy="130" r="28" fill="white" opacity="0.12" />
      <path d="M82,115 Q95,105 118,115" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
      {/* Citrus peel */}
      <path d="M135,65 Q155,50 150,40 Q145,35 140,45 Q138,55 140,65" fill={colors[0]} stroke={colors[2]} strokeWidth="1.5" opacity="0.8" />
    </>
  );
}

function TropicalMug({ colors, id }) {
  return (
    <>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors[1]} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Coconut/pineapple mug shape */}
      <ellipse cx="100" cy="140" rx="50" ry="60" fill={`url(#grad-${id})`} stroke={colors[2]} strokeWidth="2.5" />
      {/* Texture lines */}
      <path d="M60,120 Q80,115 100,120 Q120,125 140,120" fill="none" stroke={colors[2]} strokeWidth="1" opacity="0.3" />
      <path d="M58,140 Q80,135 100,140 Q120,145 142,140" fill="none" stroke={colors[2]} strokeWidth="1" opacity="0.3" />
      <path d="M60,160 Q80,155 100,160 Q120,165 140,160" fill="none" stroke={colors[2]} strokeWidth="1" opacity="0.3" />
      {/* Leaf garnish */}
      <path d="M90,80 Q70,50 85,35 Q95,45 100,80" fill="#228B22" stroke="#006400" strokeWidth="1" />
      <path d="M100,80 Q110,45 125,40 Q120,55 110,80" fill="#32CD32" stroke="#006400" strokeWidth="1" />
      {/* Umbrella */}
      <line x1="115" y1="50" x2="115" y2="100" stroke={colors[2]} strokeWidth="1.5" />
      <path d="M95,53 Q115,35 135,53" fill="#FF1493" stroke={colors[2]} strokeWidth="1" />
      {/* Straw */}
      <rect x="82" y="55" width="4" height="70" rx="2" fill="#FFD700" opacity="0.7" />
    </>
  );
}

// ========================================
// Drink-to-glass mapping and colors
// ========================================

const DRINK_CONFIG = {
  // Foundational tiki - mostly tiki mugs and strong presentations
  'mai-tai': { glass: 'snifter', colors: ['#E8932A', '#C46B0A', '#8B4513'] },
  'zombie': { glass: 'collins', colors: ['#8B0000', '#FF4500', '#2F4F4F'] },
  'navy-grog': { glass: 'tikiMug', colors: ['#DAA520', '#8B6914', '#5C4033'] },
  'jet-pilot': { glass: 'tikiMug', colors: ['#FF6347', '#CD853F', '#8B4513'] },
  'fog-cutter': { glass: 'collins', colors: ['#F5DEB3', '#DEB887', '#8B7355'] },
  'three-dots-and-a-dash': { glass: 'tikiMug', colors: ['#FFD700', '#DAA520', '#8B6914'] },
  'cobras-fang': { glass: 'collins', colors: ['#FF4500', '#FF6347', '#8B0000'] },
  'test-pilot': { glass: 'coupe', colors: ['#F4A460', '#CD853F', '#8B4513'] },
  'doctor-funk': { glass: 'collins', colors: ['#98FB98', '#66CDAA', '#2E8B57'] },
  'rum-barrel': { glass: 'tikiMug', colors: ['#D2691E', '#A0522D', '#8B4513'] },
  'dons-own-grog': { glass: 'tikiMug', colors: ['#DAA520', '#B8860B', '#6B4226'] },
  'missionarys-downfall': { glass: 'hurricane', colors: ['#90EE90', '#98FB98', '#228B22'] },
  // Classic era
  'scorpion-bowl': { glass: 'scorpionBowl', colors: ['#FF8C00', '#FF6347', '#CD853F'] },
  'singapore-sling': { glass: 'collins', colors: ['#FF69B4', '#FF1493', '#C71585'] },
  'suffering-bastard': { glass: 'collins', colors: ['#F5F5DC', '#DAA520', '#8B6914'] },
  'saturn': { glass: 'coupe', colors: ['#EE82EE', '#DDA0DD', '#9370DB'] },
  'planters-punch': { glass: 'collins', colors: ['#FF4500', '#FF6347', '#CD5C5C'] },
  'bahama-mama': { glass: 'hurricane', colors: ['#FF8C00', '#FFD700', '#FF4500'] },
  'hurricane': { glass: 'hurricane', colors: ['#FF4500', '#FF0000', '#DC143C'] },
  'blue-hawaii': { glass: 'hurricane', colors: ['#00BFFF', '#1E90FF', '#4169E1'] },
  'chi-chi': { glass: 'hurricane', colors: ['#FFFACD', '#FAFAD2', '#D4A857'] },
  'pina-colada': { glass: 'tropical', colors: ['#FFFAF0', '#FFFACD', '#C4A35A'] },
  // Modern classics
  'jungle-bird': { glass: 'snifter', colors: ['#DC143C', '#FF4500', '#228B22'] },
  'painkiller': { glass: 'tropical', colors: ['#FFDEAD', '#FFE4B5', '#A0522D'] },
  'rum-runner': { glass: 'hurricane', colors: ['#800080', '#9400D3', '#4B0082'] },
  'yellow-bird': { glass: 'coupe', colors: ['#FFD700', '#FFA500', '#FF8C00'] },
  'goombay-smash': { glass: 'tropical', colors: ['#FFDAB9', '#FFE4B5', '#CD853F'] },
  'dark-n-stormy': { glass: 'collins', colors: ['#2F1B14', '#8B4513', '#D2691E'] },
  'caipirinha': { glass: 'snifter', colors: ['#ADFF2F', '#7FFF00', '#32CD32'] },
  'daiquiri': { glass: 'coupe', colors: ['#FFFACD', '#FFF8DC', '#C4A35A'] },
  'el-diablo': { glass: 'collins', colors: ['#DC143C', '#FF0000', '#8B0000'] },
  'chartreuse-swizzle': { glass: 'collins', colors: ['#7FFF00', '#ADFF2F', '#32CD32'] },
  // Contemporary
  'puka-punch': { glass: 'tikiMug', colors: ['#FF8C00', '#FFA500', '#8B4513'] },
  'port-au-prince': { glass: 'snifter', colors: ['#4A3728', '#8B6914', '#A0522D'] },
  'sidewinders-fang': { glass: 'collins', colors: ['#F0E68C', '#DAA520', '#B8860B'] },
  'dead-reckoning': { glass: 'tikiMug', colors: ['#2F4F4F', '#696969', '#A0522D'] },
  'undead-gentleman': { glass: 'tikiMug', colors: ['#4A0000', '#8B0000', '#2F4F4F'] },
  'naked-ape': { glass: 'tropical', colors: ['#FFE4B5', '#FFDAB9', '#A0522D'] },
  'center-of-the-galaxy': { glass: 'coupe', colors: ['#4B0082', '#8A2BE2', '#9400D3'] },
  // Hidden gems
  'nui-nui': { glass: 'snifter', colors: ['#FF8C00', '#CD853F', '#A0522D'] },
  'tiki-bowl': { glass: 'scorpionBowl', colors: ['#FF6347', '#FF4500', '#CD853F'] },
  'mr-bali-hai': { glass: 'tikiMug', colors: ['#4A3728', '#8B4513', '#D2691E'] },
  'sharks-tooth': { glass: 'collins', colors: ['#FF4500', '#FF6347', '#DC143C'] },
  'aku-aku': { glass: 'tikiMug', colors: ['#FFDAB9', '#FFE4B5', '#8B6914'] },
  'pearl-diver': { glass: 'tikiMug', colors: ['#FFD700', '#F0E68C', '#8B6914'] },
  'port-light': { glass: 'coupe', colors: ['#FFC0CB', '#FFB6C1', '#FF69B4'] },
  'hinky-dinks-fizzy': { glass: 'collins', colors: ['#FFE4E1', '#FFC0CB', '#C71585'] },
  '151-swizzle': { glass: 'collins', colors: ['#FF4500', '#FF0000', '#DC143C'] },
  'pupule': { glass: 'tikiMug', colors: ['#FF8C00', '#FFA500', '#8B4513'] },
  'ancient-mariner': { glass: 'tikiMug', colors: ['#B8860B', '#DAA520', '#6B4226'] },
};

function CocktailIllustration({ drink }) {
  const config = DRINK_CONFIG[drink.id] || { glass: 'tikiMug', colors: ['#E8932A', '#C46B0A', '#8B4513'] };
  const { colors, glass } = config;

  const glassComponents = {
    tikiMug: TikiMug,
    hurricane: HurricaneGlass,
    coupe: CoupeGlass,
    collins: CollinsGlass,
    scorpionBowl: ScorpionBowl,
    snifter: SnifterGlass,
    tropical: TropicalMug,
  };

  const GlassComponent = glassComponents[glass] || TikiMug;

  return (
    <div className="drink-card__illustration">
      <svg viewBox="0 0 200 250" className="drink-card__svg">
        <GlassComponent colors={colors} id={drink.id} />
      </svg>
      <div className="drink-card__illustration-name">{drink.name}</div>
    </div>
  );
}

export default function DrinkCard({ drink }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = drink.image && !imgError;

  return (
    <div className="drink-card">
      <div className="drink-card__image-container">
        {hasImage ? (
          <img
            className="drink-card__image"
            src={`/images/drinks/${drink.image}`}
            alt={drink.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <CocktailIllustration drink={drink} />
        )}
        {drink.matchPct != null && (
          <div className="drink-card__match-badge">
            {drink.matchPct}% Match
          </div>
        )}
      </div>
      <div className="drink-card__body">
        <div className="drink-card__era">{drink.era}</div>
        <h2 className="drink-card__name">{drink.name}</h2>
        <p className="drink-card__tagline">{drink.tagline}</p>
        <p className="drink-card__description">{drink.description}</p>
        <div className="drink-card__recipe">
          <div className="drink-card__recipe-title">{'\u{2728}'} Key Ingredients</div>
          <ul className="drink-card__recipe-list">
            {drink.recipeHighlights.map((item, i) => (
              <li key={i} className="drink-card__recipe-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
