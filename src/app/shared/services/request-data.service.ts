import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { Achievement } from '../models/achievement';
import { Request } from './../models/request';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAchievements(achievementCount?: number): Observable<Achievement[]> {
    const pageSize = achievementCount ? `PageSize=${achievementCount}` : '';

    return this.httpClient.get<Request<Achievement>>(`${this.apiUrl}users/current-user/achievements?${pageSize}`)
      .pipe(map(res => res.data));
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<Request<User>>(`${this.apiUrl}users/with-short-info?PageSize=10`)
      .pipe(map(res => res.data));
  }

  getThankUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}thanks`);
  }

  getUserAchievement(userId: string): Observable<Achievement[]> {
    return this.httpClient.get<Request<Achievement>>(`${this.apiUrl}users/${userId}/achievements`)
      .pipe(map(res => res.data));
  }

  getUserAchievementHistory(): Observable<Achievement[]> {
    return this.httpClient.get<Request<Achievement>>(`${this.apiUrl}users/with-full-info`)
      .pipe(map(res => res.data));
  }
}
