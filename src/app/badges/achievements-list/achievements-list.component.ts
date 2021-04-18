import { Component, OnInit } from '@angular/core';

import { AuthUserService } from './../../services/auth-user.service';

import { Achievement } from './../../models/achievement';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.scss']
})
export class AchievementsListComponent implements OnInit {
  achievements: Achievement[];
  displayedColumns: string[];

  constructor(private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.achievements = this.authUserService.getAchievements();
    this.displayedColumns = ['title', 'xp', 'date'];
  }
}
