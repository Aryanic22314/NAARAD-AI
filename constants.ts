import { CompassData, Quest, ValueProp } from './types';

export const DEMO_COMPASS_DATA: CompassData[] = [
  { subject: 'History', A: 120, fullMark: 150 },
  { subject: 'Music', A: 98, fullMark: 150 },
  { subject: 'Arch.', A: 86, fullMark: 150 },
  { subject: 'Nature', A: 40, fullMark: 150 },
  { subject: 'Food', A: 110, fullMark: 150 },
  { subject: 'Ruins', A: 130, fullMark: 150 },
];

export const DEMO_QUESTS: Quest[] = [
  {
    id: 'q1',
    title: 'Echoes of Ancient India',
    location: 'Hampi, Karnataka',
    description: 'A journey through history, music & cuisine. Decode the singing pillars of Vittala Temple.',
    imageUrl: 'https://picsum.photos/400/300?grayscale',
    difficulty: 'Moderate',
    duration: '2h 30m',
    xp: 2500,
    tags: ['AR', 'Music']
  },
  {
    id: 'q2',
    title: 'Scholar of Nalanda',
    location: 'Bihar',
    description: 'Walk the ruins of the world\'s first residential university. Collect lost scrolls in AR.',
    imageUrl: 'https://picsum.photos/401/300?grayscale',
    difficulty: 'Hard',
    duration: '3h',
    xp: 5000,
    tags: ['History', 'Puzzle']
  },
  {
    id: 'q3',
    title: 'Mughal Melodies',
    location: 'Delhi',
    description: 'Follow the acoustic trail of Tansen through the Red Fort. Unlock exclusive ragas.',
    imageUrl: 'https://picsum.photos/402/300?grayscale',
    difficulty: 'Easy',
    duration: '1h 45m',
    xp: 1200,
    tags: ['Audio', 'Walk']
  },
  {
    id: 'q4',
    title: 'Spice Route Secrets',
    location: 'Kochi, Kerala',
    description: 'Trade winds and black gold. Navigate the ancient port with a holographic map.',
    imageUrl: 'https://picsum.photos/403/300?grayscale',
    difficulty: 'Easy',
    duration: '1h',
    xp: 800,
    tags: ['Food', 'Trade']
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 1,
    differentiator: "Instant Quest Trailers",
    headline: "Experience immersive quest trailers that load instantly with global edge delivery.",
    icon: "⚡"
  },
  {
    id: 2,
    differentiator: "Offline AR Engine",
    headline: "Explore confidently with auto-loaded AR stories that work even in zero-signal zones.",
    icon: "📡"
  },
  {
    id: 3,
    differentiator: "Multiplayer Presence",
    headline: "See friends move with you in real time using our GraphQL sync engine.",
    icon: "🕸️"
  },
  {
    id: 4,
    differentiator: "4K Memory Creator",
    headline: "Create stunning 4K travel films processed in the cloud without draining your phone.",
    icon: "🎬"
  },
  {
    id: 5,
    differentiator: "Glacier Capsule Storage",
    headline: "Preserve every photo safely in capsule storage; your memories will never disappear.",
    icon: "❄️"
  },
  {
    id: 6,
    differentiator: "AI for Bharat Storytelling",
    headline: "Unlock multilingual stories crafted by Indic AI models for clarity and emotional depth.",
    icon: "🕉️"
  },
  {
    id: 7,
    differentiator: "Virtual Museum NFTs",
    headline: "Build your personal cultural museum with rare NFT collectibles from your journeys.",
    icon: "🏆"
  },
  {
    id: 8,
    differentiator: "Hyperlocal Intelligence",
    headline: "Discover hidden food spots and artisans with real-time POI intelligence.",
    icon: "📍"
  }
];