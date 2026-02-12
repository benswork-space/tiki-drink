export const questions = [
  // === THE SOUL READING (personality) ===
  {
    id: 1,
    category: 'soul',
    categoryLabel: 'The Soul Reading',
    text: "It's Saturday night. The universe has cleared your schedule. What are you doing?",
    emoji: '\u{1F30C}',
    answers: [
      {
        text: 'Hosting an elaborate dinner party for my closest friends',
        scores: { simpleVsComplex: 3, seriousVsLaidBack: -1, classicVsAvantGarde: -1, sweetVsBoozy: -1 },
      },
      {
        text: 'Dancing barefoot at an outdoor concert I stumbled into',
        scores: { seriousVsLaidBack: 3, classicVsAvantGarde: 2, tropicalVsSpiced: -1, sweetVsBoozy: -1 },
      },
      {
        text: 'Curled up with a rare book and a perfectly made nightcap',
        scores: { seriousVsLaidBack: -3, simpleVsComplex: 1, sweetVsBoozy: 2, classicVsAvantGarde: -2 },
      },
      {
        text: "On a last-minute road trip \u2014 I'll sleep when I'm dead",
        scores: { seriousVsLaidBack: 2, classicVsAvantGarde: 3, sweetVsBoozy: 1, tropicalVsSpiced: 1 },
      },
    ],
  },
  {
    id: 2,
    category: 'soul',
    categoryLabel: 'The Soul Reading',
    text: 'Your friends would summon you from across the ocean for...',
    emoji: '\u{1F3BA}',
    answers: [
      {
        text: 'The vibes \u2014 no party starts until I arrive',
        scores: { seriousVsLaidBack: 3, sweetVsBoozy: -2, simpleVsComplex: -1 },
      },
      {
        text: 'The wisdom \u2014 I give the best advice over drinks',
        scores: { seriousVsLaidBack: -3, simpleVsComplex: 2, sweetVsBoozy: 2 },
      },
      {
        text: 'The chaos \u2014 things just happen when I\'m around',
        scores: { classicVsAvantGarde: 3, seriousVsLaidBack: 2, tropicalVsSpiced: 2 },
      },
      {
        text: 'The heart \u2014 I remember everyone\'s birthday and favorite drink',
        scores: { classicVsAvantGarde: -2, sweetVsBoozy: -2, simpleVsComplex: -1, seriousVsLaidBack: 1 },
      },
    ],
  },

  // === FRUITS OF THE SPIRIT (taste) ===
  {
    id: 3,
    category: 'fruits',
    categoryLabel: 'Fruits of the Spirit',
    text: 'What is your spiritual fruit?',
    emoji: '\u{1F34D}',
    answers: [
      {
        text: 'Mango \u2014 rich, sweet, and golden like the sunset',
        scores: { sweetVsBoozy: -3, tropicalVsSpiced: -3, seriousVsLaidBack: 1 },
      },
      {
        text: 'Passionfruit \u2014 tangy, exotic, and a little mysterious',
        scores: { sweetVsBoozy: 0, classicVsAvantGarde: 3, tropicalVsSpiced: -1, simpleVsComplex: 2 },
      },
      {
        text: 'Pineapple \u2014 the ancient king of tropical fruits',
        scores: { sweetVsBoozy: -1, classicVsAvantGarde: -2, tropicalVsSpiced: -2 },
      },
      {
        text: 'Coconut \u2014 creamy, smooth, and deeply tropical',
        scores: { sweetVsBoozy: -3, seriousVsLaidBack: 3, simpleVsComplex: -3, tropicalVsSpiced: -3 },
      },
    ],
  },
  {
    id: 4,
    category: 'fruits',
    categoryLabel: 'Fruits of the Spirit',
    text: 'The tiki gods offer you a sacred sweetness level. You choose...',
    emoji: '\u{1F36F}',
    answers: [
      {
        text: 'Nectar of the gods \u2014 sweet as a tropical dream',
        scores: { sweetVsBoozy: -3, seriousVsLaidBack: 3, simpleVsComplex: -2, tropicalVsSpiced: -1 },
      },
      {
        text: 'The golden balance \u2014 sweet meets tart meets spirit',
        scores: { sweetVsBoozy: -1, seriousVsLaidBack: 0, classicVsAvantGarde: -1 },
      },
      {
        text: 'A whisper of sugar \u2014 just enough to round the edges',
        scores: { sweetVsBoozy: 2, seriousVsLaidBack: -2, classicVsAvantGarde: -1 },
      },
      {
        text: 'The spirit speaks for itself \u2014 raw and unadorned',
        scores: { sweetVsBoozy: 3, seriousVsLaidBack: -3, simpleVsComplex: -2 },
      },
    ],
  },

  // === THE SACRED ELIXIRS (rum & ingredients) ===
  {
    id: 5,
    category: 'elixirs',
    categoryLabel: 'The Sacred Elixirs',
    text: 'Which rum calls to you?',
    emoji: '\u{1F943}',
    answers: [
      {
        text: 'Light and silver \u2014 clean as Caribbean moonlight',
        scores: { sweetVsBoozy: 0, simpleVsComplex: -3, classicVsAvantGarde: 0, tropicalVsSpiced: -2 },
      },
      {
        text: 'Aged and dark \u2014 oak, caramel, and time itself',
        scores: { sweetVsBoozy: 3, simpleVsComplex: 2, classicVsAvantGarde: -3, tropicalVsSpiced: 1 },
      },
      {
        text: 'Overproof \u2014 151 reasons to live dangerously',
        scores: { sweetVsBoozy: 3, seriousVsLaidBack: 2, simpleVsComplex: 1, classicVsAvantGarde: -1 },
      },
      {
        text: 'Rhum agricole \u2014 funky, grassy, and unapologetically wild',
        scores: { sweetVsBoozy: 1, classicVsAvantGarde: 3, simpleVsComplex: 3, tropicalVsSpiced: 0 },
      },
    ],
  },
  {
    id: 6,
    category: 'elixirs',
    categoryLabel: 'The Sacred Elixirs',
    text: 'A cocktail with 6+ ingredients \u2014 your soul stirs with...',
    emoji: '\u{1F9EA}',
    answers: [
      {
        text: 'Pure joy \u2014 complexity is the spice of life!',
        scores: { simpleVsComplex: 3, classicVsAvantGarde: 1, seriousVsLaidBack: -2 },
      },
      {
        text: 'Intrigue \u2014 if the balance is right, I\'m in',
        scores: { simpleVsComplex: 2, seriousVsLaidBack: -1, classicVsAvantGarde: 0 },
      },
      {
        text: 'Mild suspicion \u2014 four ingredients is my sweet spot',
        scores: { simpleVsComplex: -2, seriousVsLaidBack: 0, classicVsAvantGarde: -1 },
      },
      {
        text: 'Spirit, citrus, sweetener \u2014 done. Perfection is simplicity.',
        scores: { simpleVsComplex: -3, seriousVsLaidBack: -1, classicVsAvantGarde: -3 },
      },
    ],
  },
  {
    id: 7,
    category: 'elixirs',
    categoryLabel: 'The Sacred Elixirs',
    text: 'Which hallowed ingredient intrigues you most?',
    emoji: '\u{2728}',
    answers: [
      {
        text: 'Orgeat \u2014 almond syrup kissed with rose water',
        scores: { classicVsAvantGarde: -3, sweetVsBoozy: -2, tropicalVsSpiced: 0, simpleVsComplex: 1 },
      },
      {
        text: 'Falernum \u2014 spiced syrup with clove and lime',
        scores: { tropicalVsSpiced: 3, classicVsAvantGarde: -1, simpleVsComplex: 2 },
      },
      {
        text: 'Allspice dram \u2014 warm, peppery, and mysterious',
        scores: { tropicalVsSpiced: 3, classicVsAvantGarde: 0, simpleVsComplex: 2 },
      },
      {
        text: 'Green Chartreuse \u2014 herbal, complex, slightly unhinged',
        scores: { classicVsAvantGarde: 3, simpleVsComplex: 3, sweetVsBoozy: 2, tropicalVsSpiced: 1 },
      },
    ],
  },
  {
    id: 8,
    category: 'elixirs',
    categoryLabel: 'The Sacred Elixirs',
    text: 'The volcano demands a sacrifice. How much spice can you handle?',
    emoji: '\u{1F30B}',
    answers: [
      {
        text: 'Bring the fire \u2014 chili, ginger, cinnamon, all of it',
        scores: { tropicalVsSpiced: 3, classicVsAvantGarde: 2, simpleVsComplex: 2 },
      },
      {
        text: 'A gentle warmth \u2014 allspice and cinnamon vibes',
        scores: { tropicalVsSpiced: 1, classicVsAvantGarde: -1, simpleVsComplex: 1 },
      },
      {
        text: 'I prefer herbal and floral mysteries',
        scores: { tropicalVsSpiced: 0, classicVsAvantGarde: 3, simpleVsComplex: 2 },
      },
      {
        text: 'Absolutely not \u2014 keep it smooth and fruity',
        scores: { tropicalVsSpiced: -3, sweetVsBoozy: -3, seriousVsLaidBack: 2 },
      },
    ],
  },

  // === TEMPLE OF THE TIKI (bar culture) ===
  {
    id: 9,
    category: 'temple',
    categoryLabel: 'Temple of the Tiki',
    text: "You push open a bamboo door. What's your ideal tiki bar?",
    emoji: '\u{1F3DD}\uFE0F',
    answers: [
      {
        text: 'Dimly lit with carved masks, pufferfish lamps, and decades of mystery',
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: -2, simpleVsComplex: 2 },
      },
      {
        text: 'Lively, colorful, great music \u2014 the whole place is vibing',
        scores: { seriousVsLaidBack: 3, classicVsAvantGarde: 1, sweetVsBoozy: -2 },
      },
      {
        text: 'A beachside shack where your toes are in the sand',
        scores: { seriousVsLaidBack: 3, simpleVsComplex: -3, tropicalVsSpiced: -3 },
      },
      {
        text: 'A hidden speakeasy with a craft cocktail menu and no sign out front',
        scores: { seriousVsLaidBack: -3, classicVsAvantGarde: 3, simpleVsComplex: 3, sweetVsBoozy: 2 },
      },
    ],
  },
  {
    id: 10,
    category: 'temple',
    categoryLabel: 'Temple of the Tiki',
    text: 'Which legendary tiki bar would you make a pilgrimage to?',
    emoji: '\u{1F5FF}',
    answers: [
      {
        text: "Smuggler's Cove, San Francisco \u2014 the gold standard of craft tiki",
        scores: { classicVsAvantGarde: 1, seriousVsLaidBack: -2, simpleVsComplex: 3, sweetVsBoozy: 1 },
      },
      {
        text: "Trader Vic's, worldwide \u2014 the OG that started it all",
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: 0, simpleVsComplex: 1, sweetVsBoozy: 0 },
      },
      {
        text: "The Mai-Kai, Fort Lauderdale \u2014 the last great tiki palace",
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: 1, simpleVsComplex: 2, tropicalVsSpiced: -1 },
      },
      {
        text: 'Tiki-Ti, Los Angeles \u2014 tiny, family-run, pure soul',
        scores: { seriousVsLaidBack: 2, classicVsAvantGarde: -1, simpleVsComplex: -1, sweetVsBoozy: -1 },
      },
    ],
  },
  {
    id: 11,
    category: 'temple',
    categoryLabel: 'Temple of the Tiki',
    text: "What's your take on a flaming garnish?",
    emoji: '\u{1F525}',
    answers: [
      {
        text: "Essential \u2014 if it's not on fire, is it even tiki?",
        scores: { simpleVsComplex: 3, seriousVsLaidBack: 3, classicVsAvantGarde: -1, sweetVsBoozy: 1 },
      },
      {
        text: 'Save it for special occasions \u2014 make it mean something',
        scores: { simpleVsComplex: 0, seriousVsLaidBack: 0, classicVsAvantGarde: -1 },
      },
      {
        text: 'Give me an elaborate fruit sculpture instead',
        scores: { simpleVsComplex: 2, sweetVsBoozy: -2, tropicalVsSpiced: -2 },
      },
      {
        text: 'A single perfect lime wheel is all you need',
        scores: { simpleVsComplex: -3, seriousVsLaidBack: -2, classicVsAvantGarde: -2 },
      },
    ],
  },
  {
    id: 12,
    category: 'temple',
    categoryLabel: 'Temple of the Tiki',
    text: 'The bartender leans in and asks if you want to try something "off menu." You say...',
    emoji: '\u{1F92B}',
    answers: [
      {
        text: '"Absolutely \u2014 surprise me!" (slides glass forward)',
        scores: { classicVsAvantGarde: 3, seriousVsLaidBack: 3, simpleVsComplex: 2 },
      },
      {
        text: '"Tell me more..." (raises one eyebrow)',
        scores: { classicVsAvantGarde: 1, seriousVsLaidBack: -1, simpleVsComplex: 1 },
      },
      {
        text: '"Only if it\'s a riff on a classic I love"',
        scores: { classicVsAvantGarde: -2, seriousVsLaidBack: 0, simpleVsComplex: 0 },
      },
      {
        text: '"No thanks \u2014 I know exactly what I want"',
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: -2, simpleVsComplex: -2 },
      },
    ],
  },
  {
    id: 13,
    category: 'temple',
    categoryLabel: 'Temple of the Tiki',
    text: 'How do you feel about tiki mugs?',
    emoji: '\u{1FAD6}',
    answers: [
      {
        text: "I have a collection and I'm always hunting for rare ones",
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: -2, simpleVsComplex: 3 },
      },
      {
        text: "Love them \u2014 they're half the fun of a tiki bar!",
        scores: { classicVsAvantGarde: -1, seriousVsLaidBack: 2, simpleVsComplex: 0 },
      },
      {
        text: 'Fun novelty, but I appreciate proper glassware',
        scores: { classicVsAvantGarde: 2, seriousVsLaidBack: -2, simpleVsComplex: -1 },
      },
      {
        text: "What's in the glass matters more than the glass itself",
        scores: { sweetVsBoozy: 2, seriousVsLaidBack: 0, simpleVsComplex: 0 },
      },
    ],
  },

  // === THE ISLAND WITHIN (personality & lifestyle) ===
  {
    id: 14,
    category: 'island',
    categoryLabel: 'The Island Within',
    text: "You're hosting a tropical-themed party. What's your approach?",
    emoji: '\u{1F389}',
    answers: [
      {
        text: 'One killer signature cocktail, served in a massive communal bowl',
        scores: { simpleVsComplex: -2, seriousVsLaidBack: 3, classicVsAvantGarde: -2 },
      },
      {
        text: 'Full tiki bar setup with multiple drinks, garnishes, and printed menus',
        scores: { simpleVsComplex: 3, seriousVsLaidBack: 0, classicVsAvantGarde: -1, sweetVsBoozy: 0 },
      },
      {
        text: 'Rum punch in a cooler and good vibes \u2014 keep it easy',
        scores: { simpleVsComplex: -3, seriousVsLaidBack: 3, sweetVsBoozy: -2 },
      },
      {
        text: 'An experimental cocktail lab \u2014 guests are my guinea pigs',
        scores: { simpleVsComplex: 3, classicVsAvantGarde: 3, seriousVsLaidBack: 1 },
      },
    ],
  },
  {
    id: 15,
    category: 'island',
    categoryLabel: 'The Island Within',
    text: 'Pick a soundtrack for your tiki evening.',
    emoji: '\u{1F3B6}',
    answers: [
      {
        text: 'Classic slack-key Hawaiian guitar and steel drums',
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: 1, tropicalVsSpiced: -2 },
      },
      {
        text: 'Reggae and island vibes \u2014 Bob Marley to Burning Spear',
        scores: { seriousVsLaidBack: 3, classicVsAvantGarde: 0, tropicalVsSpiced: -1 },
      },
      {
        text: 'Exotica \u2014 Martin Denny, Les Baxter, Arthur Lyman',
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: -2, simpleVsComplex: 2, tropicalVsSpiced: 0 },
      },
      {
        text: 'Modern tropical house, lo-fi beach beats, or yacht rock',
        scores: { classicVsAvantGarde: 3, seriousVsLaidBack: 3, tropicalVsSpiced: 0 },
      },
    ],
  },
  {
    id: 16,
    category: 'island',
    categoryLabel: 'The Island Within',
    text: 'How do you spend a perfect beach day?',
    emoji: '\u{1F3D6}\uFE0F',
    answers: [
      {
        text: 'Reading a good book under a palm tree, drink in hand',
        scores: { seriousVsLaidBack: 1, simpleVsComplex: -2, sweetVsBoozy: -1, tropicalVsSpiced: -2 },
      },
      {
        text: 'Surfing, snorkeling, paddleboarding \u2014 constant motion!',
        scores: { seriousVsLaidBack: 3, sweetVsBoozy: 1, simpleVsComplex: -1, tropicalVsSpiced: -1 },
      },
      {
        text: 'Full spread: speakers, cooler, volleyball, the works',
        scores: { seriousVsLaidBack: 3, simpleVsComplex: 2, sweetVsBoozy: -2 },
      },
      {
        text: 'Exploring the coastline, finding hidden coves no one knows about',
        scores: { seriousVsLaidBack: -2, classicVsAvantGarde: 2, simpleVsComplex: 1, tropicalVsSpiced: 0 },
      },
    ],
  },

  // === THE VOYAGE (travel & destiny) ===
  {
    id: 17,
    category: 'voyage',
    categoryLabel: 'The Voyage',
    text: 'Dream tropical destination?',
    emoji: '\u{1F30A}',
    answers: [
      {
        text: 'Hawaii \u2014 the spiritual homeland of tiki',
        scores: { classicVsAvantGarde: -3, tropicalVsSpiced: -3, seriousVsLaidBack: 1 },
      },
      {
        text: 'The Caribbean \u2014 rum, beaches, and reggae',
        scores: { tropicalVsSpiced: 1, seriousVsLaidBack: 3, sweetVsBoozy: 1 },
      },
      {
        text: 'Southeast Asia \u2014 street food, temples, and wild adventure',
        scores: { classicVsAvantGarde: 3, tropicalVsSpiced: 3, simpleVsComplex: 2, seriousVsLaidBack: 0 },
      },
      {
        text: 'The South Pacific \u2014 remote, untouched, and full of mystery',
        scores: { classicVsAvantGarde: 1, tropicalVsSpiced: -1, seriousVsLaidBack: -2, simpleVsComplex: 2 },
      },
    ],
  },
  {
    id: 18,
    category: 'voyage',
    categoryLabel: 'The Voyage',
    text: 'What draws you to an island?',
    emoji: '\u{1F3DD}\uFE0F',
    answers: [
      {
        text: 'Pristine beaches and crystal-clear water',
        scores: { seriousVsLaidBack: 3, simpleVsComplex: -3, tropicalVsSpiced: -3 },
      },
      {
        text: 'The food scene \u2014 fresh seafood, local markets, street eats',
        scores: { simpleVsComplex: 3, seriousVsLaidBack: 0, tropicalVsSpiced: 2 },
      },
      {
        text: 'History and culture \u2014 the stories behind every place',
        scores: { seriousVsLaidBack: -3, classicVsAvantGarde: -2, simpleVsComplex: 2 },
      },
      {
        text: 'Beach bars, live music, and dancing until sunrise',
        scores: { seriousVsLaidBack: 3, sweetVsBoozy: -2, classicVsAvantGarde: 2 },
      },
    ],
  },
  {
    id: 19,
    category: 'voyage',
    categoryLabel: 'The Voyage',
    text: 'You discover a hidden waterfall on a hike. You...',
    emoji: '\u{1F4A7}',
    answers: [
      {
        text: 'Take a stunning photo and keep exploring deeper',
        scores: { seriousVsLaidBack: 0, simpleVsComplex: 1, classicVsAvantGarde: 2 },
      },
      {
        text: 'Jump in immediately and swim for hours',
        scores: { seriousVsLaidBack: 3, simpleVsComplex: -3, sweetVsBoozy: -2 },
      },
      {
        text: "Research its geological history when you're back at the hotel",
        scores: { seriousVsLaidBack: -3, simpleVsComplex: 3, classicVsAvantGarde: 0 },
      },
      {
        text: 'Build a rope swing, obviously',
        scores: { seriousVsLaidBack: 3, classicVsAvantGarde: 3, simpleVsComplex: 1, sweetVsBoozy: 1 },
      },
    ],
  },
  {
    id: 20,
    category: 'voyage',
    categoryLabel: 'The Voyage',
    text: 'Ideal vessel for island hopping?',
    emoji: '\u{26F5}',
    answers: [
      {
        text: 'A weathered wooden sailboat \u2014 timeless and full of stories',
        scores: { classicVsAvantGarde: -3, seriousVsLaidBack: -2, simpleVsComplex: 0 },
      },
      {
        text: 'A speedboat \u2014 get there fast, see everything',
        scores: { seriousVsLaidBack: 3, classicVsAvantGarde: 2, sweetVsBoozy: 1 },
      },
      {
        text: 'An outrigger canoe \u2014 authentic and connected to the sea',
        scores: { classicVsAvantGarde: -2, simpleVsComplex: -2, tropicalVsSpiced: -2, seriousVsLaidBack: 0 },
      },
      {
        text: 'A luxury catamaran \u2014 champagne on deck, obviously',
        scores: { sweetVsBoozy: -3, seriousVsLaidBack: 2, simpleVsComplex: 1, classicVsAvantGarde: 3 },
      },
    ],
  },
];
