import { CompassData, Quest, ValueProp, PlaceCategory, RouteCategory } from './types';

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
    headline: "Experience immersive quest trailers that load instantly with global edge delivery and feel the excitement from the first tap.",
    icon: "⚡"
  },
  {
    id: 2,
    differentiator: "Offline AR Engine",
    headline: "Explore confidently with auto-loaded AR stories that work offline and enjoy peace of mind even in zero-signal heritage zones.",
    icon: "📡"
  },
  {
    id: 3,
    differentiator: "Multiplayer Presence",
    headline: "See friends move with you in real time using our GraphQL sync engine and feel connected on every step of your journey.",
    icon: "🕸️"
  },
  {
    id: 4,
    differentiator: "4K Memory Creator",
    headline: "Create stunning 4K travel films processed in the cloud and enjoy pro-quality memories without draining your phone or patience.",
    icon: "🎬"
  },
  {
    id: 5,
    differentiator: "Glacier Capsule Storage",
    headline: "Preserve every photo safely in Glacier capsule storage and travel with the confidence that your memories will never disappear.",
    icon: "❄️"
  },
  {
    id: 6,
    differentiator: "AI for Bharat Storytelling",
    headline: "Unlock multilingual stories crafted by Indic AI models and experience heritage with clarity, authenticity, and emotional depth.",
    icon: "🕉️"
  },
  {
    id: 7,
    differentiator: "Virtual Museum NFTs",
    headline: "Build your personal cultural museum with rare NFT collectibles and enjoy the pride of seeing your journeys turn into achievements.",
    icon: "🏆"
  },
  {
    id: 8,
    differentiator: "Hyperlocal Intelligence",
    headline: "Discover the best local food, artisans, and hidden spots with real POI intelligence and feel in control of every choice you make.",
    icon: "📍"
  }
];

export const PLACE_CATEGORIES: PlaceCategory[] = [
  {
    id: 'mtn-pass',
    name: 'Mountain passes',
    iconPath: 'M13.2 2.2a2 2 0 0 1 2.8 0l6.8 6.8a2 2 0 0 1 0 2.8l-4.2 4.2a2 2 0 0 0 0 2.8l4.2 4.2a2 2 0 0 1 -2.8 2.8l-6.8 -6.8a2 2 0 0 1 0 -2.8l4.2 -4.2a2 2 0 0 0 0 -2.8l-4.2 -4.2z M4 22l16-16 M4 16l6-6'
  },
  {
    id: 'canyons',
    name: 'Canyons',
    iconPath: 'M4 4l2 16 M20 4l-2 16 M8 8l2 2l-2 2l2 2 M16 8l-2 2l2 2l-2 2'
  },
  {
    id: 'bike-parks',
    name: 'Bike Parks',
    iconPath: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14v12m-6-6h12m-8.4-4.2l8.4 8.4m0-8.4l-8.4 8.4'
  },
  {
    id: 'monuments',
    name: 'Natural Monuments',
    iconPath: 'M4 22h16 M8 22v-12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12 M10 4l2-2l2 2'
  },
  {
    id: 'castles',
    name: 'Castles',
    iconPath: 'M4 22V8l4-2v2h2V6l4-2l4 2v2h2v-2l4 2v14H4zm6-10h4v4h-4v-4z'
  },
  {
    id: 'huts',
    name: 'Huts',
    iconPath: 'M2 22h20L12 2L2 22z M12 14v8 M10 14h4'
  },
  {
    id: 'peaks',
    name: 'Mountain Peaks',
    iconPath: 'M12 2l-5 10l5 5l5-5z M2 22l6-12 M22 22l-6-12'
  },
  {
    id: 'waterfalls',
    name: 'Waterfalls',
    iconPath: 'M4 4h16 M6 4v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4 M10 4v14 M14 4v12'
  },
  {
    id: 'caves',
    name: 'Caves',
    iconPath: 'M2 22h20c0-10-4-18-10-18S2 12 2 22z M8 22c0-4 1-8 4-8s4 4 4 8'
  },
  {
    id: 'lakes',
    name: 'Lakes',
    iconPath: 'M2 12c2 0 3 2 5 2s3-2 5-2s3 2 5 2s3-2 5-2s3 2 5 2s3-2 5-2 M2 17c2 0 3 2 5 2s3-2 5-2s3 2 5 2s3-2 5-2'
  }
];

export const ROUTE_CATEGORIES: RouteCategory[] = [
  {
    id: 'rc1',
    name: 'Heritage Walks',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&h=400&fit=crop&q=80',
    count: 24
  },
  {
    id: 'rc2',
    name: 'Cycling Trails',
    imageUrl: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&h=400&fit=crop&q=80',
    count: 12
  },
  {
    id: 'rc3',
    name: 'Spiritual Paths',
    imageUrl: 'https://images.unsplash.com/photo-1621256334584-25e408d6c810?w=600&h=400&fit=crop&q=80',
    count: 18
  },
  {
    id: 'rc4',
    name: 'Jungle Safaris',
    imageUrl: 'https://images.unsplash.com/photo-1518599806-60195e26b17c?w=600&h=400&fit=crop&q=80',
    count: 7
  }
];