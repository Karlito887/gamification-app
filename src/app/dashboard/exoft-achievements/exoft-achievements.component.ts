import { achievements } from './achievements';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {
  public achievements = achievements;

  constructor() { }

  ngOnInit(): void {
  }

}
