import { EditProfileDialogService } from './../services/edit-profile-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from './../services/sidenav.service';
import { AuthUserService } from './../services/auth-user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['../user-profile/user-profile.component.scss']
})
export class ToolbarComponent implements OnInit {
  user!: User;
  constructor(private authUserService: AuthUserService,
    public sidenavService: SidenavService,
    public editProfileDialogService: EditProfileDialogService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }
}
