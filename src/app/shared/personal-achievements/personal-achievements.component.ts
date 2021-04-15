import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RequestDialogComponent } from 'src/app/dialogs/request-dialog/request-dialog.component';

import { AuthUserService } from '../../services/auth-user.service';

import { Achievement } from '../../models/achievement';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  @Input() title: string = '';

  personalAchievements: Achievement[];

  constructor(public matDialog: MatDialog,
    private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.personalAchievements = this.authUserService.getAchievements();
  }

  openRequestDialog(): void {
    const dialogRef = this.matDialog.open(RequestDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // temporary empty func
    });
  }


}
