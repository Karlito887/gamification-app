import { Component, Input, OnInit } from '@angular/core';

import { AuthUserService } from './../../services/auth-user.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  @Input() title: string;
  @Input() showXp: boolean;

  user: User;
  titleSizeClass: string;

  constructor(public authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
    this.setTitileSize();
  }

  setTitileSize(): void {
    this.titleSizeClass = (this.showXp ? 'min' : 'max');
  }
}
