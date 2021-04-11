import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { EditProfileDialogComponent } from '../dialogs/edit-profile-dialog/edit-profile-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EditProfileDialogService {

  constructor(private matDialog: MatDialog) { }

  open() {
    this.matDialog.open(EditProfileDialogComponent)
  }
}
