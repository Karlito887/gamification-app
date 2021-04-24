import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../shared/services/sidenav.service';
import { AuthUserService } from '../../shared/services/auth-user.service';

import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isSidenavOpen: boolean = false;
  user: User;
  user$: Observable<User>;

  constructor(public authUserService: AuthUserService,
    public sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.user$ = this.authUserService.user$;
  }
}
