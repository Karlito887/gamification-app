import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Achievement } from '../models/achievement';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  // user: User = {
  //   firstName: 'Nazarii',
  //   lastName: 'Karlyk',
  //   image: '../../assets/CJ.jpg',
  //   badges: 5,
  //   xp: 80,
  //   color: 'green',
  //   achievements: [
  //     {
  //       xpCount: 15,
  //       title: 'Exoft turbo power',
  //       image: '../../assets/achievement.jpg',
  //       date: '0 mins ago',
  //       count: 2
  //     },
  //     {
  //       xpCount: 20,
  //       title: 'Exoft skylark power',
  //       image: '../../assets/achievement.jpg',
  //       date: '0 mins ago',
  //       count: 1
  //     },
  //     {
  //       xpCount: 30,
  //       title: 'Exoft corporate power',
  //       image: '../../assets/achievement.jpg',
  //       date: '0 mins ago',
  //       count: 1
  //     },
  //   ]
  // };
  user$: BehaviorSubject<any> = new BehaviorSubject(null as unknown as User)
  private apiUrl = 'https://nazariy-karlyk.herokuapp.com/api/';

  constructor(private httpClient: HttpClient) {}

  authenticate(loginData: any) {
    return this.httpClient.post(`${this.apiUrl}authenticate`, loginData)
    .pipe(
      tap(user => this.user$.next(user))
    )
  }

  getUsers() {
    return this.httpClient.get('https://nazariy-karlyk.herokuapp.com/api/users/current-user/achievements?CurrentPage=1&PageSize=111')
  }

  // getUser(): User {
  //   return this.user;
  // }

  // getAchievements(): Achievement[] {
  //   const result: Achievement[] = [];
  //   this.user.achievements.forEach(el => {
  //     el.count = el.count || 1;

  //     for (let i = 0; i < el.count; i++) {
  //       result.push(el);
  //     }
  //   });

  //   return result;
  // }
}
