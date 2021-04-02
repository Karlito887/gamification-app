import { Component, OnInit } from '@angular/core';
import { PERSONAL_ACHIEVEMENTS } from './personal-achievements';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  public personalAchievements = PERSONAL_ACHIEVEMENTS
  constructor() { }

  ngOnInit(): void {
  }

}
