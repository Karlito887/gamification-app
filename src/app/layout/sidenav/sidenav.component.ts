import { AvatarSize } from './../../enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../../services/dialogs.service';
import { SidenavService } from '../../services/sidenav.service';
import { AuthUserService } from '../../services/auth-user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../layout.component.scss']
})
export class SidenavComponent implements OnInit {
  user: User;
  avatarSize = AvatarSize;

  constructor(private authUserService: AuthUserService,
    public sidenavService: SidenavService,
    public dialogsService: DialogsService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }
}
