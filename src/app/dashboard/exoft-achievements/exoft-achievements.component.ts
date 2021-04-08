import { Achievement } from './../../models/achievement';
import { User } from './../../models/user';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {
  public achievements: {user: User, achievement: Achievement}[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.achievements = this.usersService.getAchievements();
  }
}
