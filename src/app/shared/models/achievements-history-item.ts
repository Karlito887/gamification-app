import { Achievement } from './achievement';
import { User } from './user';

export interface AchievementsHistoryItem {
  user: User;
  achievement: Achievement;
}
