import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfileDialogComponent } from 'src/app/dialogs/user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() user!: User;
  @Input() size!: string;

  sizeClass!: string;

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
    this.setSize()
  }

  setSize() {
    if(this.size) {
      this.sizeClass = `avatar-${this.size}`
    } else {
      this.sizeClass = 'avatar-min'
    }
  }

  openUserProfileDialog(): void {
    if (this.size === 'big' || this.size === 'medium') return;

    this.matDialog.open(UserProfileDialogComponent, {data: this.user});
  }
}
