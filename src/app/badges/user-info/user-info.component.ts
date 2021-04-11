import { EditProfileDialogService } from './../../services/edit-profile-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/user';
import { AuthUserService } from './../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { EditProfileDialogComponent } from 'src/app/dialogs/edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user!: User;
  constructor(private authUserService: AuthUserService,
    public editProfileDialogService: EditProfileDialogService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }


}
