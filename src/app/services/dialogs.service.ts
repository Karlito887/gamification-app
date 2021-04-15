import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';
import { EditProfileDialogComponent } from '../dialogs/edit-profile-dialog/edit-profile-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private matDialog: MatDialog) { }

  openChangePasswordDialog(): void {
    this.matDialog.open(ChangePasswordDialogComponent, {
      width: '50rem'
    });
  }

  openEditProfileDialog(): void {
    this.matDialog.open(EditProfileDialogComponent, {
      width: '50rem'
    });
  }
}
