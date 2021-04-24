import { AuthUserService } from './../../shared/services/auth-user.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  isRefreshing: boolean = false;
  refreshToken$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authUserService: AuthUserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      req = this.addToken(req, token);
    }

    return next.handle(req).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        return this.handle401Error(req, next);
      } else {
        return throwError(err);
      }
    }));
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshToken$.next(null);

      return this.authUserService.refreshToken().pipe(
        switchMap(user => {
          this.isRefreshing = false;
          this.refreshToken$.next(user.token);

          return next.handle(this.addToken(req, user.token));
        }));
    } else {
      return this.refreshToken$.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(req, token));
        }));
    }
  }
}
