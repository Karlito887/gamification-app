import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RequestDataService } from './../../../shared/services/request-data.service';

import { AvatarSize } from '../../../shared/enums/avatar-size.enum';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  totalXp: number = 0;
  maxWidth: number = 160;
  graphColors: string[] = ['#6e8aa9', '#625750', '#96897f', '#c6bcb6', '#e0e2e4'];

  users$: Observable<User[]>;
  avatarSize = AvatarSize;

  constructor(private requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.setUsers();
  }

  setUsers(): void {
    this.users$ = this.requestDataService.getUsers().pipe(map(res => {
      return res.sort((a: User, b: User) => b.xp - a.xp).slice(0, 5);
    }),
      tap(res => {
        res.forEach(user => {
          if (user.xp) {
            this.totalXp += user.xp;
          }
        });

        res.forEach(user => {
          if (user.xp) {
            user.size = Math.round((user.xp * this.maxWidth) / this.totalXp) + '%';
          }
        });
      })
    );
  }
}
