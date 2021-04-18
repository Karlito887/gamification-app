import { AuthUserService } from '../../shared/services/auth-user.service';
import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authUserService: AuthUserService,
    private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authUserService.user$.pipe(
      map(user => {
        return !!user ? true : this.router.createUrlTree(['/'])
      })
    )
  }
}
