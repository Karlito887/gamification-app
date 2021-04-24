import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestDataService } from './../../../shared/services/request-data.service';

import { Achievement } from '../../../shared/models/achievement';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.scss']
})
export class AchievementsListComponent implements OnInit {
  achievements$: Observable<Achievement[]>;
  displayedColumns: string[];

  constructor(private requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.setAllAchievements();
    this.displayedColumns = ['title', 'xp', 'date'];
  }

  setAllAchievements(): void {
    this.achievements$ = this.requestDataService.getAchievements();
  }
}
