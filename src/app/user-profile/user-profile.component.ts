import { SidenavService } from '../services/sidenav.service';
import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isSidenavOpen: boolean = false;
  user!: User;

  constructor(private authUserService: AuthUserService,
    public sidenavService: SidenavService) {}

  get fullName(): string {
    return this.user.firstName + ' ' + this.user.lastName;
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }

}
