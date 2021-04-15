import { AvatarSize } from './../../enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';

import { User } from './../../models/user';
import { Achievement } from './../../models/achievement';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {
  achievements: {user: User, achievement: Achievement}[] = [];
  avatarSize = AvatarSize;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.achievements = this.usersService.getAchievements();
  }
}
