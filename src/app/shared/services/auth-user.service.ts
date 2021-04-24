import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { UserCredentials } from '../models/user-credentials';
import { User } from './../models/user';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null as unknown as User);

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  authenticate(loginData: UserCredentials): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}authenticate`, loginData)
      .pipe(
        tap(user => {
          this.user$.next(user);
          this.storeTokens(user.token, user.refreshToken);
        })
      );
  }

  refreshToken(): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}authenticate/refresh`, {
      'refreshToken': localStorage.getItem('refresh_token')
    })
      .pipe(
        switchMap(user => {
          this.user$.next(user);
          this.storeTokens(user.token, user.refreshToken);

          return of(user);
        })
      );
  }

  storeTokens(token: string, refreshToken: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }
}
