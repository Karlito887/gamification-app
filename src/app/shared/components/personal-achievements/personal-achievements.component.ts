import { RequestDataService } from './../../services/request-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RequestDialogComponent } from 'src/app/shared/dialogs/request-dialog/request-dialog.component';

import { Achievement } from '../../models/achievement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  personalAchievements$: Observable<Achievement[]>;

  @Input() title: string = '';
  @Input() achievementsCount: number;

  constructor(public matDialog: MatDialog,
    private requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.setAchievements();
  }

  openRequestDialog(): void {
    const dialogRef = this.matDialog.open(RequestDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // temporary empty func
    });
  }

  setAchievements(): void {
    this.personalAchievements$ = this.requestDataService.getAchievements(this.achievementsCount);
  }

}
