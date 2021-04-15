import { AvatarSize } from './../../enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  totalXp: number = 0;
  maxWidth: number = 160;
  users: User[] = [];
  avatarSize = AvatarSize;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.buildGraph();
  }

  private buildGraph(): void {
    this.users.forEach(element => {
      if (element.xp) {
        this.totalXp += element.xp;
      }
    });

    this.users.forEach(element => {
      if (element.xp) {
        element.size = Math.round((element.xp * this.maxWidth) / this.totalXp) + '%';
      }
    });
  }
}
