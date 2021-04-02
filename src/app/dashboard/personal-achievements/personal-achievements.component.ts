import { Component, OnInit } from '@angular/core';
import { PERSONAL_ACHIEVEMENTS } from './personal-achievements';
import { MatDialog } from '@angular/material/dialog'

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
    // this.matDialog.open()
  }
}
