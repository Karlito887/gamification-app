import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SayThanksDialogComponent } from '../say-thanks-dialog/say-thanks-dialog.component';

import { AuthUserService } from '../../services/auth-user.service';

import { User } from '../../models/user';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss', '../request-dialog/request-dialog.component.scss']
})
export class UserProfileDialogComponent implements OnInit {
  isMe: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public user: User,
  public matDialog: MatDialog,
  private authUserService: AuthUserService) { }

  ngOnInit(): void {
    // this.isMe = this.authUserService.user.firstName === this.user.firstName;
    this.isAuthUserCheck();
  }

  isAuthUserCheck(): void {
    this.authUserService.user$.pipe(tap(u => {
      this.isMe = u.id === this.user.id;
    }))
  }

  sayThanks(): void {
    this.matDialog.open(SayThanksDialogComponent);
  }
}
