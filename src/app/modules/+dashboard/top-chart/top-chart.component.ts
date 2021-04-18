import { AuthUserService } from '../../../shared/services/auth-user.service';
import { AvatarSize } from '../../../shared/enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user';

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

  constructor(private authUserService: AuthUserService) { }

  ngOnInit(): void {
    // this.users = this.usersService.getUsers();
    // this.buildGraph();
    this.authUserService.getUsers().subscribe(res => console.log(res))
  }

  private buildGraph(): void {
    this.users.forEach(element => {
      if (element.xp) {
        this.totalXp += element.xp;
      }
    });

    this.users.forEach(element => {
      if (element.xp) {
        // element.size = Math.round((element.xp * this.maxWidth) / this.totalXp) + '%';
      }
    });
  }
}
