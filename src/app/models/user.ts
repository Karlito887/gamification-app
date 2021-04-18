import { Achievement } from "./achievement";

export interface User {
  firstName: string;
  lastName: string;
  image: string;
  size?: string;
  xp: number;
  color?: string;
  achievements: Achievement[];
  badges?: number;
}
