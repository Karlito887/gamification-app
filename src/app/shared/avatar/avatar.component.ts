import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfileDialogComponent } from 'src/app/dialogs/user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() user!: User;
  @Input() size!: string;

  constructor(public matDialog: MatDialog) { }

  openUserProfileDialog(): void {
    if (this.size === 'big') return;

    this.matDialog.open(UserProfileDialogComponent, {data: this.user});
  }
}
