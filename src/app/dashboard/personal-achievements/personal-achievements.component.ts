import { Component, OnInit } from '@angular/core';
import { PERSONAL_ACHIEVEMENTS } from './personal-achievements';
import { MatDialog } from '@angular/material/dialog'
import { RequestDialogComponent } from 'src/app/dialogs/request-dialog/request-dialog.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  public personalAchievements = PERSONAL_ACHIEVEMENTS
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRequestDialog() {
    const dialogRef = this.matDialog.open(RequestDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
