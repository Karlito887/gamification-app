import { AvatarSize } from '../../../shared/enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user';
import { Achievement } from '../../../shared/models/achievement';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {
  achievements: {user: User, achievement: Achievement}[] = [];
  avatarSize = AvatarSize;

  constructor() { }

  ngOnInit(): void {
    // this.achievements = this.usersService.getAchievements();
  }
}
