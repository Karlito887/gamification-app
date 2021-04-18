import { AvatarSize } from '../../../../shared/enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../../../../shared/services/dialogs.service';
import { SidenavService } from '../../../../shared/services/sidenav.service';
import { AuthUserService } from '../../../../shared/services/auth-user.service';

import { User } from '../../../../shared/models/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['../../layout.component.scss']
})
export class ToolbarComponent implements OnInit {
  user$: Subject<User>;
  avatarSize = AvatarSize;

  constructor(private authUserService: AuthUserService,
    public sidenavService: SidenavService,
    public dialogsService: DialogsService) { }

  ngOnInit(): void {
    this.user$ = this.authUserService.user$;
  }
}
