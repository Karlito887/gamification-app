import { User } from './../models/user';
import { Injectable } from '@angular/core';

import { Achievement } from './../models/achievement';

import { USERS } from 'src/assets/data/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = USERS;

  getUsers(): User[] {
    return this.users;
  }

  getAchievements(): {user: User, achievement: Achievement}[] {
    const result: {user: User, achievement: Achievement}[] = [];
    this.users.forEach(item => {
      item.achievements.forEach(el => {
        el.count = el.count || 1;

        for (let i = 0; i < el.count; i++) {
          result.push({
            user: item,
            achievement: el
          });
        }
      });
    });

    return result;
  }
}
