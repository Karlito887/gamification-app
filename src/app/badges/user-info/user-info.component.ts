import { AvatarSize } from './../../enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { DialogsService } from './../../services/dialogs.service';
import { AuthUserService } from './../../services/auth-user.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: User;
  avatarSize = AvatarSize;

  constructor(private authUserService: AuthUserService,
    public dialogsService: DialogsService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }
}
