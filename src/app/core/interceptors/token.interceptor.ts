import { AuthUserService } from '../../shared/services/auth-user.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authUserService: AuthUserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authUserService.user$.pipe(switchMap(user => {
      if(!user) {
        return next.handle(req)
      }
      const tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + user.token
        }
      })

      return next.handle(tokenizedRequest)
    }))
  }
}
