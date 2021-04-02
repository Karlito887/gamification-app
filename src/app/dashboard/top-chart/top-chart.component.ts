import { USERS } from './users';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  public totalXp: number = 0;
  public maxWidth: number = 160;

  users: User[] = USERS

  constructor() { }

  ngOnInit(): void {
    this.buildGraph();
  }

  buildGraph() {
    this.users.forEach(element => {
      if(element.xp) {
        this.totalXp += element.xp;
        element.size = Math.round((element.xp * this.maxWidth)/this.totalXp) + '%';
      }
    });
  }

}
