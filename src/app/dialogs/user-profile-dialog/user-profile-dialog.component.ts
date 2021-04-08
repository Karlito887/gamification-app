import { AuthUserService } from './../../services/auth-user.service';
import { User } from './../../models/user';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SayThanksDialogComponent } from '../say-thanks-dialog/say-thanks-dialog.component';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss', '../request-dialog/request-dialog.component.scss']
})
export class UserProfileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public user: User,
  public matDialog: MatDialog,
  private authUserService: AuthUserService) { }

  sayThanks(): void {
    if (this.authUserService.user.firstName === this.user.firstName) return;

    this.matDialog.open(SayThanksDialogComponent);
  }
}
