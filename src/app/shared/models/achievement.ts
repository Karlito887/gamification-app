export interface Achievement {
  achievementId: string;
  addedTime: string;
  description: string;
  iconId: string | null;
  id: string;
  name: string;
  xp: number;
  count?: number;
}

