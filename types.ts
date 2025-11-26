export interface CompassData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Quest {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  duration: string;
  xp: number;
  tags: string[];
}

export interface UserProfile {
  name: string;
  level: number;
  compass: CompassData[];
}

export interface ValueProp {
  id: number;
  differentiator: string;
  headline: string;
  icon: string;
}