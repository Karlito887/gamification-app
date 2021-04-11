import { EditProfileDialogService } from './../services/edit-profile-dialog.service';
import { SidenavService } from './../services/sidenav.service';
import { User } from './../models/user';
import { AuthUserService } from './../services/auth-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../user-profile/user-profile.component.scss']
})
export class SidenavComponent implements OnInit {
  user!: User;
  constructor(private authUserService: AuthUserService,
    public sidenavService: SidenavService,
    public editProfileDialogService: EditProfileDialogService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }

}
