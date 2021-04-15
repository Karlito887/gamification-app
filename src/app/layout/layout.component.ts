import { NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { SidenavService } from '../services/sidenav.service';
import { AuthUserService } from '../services/auth-user.service';

import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isSignIn: boolean;
  isSidenavOpen: boolean = false;
  user: User;
  routeEvent$: Subscription;

  constructor(public authUserService: AuthUserService,
    public sidenavService: SidenavService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
    this.checkRoute();
  }

  ngOnDestroy(): void {
    this.routeEvent$.unsubscribe();
  }

  checkRoute(): void {
    this.routeEvent$ = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isSignIn = event.url !== '/';
      }
    });
  }
}
