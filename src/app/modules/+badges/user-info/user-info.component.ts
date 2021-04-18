import { AvatarSize } from '../../../shared/enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../../../shared/services/dialogs.service';
import { AuthUserService } from '../../../shared/services/auth-user.service';

import { User } from '../../../shared/models/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user$: Subject<User>;
  avatarSize = AvatarSize;

  constructor(private authUserService: AuthUserService,
    public dialogsService: DialogsService) { }

  ngOnInit(): void {
    this.user$ = this.authUserService.user$;
  }
}
